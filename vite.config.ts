import { defineConfig } from "vite"
import { fileURLToPath, URL } from "node:url"

import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"

function objectMap(object, mapFn) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapFn(object[key])
    return result
  }, {})
}

const ALIAS = {
  "@pages": "./src/pages",
  "@components": "./src/components",
  "@layouts": "./src/layouts",
  "@shared": "./src/shared",
  "@targeting": "./src/targeting",
  "@utils": "./src/utils/index",
  "@data": "./data",
}

export default defineConfig({
  base: "",
  plugins: [
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
  ssr: { noExternal: ["styled-components"] },
  resolve: {
    alias: objectMap(ALIAS, function (v) {
      return fileURLToPath(new URL(v, import.meta.url))
    }),
  },
})
