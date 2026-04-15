import { style, globalStyle } from "@vanilla-extract/css"

export const container = style({
  display: "inline-flex",
  alignItems: "baseline",
  justifyContent: "center",
  fontSize: "1em",
  lineHeight: "inherit",
  overflow: "visible",

  "::before": {
    display: "inline-block",
    width: 0,
    content: '"\u00A0"',
    visibility: "hidden",
  },
})

globalStyle(`${container} svg`, {
  display: "inline-block",
  overflow: "visible",
})

globalStyle(`${container} svg path`, {
  shapeRendering: "geometricPrecision",
  transition: "fill 0.2s ease-in-out",
})
