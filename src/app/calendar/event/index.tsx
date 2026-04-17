import { useState } from "react"

import { container, Container, title, time } from "./styles"
import { Sheet, useSheetStack } from "@components/sheet"
import { formatHour } from "../utils"
import { EVENT_GAP } from "../tokens"
import type { CalendarEvent as CalendarEventData } from "../useGoogleCalendar"
import type { EventPosition } from "../layout"

export interface CalendarEventProps {
  id: string
  metadata: CalendarEventData
  position: EventPosition
}

const EventSheet = () => (
  <Sheet style={{ padding: 24, height: 320 }}>Hello world</Sheet>
)

export const CalendarEvent = ({ id, metadata, position }: CalendarEventProps) => {
  const [open, setOpen] = useState(false)
  const { push } = useSheetStack()

  const onClick = () => {
    push(<EventSheet />, id)
    setOpen(true)
  }

  const { top, height, left, width } = position
  const showTime = height >= 44

  return (
    <Container
      className={container({ active: open })}
      style={{ top, height, left: `calc(${left}% + ${EVENT_GAP}px)`, width: `calc(${width}% - ${EVENT_GAP * 2}px)` }}
      onClick={onClick}
    >
      <span className={title}>{metadata.title}</span>
      {showTime && (
        <span className={time}>{formatHour(metadata.start)} — {formatHour(metadata.end)}</span>
      )}
    </Container>
  )
}
