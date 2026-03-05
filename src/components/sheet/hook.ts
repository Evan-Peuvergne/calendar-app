import { useContext } from "react"

import { SheetStackContext, SheetContext } from "./stack"

export const useSheetStack = () => {
  const stack = useContext(SheetStackContext)

  if (!stack)
    throw new Error("useSheetStack can only be used inside a SheetProvider")

  return { open: stack.open, close: stack.close }
}

export const useSheet = () => {
  const sheet = useContext(SheetContext)

  if (!sheet) throw new Error("useSheet can only be used inside a Sheet")

  return { push: sheet.push, close: sheet.close }
}
