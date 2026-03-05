import { createContext, useEffect } from "react"
import { useState, useCallback } from "react"
import { createPortal } from "react-dom"

import type { SheetStackItem, SheetElement } from "./types"

interface SheetStackContextValue {
  open: (element: SheetElement | SheetElement[]) => void
  close: () => void
}

interface SheetContextValue {
  push: (element: SheetElement) => void
  close: () => void
}

const makeItem = (element: SheetElement): SheetStackItem => ({
  id: crypto.randomUUID(),
  element,
})

export const SheetStackContext = createContext<SheetStackContextValue | null>(null)
export const SheetContext = createContext<SheetContextValue | null>(null)

const SheetItem = ({
  id,
  element,
  remove,
  push,
}: SheetStackItem & {
  remove: (id: string) => void
  push: (element: SheetElement) => void
}) => {
  const close = useCallback(() => remove(id), [id, remove])
  return <SheetContext value={{ close, push }}>{element}</SheetContext>
}

export const SheetProvider = ({ children }: React.PropsWithChildren) => {
  const [stack, setStack] = useState<SheetStackItem[]>([])

  const open = useCallback(
    (element: SheetElement | SheetElement[]) =>
      setStack(Array.isArray(element) ? element.map(makeItem) : [makeItem(element)]),
    []
  )

  const close = useCallback(() => setStack([]), [])

  const push = useCallback(
    (element: SheetElement) => setStack((prev) => [...prev, makeItem(element)]),
    []
  )

  const remove = useCallback(
    (id: string) => setStack((prev) => prev.filter((s) => s.id !== id)),
    []
  )

  return (
    <SheetStackContext.Provider value={{ open, close }}>
      {createPortal(
        stack.map((s) => <SheetItem key={s.id} {...s} remove={remove} push={push} />),
        document.getElementById("portal")!
      )}
      {children}
    </SheetStackContext.Provider>
  )
}
