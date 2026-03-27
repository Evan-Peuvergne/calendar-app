import { useEffect } from "react"
import type { Meta } from "@storybook/react-vite"
import { Sheet } from "./sheet"
import { useSheetStack } from "./hook"
import { Button } from "@components/button"

type SheetSize = "full" | "small"

const bg = { background: "#f0f0f0", borderRadius: 6 }
const row = {
  display: "flex",
  gap: 12,
  padding: "16px 0",
  borderBottom: "1px solid #eee",
}

const SheetComponent = ({
  id,
  size,
  rootScroll,
}: {
  id?: string
  size?: SheetSize
  rootScroll?: boolean
}) => {
  const { push, closeLast } = useSheetStack()

  const pushSub = () => {
    const newId = crypto.randomUUID()
    push(<SheetComponent id={newId} size={size === "full" ? "small" : "full"} />, newId)
  }

  return (
    <Sheet rootScroll={rootScroll}>
      <Sheet.Header>
        <Sheet.Close onClick={closeLast} />
        <Sheet.Title>Sheet</Sheet.Title>
        {id && (
          <Sheet.Subtitle style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: 0 }}>
            {id}
          </Sheet.Subtitle>
        )}
      </Sheet.Header>
      <Sheet.Body>
        <>
          <Button.Primary onClick={pushSub}>Open sub sheet</Button.Primary>
          {size && (
            <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 4 }}>
              {Array.from({ length: size === "full" ? 12 : 3 }).map((_, i) => (
                <div key={i} style={row}>
                  <div style={{ ...bg, width: 40, height: 40, flexShrink: 0 }} />
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
    const { push, closeLast, closeAll } = useSheetStack()

    const pushSheet = (size: SheetSize) => {
      const id = crypto.randomUUID()
      push(<SheetComponent id={id} size={size} />, id)
    }

    return (
      <div
        style={{
          position: "fixed",
          top: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 12,
          zIndex: 1001,
        }}
      >
        <Button.Primary onClick={() => pushSheet("full")}>Push tall</Button.Primary>
        <Button.Primary onClick={() => pushSheet("small")}>Push short</Button.Primary>
        <Button.Primary onClick={closeLast}>Close last</Button.Primary>
        <Button.Primary onClick={closeAll}>Close all</Button.Primary>
      </div>
    )
  },
}

export const Page = {
  render: () => {
    const { push } = useSheetStack()

    useEffect(() => {
      push(<SheetComponent size="full" />)
    }, [])

    return null
  },
}

export const Banner = {
  render: () => {
    const { push } = useSheetStack()

    useEffect(() => {
      push(<SheetComponent />)
    }, [])

    return null
  },
}

export const Anchored = {
  render: () => {
    const { push } = useSheetStack()

    useEffect(() => {
      push(<SheetComponent rootScroll />)
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
