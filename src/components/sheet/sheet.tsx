import { useContext, useEffect, useRef, useState } from "react"

import { SheetContext } from "./context"
import * as Styles from "./styles"

export interface SheetProps {
  children: React.ReactNode
  full?: boolean
}

const NAV_HEIGHT = 104
const PEEK_PX = 12
const spring = { type: "spring", damping: 25, stiffness: 300 } as const

const SheetComponent = (props: SheetProps) => {
  const ctx = useContext(SheetContext)
  const depth = ctx?.depth ?? 0
  const activeHeight = ctx?.activeHeight ?? 0
  const reportHeight = ctx?.reportHeight
  const [ownHeight, setOwnHeight] = useState(0)
  const [ready, setReady] = useState(false)
  const $container = useRef<HTMLDivElement>(null)
  const $scroll = useRef<HTMLDivElement>(null)
  const $sheet = useRef<HTMLDivElement>(null)
  const $content = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (depth > 0 && $container.current) {
      $container.current.scrollTop = 0
    }
  }, [depth])

  useEffect(() => {
    const container = $container.current
    const scroll = $scroll.current
    const sheet = $sheet.current
    const content = $content.current
    if (!container || !scroll || !sheet || !content) return

    const observer = new ResizeObserver(() => {
      const contentHeight = content.scrollHeight
      const sheetHeight = Math.min(
        content.scrollHeight,
        window.innerHeight - NAV_HEIGHT
      )
      const overflow = contentHeight - sheetHeight

      const visibleHeight = Math.min(contentHeight, sheetHeight)
      scroll.style.paddingTop = `${window.innerHeight - visibleHeight}px`

      scroll.style.minHeight =
        overflow > 0
          ? `${parseFloat(scroll.style.paddingTop) + contentHeight}px`
          : ""

      setOwnHeight(visibleHeight)
      reportHeight?.(visibleHeight)
    })
    observer.observe(content)

    const _onScroll = () => {
      const stickyOffset = scroll.offsetTop
      const overflow = container.scrollTop - stickyOffset
      content.style.transform = overflow > 0 ? `translateY(-${overflow}px)` : ""
    }
    container.addEventListener("scroll", _onScroll, { passive: true })

    return () => {
      observer.disconnect()
      container.removeEventListener("scroll", _onScroll)
    }
  }, [reportHeight])

  const darkValue = Math.max(215 - depth * 20, 155)
  const yOffset = depth === 0 ? 0 : ownHeight - activeHeight - depth * PEEK_PX

  return (
    <Styles.Container
      ref={$container}
      $inactive={depth > 0}
      $ready={ready}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={spring}
      onAnimationComplete={() => setReady(true)}
    >
      <Styles.Scroll ref={$scroll}>
        <Styles.Sheet
          ref={$sheet}
          animate={{
            y: yOffset,
            scaleX: 1 - 0.05 * depth,
            background:
              depth === 0
                ? "rgba(255,255,255,0.88)"
                : `rgba(${darkValue},${darkValue},${darkValue},0.88)`,
          }}
          transition={spring}
        >
          <Styles.SheetContent
            ref={$content}
            animate={{ opacity: depth === 0 ? 1 : 0 }}
            transition={spring}
          >
            {props.children}
          </Styles.SheetContent>
        </Styles.Sheet>
      </Styles.Scroll>
    </Styles.Container>
  )
}

export const Sheet = Object.assign(SheetComponent, Styles)
