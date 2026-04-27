import { css, cx } from "styled-system/css"

import { base } from "@components/button/styles"

const optionBase = css({
  color: "var(--color-text-neutral)",
  display: "flex",
  justifyContent: "flex-start",
  paddingRight: "16px",
  fontWeight: "500",
  borderRadius: "8px",
  transition: "color 0.2s ease-in-out, background-color 0.2s ease-in-out",

  "&:hover": {
    backgroundColor: "var(--color-opacify-hover)",
  },

  "&:active": {
    backgroundColor: "var(--color-opacify-active)",
  },

  "& i": {
    width: "16px",
    marginRight: "-4px",
    marginLeft: "auto",
    justifyContent: "center",
  },
})

const intentNeutral = css({ color: "var(--color-text-neutral)" })
const intentAction = css({ color: "var(--color-text-action)" })
const intentDanger = css({ color: "var(--color-text-danger)" })
const intentClasses = { neutral: intentNeutral, action: intentAction, danger: intentDanger }

export const option = ({ intent = "neutral" as "neutral" | "action" | "danger" } = {}) =>
  cx(base, optionBase, intentClasses[intent])

export const divider = css({
  width: "100%",
  borderBottom: "1px solid var(--color-stroke-base)",
  margin: "4px 2px",
})

export const overlay = css({
  display: "flex",
  flexDirection: "column",
  padding: "8px",
  gap: "4px",
  background: "rgba(255, 255, 255, 0.88)",
  outline: "1px solid var(--color-stroke-base)",
  borderRadius: "12px",
  boxShadow: "var(--shadow-overlay)",
  backdropFilter: "blur(4px)",
  zIndex: 1000,
})
