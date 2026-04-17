import type { StorybookConfig } from "@storybook/react-vite"
import svgr from "vite-plugin-svgr"
import tsconfigPaths from "vite-tsconfig-paths"
import wyw from "@wyw-in-js/vite"

const config: StorybookConfig = {
  stories: ["../src/**/stories.tsx", "../src/**/*.stories.tsx"],

  addons: [
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },

  async viteFinal(config) {
    config.plugins = config.plugins ?? []
    config.plugins.push(
      tsconfigPaths(),
      wyw({
        include: ["../src/**/*.{ts,tsx}"],
        babelOptions: {
          presets: ["@babel/preset-typescript", "@babel/preset-react"],
        },
      }),
      svgr({
        svgrOptions: {
          replaceAttrValues: { "#383838": "currentColor" },
          dimensions: false,
        },
      })
    )
    return config
  },
}
export default config
