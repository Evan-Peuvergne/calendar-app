import { defineConfig, defineTokens, defineTextStyles } from "@pandacss/dev"
import { colors, shadows, textStyles } from "./src/theme/tokens"
import { sizes } from "./src/theme/constants"
import { globalCss } from "./src/theme/global"

type Leaf = string | number
type Tree = { [key: string]: Leaf | Tree }

function withValues(obj: Tree): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(obj).map(([key, val]) => [
      key,
      typeof val === "object" ? withValues(val) : { value: val },
    ])
  )
}

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: defineTokens(withValues({ colors, shadows, sizes }) as never),
      textStyles: defineTextStyles(
        Object.fromEntries(Object.entries(textStyles).map(([k, v]) => [k, { value: v }]))
      ),
    },
  },
  outdir: "styled-system",
  globalCss,
})
