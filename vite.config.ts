import { defineConfig } from "vite"
import { fileURLToPath, URL } from "node:url"

import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
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
  "@tokens": "./src/tokens/index.css",
  "@utils/": "./src/utils/",
  "@utils": "./src/utils/index",
  "@data": "./data",
}

export default defineConfig({
  base: "",
  plugins: [
    tsconfigPaths(),
    vanillaExtractPlugin(),
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
