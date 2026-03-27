import { useContext } from "react"

import { SheetStackContext } from "./context"

export const useSheetStack = () => {
  const stack = useContext(SheetStackContext)

  if (!stack)
    throw new Error("useSheetStack can only be used inside a SheetProvider")

  return { push: stack.push, close: stack.close, closeAll: stack.closeAll, closeLast: stack.closeLast }
}
