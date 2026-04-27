import { css } from "styled-system/css"

export const base = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  padding: "8px",
  gap: "8px",
  textStyle: "label",
  borderRadius: "12px",
  cursor: "pointer",
  appearance: "none",
})

export const iconBase = css({
  aspectRatio: "1 / 1",
})

export const disabledBase = css({
  cursor: "not-allowed",
})
