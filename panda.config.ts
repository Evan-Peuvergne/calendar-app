import { defineConfig, defineTokens } from "@pandacss/dev"
import { globalCss } from "./src/theme/global"
import { tokens, textStyles } from "./src/theme/tokens"
import { sizes } from "./src/theme/constants"

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: defineTokens({ ...tokens, sizes }),
      textStyles,
    },
  },
  outdir: "styled-system",
  globalCss,
})
