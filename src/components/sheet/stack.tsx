import { createContext } from "react"
import { useState, useCallback } from "react"
import { createPortal } from "react-dom"
import { Fragment } from "react"

import { Sheet } from "./sheet"

type SheetElement = React.ReactElement<any, typeof Sheet>

interface SheetStackItem {
  id: string
  element: SheetElement
}

interface SheetStackContextValue {
  stack: SheetStackItem[]
  open: (element: SheetElement, id: string) => void
}

export const SheetStack = createContext<SheetStackContextValue | null>(null)

export const SheetProvider = ({ children }: React.PropsWithChildren) => {
  const [stack, setStack] = useState<SheetStackItem[]>([])

  const open = useCallback(
    (element: SheetElement, id: string) =>
      setStack((prev) => [...prev, { id, element }]),
    []
  )

  return (
    <SheetStack.Provider value={{ stack, open }}>
      {createPortal(
        stack.map((s) => <Fragment key={s.id}>{s.element}</Fragment>),
        document.getElementById("portal")!
      )}
      {children}
    </SheetStack.Provider>
  )
}
