import type { Meta } from "@storybook/react-vite"
import { IconsList } from "@components/icon/types"

export default {
  title: "IconButton",
  args: {
    icon: "home",
    intent: "neutral",
    disabled: false,
    active: false,
  },
  argTypes: {
    icon: {
      control: "select",
      options: IconsList,
    },
    intent: {
      control: "select",
      options: ["action", "danger", "neutral"],
    },
  },
} satisfies Meta

export { PrimaryIcon } from "."
