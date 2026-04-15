import { style, globalStyle } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

export const HOUR_HEIGHT = 128
export const EVENT_GAP = 6

export const options = style({
  display: "flex",
  alignItems: "center",
  padding: "0 8px",
  gap: 8,
  position: "fixed",
  zIndex: 5,
  left: "50%",
  bottom: 0,
  height: 58,
  transform: "translate3d(-50%, 0, 0)",
  background: "rgba(255, 255, 255, 0.88)",
  backdropFilter: "blur(4px)",
  outline: "1px solid var(--c-stroke-base)",
  boxShadow: "var(--s-overlay)",
  borderRadius: "16px 16px 0 0",
})

globalStyle(`${options} hr`, {
  display: "block",
  height: 24,
  borderRight: "1px solid var(--c-stroke-base)",
})

export const hour = style({
  display: "block",
  height: HOUR_HEIGHT,
  position: "relative",
  borderTop: "1px solid",
  borderImage:
    "linear-gradient(to right, transparent 0px, #ececec 64px, #ececec calc(100% - 64px), transparent 100%) 1",

  "::after": {
    display: "block",
    position: "absolute",
    width: 24,
    top: -24,
    left: 28,
    textAlign: "right",
    fontSize: 12,
    fontWeight: 500,
    color: "var(--c-text-disabled)",
    content: "var(--hour-value)",
  },
})

export const currentTime = style({
  display: "block",
  position: "absolute",
  left: 0,
  right: 0,
  borderTop: "1px solid",
  borderImage:
    "linear-gradient(to right, transparent 0px, var(--c-fill-danger) 64px, var(--c-fill-danger) calc(100% - 64px), transparent 100%) 1",
})

globalStyle(`${currentTime} span`, {
  position: "absolute",
  left: 56,
  transform: "translate3d(-100%, -50%, 0)",
  display: "inline-flex",
  height: 24,
  padding: "0 4px",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 12,
  fontWeight: 500,
  color: "var(--c-text-contrast)",
  background: "var(--c-fill-danger)",
  borderRadius: 20,
})

export const hours = style({
  display: "block",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: -1,
})

export const label = recipe({
  base: {
    display: "inline-flex",
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    padding: "0 16px",
    fontSize: 12,
    fontWeight: 600,
    color: "var(--c-text-light)",
    borderRadius: 20,
    background: "rgba(248, 248, 248, 0.5)",
    backdropFilter: "blur(4px)",
  },
  variants: {
    current: {
      true: {
        background: "rgba(0, 0, 0, 0.16)",
        color: "var(--c-text-base)",
      },
    },
  },
})

export const labels = style({
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  position: "fixed",
  top: 120,
  left: 0,
  padding: "0 64px",
  zIndex: 100,
})

export const day = style({
  paddingTop: 112,
  paddingLeft: 4,
  paddingRight: 4,
  position: "relative",
  borderLeft: "1px solid #ececec",

  selectors: {
    "&:last-child": {
      borderRight: "1px solid #ececec",
    },
  },
})

export const week = style({
  display: "flex",
  padding: "0 64px",
  height: HOUR_HEIGHT * 24,
  position: "relative",

  selectors: {
    "&::before, &::after": {
      display: "block",
      position: "fixed",
      zIndex: 2,
      left: 0,
      right: 0,
      content: '""',
    },
    "&::before": {
      top: 0,
      height: 288,
      background: "linear-gradient(to bottom, var(--c-fill-background), transparent)",
    },
    "&::after": {
      bottom: 0,
      height: 48,
      background: "linear-gradient(to top, var(--c-fill-background), transparent)",
    },
  },
})

globalStyle(`${week} ${day}`, {
  flex: 1,
  zIndex: 1,
  position: "relative",
})

export const container = style({
  minHeight: "100vh",
  paddingTop: 112,
})
