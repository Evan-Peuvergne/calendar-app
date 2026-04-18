import { css, cx } from "@linaria/core"

export const root = css`
  display: flex;
  align-items: center;
  isolation: isolate;
`

export const slot = css`
  position: relative;
  flex-shrink: 0;
`

export const slotOverlapping = css`
  margin-left: -0.125em;
  /* Punch a circular hole on the left side where the preceding avatar overlaps.
     Circle center: overlap - radius = 0.125em - 0.5em = -0.375em from left edge.
     0.5625em  = 0.5em (avatar radius) + 0.0625em (1px gap at 16px reference, proportional)
     0.59375em = 0.5em + 0.09375em (1.5px transition at 16px reference, proportional) */
  mask-image: radial-gradient(
    circle at -0.375em 50%,
    transparent 0.5625em,
    black 0.59375em
  );
`

export const slotClass = ({ overlapping }: { overlapping: boolean }) =>
  cx(slot, overlapping && slotOverlapping)
