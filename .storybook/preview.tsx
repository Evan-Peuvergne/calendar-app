import { withThemeFromJSXProvider } from "@storybook/addon-themes"

import type { Preview } from "@storybook/react-vite"

import { Global } from "../src/global.styles"
import { SheetProvider } from "../src/components/sheet/stack"

export default {
  decorators: [
    withThemeFromJSXProvider({ GlobalStyles: Global }),
    (Story) => (
      <SheetProvider>
        <Story />
      </SheetProvider>
    ),
  ],
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
