import { cva } from "styled-system/css"

export const tab = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    height: "40px",
    gap: "8px",
    padding: "0 12px",
    textStyle: "label",
    fontWeight: "600",
    color: "text.light",
    borderRadius: "12px",
    cursor: "pointer",
    userSelect: "none",
    textDecoration: "none",
    appearance: "none",
    "&:hover": {
      color: "text.neutral",
      background: "opacify.hover",
    },
  },
  variants: {
    active: {
      true: {
        color: "text.neutral",
        background: "opacify.active",
        "&:hover": {
          color: "text.neutral",
          background: "opacify.active",
        },
      },
    },
  },
})

export const container = tab
export const linkContainer = tab
