import { useState, useCallback, useEffect } from "react"
import { createPortal } from "react-dom"

import { SheetStackContext, SheetContext } from "./context"

import type { SheetStackItem, SheetElement } from "./types"

const makeItem = (element: SheetElement): SheetStackItem => ({
  id: crypto.randomUUID(),
  element,
})

const SheetItem = ({
  id,
  element,
  depth,
  remove,
  push,
}: SheetStackItem & {
  depth: number
  remove: (id: string) => void
  push: (element: React.ReactElement) => void
}) => {
  const close = useCallback(() => remove(id), [id, remove])
  return <SheetContext value={{ close, push, depth }}>{element}</SheetContext>
}

export const SheetProvider = ({ children }: React.PropsWithChildren) => {
  const [stack, setStack] = useState<SheetStackItem[]>([])

  const open = useCallback(
    (element: React.ReactElement | React.ReactElement[]) =>
      setStack(
        Array.isArray(element)
          ? element.map((e) => makeItem(e as SheetElement))
          : [makeItem(element as SheetElement)]
      ),
    []
  )

  const close = useCallback(() => setStack([]), [])

  const push = useCallback(
    (element: React.ReactElement) =>
      setStack((prev) => [...prev, makeItem(element as SheetElement)]),
    []
  )

  const remove = useCallback(
    (id: string) => setStack((prev) => prev.filter((s) => s.id !== id)),
    []
  )

  const hasSheets = stack.length > 0

  useEffect(() => {
    if (!hasSheets) return

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
  }, [hasSheets])

  return (
    <SheetStackContext.Provider value={{ open, close }}>
      {createPortal(
        stack.map((s, index) => (
          <SheetItem
            key={s.id}
            {...s}
            depth={stack.length - 1 - index}
            remove={remove}
            push={push}
          />
        )),
        document.getElementById("portal")!
      )}
      {children}
    </SheetStackContext.Provider>
  )
}
