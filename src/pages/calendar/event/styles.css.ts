import { style, globalStyle } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

import { theme } from "../../../tokens.css"

export const time = style({
  display: "block",
  fontSize: 14,
  lineHeight: "20px",
  color: "rgba(15, 15, 15, 0.48)",
})

export const title = style({
  display: "block",
  fontSize: 16,
  lineHeight: "20px",
  fontWeight: 500,
  color: "#246a54",
})

globalStyle(`${title} + ${time}`, {
  marginTop: 4,
})

export const container = recipe({
  base: {
    display: "block",
    position: "relative",
    zIndex: 3,
    padding: 12,
    borderRadius: 12,
    background:
      "radial-gradient(126.03% 93.63% at 8.16% 12.64%, rgba(57, 167, 132, 0.08) 0%, rgba(57, 167, 132, 0.04) 100%), var(--colors-lightlucent-70, rgba(255, 255, 255, 0.78))",
    cursor: "pointer",

    selectors: {
      "&::before, &::after": {
        display: "block",
        position: "absolute",
        zIndex: -1,
        content: '""',
        borderRadius: 12,
      },
      "&::before": {
        inset: "-1px",
        borderRadius: 13,
        background: theme.color.stroke.base,
        boxShadow: theme.shadow.raised,
      },
      "&::after": {
        inset: 0,
        background: `radial-gradient(126.03% 93.63% at 8.16% 12.64%, rgba(57, 167, 132, 0.08) 0%, rgba(57, 167, 132, 0.04) 100%), ${theme.color.fill.base}`,
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
    },
  },
  variants: {
    active: {
      true: {
        selectors: {
          "&::before": {
            inset: "-2px",
            borderRadius: 14,
            background:
              "radial-gradient(126.03% 93.63% at 8.16% 12.64%, rgb(51, 103, 86, 0.8) 0%, rgba(43, 87, 73, 0.4) 100%), var(--colors-lightlucent-70, rgba(255, 255, 255, 0.78))",
          },
        },
      },
    },
  },
})
