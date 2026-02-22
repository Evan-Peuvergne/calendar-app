import type { Meta } from "@storybook/react-vite"
import * as Button from "./"

export default {
  title: "Button",
  args: {
    children: "Button",
    intent: "neutral",
    disabled: false,
    active: false,
  },
  argTypes: {
    children: { control: "text" },
    intent: {
      control: "select",
      options: ["action", "danger", "neutral"],
    },
  },
} satisfies Meta

export const Primary = {
  render: (args: any) => <Button.Primary {...args} />,
}
