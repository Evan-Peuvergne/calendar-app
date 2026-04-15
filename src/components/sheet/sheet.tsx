import { useContext, useEffect, useRef, useState } from "react"
import cn from "classnames"
import { motion } from "motion/react"

import { SheetContext } from "./context"
import * as Styles from "./styles.css"

import { SecondaryIcon } from "@components/button"

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

// Sub-components

const Title = ({ children }: { children: React.ReactNode }) => (
  <h1 className={Styles.title}>{children}</h1>
)

const Subtitle = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <p className={Styles.subtitle} style={style}>{children}</p>
)

const Close = ({ onClick, style }: { onClick?: () => void; style?: React.CSSProperties }) => (
  <SecondaryIcon
    icon="close"
    onClick={onClick}
    className={Styles.closeInHeader}
    style={style}
  />
)

const Header = ({ children }: { children: React.ReactNode }) => (
  <header className={Styles.header}>{children}</header>
)

const Body = ({ children }: { children: React.ReactNode }) => (
  <div className={Styles.body}>{children}</div>
)

// Main component

const SheetComponent = (props: SheetProps) => {
  const { rootScroll, style } = props
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

    const sheet = $sheet.current!
    const observer = new ResizeObserver(() => {
      const contentHeight = content.scrollHeight
      const sheetHeight = Math.max(sheet.offsetHeight, contentHeight)
      const maxHeight =
        window.innerHeight -
        NAV_HEIGHT -
        (depth === 0 ? (stackSize - 1) * PEEK_PX : 0)
      const visibleHeight = rootScroll
        ? sheetHeight
        : Math.min(sheetHeight, maxHeight)

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
    observer.observe(sheet)

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
    <motion.div
      ref={$sheet}
      data-sheet-panel
      className={Styles.sheet({ elevated: depth > 0, rootScroll: !!rootScroll })}
      animate={{ y: yOffset, scaleX: 1 - 0.032 * depth }}
      transition={spring}
      style={style}
    >
      <motion.div
        ref={$content}
        className={Styles.sheetContent}
        animate={{ opacity: depth === 0 ? 1 : 0 }}
        transition={spring}
      >
        {props.children}
      </motion.div>
    </motion.div>
  )

  return (
    <motion.div
      ref={$container}
      className={cn(
        Styles.container,
        depth > 0 && Styles.containerInactive,
        (depth > 0 || !ready || !!rootScroll) && Styles.containerHidden,
        !!rootScroll && Styles.containerRootScroll,
      )}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={spring}
      onAnimationComplete={() => setReady(true)}
    >
      {rootScroll ? (
        sheet
      ) : (
        <div ref={$scroll} className={Styles.scroll}>{sheet}</div>
      )}
    </motion.div>
  )
}

export const Sheet = Object.assign(SheetComponent, {
  Title,
  Subtitle,
  Close,
  Header,
  Body,
})
