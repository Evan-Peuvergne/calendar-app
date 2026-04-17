import { useState } from "react"

import { container, Container, title, time } from "./styles"
import { Sheet, useSheetStack } from "@components/sheet"

export interface CalendarEventProps {
  title: string
  startHour: number
  duration: number
}

const EventSheet = () => (
  <Sheet style={{ padding: 24, height: 320 }}>Hello world</Sheet>
)

export const CalendarEvent = (props: CalendarEventProps) => {
  const [open, setOpen] = useState(false)
  const { push } = useSheetStack()

  const onClick = () => {
    push(<EventSheet />, "event-sheet")
    setOpen(true)
  }

  return (
    <Container
      startHour={props.startHour}
      duration={props.duration}
      className={container({ active: open })}
      onClick={onClick}
    >
      <span className={title}>{props.title}</span>
      <span className={time}>7h50 — 8h30</span>
    </Container>
  )
}
