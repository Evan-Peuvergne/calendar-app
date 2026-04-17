import { css, cx } from "@linaria/core"

import { t } from "@tokens"
import { base, iconBase, disabledBase } from "./styles"

const buttonBase = css`
  color: ${t.text.neutral};
  background: ${t.fill.base};
  outline: 1px solid ${t.stroke.base};
  box-shadow: ${t.shadow.raised};
  transition: background 0.2s ease-in-out, outline 0.2s ease-in-out;

  &:hover {
    background: linear-gradient(${t.opacify.hover}, ${t.opacify.hover}), ${t.fill.base};
    outline: 1px solid ${t.stroke.hover};
  }

  &:active {
    background: linear-gradient(${t.opacify.active}, ${t.opacify.active}), ${t.fill.base};
    outline: 1px solid ${t.stroke.hover};
    box-shadow: none;
  }
`

const intentNeutral = css`color: ${t.text.neutral};`
const intentAction = css`color: ${t.text.action};`
const intentDanger = css`color: ${t.text.danger};`
const intentClasses = { neutral: intentNeutral, action: intentAction, danger: intentDanger }

const activeStyle = css`
  background: linear-gradient(${t.opacify.active}, ${t.opacify.active}), ${t.fill.base};
  outline: 1px solid ${t.stroke.hover};
  box-shadow: none;
`

const disabledStyle = css`
  color: ${t.text.disabled};
  background-color: ${t.fill.disabled};
  outline: 1px solid ${t.stroke.base};
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
