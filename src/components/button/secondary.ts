import { css, cx } from "styled-system/css"

import { base, iconBase, disabledBase } from "./styles"

const buttonBase = css({
  color: "var(--color-text-neutral)",
  transition: "color 0.2s ease-in-out, background-color 0.2s ease-in-out",

  "&:hover": {
    backgroundColor: "var(--color-opacify-hover)",
  },

  "&:active": {
    backgroundColor: "var(--color-opacify-active)",
  },
})

const intentNeutral = css({ color: "var(--color-text-neutral)" })
const intentAction = css({ color: "var(--color-text-action)" })
const intentDanger = css({ color: "var(--color-text-danger)" })
const intentClasses = { neutral: intentNeutral, action: intentAction, danger: intentDanger }

const activeStyle = css({ backgroundColor: "var(--color-opacify-active)" })

const disabledStyle = css({
  color: "var(--color-text-disabled)",
  backgroundColor: "transparent",
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
