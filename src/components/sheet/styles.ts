import { css, cx } from "styled-system/css"

export const title = css({
  fontSize: "32px",
  fontWeight: "600",
  lineHeight: "48px",
  color: "var(--color-text-base)",

  "& + *": {
    marginTop: "8px",
  },
})

export const subtitle = css({
  color: "var(--color-text-light)",
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
    borderBottom: "1px solid var(--color-stroke-base)",
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

const sheetBase = css({
  display: "block",
  width: "980px",
  margin: "0 auto",
  overflow: "hidden",
  outline: "1px solid var(--color-stroke-base)",
  backdropFilter: "blur(8px)",
  borderRadius: "24px 24px 0 0",
  boxShadow: "var(--shadow-overlay)",
  transition: "background 300ms ease",
})

const sheetElevated = css({ background: "rgba(248, 248, 248, 0.88)" })
const sheetNotElevated = css({ background: "rgba(255, 255, 255, 0.88)" })
const sheetRootScroll = css({ position: "relative", top: "auto", maxHeight: "none" })
const sheetNotRootScroll = css({ position: "sticky", top: "104px", maxHeight: "calc(100vh - 104px)" })

export const sheet = ({ elevated = false, rootScroll = false } = {}) =>
  cx(
    sheetBase,
    elevated ? sheetElevated : sheetNotElevated,
    rootScroll ? sheetRootScroll : sheetNotRootScroll,
  )

export const scroll = css({
  minHeight: "100vh",
  position: "relative",
})

export const container = css({
  position: "fixed",
  inset: "0",
  overflowY: "auto",
  zIndex: 1000,
})

export const containerInactive = css({ pointerEvents: "none" })
export const containerHidden = css({ overflowY: "hidden" })
export const containerRootScroll = css({ display: "flex", alignItems: "flex-end" })
