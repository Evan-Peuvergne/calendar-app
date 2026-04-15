import { recipe } from "@vanilla-extract/recipes"
import { createVar } from "@vanilla-extract/css"

import { theme } from "@tokens"
import { base, iconBase, disabledBase } from "./styles.css"

const intentColor = createVar()

export const container = recipe({
  base: [
    base,
    {
      color: intentColor,
      background: theme.color.fill.base,
      outline: `1px solid ${theme.color.stroke.base}`,
      boxShadow: theme.shadow.raised,
      transition: "background 0.2s ease-in-out, outline 0.2s ease-in-out",

      ":hover": {
        background: `linear-gradient(${theme.color.opacify.hover}, ${theme.color.opacify.hover}), ${theme.color.fill.base}`,
        outline: `1px solid ${theme.color.stroke.hover}`,
      },
      ":active": {
        background: `linear-gradient(${theme.color.opacify.active}, ${theme.color.opacify.active}), ${theme.color.fill.base}`,
        outline: `1px solid ${theme.color.stroke.hover}`,
        boxShadow: "none",
      },
    },
  ],
  variants: {
    intent: {
      neutral: { vars: { [intentColor]: theme.color.text.neutral } },
      action: { vars: { [intentColor]: theme.color.text.action } },
      danger: { vars: { [intentColor]: theme.color.text.danger } },
    },
    icon: {
      true: iconBase,
    },
    active: {
      true: {
        background: `linear-gradient(${theme.color.opacify.active}, ${theme.color.opacify.active}), ${theme.color.fill.base}`,
        outline: `1px solid ${theme.color.stroke.hover}`,
        boxShadow: "none",
      },
    },
    disabled: {
      true: [
        disabledBase,
        {
          color: theme.color.text.disabled,
          backgroundColor: theme.color.fill.disabled,
          outline: `1px solid ${theme.color.stroke.base}`,
          boxShadow: "none",
        },
      ],
    },
  },
  defaultVariants: {
    intent: "neutral",
  },
})
