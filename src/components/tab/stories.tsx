import type { Meta, StoryObj } from "@storybook/react-vite"

import { Tab } from "."

const meta = {
  title: "Tab",
  component: Tab,
  args: {
    children: "My tab",
  },
} satisfies Meta<typeof Tab>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
