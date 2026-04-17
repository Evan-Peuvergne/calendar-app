import { useState, useEffect } from "react"

import * as Styles from "./styles"
import { CalendarEvent } from "./event"
import { CalendarOptions } from "./options"
import { Secondary } from "@components/button"
import { HOUR_HEIGHT, LABELS_BAR_HEIGHT, CALENDAR_PADDING } from "./tokens"
import { NAV_HEIGHT } from "@common/navigation/tokens"

import { getWeekStart, isToday, formatWeekRange } from "./utils"
import { DAY_NAMES } from "./utils"
import { useGoogleCalendar } from "./useGoogleCalendar"

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
    window.scrollTo(0, NAV_HEIGHT + LABELS_BAR_HEIGHT + CALENDAR_PADDING + currentTimeTop - window.innerHeight / 2)
  }, [])

  return (
    <div className={Styles.container}>
      <div className={Styles.week}>
        <div className={Styles.labels}>
          {days.map((day) => (
            <span
              key={day.toISOString()}
              className={Styles.label({ current: isToday(day) })}
            >
              {DAY_NAMES[day.getDay()]} {day.getDate()}
            </span>
          ))}
        </div>

        {days.map((day, dayIndex) => (
          <div key={day.toISOString()} className={Styles.day}>
            {events
              .filter((e) => e.dayIndex === dayIndex)
              .map((event) => (
                <CalendarEvent
                  key={event.id}
                  title={event.title}
                  startHour={event.startHour}
                  duration={event.duration}
                />
              ))}
          </div>
        ))}
        <div className={Styles.hours}>
          {Array.from({ length: 25 }, (_, k) => (
            <span
              key={k}
              className={Styles.hour}
              style={{ "--hour-value": `"${k}h"` } as React.CSSProperties}
            />
          ))}
          <div className={Styles.currentTime} style={{ top: currentTimeTop }}>
            <span>{currentTimeLabel}</span>
          </div>
        </div>
      </div>
      {ready && events.length === 0 && (
        <Secondary onClick={signIn} style={{ position: "fixed", bottom: 24, right: 24, zIndex: 10 }}>
          Connecter Google Calendar
        </Secondary>
      )}
      <CalendarOptions weekStart={weekStart} navigate={navigate} />
    </div>
  )
}
