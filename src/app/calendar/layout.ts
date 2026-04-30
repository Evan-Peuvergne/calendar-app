import { HOUR_HEIGHT, EVENT_GAP, CALENDAR_PADDING } from "./constants"
import type { CalendarEvent } from "./useGoogleCalendar"

export interface EventPosition {
  top: number    // px
  height: number // px
  left: number   // % (0–100) within day column
  width: number  // % (0–100) within day column
}

export function computeCalendarLayout(
  events: CalendarEvent[]
): Array<{ event: CalendarEvent; position: EventPosition }> {
  if (events.length === 0) return []

  const sorted = [...events].sort((a, b) => a.start.getTime() - b.start.getTime())

  // Group overlapping events (transitively)
  const groups: CalendarEvent[][] = []
  for (const event of sorted) {
    const groupIndex = groups.findIndex(group =>
      group.some(e => e.start < event.end && event.start < e.end)
    )
    if (groupIndex >= 0) {
      groups[groupIndex].push(event)
    } else {
      groups.push([event])
    }
  }

  const result: Array<{ event: CalendarEvent; position: EventPosition }> = []

  for (const group of groups) {
    // Greedy column assignment within the group
    const columns: CalendarEvent[][] = []
    for (const event of group) {
      let placed = false
      for (const col of columns) {
        const last = col[col.length - 1]
        if (event.start >= last.end) {
          col.push(event)
          placed = true
          break
        }
      }
      if (!placed) columns.push([event])
    }

    const columnCount = columns.length
    for (let colIndex = 0; colIndex < columns.length; colIndex++) {
      for (const event of columns[colIndex]) {
        const startHour = event.start.getHours() + event.start.getMinutes() / 60
        const duration = (event.end.getTime() - event.start.getTime()) / 3_600_000
        result.push({
          event,
          position: {
            top: CALENDAR_PADDING + startHour * HOUR_HEIGHT + EVENT_GAP,
            height: duration * HOUR_HEIGHT - EVENT_GAP * 2,
            left: (colIndex / columnCount) * 100,
            width: (1 / columnCount) * 100,
          },
        })
      }
    }
  }

  return result
}
