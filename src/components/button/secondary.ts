import { css, cx } from "@linaria/core"

import { t } from "@tokens"
import { base, iconBase, disabledBase } from "./styles"

const buttonBase = css`
  color: ${t.text.neutral};
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${t.opacify.hover};
  }

  &:active {
    background-color: ${t.opacify.active};
  }
`

const intentNeutral = css`color: ${t.text.neutral};`
const intentAction = css`color: ${t.text.action};`
const intentDanger = css`color: ${t.text.danger};`
const intentClasses = { neutral: intentNeutral, action: intentAction, danger: intentDanger }

const activeStyle = css`background-color: ${t.opacify.active};`

const disabledStyle = css`
  color: ${t.text.disabled};
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
