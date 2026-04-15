import { globalStyle } from "@vanilla-extract/css"

import { tokens } from "@tokens"

globalStyle("html, body", {
  fontFamily: tokens.font.family,
  fontSize: "16px",
  scrollbarGutter: "stable",
})

globalStyle("body", {
  background: tokens.color.fill.background,
})

globalStyle("label", {
  font: tokens.font.label,
})

globalStyle("*::-webkit-scrollbar", {
  display: "block",
  width: 16,
  background: "#00000000",
})

globalStyle("*::-webkit-scrollbar-button", {
  display: "none",
})

globalStyle("*::-webkit-scrollbar-track", {
  backgroundColor: "#00000000",
})

globalStyle("*::-webkit-scrollbar-track-piece", {
  backgroundColor: "#00000000",
})

globalStyle("*::-webkit-scrollbar-thumb", {
  background: "#00000000",
  border: "4px solid transparent",
  boxShadow: `4px 0 0 4px ${tokens.color.stroke.base} inset`,
  borderRadius: 24,
  transition: "box-shadow 0.2s ease",
  cursor: "pointer",
})

globalStyle(".scrollable", {
  vars: { "--scrollbar-color": "transparent" },
})

globalStyle(".scrollable:hover", {
  vars: { "--scrollbar-color": tokens.color.stroke.base },
})

globalStyle(".scrollable::-webkit-scrollbar-thumb", {
  boxShadow: "4px 0 0 4px var(--scrollbar-color) inset",
})
