import { defineConfig } from "@pandacss/dev"

const FONT_STACK =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

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
    background: "hsla(0, 0%, 97%, 1)",
  },
  label: {
    font: `500 16px/24px ${FONT_STACK}`,
  },
}
