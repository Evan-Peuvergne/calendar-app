import { defineTokens, defineTextStyles } from "@pandacss/dev"

export const tokens = defineTokens({
  colors: {
    fill: {
      base: { value: "hsla(0, 0%, 100%, 1)" },
      background: { value: "hsla(0, 0%, 97%, 1)" },
      disabled: { value: "hsla(0, 0%, 93%, 1)" },
      danger: { value: "hsla(6, 84%, 47%, 1)" },
    },
    text: {
      base: { value: "hsla(0, 0%, 22%, 1)" },
      light: { value: "hsla(0, 0%, 44%, 1)" },
      disabled: { value: "hsla(0, 0%, 64%, 1)" },
      contrast: { value: "hsla(0, 0%, 100%, 0.92)" },
      neutral: { value: "hsla(0, 0%, 31%, 1)" },
      action: { value: "hsla(205, 90%, 28%, 1)" },
      danger: { value: "hsla(5, 85%, 34%, 1)" },
    },
    stroke: {
      base: { value: "hsla(0, 0%, 6%, 0.12)" },
      hover: { value: "hsla(0, 0%, 6%, 0.22)" },
    },
    opacify: {
      hover: { value: "hsla(0, 0%, 6%, 0.08)" },
      active: { value: "hsla(0, 0%, 6%, 0.16)" },
    },
  },
  shadows: {
    raised: { value: "0px 1px 3px 0px rgba(15, 15, 15, 0.06)" },
    block: { value: "0px 1px 8px 0px rgba(15, 15, 15, 0.02), 0px 1px 3px 0px rgba(15, 15, 15, 0.08)" },
    overlay: { value: "0px 1px 12px 0px rgba(15, 15, 15, 0.08), 0px 1px 4px 0px rgba(15, 15, 15, 0.06)" },
  },
})

export const textStyles = defineTextStyles({
  label: {
    value: {
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
})
