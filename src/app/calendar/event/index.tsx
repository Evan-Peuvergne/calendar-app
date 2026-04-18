import { useState } from "react"

import { container, Container, inner, title, time, timeEnd, eventLocation } from "./styles"
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

export const CalendarEvent = ({
  id,
  metadata,
  position,
}: CalendarEventProps) => {
  const [open, setOpen] = useState(false)
  const { push } = useSheetStack()

  const onClick = () => {
    push(<EventSheet />, id)
    setOpen(true)
  }

  const { top, height, left, width } = position

  const tier = height < 48 ? 1 : height < 86 ? 2 : 3
  const showLocation = tier === 3 && height >= 108 && !!metadata.location

  return (
    <Container
      className={container({ active: open })}
      data-tier={tier}
      data-show-location={showLocation || undefined}
      style={{
        top,
        height,
        left: `calc(${left}% + ${EVENT_GAP}px)`,
        width: `calc(${width}% - ${EVENT_GAP * 2}px)`,
      }}
      onClick={onClick}
    >
      <div className={inner}>
        <span className={title}>{metadata.title}</span>
        <span className={time}>
          {formatHour(metadata.start)}
          <span className={timeEnd}> — {formatHour(metadata.end)}</span>
        </span>
        {metadata.location && <span className={eventLocation}>{metadata.location}</span>}
      </div>
    </Container>
  )
}
