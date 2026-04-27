import { css, cx } from "styled-system/css"

import { base, iconBase, disabledBase } from "./styles"

const buttonBase = css({
  color: "text.neutral",
  background: "fill.base",
  outline: "1px solid {colors.stroke.base}",
  boxShadow: "raised",
  transition: "background 0.2s ease-in-out, outline 0.2s ease-in-out",

  "&:hover": {
    background: "linear-gradient({colors.opacify.hover}, {colors.opacify.hover}), {colors.fill.base}",
    outline: "1px solid {colors.stroke.hover}",
  },

  "&:active": {
    background: "linear-gradient({colors.opacify.active}, {colors.opacify.active}), {colors.fill.base}",
    outline: "1px solid {colors.stroke.hover}",
    boxShadow: "none",
  },
})

const intentNeutral = css({ color: "text.neutral" })
const intentAction = css({ color: "text.action" })
const intentDanger = css({ color: "text.danger" })
const intentClasses = { neutral: intentNeutral, action: intentAction, danger: intentDanger }

const activeStyle = css({
  background: "linear-gradient({colors.opacify.active}, {colors.opacify.active}), {colors.fill.base}",
  outline: "1px solid {colors.stroke.hover}",
  boxShadow: "none",
})

const disabledStyle = css({
  color: "text.disabled",
  backgroundColor: "fill.disabled",
  outline: "1px solid {colors.stroke.base}",
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
