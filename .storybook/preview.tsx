import { withThemeFromJSXProvider } from "@storybook/addon-themes"

import type { Preview } from "@storybook/react-vite"

import { Global } from "../src/global.styles"

export default {
  decorators: [withThemeFromJSXProvider({ GlobalStyles: Global })],
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
} satisfies Preview
