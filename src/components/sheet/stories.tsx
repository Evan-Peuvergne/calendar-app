import { useEffect } from "react"
import type { Meta } from "@storybook/react-vite"
import { Sheet } from "./sheet"
import { useSheetStack } from "./hook"
import { Button } from "@components/button"

type SheetVariant = "page" | "banner"

const bg = { background: "#f0f0f0", borderRadius: 6 }
const row = {
  display: "flex",
  gap: 12,
  padding: "16px 0",
  borderBottom: "1px solid #eee",
}

const SheetComponent = ({ variant = "page", rootScroll }: { variant?: SheetVariant; rootScroll?: boolean }) => {
  const { push, closeLast } = useSheetStack()

  return (
    <Sheet rootScroll={rootScroll}>
      <Sheet.Header>
        <Sheet.Close onClick={closeLast} />
        <Sheet.Title>Career Path Senior Brand designer</Sheet.Title>
        <Sheet.Subtitle>Last update 2 days ago</Sheet.Subtitle>
      </Sheet.Header>
      <Sheet.Body>
        <>
          <Button.Primary onClick={() => push(<SheetComponent />)}>
            Open sub sheet
          </Button.Primary>
          {variant === "page" && (
            <div
              style={{
                marginTop: 24,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} style={row}>
                  <div
                    style={{ ...bg, width: 40, height: 40, flexShrink: 0 }}
                  />
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ ...bg, height: 12, width: "60%" }} />
                    <div style={{ ...bg, height: 10, width: "40%" }} />
                  </div>
                </div>
              ))}
            </div>
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
    const { push } = useSheetStack()
    return (
      <Button.Primary onClick={() => push(<SheetComponent />)}>
        Open sheet
      </Button.Primary>
    )
  },
}

export const Page = {
  render: () => {
    const { push } = useSheetStack()

    useEffect(() => {
      push(<SheetComponent variant="page" />)
    }, [])

    return null
  },
}

export const Banner = {
  render: () => {
    const { push } = useSheetStack()

    useEffect(() => {
      push(<SheetComponent variant="banner" />)
    }, [])

    return null
  },
}

export const Anchored = {
  render: () => {
    const { push } = useSheetStack()

    useEffect(() => {
      push(<SheetComponent variant="banner" rootScroll />)
    }, [])

    return (
      <div style={{ padding: "40px 60px", maxWidth: 800, lineHeight: 1.7, color: "#333" }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <p key={i} style={{ marginBottom: 24 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        ))}
      </div>
    )
  },
}
