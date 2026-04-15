import { recipe } from "@vanilla-extract/recipes"
import { createVar } from "@vanilla-extract/css"

import { tokens } from "@tokens"
import { base, iconBase, disabledBase } from "./styles.css"

const intentColor = createVar()

export const container = recipe({
  base: [
    base,
    {
      color: intentColor,
      background: tokens.color.fill.base,
      outline: `1px solid ${tokens.color.stroke.base}`,
      boxShadow: tokens.shadow.raised,
      transition: "background 0.2s ease-in-out, outline 0.2s ease-in-out",

      ":hover": {
        background: `linear-gradient(${tokens.color.opacify.hover}, ${tokens.color.opacify.hover}), ${tokens.color.fill.base}`,
        outline: `1px solid ${tokens.color.stroke.hover}`,
      },
      ":active": {
        background: `linear-gradient(${tokens.color.opacify.active}, ${tokens.color.opacify.active}), ${tokens.color.fill.base}`,
        outline: `1px solid ${tokens.color.stroke.hover}`,
        boxShadow: "none",
      },
    },
  ],
  variants: {
    intent: {
      neutral: { vars: { [intentColor]: tokens.color.text.neutral } },
      action: { vars: { [intentColor]: tokens.color.text.action } },
      danger: { vars: { [intentColor]: tokens.color.text.danger } },
    },
    icon: {
      true: iconBase,
    },
    active: {
      true: {
        background: `linear-gradient(${tokens.color.opacify.active}, ${tokens.color.opacify.active}), ${tokens.color.fill.base}`,
        outline: `1px solid ${tokens.color.stroke.hover}`,
        boxShadow: "none",
      },
    },
    disabled: {
      true: [
        disabledBase,
        {
          color: tokens.color.text.disabled,
          backgroundColor: tokens.color.fill.disabled,
          outline: `1px solid ${tokens.color.stroke.base}`,
          boxShadow: "none",
        },
      ],
    },
  },
  defaultVariants: {
    intent: "neutral",
  },
})
