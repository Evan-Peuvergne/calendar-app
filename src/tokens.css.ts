import { createGlobalTheme } from "@vanilla-extract/css"

const FONT_STACK =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

export const theme = createGlobalTheme(":root", {
  color: {
    fill: {
      base: "hsla(0, 0%, 100%, 1)",
      depth: "hsla(0, 0%, 99%, 1)",
      background: "hsla(0, 0%, 97%, 1)",
      disabled: "hsla(0, 0%, 93%, 1)",
      contrast: "hsla(0, 0%, 22%, 0.88)",
      neutral: "hsla(0, 0%, 44%, 1)",
      neutralHover: "hsla(0, 0%, 31%, 1)",
      neutralActive: "hsla(0, 0%, 22%, 1)",
      action: "hsla(205, 90%, 35%, 1)",
      actionHover: "hsla(205, 90%, 28%, 1)",
      actionActive: "hsla(205, 90%, 24%, 1)",
      danger: "hsla(6, 84%, 47%, 1)",
      dangerHover: "hsla(5, 84%, 40%, 1)",
      dangerActive: "hsla(5, 85%, 34%, 1)",
    },
    text: {
      base: "hsla(0, 0%, 22%, 1)",
      light: "hsla(0, 0%, 44%, 1)",
      disabled: "hsla(0, 0%, 64%, 1)",
      contrast: "hsla(0, 0%, 100%, 0.92)",
      contrastLight: "hsla(0, 0%, 100%, 0.82)",
      contrastDisabled: "hsla(0, 0%, 100%, 0.27)",
      neutral: "hsla(0, 0%, 31%, 1)",
      action: "hsla(205, 90%, 28%, 1)",
      danger: "hsla(5, 85%, 34%, 1)",
    },
    stroke: {
      base: "hsla(0, 0%, 6%, 0.12)",
      hover: "hsla(0, 0%, 6%, 0.22)",
      action: "hsla(205, 90%, 35%, 1)",
      danger: "hsla(5, 85%, 34%, 1)",
    },
    opacify: {
      base: "hsla(0, 0%, 6%, 0.04)",
      hover: "hsla(0, 0%, 6%, 0.08)",
      active: "hsla(0, 0%, 6%, 0.16)",
      contrastHover: "hsla(0, 0%, 6%, 0.22)",
      contrastActive: "hsla(0, 0%, 6%, 0.38)",
    },
  },
  font: {
    family: FONT_STACK,
    base: `400 16px/24px ${FONT_STACK}`,
    label: `500 16px/24px ${FONT_STACK}`,
  },
  shadow: {
    raised: "0px 1px 3px 0px rgba(15, 15, 15, 0.06)",
    block: "0px 1px 8px 0px rgba(15, 15, 15, 0.02), 0px 1px 3px 0px rgba(15, 15, 15, 0.08)",
    overlay:
      "0px 1px 12px 0px rgba(15, 15, 15, 0.08), 0px 1px 4px 0px rgba(15, 15, 15, 0.06)",
  },
  radius: {
    container: "8px",
    control: "6px",
  },
})
