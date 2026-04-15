import { style, globalStyle } from "@vanilla-extract/css"

import { tokens } from "@tokens"

export const title = style({
  fontSize: 20,
  fontWeight: 500,
  lineHeight: "26px",
  color: tokens.color.text.base,
})

export const subtitle = style({
  display: "block",
  marginTop: 8,
  fontSize: 14,
  lineHeight: "20px",
  color: tokens.color.text.light,
})

export const more = style({
  float: "right",
  marginRight: -8,
  marginTop: -8,
  opacity: 0,
  transition: "opacity 0.2s ease",
})

export const moreActive = style({
  opacity: 1,
})

export const head = style({
  padding: "16px 0",
  borderBottom: `1px solid ${tokens.color.stroke.base}`,
})

export const body = style({
  padding: "16px 0 0 0",
  fontSize: 10,
  fontWeight: 300,
  lineHeight: "14px",
  color: tokens.color.text.neutral,
})

globalStyle(`${body} p + p`, {
  marginTop: 6,
})

export const container = style({
  display: "flex",
  width: 248,
  height: 304,
  position: "relative",
  flexDirection: "column",
  flex: "0 0 auto",
  padding: "0 16px",
  background: "rgba(255, 255, 255, 0.88)",
  outline: `1px solid ${tokens.color.stroke.base}`,
  borderRadius: 12,
  boxShadow: tokens.shadow.block,
  overflow: "hidden",
  cursor: "pointer",

  ":hover": {
    background: "#fbfbfb",
    outline: `1px solid ${tokens.color.stroke.hover}`,
  },

  "::after": {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 88,
    content: '""',
    background:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
    pointerEvents: "none",
  },
})

globalStyle(`${container}:hover ${more}`, {
  opacity: 1,
})
