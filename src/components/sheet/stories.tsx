import { useEffect } from "react"
import type { Meta } from "@storybook/react-vite"
import { Sheet } from "./sheet"
import { useSheet, useSheetStack } from "./hook"
import { Button } from "@components/button"

type SheetVariant = "page" | "banner"

const SheetComponent = ({ variant = "page" }: { variant?: SheetVariant }) => {
  const { push, close } = useSheet()

  return (
    <Sheet>
      <Sheet.Header>
        <Sheet.Close onClick={close} />
        <Sheet.Title>Career Path Senior Brand designer</Sheet.Title>
        <Sheet.Subtitle>Last update 2 days ago</Sheet.Subtitle>
      </Sheet.Header>
      <Sheet.Body>
        <>
          <Button.Primary onClick={() => push(<SheetComponent />)}>
            Open sub sheet
          </Button.Primary>
          {variant === "page" && (
            <>
              <div style={{ height: 2000 }} />
            </>
          )}
        </>
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

export const Page = {
  render: () => {
    const { open } = useSheetStack()

    useEffect(() => {
      open(<SheetComponent variant="page" />)
    }, [])

    return null
  },
}

export const Banner = {
  render: () => {
    const { open } = useSheetStack()

    useEffect(() => {
      open(<SheetComponent variant="banner" />)
    }, [])

    return null
  },
}
