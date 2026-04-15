import React, { forwardRef, useState } from "react"
import cn from "classnames"
import { useFloating, useDismiss } from "@floating-ui/react"
import { offset, flip, shift } from "@floating-ui/react"
import { FloatingPortal } from "@floating-ui/react"

import * as Styles from "./styles.css"
import { Option } from "./option"

const Overlay = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(Styles.overlay, className)} {...props} />
  )
)

const Divider = () => <hr className={Styles.divider} />

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
  defaultOpen?: boolean
}

const DropdownComponent = (props: DropdownProps) => {
  const [open, setOpen] = useState(props.defaultOpen ?? false)

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "bottom-start",
    middleware: [
      offset(({ placement }) => ({
        mainAxis: 8,
        crossAxis: placement.endsWith("-start")
          ? -8
          : placement.endsWith("-end")
            ? 8
            : 0,
      })),
      flip(),
      shift({ padding: 8 }),
    ],
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

export const Dropdown = Object.assign(DropdownComponent, { Overlay, Divider, Option })
