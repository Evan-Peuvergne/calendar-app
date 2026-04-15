import { recipe } from "@vanilla-extract/recipes"
import { createVar } from "@vanilla-extract/css"

import { theme } from "../../tokens.css"
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
        backgroundColor: theme.color.opacify.hover,
      },
      ":active": {
        color: intentColor,
        backgroundColor: theme.color.opacify.active,
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
        color: intentColor,
        backgroundColor: theme.color.opacify.active,
      },
    },
    disabled: {
      true: [
        disabledBase,
        {
          color: theme.color.text.disabled,
          backgroundColor: "transparent",
        },
      ],
    },
  },
  defaultVariants: {
    intent: "neutral",
  },
})
