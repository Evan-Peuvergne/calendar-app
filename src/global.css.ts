import { globalStyle } from "@vanilla-extract/css"

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
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontSize: "16px",
  vars: {
    "--font":
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  scrollbarGutter: "stable",
})

globalStyle("body", {
  background: "var(--c-fill-background)",
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
  font: "var(--f-label)",
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
  boxShadow: "4px 0 0 4px var(--c-stroke-base) inset",
  borderRadius: 24,
  transition: "box-shadow 0.2s ease",
  cursor: "pointer",
})

globalStyle(".scrollable", {
  vars: {
    "--scrollbar-color": "transparent",
  },
})

globalStyle(".scrollable:hover", {
  vars: {
    "--scrollbar-color": "var(--c-stroke-base)",
  },
})

globalStyle(".scrollable::-webkit-scrollbar-thumb", {
  boxShadow: "4px 0 0 4px var(--scrollbar-color) inset",
})

// Variables

globalStyle(":root", {
  vars: {
    "--c-fill-base": "hsla(0, 0%, 100%, 1)",
    "--c-fill-depth": "hsla(0, 0%, 99%, 1)",
    "--c-fill-background": "hsla(0, 0%, 97%, 1)",
    "--c-fill-disabled": "hsla(0, 0%, 93%, 1)",
    "--c-fill-contrast": "hsla(0, 0%, 22%, 0.88)",

    "--c-fill-neutral": "hsla(0, 0%, 44%, 1)",
    "--c-fill-neutral-hover": "hsla(0, 0%, 31%, 1)",
    "--c-fill-neutral-active": "hsla(0, 0%, 22%, 1)",
    "--c-fill-action": "hsla(205, 90%, 35%, 1)",
    "--c-fill-action-hover": "hsla(205, 90%, 28%, 1)",
    "--c-fill-action-active": "hsla(205, 90%, 24%, 1)",
    "--c-fill-danger": "hsla(6, 84%, 47%, 1)",
    "--c-fill-danger-hover": "hsla(5, 84%, 40%, 1)",
    "--c-fill-danger-active": "hsla(5, 85%, 34%, 1)",

    "--c-text-base": "hsla(0, 0%, 22%, 1)",
    "--c-text-light": "hsla(0, 0%, 44%, 1)",
    "--c-text-disabled": "hsla(0, 0%, 64%, 1)",
    "--c-text-contrast": "hsla(0, 0%, 100%, 0.92)",
    "--c-text-contrast-light": "hsla(0, 0%, 100%, 0.82)",
    "--c-text-contrast-disabled": "hsla(0, 0%, 100%, 0.27)",
    "--c-text-neutral": "hsla(0, 0%, 31%, 1)",
    "--c-text-action": "hsla(205, 90%, 28%, 1)",
    "--c-text-danger": "hsla(5, 85%, 34%, 1)",

    "--c-stroke-base": "hsla(0, 0%, 6%, 0.12)",
    "--c-stroke-hover": "hsla(0, 0%, 6%, 0.22)",
    "--c-stroke-action": "hsla(205, 90%, 35%, 1)",
    "--c-stroke-danger": "hsla(5, 85%, 34%, 1)",

    "--c-opacify-base": "hsla(0, 0%, 6%, 0.04)",
    "--c-opacify-hover": "hsla(0, 0%, 6%, 0.08)",
    "--c-opacify-active": "hsla(0, 0%, 6%, 0.16)",
    "--c-opacify-contrast-hover": "hsla(0, 0%, 6%, 0.22)",
    "--c-opacify-contrast-active": "hsla(0, 0%, 6%, 0.38)",

    "--f-base": "400 16px/24px var(--font)",
    "--f-label": "500 16px/24px var(--font)",

    "--s-raised": "0px 1px 3px 0px rgba(15, 15, 15, 0.06)",
    "--s-block":
      "0px 1px 8px 0px rgba(15, 15, 15, 0.02), 0px 1px 3px 0px rgba(15, 15, 15, 0.08)",
    "--s-overlay":
      "0px 1px 12px 0px rgba(15, 15, 15, 0.08), 0px 1px 4px 0px rgba(15, 15, 15, 0.06)",

    "--r-container": "8px",
    "--r-control": "6px",
  },
})
