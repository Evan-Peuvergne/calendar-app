import { createPortal } from "react-dom"
import type { Meta } from "@storybook/react-vite"
import { Sheet } from "./sheet"
import { useSheet, useSheetStack } from "./hook"
import { Button } from "@components/button"

const SheetComponent = () => {
  const { push, close } = useSheet()

  return (
    <Sheet>
      <Sheet.Header>
        <Sheet.Close onClick={close} />
        <Sheet.Title>Career Path Senior Brand designer</Sheet.Title>
        <Sheet.Subtitle>Last update 2 days ago</Sheet.Subtitle>
      </Sheet.Header>
      <Sheet.Body>
        <Button.Primary onClick={() => push(<SheetComponent />)}>
          Open sub sheet
        </Button.Primary>
      </Sheet.Body>
    </Sheet>
  )
}

export default {
  title: "Sheet",
  args: {},
  argTypes: {},
} satisfies Meta

export const Default = {
  render: () => {
    const { open } = useSheetStack()
    return (
      <Button.Primary onClick={() => open(<SheetComponent />)}>
        Open sheet
      </Button.Primary>
    )
  },
}

export const Design = {
  render: () =>
    createPortal(
      <Sheet>
        <Sheet.Header>
          <Sheet.Close />
          <Sheet.Title>Career Path Senior Brand designer</Sheet.Title>
          <Sheet.Subtitle>Last update 2 days ago</Sheet.Subtitle>
        </Sheet.Header>
        <Sheet.Body style={{ height: 2000 }}>Hello world</Sheet.Body>
      </Sheet>,
      document.getElementById("portal")!
    ),
}
