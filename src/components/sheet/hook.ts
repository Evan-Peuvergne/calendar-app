import { useContext } from "react"

import { SheetStack } from "./stack"

export const useSheet = () => {
  const ctx = useContext(SheetStack)
  if (!ctx)
    throw new Error("useSheet can only be used inside a SheetStack Provider")

  const { open } = ctx

  return {
    open,
  }
}
