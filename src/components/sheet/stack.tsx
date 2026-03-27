import { useState, useCallback, useEffect } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence } from "motion/react"

import { SheetStackContext, SheetContext } from "./context"

import type { SheetStackItem, SheetElement } from "./types"

const makeItem = (element: SheetElement, id?: string): SheetStackItem => ({
  id: id ?? crypto.randomUUID(),
  element,
})

const SheetItem = ({
  id,
  element,
  depth,
  activeHeight,
  reportHeight,
}: SheetStackItem & {
  depth: number
  activeHeight: number
  reportHeight: (id: string, height: number) => void
}) => {
  const report = useCallback((h: number) => reportHeight(id, h), [id, reportHeight])
  return (
    <SheetContext value={{ depth, activeHeight, reportHeight: report }}>
      {element}
    </SheetContext>
  )
}

export const SheetProvider = ({ children }: React.PropsWithChildren) => {
  const [stack, setStack] = useState<SheetStackItem[]>([])
  const [heights, setHeights] = useState<Record<string, number>>({})

  const reportHeight = useCallback((id: string, height: number) => {
    setHeights((prev) => (prev[id] === height ? prev : { ...prev, [id]: height }))
  }, [])

  const push = useCallback(
    (element: React.ReactElement, id?: string) =>
      setStack((prev) => [...prev, makeItem(element as SheetElement, id)]),
    []
  )

  const close = useCallback(
    (id: string) => setStack((prev) => prev.filter((s) => s.id !== id)),
    []
  )

  const closeAll = useCallback(() => setStack([]), [])

  const closeLast = useCallback(
    () => setStack((prev) => prev.slice(0, -1)),
    []
  )

  const shouldLockScroll = stack.some((s) => !(s.element.props as any).rootScroll)

  useEffect(() => {
    if (!shouldLockScroll) return

    const scrollY = window.scrollY
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    document.documentElement.style.setProperty("scrollbar-gutter", "auto")
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = `${scrollbarWidth}px`
    document.body.style.position = "fixed"
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = "100%"

    return () => {
      document.documentElement.style.removeProperty("scrollbar-gutter")
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      window.scrollTo(0, scrollY)
    }
  }, [shouldLockScroll])

  return (
    <SheetStackContext.Provider value={{ push, close, closeAll, closeLast }}>
      {createPortal(
        <AnimatePresence>
          {stack.map((s, index) => (
            <SheetItem
              key={s.id}
              {...s}
              depth={stack.length - 1 - index}
              activeHeight={heights[stack[stack.length - 1].id] ?? 0}
              reportHeight={reportHeight}
            />
          ))}
        </AnimatePresence>,
        document.getElementById("portal")!
      )}
      {children}
    </SheetStackContext.Provider>
  )
}
