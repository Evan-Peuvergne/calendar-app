import { css, cx } from "styled-system/css"

export const root = css({
  display: "flex",
  alignItems: "center",
  isolation: "isolate",
})

export const slot = css({
  position: "relative",
  flexShrink: "0",
})

export const slotOverlapping = css({
  marginLeft: "-0.125em",
  /* Punch a circular hole on the left side where the preceding avatar overlaps.
     Circle center: overlap - radius = 0.125em - 0.5em = -0.375em from left edge.
     0.5625em  = 0.5em (avatar radius) + 0.0625em (1px gap at 16px reference, proportional)
     0.59375em = 0.5em + 0.09375em (1.5px transition at 16px reference, proportional) */
  maskImage: "radial-gradient(circle at -0.375em 50%, transparent 0.625em, black 0.65625em)",
  /* Shift initials toward the visible center of the partially-masked avatar.
     With a 2px gap, the visible area starts at 0.25em, so visual center is at 0.625em (+0.125em). */
  "--avatar-initials-offset": "0.125em",
})

export const slotClass = ({ overlapping }: { overlapping: boolean }) =>
  cx(slot, overlapping && slotOverlapping)

export const overflowBadge = css({
  display: "flex",
  alignItems: "center",
  height: "1em",
  padding: "0 0.3125em",
  borderRadius: "0.5em",
  background: "rgba(15, 15, 15, 0.06)",
})

export const overflowText = css({
  fontSize: "0.5625em",
  fontWeight: "700",
  color: "#707070",
  whiteSpace: "nowrap",
  letterSpacing: "0.02em",
})
