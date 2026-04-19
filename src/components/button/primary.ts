import { css, cx } from "@linaria/core"

import { color, shadow } from "@tokens"
import { base, iconBase, disabledBase } from "./styles"

const buttonBase = css`
  color: ${color.text.neutral};
  background: ${color.fill.base};
  outline: 1px solid ${color.stroke.base};
  box-shadow: ${shadow.raised};
  transition: background 0.2s ease-in-out, outline 0.2s ease-in-out;

  &:hover {
    background: linear-gradient(${color.opacify.hover}, ${color.opacify.hover}), ${color.fill.base};
    outline: 1px solid ${color.stroke.hover};
  }

  &:active {
    background: linear-gradient(${color.opacify.active}, ${color.opacify.active}), ${color.fill.base};
    outline: 1px solid ${color.stroke.hover};
    box-shadow: none;
  }
`

const intentNeutral = css`color: ${color.text.neutral};`
const intentAction = css`color: ${color.text.action};`
const intentDanger = css`color: ${color.text.danger};`
const intentClasses = { neutral: intentNeutral, action: intentAction, danger: intentDanger }

const activeStyle = css`
  background: linear-gradient(${color.opacify.active}, ${color.opacify.active}), ${color.fill.base};
  outline: 1px solid ${color.stroke.hover};
  box-shadow: none;
`

const disabledStyle = css`
  color: ${color.text.disabled};
  background-color: ${color.fill.disabled};
  outline: 1px solid ${color.stroke.base};
  box-shadow: none;
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
