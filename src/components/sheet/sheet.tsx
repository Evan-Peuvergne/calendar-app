import { useContext, useEffect, useRef } from "react"

import { SheetContext } from "./context"
import * as Styles from "./styles"

export interface SheetProps {
  children: React.ReactNode
  full?: boolean
}

const NAV_HEIGHT = 104

const SheetComponent = (props: SheetProps) => {
  const depth = useContext(SheetContext)?.depth ?? 0
  const $container = useRef<HTMLDivElement>(null)
  const $scroll = useRef<HTMLDivElement>(null)
  const $sheet = useRef<HTMLDivElement>(null)
  const $content = useRef<HTMLDivElement>(null)

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
  }, [])

  return (
    <Styles.Container ref={$container} $inactive={depth > 0}>
      <Styles.Scroll ref={$scroll}>
        <Styles.Sheet ref={$sheet}>
          <Styles.SheetContent ref={$content}>
            {props.children}
          </Styles.SheetContent>
        </Styles.Sheet>
      </Styles.Scroll>
    </Styles.Container>
  )
}

export const Sheet = Object.assign(SheetComponent, Styles)
