import { withThemeFromJSXProvider } from "@storybook/addon-themes"

import type { Preview } from "@storybook/react-vite"

import "../src/panda.css"
import { SheetProvider } from "../src/components/sheet/stack"

export default {
  decorators: [
    withThemeFromJSXProvider({}),
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
