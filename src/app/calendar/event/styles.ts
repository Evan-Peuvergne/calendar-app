import { css, cx } from "styled-system/css"

export const time = css({
  display: "block",
  marginTop: "2px",
  fontSize: "14px",
  lineHeight: "20px",
  color: "rgba(15, 15, 15, 0.48)",
  flexShrink: "0",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
})

export const timeEnd = ""

export const eventLocation = css({
  display: "block",
  marginTop: "2px",
  fontSize: "14px",
  lineHeight: "20px",
  color: "rgba(15, 15, 15, 0.48)",
  flexShrink: "0",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
})

export const title = css({
  display: "block",
  fontSize: "16px",
  lineHeight: "20px",
  fontWeight: "500",
  color: "#246a54",
})

export const inner = css({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  overflow: "hidden",
})

export const avatarWrapper = css({
  marginTop: "16px",
})

const containerBase = css({
  display: "block",
  position: "absolute",
  zIndex: 3,
  padding: "12px",
  borderRadius: "12px",
  background:
    "radial-gradient(126.03% 93.63% at 8.16% 12.64%, rgba(57, 167, 132, 0.08) 0%, rgba(57, 167, 132, 0.04) 100%), var(--colors-lightlucent-70, rgba(255, 255, 255, 0.78))",
  cursor: "pointer",

  "&::before, &::after": {
    display: "block",
    position: "absolute",
    zIndex: -1,
    content: '""',
    borderRadius: "12px",
  },

  "&::before": {
    inset: "-1px",
    borderRadius: "13px",
    background: "var(--color-stroke-base)",
    boxShadow: "var(--shadow-raised)",
  },

  "&::after": {
    inset: "0",
    background: "radial-gradient(126.03% 93.63% at 8.16% 12.64%, rgba(57, 167, 132, 0.08) 0%, rgba(57, 167, 132, 0.04) 100%), var(--color-fill-base)",
    transition: "background 0.2s ease",
  },

  "&:hover::before": {
    background:
      "radial-gradient(126.03% 93.63% at 8.16% 12.64%, rgb(51, 103, 86, 0.8) 0%, rgba(43, 87, 73, 0.4) 100%), var(--colors-lightlucent-70, rgba(255, 255, 255, 0.78))",
  },

  "&:hover::after": {
    background:
      "radial-gradient(126.03% 93.63% at 8.16% 12.64%, rgba(57, 167, 132, 0.08) 0%, rgba(57, 167, 132, 0.04) 100%), #f8f8f8",
  },

  '&[data-tier="1"]': {
    padding: "0 12px",
  },
  '&[data-tier="1"] [data-inner]': {
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
  },
  '&[data-tier="1"] [data-title]': {
    flex: "1 0 0",
    minWidth: "1px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  '&[data-tier="1"] [data-time]': {
    marginTop: "0",
  },

  '&[data-tier="2"] [data-title]': {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  '&[data-tier="3"] [data-title]': {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
})

const containerActive = css({
  "&::before": {
    inset: "-2px",
    borderRadius: "14px",
    background:
      "radial-gradient(126.03% 93.63% at 8.16% 12.64%, rgb(51, 103, 86, 0.8) 0%, rgba(43, 87, 73, 0.4) 100%), var(--colors-lightlucent-70, rgba(255, 255, 255, 0.78))",
  },
})

export const container = ({ active = false } = {}) =>
  cx(containerBase, active && containerActive)
