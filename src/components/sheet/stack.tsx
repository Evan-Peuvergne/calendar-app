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
  stackSize,
  activeHeight,
  reportHeight,
  reportRootScroll,
}: SheetStackItem & {
  depth: number
  stackSize: number
  activeHeight: number
  reportHeight: (id: string, height: number) => void
  reportRootScroll: (id: string, rootScroll: boolean) => void
}) => {
  const report = useCallback((h: number) => reportHeight(id, h), [id, reportHeight])
  const reportRoot = useCallback((v: boolean) => reportRootScroll(id, v), [id, reportRootScroll])
  return (
    <SheetContext value={{ depth, stackSize, activeHeight, reportHeight: report, reportRootScroll: reportRoot }}>
      {element}
    </SheetContext>
  )
}

export const SheetProvider = ({ children }: React.PropsWithChildren) => {
  const [stack, setStack] = useState<SheetStackItem[]>([])
  const [heights, setHeights] = useState<Record<string, number>>({})
  const [rootScrollMap, setRootScrollMap] = useState<Record<string, boolean>>({})

  const reportHeight = useCallback((id: string, height: number) => {
    setHeights((prev) => (prev[id] === height ? prev : { ...prev, [id]: height }))
  }, [])

  const reportRootScroll = useCallback((id: string, rootScroll: boolean) => {
    setRootScrollMap((prev) => (prev[id] === rootScroll ? prev : { ...prev, [id]: rootScroll }))
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

  const getCurrent = useCallback(
    () => stack[stack.length - 1]?.id ?? null,
    [stack]
  )

  const replaceCurrent = useCallback(
    (element: React.ReactElement, id?: string) =>
      setStack((prev) => [...prev.slice(0, -1), makeItem(element as SheetElement, id)]),
    []
  )

  const topItem = stack[stack.length - 1]
  const allowClickOutside = (topItem?.element.props as any)?.allowClickOutside ?? false

  useEffect(() => {
    if (stack.length === 0 || allowClickOutside) return
    const handler = (e: MouseEvent) => {
      const target = e.target as Node
      const panels = document.querySelectorAll("[data-sheet-panel]")
      const isInside = Array.from(panels).some((p) => p.contains(target))
      if (!isInside) closeAll()
    }
    window.addEventListener("click", handler, true)
    return () => window.removeEventListener("click", handler, true)
  }, [stack.length, allowClickOutside, closeAll])

  const shouldLockScroll = stack.some((s) => !rootScrollMap[s.id])

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
    <SheetStackContext.Provider value={{ push, close, closeAll, closeLast, getCurrent, replaceCurrent }}>
      {createPortal(
        <AnimatePresence>
          {stack.map((s, index) => (
            <SheetItem
              key={s.id}
              {...s}
              depth={stack.length - 1 - index}
              stackSize={stack.length}
              activeHeight={heights[stack[stack.length - 1].id] ?? 0}
              reportHeight={reportHeight}
              reportRootScroll={reportRootScroll}
            />
          ))}
        </AnimatePresence>,
        document.getElementById("portal")!
      )}
      {children}
    </SheetStackContext.Provider>
  )
}
