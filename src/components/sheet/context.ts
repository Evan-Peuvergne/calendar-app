import { createContext } from "react"

export interface SheetStackContextValue {
  push: (element: React.ReactElement, id?: string) => void
  close: (id: string) => void
  closeAll: () => void
  closeLast: () => void
}

export interface SheetContextValue {
  depth: number
  stackSize: number
  activeHeight: number
  reportHeight: (height: number) => void
}

export const SheetStackContext = createContext<SheetStackContextValue | null>(null)
export const SheetContext = createContext<SheetContextValue | null>(null)
