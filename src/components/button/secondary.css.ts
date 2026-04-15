import { recipe } from "@vanilla-extract/recipes"
import { createVar } from "@vanilla-extract/css"

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
        backgroundColor: "var(--c-opacify-hover)",
      },
      ":active": {
        color: intentColor,
        backgroundColor: "var(--c-opacify-active)",
      },
    },
  ],
  variants: {
    intent: {
      neutral: { vars: { [intentColor]: "var(--c-text-neutral)" } },
      action: { vars: { [intentColor]: "var(--c-text-action)" } },
      danger: { vars: { [intentColor]: "var(--c-text-danger)" } },
    },
    icon: {
      true: iconBase,
    },
    active: {
      true: {
        color: intentColor,
        backgroundColor: "var(--c-opacify-active)",
      },
    },
    disabled: {
      true: [
        disabledBase,
        {
          color: "var(--c-text-disabled)",
          backgroundColor: "transparent",
        },
      ],
    },
  },
  defaultVariants: {
    intent: "neutral",
  },
})
