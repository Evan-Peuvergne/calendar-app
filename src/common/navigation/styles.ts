import { css } from "styled-system/css"

export const divider = css({
  width: "1px",
  height: "24px",
  background: "stroke.base",
  border: "none",
  margin: "0",
})

export const container = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "{sizes.nav.height}",
  gap: "32px",
  position: "fixed",
  width: "100%",
  top: "0",
  zIndex: 10,

  "& > *": {
    position: "relative",
    zIndex: 1,
  },
})
