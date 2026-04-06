import { useState, useEffect } from "react"

import * as Styles from "./styles"
import { Secondary, SecondaryIcon } from "@components/button"
import { HOUR_HEIGHT } from "./styles"

import { getWeekStart, isToday, formatWeekRange } from "./utils"
import { DAY_NAMES } from "./utils"
import { getMockEvents } from "./mock"

const DAY_PADDING_TOP = 112 // matches Day padding-top in styles.ts

export const Calendar = () => {
  const [weekStart, setWeekStart] = useState(() => getWeekStart(new Date()))
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(id)
  }, [])

  const navigate = (dir: number) => {
    setWeekStart((prev) => {
      const d = new Date(prev)
      d.setDate(d.getDate() + dir * 7)
      return d
    })
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigate(-1)
      if (e.key === "ArrowRight") navigate(1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart)
    d.setDate(d.getDate() + i)
    return d
  })

  const mockEvents = getMockEvents(weekStart)
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
            {mockEvents
              .filter((e) => e.dayIndex === dayIndex)
              .map((event, i) => (
                <Styles.Event
                  key={i}
                  style={{
                    position: "absolute",
                    top: DAY_PADDING_TOP + event.startHour * HOUR_HEIGHT,
                    height: event.duration * HOUR_HEIGHT,
                    left: 4,
                    right: 4,
                  }}
                >
                  Event
                </Styles.Event>
              ))}
          </Styles.Day>
        ))}
      </Styles.Week>

      <Styles.Hours>
        {Array.from({ length: 25 }, (_, k) => (
          <Styles.Hour value={`${k}h`} key={k} />
        ))}
        <Styles.CurrentTime style={{ top: currentTimeTop }}>
          <span>{currentTimeLabel}</span>
        </Styles.CurrentTime>
      </Styles.Hours>

      <Styles.Options>
        <span style={{ display: "inline-flex", gap: 0 }}>
          <Secondary>{formatWeekRange(weekStart)}</Secondary>
          <SecondaryIcon icon="chevron-left" onClick={() => navigate(-1)} />
          <SecondaryIcon icon="chevron-right" onClick={() => navigate(1)} />
        </span>
        <hr />
        <SecondaryIcon icon="calendar" />
        <SecondaryIcon icon="flag" />
        <SecondaryIcon icon="home" />
        <hr />
        <SecondaryIcon icon="more" />
      </Styles.Options>
    </Styles.Container>
  )
}
