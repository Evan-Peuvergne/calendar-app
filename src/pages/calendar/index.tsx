import { useState, useEffect } from "react"

import * as Styles from "./styles"
import { CalendarEvent } from "./event"
import { CalendarOptions } from "./options"
import { Secondary } from "@components/button"
import { HOUR_HEIGHT } from "./styles"

import { getWeekStart, isToday, formatWeekRange } from "./utils"
import { DAY_NAMES } from "./utils"
import { useGoogleCalendar } from "./useGoogleCalendar"

const DAY_PADDING_TOP = 112 // matches Day padding-top in styles.ts

export const Calendar = () => {
  const [weekStart, setWeekStart] = useState(() => getWeekStart(new Date()))
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(id)
  }, [])

  const navigate = (date: Date) => {
    setWeekStart(getWeekStart(date))
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")
        navigate(new Date(weekStart.getTime() - 7 * 86_400_000))
      if (e.key === "ArrowRight")
        navigate(new Date(weekStart.getTime() + 7 * 86_400_000))
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [weekStart])

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart)
    d.setDate(d.getDate() + i)
    return d
  })

  const { events, ready, signIn } = useGoogleCalendar(weekStart)
  const currentTimeTop = (now.getHours() + now.getMinutes() / 60) * HOUR_HEIGHT
  const currentTimeLabel = `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`

  useEffect(() => {
    window.scrollTo(0, currentTimeTop - window.innerHeight / 2)
  }, [])

  return (
    <Styles.Container>
      <Styles.Week>
        <Styles.Labels>
          {days.map((day) => (
            <Styles.Label key={day.toISOString()} current={isToday(day)}>
              {DAY_NAMES[day.getDay()]} {day.getDate()}
            </Styles.Label>
          ))}
        </Styles.Labels>

        {days.map((day, dayIndex) => (
          <Styles.Day key={day.toISOString()}>
            {events
              .filter((e) => e.dayIndex === dayIndex)
              .map((event) => (
                <CalendarEvent
                  key={event.id}
                  title={event.title}
                  style={{
                    top: DAY_PADDING_TOP + event.startHour * HOUR_HEIGHT,
                    height: event.duration * HOUR_HEIGHT,
                  }}
                />
              ))}
          </Styles.Day>
        ))}
        <Styles.Hours style={{ top: DAY_PADDING_TOP }}>
          {Array.from({ length: 25 }, (_, k) => (
            <Styles.Hour value={`${k}h`} key={k} />
          ))}
          <Styles.CurrentTime style={{ top: currentTimeTop }}>
            <span>{currentTimeLabel}</span>
          </Styles.CurrentTime>
        </Styles.Hours>
      </Styles.Week>
      {ready && events.length === 0 && (
        <Secondary onClick={signIn} style={{ position: "fixed", bottom: 24, right: 24, zIndex: 10 }}>
          Connecter Google Calendar
        </Secondary>
      )}
      <CalendarOptions weekStart={weekStart} navigate={navigate} />
    </Styles.Container>
  )
}
