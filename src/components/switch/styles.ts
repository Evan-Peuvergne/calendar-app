import { css } from "styled-system/css"

export const thumb = css({
  position: "relative",
  display: "inline-block",
  width: "30px",
  height: "14px",
  borderRadius: "10px",
  backgroundColor: "rgba(15, 15, 15, 0.12)",
  cursor: "pointer",
  transition: "background-color 0.2s ease",

  '&[data-checked="true"]': {
    backgroundColor: "#0968ac",
  },

  "&:after": {
    position: "absolute",
    display: "block",
    top: "2px",
    left: "2px",
    width: "16px",
    height: "10px",
    content: '""',
    background: "#fff",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.08)",
    borderRadius: "100px",
    transition: "transform 0.2s ease",
  },

  '&[data-checked="true"]::after': {
    transform: "translate3d(10px, 0, 0)",
  },
})
