import { css } from "styled-system/css"

export const root = css({
  position: "relative",
  width: "1em",
  height: "1em",
  borderRadius: "100px",
  background: "rgba(15, 15, 15, 0.06)",
  overflow: "hidden",
  flexShrink: "0",
})

export const initials = css({
  position: "absolute",
  inset: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.5em",
  fontWeight: "700",
  lineHeight: "1",
  letterSpacing: "0.02em",
  color: "var(--color-text-neutral)",
  transform: "translateX(var(--avatar-initials-offset, 0))",
})

export const image = css({
  position: "absolute",
  inset: "0",
  width: "100%",
  height: "100%",
  objectFit: "cover",
})
