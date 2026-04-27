import { css, cx } from "styled-system/css"

export const options = css({
  display: "flex",
  alignItems: "center",
  padding: "0 8",
  gap: "8",
  position: "fixed",
  zIndex: 5,
  left: "50%",
  bottom: "0",
  height: "58px",
  transform: "translate3d(-50%, 0, 0)",
  background: "rgba(255, 255, 255, 0.88)",
  backdropFilter: "blur(4px)",
  outline: "1px solid var(--color-stroke-base)",
  boxShadow: "var(--shadow-overlay)",
  borderRadius: "16px 16px 0 0",

  "& hr": {
    display: "block",
    height: "24px",
    borderRight: "1px solid var(--color-stroke-base)",
  },
})

export const hour = css({
  display: "block",
  height: "var(--calendar-hour-height)",
  position: "relative",
  borderTop: "1px solid",
  borderImage:
    "linear-gradient(to right, transparent 0px, #ececec 64px, #ececec calc(100% - 64px), transparent 100%) 1",

  "&::after": {
    display: "block",
    position: "absolute",
    width: "24px",
    top: "-24px",
    left: "28px",
    textAlign: "right",
    fontSize: "12px",
    fontWeight: "500",
    color: "var(--color-text-disabled)",
    content: "var(--hour-value)",
  },
})

export const currentTime = css({
  display: "block",
  position: "absolute",
  left: "0",
  right: "0",
  borderTop: "1px solid",
  borderImage:
    "linear-gradient(to right, transparent 0px, var(--color-fill-danger) 64px, var(--color-fill-danger) calc(100% - 64px), transparent 100%) 1",

  "& span": {
    position: "absolute",
    left: "56px",
    transform: "translate3d(-100%, -50%, 0)",
    display: "inline-flex",
    height: "24px",
    padding: "0 4px",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: "500",
    color: "var(--color-text-contrast)",
    background: "var(--color-fill-danger)",
    borderRadius: "20px",
  },
})

export const hours = css({
  display: "block",
  position: "absolute",
  top: "var(--calendar-padding)",
  left: "0",
  width: "100%",
  zIndex: -1,
})

const labelBase = css({
  display: "inline-flex",
  height: "32px",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 16px",
  fontSize: "12px",
  fontWeight: "600",
  color: "var(--color-text-light)",
  borderRadius: "20px",
  background: "rgba(248, 248, 248, 0.5)",
  backdropFilter: "blur(4px)",
})

const labelCurrent = css({
  background: "rgba(0, 0, 0, 0.16)",
  color: "var(--color-text-base)",
})

export const label = ({ current = false } = {}) =>
  cx(labelBase, current && labelCurrent)

export const labels = css({
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  position: "fixed",
  top: "calc(var(--nav-height) + 8px)",
  left: "0",
  padding: "0 64px",
  zIndex: 100,
})

export const day = css({
  paddingLeft: "4px",
  paddingRight: "4px",
  position: "relative",
  borderLeft: "1px solid #ececec",

  "&:last-child": {
    borderRight: "1px solid #ececec",
  },
})

export const week = css({
  display: "flex",
  padding: "0 64px",
  height:
    "calc(var(--calendar-padding) * 2 + var(--calendar-hour-height) * 24)",
  position: "relative",

  "& [data-day]": {
    flex: 1,
    zIndex: 1,
    position: "relative",
  },

  "&::before, &::after": {
    display: "block",
    position: "absolute",
    zIndex: 2,
    left: "0",
    right: "0",
    content: '""',
    pointerEvents: "none",
  },

  "&::before": {
    top: "0",
    height: "var(--calendar-padding)",
    background:
      "linear-gradient(to bottom, var(--color-fill-background) 0%, transparent 88%)",
  },

  "&::after": {
    bottom: "0",
    height: "var(--calendar-padding)",
    background:
      "linear-gradient(to top, var(--color-fill-background) 0%, transparent 88%)",
  },
})

export const container = css({
  minHeight: "100vh",
  paddingTop: "calc(var(--nav-height) + var(--calendar-labels-bar-height))",
})
