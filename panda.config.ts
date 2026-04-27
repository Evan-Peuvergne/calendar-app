import { defineConfig } from "@pandacss/dev"
import { globalCss } from "./src/theme/global"
import { tokens, textStyles } from "./src/theme/tokens"

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens,
      textStyles,
    },
  },
  outdir: "styled-system",
  globalCss,
})
