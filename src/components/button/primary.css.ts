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
      background: t.fill.base,
      outline: `1px solid ${t.stroke.base}`,
      boxShadow: t.shadow.raised,
      transition: "background 0.2s ease-in-out, outline 0.2s ease-in-out",

      ":hover": {
        background: `linear-gradient(${t.opacify.hover}, ${t.opacify.hover}), ${t.fill.base}`,
        outline: `1px solid ${t.stroke.hover}`,
      },
      ":active": {
        background: `linear-gradient(${t.opacify.active}, ${t.opacify.active}), ${t.fill.base}`,
        outline: `1px solid ${t.stroke.hover}`,
        boxShadow: "none",
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
        background: `linear-gradient(${t.opacify.active}, ${t.opacify.active}), ${t.fill.base}`,
        outline: `1px solid ${t.stroke.hover}`,
        boxShadow: "none",
      },
    },
    disabled: {
      true: [
        disabledBase,
        {
          color: t.text.disabled,
          backgroundColor: t.fill.disabled,
          outline: `1px solid ${t.stroke.base}`,
          boxShadow: "none",
        },
      ],
    },
  },
  defaultVariants: {
    intent: "neutral",
  },
})
