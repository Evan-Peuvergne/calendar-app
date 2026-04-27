import { css, cx } from "styled-system/css"

const base = css({
  display: "inline-flex",
  alignItems: "center",
  height: "40px",
  gap: "8px",
  padding: "0 12px",
  font: "var(--font-label)",
  fontWeight: "600",
  color: "var(--color-text-light)",
  borderRadius: "12px",
  cursor: "pointer",
  userSelect: "none",
  textDecoration: "none",
  appearance: "none",

  "&:hover": {
    color: "var(--color-text-neutral)",
    background: "var(--color-opacify-hover)",
  },
})

const activeStyle = css({
  color: "var(--color-text-neutral)",
  background: "var(--color-opacify-active)",

  "&:hover": {
    color: "var(--color-text-neutral)",
    background: "var(--color-opacify-active)",
  },
})

export const container = ({ active = false } = {}) => cx(base, active && activeStyle)
export const linkContainer = ({ active = false } = {}) => cx(base, active && activeStyle)
