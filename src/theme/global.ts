import { defineConfig } from "@pandacss/dev"

const FONT_STACK =
  '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

export const globalCss: NonNullable<
  ReturnType<typeof defineConfig>["globalCss"]
> = {
  "#portal": {
    position: "absolute",
    top: "0",
    width: "100%",
    zIndex: "999",
  },
  button: {
    background: "none",
  },
  "html, body": {
    fontFamily: FONT_STACK,
    fontSize: "16px",
    scrollbarGutter: "stable",
  },
  body: {
    background: "fill.background",
  },
  label: {
    font: `500 16px/24px ${FONT_STACK}`,
  },
}
