const FONT_STACK =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

export const color = {
  fill: {
    base: "hsla(0, 0%, 100%, 1)",
    background: "hsla(0, 0%, 97%, 1)",
    disabled: "hsla(0, 0%, 93%, 1)",
    danger: "hsla(6, 84%, 47%, 1)",
  },
  text: {
    base: "hsla(0, 0%, 22%, 1)",
    light: "hsla(0, 0%, 44%, 1)",
    disabled: "hsla(0, 0%, 64%, 1)",
    contrast: "hsla(0, 0%, 100%, 0.92)",
    neutral: "hsla(0, 0%, 31%, 1)",
    action: "hsla(205, 90%, 28%, 1)",
    danger: "hsla(5, 85%, 34%, 1)",
  },
  stroke: {
    base: "hsla(0, 0%, 6%, 0.12)",
    hover: "hsla(0, 0%, 6%, 0.22)",
  },
  opacify: {
    hover: "hsla(0, 0%, 6%, 0.08)",
    active: "hsla(0, 0%, 6%, 0.16)",
  },
}

export const shadow = {
  raised: "0px 1px 3px 0px rgba(15, 15, 15, 0.06)",
  block: "0px 1px 8px 0px rgba(15, 15, 15, 0.02), 0px 1px 3px 0px rgba(15, 15, 15, 0.08)",
  overlay: "0px 1px 12px 0px rgba(15, 15, 15, 0.08), 0px 1px 4px 0px rgba(15, 15, 15, 0.06)",
}

export const font = {
  family: FONT_STACK,
  label: `500 16px/24px ${FONT_STACK}`,
}
