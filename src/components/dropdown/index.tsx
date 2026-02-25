import React, { useState } from "react"
import { useFloating, FloatingPortal, useDismiss, offset, flip, shift } from "@floating-ui/react"

import type { AbstractButtonProps } from "@components/button/types"

type ButtonRenderProp = (
  state: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
    React.Ref<Element>,
  ]
) => React.ReactNode
type ButtonElement = React.ReactElement<AbstractButtonProps>

type OverlayRenderProp = (
  ref: React.Ref<Element>,
  style: React.CSSProperties,
  close: () => void
) => React.ReactNode
type OverlayElement = React.ReactElement<{ style?: React.CSSProperties }>

export interface DropdownProps {
  button: ButtonRenderProp | ButtonElement
  children: OverlayRenderProp | OverlayElement
}

export const Dropdown = (props: DropdownProps) => {
  const [open, setOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "bottom-start",
    middleware: [offset(8), flip(), shift({ padding: 8 })],
  })

  useDismiss(context)

  const close = () => setOpen(false)

  const trigger =
    typeof props.button === "function"
      ? props.button([open, setOpen, refs.setReference])
      : React.cloneElement(props.button as React.ReactElement<any>, {
          ref: refs.setReference,
          active: open,
          onClick: () => setOpen((o) => !o),
        })

  const overlay =
    typeof props.children === "function"
      ? props.children(refs.setFloating, floatingStyles, close)
      : React.cloneElement(props.children as React.ReactElement<any>, {
          ref: refs.setFloating,
          style: floatingStyles,
          onClick: close,
        })

  return (
    <>
      {trigger}
      {open && <FloatingPortal>{overlay}</FloatingPortal>}
    </>
  )
}
