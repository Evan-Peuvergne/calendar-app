import { createContext } from "react"

export interface SheetStackContextValue {
  open: (element: React.ReactElement | React.ReactElement[]) => void
  close: () => void
}

export interface SheetContextValue {
  push: (element: React.ReactElement) => void
  close: () => void
  depth: number
}

export const SheetStackContext = createContext<SheetStackContextValue | null>(null)
export const SheetContext = createContext<SheetContextValue | null>(null)
