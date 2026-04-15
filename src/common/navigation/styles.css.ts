import { style, globalStyle } from "@vanilla-extract/css"

import { theme } from "@tokens"

export const divider = style({
  width: 1,
  height: 24,
  background: theme.color.stroke.base,
  border: "none",
  margin: 0,
})

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 112,
  gap: 32,
  position: "fixed",
  width: "100%",
  top: 0,
  zIndex: 10,
})

globalStyle(`${container} > *`, {
  position: "relative",
  zIndex: 1,
})
