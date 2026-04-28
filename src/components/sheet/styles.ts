import { css, cva } from "styled-system/css"

export const title = css({
  fontSize: "32px",
  fontWeight: "600",
  lineHeight: "48px",
  color: "text.base",

  "& + *": {
    marginTop: "8px",
  },
})

export const subtitle = css({
  color: "text.light",
})

export const header = css({
  position: "relative",
  padding: "40px",

  "&::after": {
    position: "absolute",
    bottom: "0",
    left: "32px",
    right: "32px",
    display: "block",
    content: '""',
    borderBottom: "1px solid {colors.stroke.base}",
  },
})

export const closeInHeader = css({
  float: "right",
  marginRight: "-24px",
  marginTop: "-24px",
  position: "sticky",
})

export const body = css({
  padding: "48px 40px",
})

export const sheetContent = css({
  display: "flex",
  flexDirection: "column",
})

export const sheet = cva({
  base: {
    display: "block",
    width: "980px",
    margin: "0 auto",
    overflow: "hidden",
    outline: "1px solid {colors.stroke.base}",
    backdropFilter: "blur(8px)",
    borderRadius: "24px 24px 0 0",
    boxShadow: "overlay",
    transition: "background 300ms ease",
  },
  variants: {
    elevated: {
      true: { background: "rgba(248, 248, 248, 0.88)" },
      false: { background: "rgba(255, 255, 255, 0.88)" },
    },
    rootScroll: {
      true: { position: "relative", top: "auto", maxHeight: "none" },
      false: { position: "sticky", top: "104px", maxHeight: "calc(100vh - 104px)" },
    },
  },
  defaultVariants: {
    elevated: false,
    rootScroll: false,
  },
})

export const scroll = css({
  minHeight: "100vh",
  position: "relative",
})

export const container = cva({
  base: {
    position: "fixed",
    inset: "0",
    overflowY: "auto",
    zIndex: 1000,
  },
  variants: {
    inactive: {
      true: { pointerEvents: "none" },
    },
    hidden: {
      true: { overflowY: "hidden" },
    },
    rootScroll: {
      true: { display: "flex", alignItems: "flex-end" },
    },
  },
})
