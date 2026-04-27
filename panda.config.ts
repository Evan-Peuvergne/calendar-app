import { defineConfig } from "@pandacss/dev"
import { globalCss } from "./src/theme/global"

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: { extend: {} },
  outdir: "styled-system",
  globalCss,
})
