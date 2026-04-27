import { css, cx } from "styled-system/css"

import { base, iconBase, disabledBase } from "./styles"

const buttonBase = css({
  color: "text.neutral",
  transition: "color 0.2s ease-in-out, background-color 0.2s ease-in-out",

  "&:hover": {
    backgroundColor: "opacify.hover",
  },

  "&:active": {
    backgroundColor: "opacify.active",
  },
})

const intentNeutral = css({ color: "text.neutral" })
const intentAction = css({ color: "text.action" })
const intentDanger = css({ color: "text.danger" })
const intentClasses = { neutral: intentNeutral, action: intentAction, danger: intentDanger }

const activeStyle = css({ backgroundColor: "opacify.active" })

const disabledStyle = css({
  color: "text.disabled",
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
