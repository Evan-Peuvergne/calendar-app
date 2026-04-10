import { useContext, useEffect, useRef, useState } from "react"

import { SheetContext } from "./context"
import * as Styles from "./styles"

export interface SheetProps {
  children: React.ReactNode
  full?: boolean
  rootScroll?: boolean
  allowClickOutside?: boolean
  style?: React.CSSProperties
  className?: string
}

const NAV_HEIGHT = 104
const PEEK_PX = 12
const spring = { type: "spring", damping: 28, stiffness: 300 } as const

const SheetComponent = (props: SheetProps) => {
  const { rootScroll, style, className } = props
  const ctx = useContext(SheetContext)
  const depth = ctx?.depth ?? 0
  const stackSize = ctx?.stackSize ?? 1
  const activeHeight = ctx?.activeHeight ?? 0
  const reportHeight = ctx?.reportHeight
  const reportRootScroll = ctx?.reportRootScroll

  useEffect(() => {
    reportRootScroll?.(!!rootScroll)
  }, [reportRootScroll, rootScroll])
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
    const content = $content.current
    if (!container || !content) return
    if (!rootScroll && !scroll) return

    const observer = new ResizeObserver(() => {
      const contentHeight = content.scrollHeight
      const maxHeight =
        window.innerHeight -
        NAV_HEIGHT -
        (depth === 0 ? (stackSize - 1) * PEEK_PX : 0)
      const visibleHeight = rootScroll
        ? contentHeight
        : Math.min(contentHeight, maxHeight)

      if (!rootScroll && scroll) {
        const overflow = contentHeight - visibleHeight
        scroll.style.paddingTop = `${window.innerHeight - visibleHeight}px`
        scroll.style.minHeight =
          overflow > 0
            ? `${parseFloat(scroll.style.paddingTop) + contentHeight}px`
            : ""
      }

      setOwnHeight(visibleHeight)
      reportHeight?.(visibleHeight)
    })
    observer.observe(content)

    if (!rootScroll && scroll) {
      const _onScroll = () => {
        const stickyOffset = scroll.offsetTop
        const overflow = container.scrollTop - stickyOffset
        content.style.transform =
          overflow > 0 ? `translateY(-${overflow}px)` : ""
      }
      container.addEventListener("scroll", _onScroll, { passive: true })
      return () => {
        observer.disconnect()
        container.removeEventListener("scroll", _onScroll)
      }
    }

    return () => observer.disconnect()
  }, [rootScroll, reportHeight, depth, stackSize])

  const yOffset = depth === 0 ? 0 : ownHeight - activeHeight - depth * PEEK_PX

  const sheet = (
    <Styles.Sheet
      ref={$sheet}
      data-sheet-panel
      $depth={depth}
      $rootScroll={rootScroll}
      animate={{ y: yOffset, scaleX: 1 - 0.032 * depth }}
      transition={spring}
      style={style}
      className={className}
    >
      <Styles.SheetContent
        ref={$content}
        animate={{ opacity: depth === 0 ? 1 : 0 }}
        transition={spring}
      >
        {props.children}
      </Styles.SheetContent>
    </Styles.Sheet>
  )

  return (
    <Styles.Container
      ref={$container}
      $inactive={depth > 0}
      $ready={ready}
      $rootScroll={rootScroll}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={spring}
      onAnimationComplete={() => setReady(true)}
    >
      {rootScroll ? (
        sheet
      ) : (
        <Styles.Scroll ref={$scroll}>{sheet}</Styles.Scroll>
      )}
    </Styles.Container>
  )
}

export const Sheet = Object.assign(SheetComponent, Styles)
