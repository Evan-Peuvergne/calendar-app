import { globalStyle } from "@vanilla-extract/css"

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  border: "none",
  appearance: "none",
})

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontSize: "inherit",
  fontWeight: "inherit",
})

globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
})

globalStyle("input, button, textarea, select", {
  font: "inherit",
})

globalStyle("p, h1, h2, h3, h4, h5, h6", {
  overflowWrap: "break-word",
})

globalStyle("#portal", {
  position: "absolute",
  top: 0,
  width: "100%",
  zIndex: 999,
})

globalStyle("button", {
  background: "none",
})
