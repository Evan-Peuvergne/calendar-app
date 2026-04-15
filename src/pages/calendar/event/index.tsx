import { useState } from "react"

import * as Styles from "./styles"
import { Sheet, useSheetStack } from "@components/sheet"

export interface CalendarEventProps {
  style: React.CSSProperties
  title: string
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
    <Styles.Container onClick={onClick} active={open} style={props.style}>
      <Styles.Title>{props.title}</Styles.Title>
      <Styles.Time>7h50 — 8h30</Styles.Time>
    </Styles.Container>
  )
}
