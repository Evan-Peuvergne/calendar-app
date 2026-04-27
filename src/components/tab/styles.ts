import { css, cx } from "styled-system/css"

const base = css({
  display: "inline-flex",
  alignItems: "center",
  height: "40px",
  gap: "8px",
  padding: "0 12px",
  textStyle: "label",
  fontWeight: "600",
  color: "text.light",
  borderRadius: "12px",
  cursor: "pointer",
  userSelect: "none",
  textDecoration: "none",
  appearance: "none",

  "&:hover": {
    color: "text.neutral",
    background: "opacify.hover",
  },
})

const activeStyle = css({
  color: "text.neutral",
  background: "opacify.active",

  "&:hover": {
    color: "text.neutral",
    background: "opacify.active",
  },
})

export const container = ({ active = false } = {}) => cx(base, active && activeStyle)
export const linkContainer = ({ active = false } = {}) => cx(base, active && activeStyle)
