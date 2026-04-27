import { css } from "styled-system/css"

export const container = css({
  display: "inline-flex",
  alignItems: "baseline",
  justifyContent: "center",
  fontSize: "1em",
  lineHeight: "inherit",
  overflow: "visible",

  "&::before": {
    display: "inline-block",
    width: "0",
    content: '"\\00A0"',
    visibility: "hidden",
  },

  "& svg": {
    display: "inline-block",
    overflow: "visible",
  },

  "& svg path": {
    shapeRendering: "geometricPrecision",
    transition: "fill 0.2s ease-in-out",
  },
})
