import { useState } from "react"

import * as Styles from "./styles.css"
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
    <div className={Styles.container({ active: open })} onClick={onClick} style={props.style}>
      <span className={Styles.title}>{props.title}</span>
      <span className={Styles.time}>7h50 — 8h30</span>
    </div>
  )
}
