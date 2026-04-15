import { globalStyle } from "@vanilla-extract/css"

import { theme } from "./tokens.css"

// Global

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

// Root

globalStyle("html, body", {
  fontFamily: theme.font.family,
  fontSize: "16px",
  scrollbarGutter: "stable",
})

globalStyle("body", {
  background: theme.color.fill.background,
})

globalStyle("#portal", {
  position: "absolute",
  top: 0,
  width: "100%",
  zIndex: 999,
})

// Styles

globalStyle("button", {
  background: "none",
})

globalStyle("label", {
  font: theme.font.label,
})

// Scroll

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
  boxShadow: `4px 0 0 4px ${theme.color.stroke.base} inset`,
  borderRadius: 24,
  transition: "box-shadow 0.2s ease",
  cursor: "pointer",
})

globalStyle(".scrollable", {
  vars: { "--scrollbar-color": "transparent" },
})

globalStyle(".scrollable:hover", {
  vars: { "--scrollbar-color": theme.color.stroke.base },
})

globalStyle(".scrollable::-webkit-scrollbar-thumb", {
  boxShadow: "4px 0 0 4px var(--scrollbar-color) inset",
})
