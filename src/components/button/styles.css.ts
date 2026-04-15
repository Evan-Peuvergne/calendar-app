import { style } from "@vanilla-extract/css"

export const base = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 40,
  padding: 8,
  gap: 8,
  font: "var(--f-label)",
  borderRadius: 12,
  cursor: "pointer",
  appearance: "none",
})

export const iconBase = style({
  aspectRatio: "1 / 1",
})

export const disabledBase = style({
  cursor: "not-allowed",
})
