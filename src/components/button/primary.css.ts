import { recipe } from "@vanilla-extract/recipes"
import { createVar } from "@vanilla-extract/css"

import { base, iconBase, disabledBase } from "./styles.css"

const intentColor = createVar()

export const container = recipe({
  base: [
    base,
    {
      color: intentColor,
      background: "var(--c-fill-base)",
      outline: "1px solid var(--c-stroke-base)",
      boxShadow: "var(--s-raised)",
      transition: "background 0.2s ease-in-out, outline 0.2s ease-in-out",

      ":hover": {
        background:
          "linear-gradient(var(--c-opacify-hover), var(--c-opacify-hover)), var(--c-fill-base)",
        outline: "1px solid var(--c-stroke-hover)",
      },
      ":active": {
        background:
          "linear-gradient(var(--c-opacify-active), var(--c-opacify-active)), var(--c-fill-base)",
        outline: "1px solid var(--c-stroke-hover)",
        boxShadow: "none",
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
        background:
          "linear-gradient(var(--c-opacify-active), var(--c-opacify-active)), var(--c-fill-base)",
        outline: "1px solid var(--c-stroke-hover)",
        boxShadow: "none",
      },
    },
    disabled: {
      true: [
        disabledBase,
        {
          color: "var(--c-text-disabled)",
          backgroundColor: "var(--c-fill-disabled)",
          outline: "1px solid var(--c-stroke-base)",
          boxShadow: "none",
        },
      ],
    },
  },
  defaultVariants: {
    intent: "neutral",
  },
})
