import { css, cva } from "styled-system/css"

export const option = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "40px",
    padding: "8px",
    paddingRight: "16px",
    gap: "8px",
    textStyle: "label",
    fontWeight: "500",
    borderRadius: "8px",
    cursor: "pointer",
    appearance: "none",
    transition: "color 0.2s ease-in-out, background-color 0.2s ease-in-out",
    "&:hover": { backgroundColor: "opacify.hover" },
    "&:active": { backgroundColor: "opacify.active" },
    "& i": {
      width: "16px",
      marginRight: "-4px",
      marginLeft: "auto",
      justifyContent: "center",
    },
  },
  variants: {
    intent: {
      neutral: { color: "text.neutral" },
      action: { color: "text.action" },
      danger: { color: "text.danger" },
    },
  },
  defaultVariants: {
    intent: "neutral",
  },
})

export const divider = css({
  width: "100%",
  borderBottom: "1px solid {colors.stroke.base}",
  margin: "4px 2px",
})

export const overlay = css({
  display: "flex",
  flexDirection: "column",
  padding: "8px",
  gap: "4px",
  background: "rgba(255, 255, 255, 0.88)",
  outline: "1px solid {colors.stroke.base}",
  borderRadius: "12px",
  boxShadow: "overlay",
  backdropFilter: "blur(4px)",
  zIndex: 1000,
})
