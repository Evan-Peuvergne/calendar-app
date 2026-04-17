import { useState, useEffect, useRef } from "react"

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
const SCOPE = "https://www.googleapis.com/auth/calendar.readonly"
const STORAGE_KEY = "gcal_token"

const saveToken = (token: string) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ token, expiry: Date.now() + 55 * 60 * 1000 }))
}

const loadToken = (): string | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const { token, expiry } = JSON.parse(raw)
    return Date.now() < expiry ? token : null
  } catch {
    return null
  }
}

export interface CalendarEvent {
  id: string
  title: string
  start: Date
  end: Date
  description?: string
  location?: string
}

declare global {
  interface Window {
    google: {
      accounts: {
        oauth2: {
          initTokenClient: (config: {
            client_id: string
            scope: string
            callback: (response: { access_token: string }) => void
          }) => { requestAccessToken: (options?: { prompt?: string }) => void }
        }
      }
    }
  }
}

export function useGoogleCalendar(weekStart: Date) {
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const [loading, setLoading] = useState(false)
  const [ready, setReady] = useState(false)
  const accessTokenRef = useRef<string | null>(null)
  const tokenClientRef = useRef<{ requestAccessToken: (options?: { prompt?: string }) => void } | null>(null)
  const pendingWeekRef = useRef<Date>(weekStart)
  const refreshTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scheduleRefresh = () => {
    if (refreshTimerRef.current) clearTimeout(refreshTimerRef.current)
    refreshTimerRef.current = setTimeout(() => {
      tokenClientRef.current?.requestAccessToken({ prompt: "" })
    }, 50 * 60 * 1000) // refresh silently after 50min, before the 1h expiry
  }

  const fetchEvents = async (token: string, week: Date) => {
    setLoading(true)

    const timeMin = new Date(week)
    timeMin.setHours(0, 0, 0, 0)
    const timeMax = new Date(week)
    timeMax.setDate(timeMax.getDate() + 7)
    timeMax.setHours(23, 59, 59, 999)

    const url = new URL("https://www.googleapis.com/calendar/v3/calendars/primary/events")
    url.searchParams.set("timeMin", timeMin.toISOString())
    url.searchParams.set("timeMax", timeMax.toISOString())
    url.searchParams.set("singleEvents", "true")
    url.searchParams.set("orderBy", "startTime")

    try {
      const res = await fetch(url.toString(), {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()

      const weekMidnight = new Date(week)
      weekMidnight.setHours(0, 0, 0, 0)

      const mapped: CalendarEvent[] = (data.items ?? [])
        .filter((item: any) => item.start?.dateTime) // ignore all-day events
        .map((item: any) => ({
          id: item.id,
          title: item.summary ?? "(sans titre)",
          start: new Date(item.start.dateTime),
          end: new Date(item.end.dateTime),
          description: item.description,
          location: item.location,
        }))

      setEvents(mapped)
    } catch (e) {
      console.error("Google Calendar fetch error", e)
    }

    setLoading(false)
  }

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://accounts.google.com/gsi/client"
    script.async = true
    script.onload = () => {
      tokenClientRef.current = window.google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPE,
        callback: (response) => {
          accessTokenRef.current = response.access_token
          saveToken(response.access_token)
          fetchEvents(response.access_token, pendingWeekRef.current)
          scheduleRefresh()
        },
      })

      const saved = loadToken()
      if (saved) {
        accessTokenRef.current = saved
        fetchEvents(saved, pendingWeekRef.current)
        scheduleRefresh()
      } else {
        setReady(true)
      }
    }
    document.head.appendChild(script)
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script)
    }
  }, [])

  useEffect(() => {
    pendingWeekRef.current = weekStart
    if (accessTokenRef.current) {
      fetchEvents(accessTokenRef.current, weekStart)
    }
  }, [weekStart])

  const signIn = () => tokenClientRef.current?.requestAccessToken()

  return { events, loading, ready, signIn }
}
