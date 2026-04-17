import { defineConfig } from "vite"
import { fileURLToPath, URL } from "node:url"

import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import wyw from "@wyw-in-js/vite"
import tsconfigPaths from "vite-tsconfig-paths"

function objectMap(object, mapFn) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapFn(object[key])
    return result
  }, {})
}

const ALIAS = {
  "@app": "./src/app",
  "@common": "./src/common",
  "@components": "./src/components",
  "@layouts": "./src/layouts",
  "@targeting": "./src/targeting",
  "@tokens": "./src/tokens/index",
  "@utils/": "./src/utils/",
  "@utils": "./src/utils/index",
  "@data": "./data",
}

export default defineConfig({
  base: "",
  plugins: [
    tsconfigPaths(),
    wyw({
      include: ["./src/**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
    }),
    svgr({
      svgrOptions: {
        replaceAttrValues: {
          "#383838": "currentColor",
        },
        dimensions: false,
      },
    }),
    react(),
  ],
  server: {
    open: false,
    port: 3000,
  },
  resolve: {
    alias: objectMap(ALIAS, function (v) {
      return fileURLToPath(new URL(v, import.meta.url))
    }),
  },
})
