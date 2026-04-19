import { css, cx } from "@linaria/core"

import { color } from "@tokens"
import { base, iconBase, disabledBase } from "./styles"

const buttonBase = css`
  color: ${color.text.neutral};
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${color.opacify.hover};
  }

  &:active {
    background-color: ${color.opacify.active};
  }
`

const intentNeutral = css`color: ${color.text.neutral};`
const intentAction = css`color: ${color.text.action};`
const intentDanger = css`color: ${color.text.danger};`
const intentClasses = { neutral: intentNeutral, action: intentAction, danger: intentDanger }

const activeStyle = css`background-color: ${color.opacify.active};`

const disabledStyle = css`
  color: ${color.text.disabled};
  background-color: transparent;
`

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
