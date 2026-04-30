import { useState } from "react"
import { motion } from "motion/react"

import { container, inner, title, time, timeEnd, eventLocation, avatarWrapper } from "./styles"
import { useScrollSticky } from "./useScrollSticky"
import { Sheet, useSheetStack } from "@components/sheet"
import { Avatar } from "@components/avatar"
import { AvatarGroup } from "@components/avatar/group"
import { formatHour } from "../utils"
import { EVENT_GAP } from "../constants"
import type { CalendarEvent as CalendarEventData, Attendee } from "../useGoogleCalendar"
import type { EventPosition } from "../layout"

const AVATAR_COLORS = [
  "#246a54",
  "#2d8c6e",
  "#39a784",
  "#64be9b",
  "#124837",
  "#0c3426",
  "#1a5c44",
  "#4cac8a",
]

const hashOffset = (s: string) =>
  Math.abs(s.split("").reduce((acc, c) => (acc * 31 + c.charCodeAt(0)) | 0, 0)) % AVATAR_COLORS.length

export interface CalendarEventProps {
  id: string
  metadata: CalendarEventData
  position: EventPosition
}

const EventSheet = () => (
  <Sheet style={{ padding: 24, height: 320 }}>Hello world</Sheet>
)

const getInitials = (attendee: Attendee): string => {
  if (attendee.displayName) {
    const parts = attendee.displayName.trim().split(/\s+/)
    return parts[0][0].toUpperCase()
  }
  return attendee.email[0].toUpperCase()
}

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

  // Avatar limit based on column width: 1 event = 5, 2 events (~50%) = 3, 3+ events (~33%) = hidden
  const avatarLimit = width > 60 ? 5 : width > 40 ? 3 : 0

  // Avatar group: shown when there's room for title (20px) + gap (12px) + avatars (16px)
  // meaning the card needs at least 72px (48px content + 24px padding)
  const avatarAttendees = (metadata.attendees ?? []).filter(a => !a.self)
  const showAvatarGroup = avatarAttendees.length > 0 && height >= 72 && avatarLimit > 0

  // Avatar space reserves 16px (avatars) + 16px (gap from content above)
  const avatarSpace = showAvatarGroup ? 32 : 0

  // Tier is based on the effective layout height after subtracting avatar space
  const layoutHeight = height - avatarSpace
  const tier = layoutHeight < 48 ? 1 : layoutHeight < 86 ? 2 : 3

  // Text content area: card height minus padding (24px) and avatar space
  const textArea = height - 24 - avatarSpace

  // Time and location visibility (priority: title > avatarGroup > time > location)
  const showTime = tier >= 2 && textArea >= 42   // title (20) + time (20 + 2 margin) = 42
  const showLocation = tier === 3 && !!metadata.location && textArea >= 64  // + location (22)

  const isLongEvent = metadata.end.getTime() - metadata.start.getTime() >= 2 * 60 * 60 * 1000
  const { contentRef, offset } = useScrollSticky(top, height, isLongEvent)

  const eventContent = (
    <>
      <span className={title} data-title="">{metadata.title}</span>

      {tier === 1 ? (
        <span className={time} data-time="">{formatHour(metadata.start)}</span>
      ) : showTime ? (
        <span className={time} data-time="">
          {formatHour(metadata.start)}
          <span className={timeEnd}> — {formatHour(metadata.end)}</span>
        </span>
      ) : null}

      {showLocation && (
        <span className={eventLocation}>{metadata.location}</span>
      )}
      {showAvatarGroup && (
        <div className={avatarWrapper}>
          <AvatarGroup colors={[...AVATAR_COLORS.slice(hashOffset(id)), ...AVATAR_COLORS.slice(0, hashOffset(id))]} limit={avatarLimit}>
            {avatarAttendees.map(attendee => (
              <Avatar key={attendee.email} src={attendee.photoUrl}>
                {getInitials(attendee)}
              </Avatar>
            ))}
          </AvatarGroup>
        </div>
      )}
    </>
  )

  return (
    <div
      className={container({ active: open })}
      data-tier={tier}
      data-show-avatars={showAvatarGroup || undefined}
      style={{
        top,
        height,
        left: `calc(${left}% + ${EVENT_GAP}px)`,
        width: `calc(${width}% - ${EVENT_GAP * 2}px)`,
      }}
      onClick={onClick}
    >
      <div className={inner} data-inner="">
        {isLongEvent ? (
          <motion.div ref={contentRef} style={{ y: offset }}>
            {eventContent}
          </motion.div>
        ) : eventContent}
      </div>
    </div>
  )
}
