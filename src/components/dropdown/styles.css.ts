import { style, globalStyle, createVar } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

import { tokens } from "@tokens"
import { base } from "@components/button/styles.css"

const intentColor = createVar()

export const option = recipe({
  base: [
    base,
    {
      color: intentColor,
      display: "flex",
      justifyContent: "space-between",
      paddingRight: 16,
      fontWeight: 500,
      borderRadius: 8,
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
  },
  defaultVariants: { intent: "neutral" },
})

globalStyle(`${option.classNames.base} i`, {
  width: 16,
  marginRight: -4,
  marginLeft: 16,
  justifyContent: "center",
})

export const divider = style({
  width: "100%",
  borderBottom: `1px solid ${tokens.color.stroke.base}`,
  margin: "4px 2px",
})

export const overlay = style({
  display: "flex",
  flexDirection: "column",
  padding: 8,
  gap: 4,
  background: "rgba(255, 255, 255, 0.88)",
  outline: `1px solid ${tokens.color.stroke.base}`,
  borderRadius: 12,
  boxShadow: tokens.shadow.overlay,
  backdropFilter: "blur(4px)",
})
