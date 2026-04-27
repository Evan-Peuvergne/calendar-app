import { css } from "styled-system/css"

export const title = css({
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "26px",
  color: "text.base",
})

export const subtitle = css({
  display: "block",
  marginTop: "8px",
  fontSize: "14px",
  lineHeight: "20px",
  color: "text.light",
})

export const moreStaticClass = "card-more"

export const more = css({
  float: "right",
  marginRight: "-8px",
  marginTop: "-8px",
  opacity: 0,
  transition: "opacity 0.2s ease",
})

export const moreActive = css({
  opacity: 1,
})

export const head = css({
  padding: "16px 0",
  borderBottom: "1px solid {colors.stroke.base}",
})

export const body = css({
  padding: "16px 0 0 0",
  fontSize: "10px",
  fontWeight: "300",
  lineHeight: "14px",
  color: "text.neutral",

  "& p + p": {
    marginTop: "6px",
  },
})

export const container = css({
  display: "flex",
  width: "248px",
  height: "304px",
  position: "relative",
  flexDirection: "column",
  flex: "0 0 auto",
  padding: "0 16px",
  background: "rgba(255, 255, 255, 0.88)",
  outline: "1px solid {colors.stroke.base}",
  borderRadius: "12px",
  boxShadow: "block",
  overflow: "hidden",
  cursor: "pointer",

  "&:hover": {
    background: "#fbfbfb",
    outline: "1px solid {colors.stroke.hover}",
  },

  [`&:hover .${moreStaticClass}`]: {
    opacity: 1,
  },

  "&::after": {
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "0",
    height: "88px",
    content: '""',
    background: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
    pointerEvents: "none",
  },
})
