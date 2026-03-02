import type { Meta } from "@storybook/react-vite"
import { Sheet } from "./sheet"
import { useSheet } from "./hook"
import { Button } from "@components/button"

const sheet = (
  <Sheet>
    <Sheet.Header>
      <Sheet.Close />
      <Sheet.Title>Career Path Senior Brand designer</Sheet.Title>
      <Sheet.Subtitle>Last update 2 days ago</Sheet.Subtitle>
    </Sheet.Header>
  </Sheet>
)

export default {
  title: "Sheet",
  args: {},
  argTypes: {},
} satisfies Meta

export const Default = {
  render: () => {
    const { open } = useSheet()
    return (
      <Button.Primary onClick={() => open(sheet, "story-sheet")}>
        Open sheet
      </Button.Primary>
    )
  },
}

export const Design = {
  render: () => sheet,
}
