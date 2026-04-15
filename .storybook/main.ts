import type { StorybookConfig } from "@storybook/react-vite"
import svgr from "vite-plugin-svgr"
import tsconfigPaths from "vite-tsconfig-paths"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"

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
      vanillaExtractPlugin(),
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
