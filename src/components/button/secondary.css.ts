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
      transition: "color 0.2s ease-in-out, background-color 0.2s ease-in-out",

      ":hover": {
        color: intentColor,
        backgroundColor: tokens.color.opacify.hover,
      },
      ":active": {
        color: intentColor,
        backgroundColor: tokens.color.opacify.active,
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
        color: intentColor,
        backgroundColor: tokens.color.opacify.active,
      },
    },
    disabled: {
      true: [
        disabledBase,
        {
          color: tokens.color.text.disabled,
          backgroundColor: "transparent",
        },
      ],
    },
  },
  defaultVariants: {
    intent: "neutral",
  },
})
