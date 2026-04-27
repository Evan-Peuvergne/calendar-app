import { css, cx } from "styled-system/css"

import { base, iconBase, disabledBase } from "./styles"

const buttonBase = css({
  color: "var(--color-text-neutral)",
  background: "var(--color-fill-base)",
  outline: "1px solid var(--color-stroke-base)",
  boxShadow: "var(--shadow-raised)",
  transition: "background 0.2s ease-in-out, outline 0.2s ease-in-out",

  "&:hover": {
    background: "linear-gradient(var(--color-opacify-hover), var(--color-opacify-hover)), var(--color-fill-base)",
    outline: "1px solid var(--color-stroke-hover)",
  },

  "&:active": {
    background: "linear-gradient(var(--color-opacify-active), var(--color-opacify-active)), var(--color-fill-base)",
    outline: "1px solid var(--color-stroke-hover)",
    boxShadow: "none",
  },
})

const intentNeutral = css({ color: "var(--color-text-neutral)" })
const intentAction = css({ color: "var(--color-text-action)" })
const intentDanger = css({ color: "var(--color-text-danger)" })
const intentClasses = { neutral: intentNeutral, action: intentAction, danger: intentDanger }

const activeStyle = css({
  background: "linear-gradient(var(--color-opacify-active), var(--color-opacify-active)), var(--color-fill-base)",
  outline: "1px solid var(--color-stroke-hover)",
  boxShadow: "none",
})

const disabledStyle = css({
  color: "var(--color-text-disabled)",
  backgroundColor: "var(--color-fill-disabled)",
  outline: "1px solid var(--color-stroke-base)",
  boxShadow: "none",
})

export const container = ({
  intent = "neutral" as "neutral" | "action" | "danger",
  icon = false,
  active = false,
  disabled = false,
} = {}) =>
  cx(
    base,
    buttonBase,
    intentClasses[intent],
    icon && iconBase,
    active && activeStyle,
    disabled && disabledBase,
    disabled && disabledStyle,
  )
