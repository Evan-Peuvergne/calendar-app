import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  preflight: false,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {},
  },
  outdir: "styled-system",
})
