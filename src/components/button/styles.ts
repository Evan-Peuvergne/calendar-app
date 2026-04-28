import { cva } from "styled-system/css"

export const button = cva({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
    padding: "8px",
    gap: "8px",
    textStyle: "label",
    borderRadius: "12px",
    cursor: "pointer",
    appearance: "none",
  },
  variants: {
    variant: {
      primary: {
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
      },
      secondary: {
        transition: "color 0.2s ease-in-out, background-color 0.2s ease-in-out",
        "&:hover": { backgroundColor: "opacify.hover" },
        "&:active": { backgroundColor: "opacify.active" },
      },
    },
    intent: {
      neutral: { color: "text.neutral" },
      action: { color: "text.action" },
      danger: { color: "text.danger" },
    },
    icon: {
      true: { aspectRatio: "1 / 1" },
    },
    active: {
      true: {},
    },
    disabled: {
      true: { cursor: "not-allowed" },
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      active: true,
      css: {
        background: "linear-gradient({colors.opacify.active}, {colors.opacify.active}), {colors.fill.base}",
        outline: "1px solid {colors.stroke.hover}",
        boxShadow: "none",
      },
    },
    {
      variant: "secondary",
      active: true,
      css: { backgroundColor: "opacify.active" },
    },
    {
      variant: "primary",
      disabled: true,
      css: {
        color: "text.disabled",
        backgroundColor: "fill.disabled",
        outline: "1px solid {colors.stroke.base}",
        boxShadow: "none",
      },
    },
    {
      variant: "secondary",
      disabled: true,
      css: {
        color: "text.disabled",
        backgroundColor: "transparent",
      },
    },
  ],
  defaultVariants: {
    variant: "primary",
    intent: "neutral",
  },
})
