import type { Meta, StoryObj } from "@storybook/react-vite"

import { Avatar } from "./"

export default {
  title: "Avatar",
  component: Avatar,
  args: {
    children: "EP",
  },
  argTypes: {
    src: { control: "text" },
    children: { control: "text" },
  },
} satisfies Meta<typeof Avatar>

type Story = StoryObj<typeof Avatar>

export const Initials: Story = {}

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/64",
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ fontSize: 12 }}><Avatar {...args} /></span>
      <span style={{ fontSize: 16 }}><Avatar {...args} /></span>
      <span style={{ fontSize: 24 }}><Avatar {...args} /></span>
      <span style={{ fontSize: 32 }}><Avatar {...args} /></span>
    </div>
  ),
}
