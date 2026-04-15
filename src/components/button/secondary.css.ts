import { recipe } from "@vanilla-extract/recipes"
import { createVar } from "@vanilla-extract/css"

import { t } from "@tokens"
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
        backgroundColor: t.opacify.hover,
      },
      ":active": {
        color: intentColor,
        backgroundColor: t.opacify.active,
      },
    },
  ],
  variants: {
    intent: {
      neutral: { vars: { [intentColor]: t.text.neutral } },
      action: { vars: { [intentColor]: t.text.action } },
      danger: { vars: { [intentColor]: t.text.danger } },
    },
    icon: {
      true: iconBase,
    },
    active: {
      true: {
        color: intentColor,
        backgroundColor: t.opacify.active,
      },
    },
    disabled: {
      true: [
        disabledBase,
        {
          color: t.text.disabled,
          backgroundColor: "transparent",
        },
      ],
    },
  },
  defaultVariants: {
    intent: "neutral",
  },
})
