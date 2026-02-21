import type { Meta, StoryObj } from "@storybook/react-vite"

import { Tab } from "."
import { IconsList } from "@components/icon/types"

const meta = {
  title: "Tab",
  component: Tab,
  args: {
    children: "My tab",
  },
  argTypes: {
    icon: { options: IconsList, control: { type: "select" } },
  },
} satisfies Meta<typeof Tab>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
