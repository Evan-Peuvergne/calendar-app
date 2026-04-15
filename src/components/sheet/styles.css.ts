import { style, globalStyle } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

import { theme } from "@tokens"

export const title = style({
  fontSize: 32,
  fontWeight: 600,
  lineHeight: "48px",
  color: theme.color.text.base,
})

export const subtitle = style({
  color: theme.color.text.light,
})

globalStyle(`${title} + ${subtitle}`, {
  marginTop: 8,
})

export const header = style({
  position: "relative",
  padding: "40px 40px 40px 40px",

  "::after": {
    position: "absolute",
    bottom: 0,
    left: 32,
    right: 32,
    display: "block",
    content: '""',
    borderBottom: `1px solid ${theme.color.stroke.base}`,
  },
})

export const closeInHeader = style({
  float: "right",
  marginRight: -24,
  marginTop: -24,
  position: "sticky",
})

export const body = style({
  padding: "48px 40px",
})

export const sheetContent = style({
  display: "flex",
  flexDirection: "column",
})

export const sheet = recipe({
  base: {
    display: "block",
    width: 980,
    margin: "0 auto",
    overflow: "hidden",
    outline: `1px solid ${theme.color.stroke.base}`,
    backdropFilter: "blur(8px)",
    borderRadius: "24px 24px 0 0",
    boxShadow: theme.shadow.overlay,
    transition: "background 300ms ease",
  },
  variants: {
    elevated: {
      true: { background: "rgba(248, 248, 248, 0.88)" },
      false: { background: "rgba(255, 255, 255, 0.88)" },
    },
    rootScroll: {
      true: { position: "relative", top: "auto", maxHeight: "none" },
      false: { position: "sticky", top: 104, maxHeight: "calc(100vh - 104px)" },
    },
  },
  defaultVariants: { elevated: false, rootScroll: false },
})

export const scroll = style({
  minHeight: "100vh",
  position: "relative",
})

export const container = style({
  position: "fixed",
  inset: 0,
  overflowY: "auto",
  zIndex: 1000,
})

export const containerInactive = style({ pointerEvents: "none" })
export const containerHidden = style({ overflowY: "hidden" })
export const containerRootScroll = style({ display: "flex", alignItems: "flex-end" })
