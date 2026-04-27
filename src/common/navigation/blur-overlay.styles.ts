import { css } from "styled-system/css"

export const layer = css({
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  pointerEvents: "none",
  maskImage: "linear-gradient(180deg, black, transparent)",
  WebkitMaskImage: "linear-gradient(180deg, black, transparent)",
})

export const gradientLayer = css({
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  pointerEvents: "none",
  maskImage: "linear-gradient(180deg, black, transparent)",
  WebkitMaskImage: "linear-gradient(180deg, black, transparent)",
  height: "152px",
  background: "linear-gradient(180deg, {colors.fill.background}, transparent)",
})
