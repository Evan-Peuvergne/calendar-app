import { option } from "./styles"
import { Icon } from "@components/icon"

import type { ButtonIntent } from "@components/button/types"
import type { Icons } from "@components/icon"

export interface DropdownOptionProps {
  children: React.ReactNode
  onClick?: () => void
  intent?: ButtonIntent
  icon?: Icons
}

export const Option = (props: DropdownOptionProps) => {
  return (
    <button className={option({ intent: props.intent || "neutral" })} onClick={props.onClick}>
      {props.children}
      {props.icon && <Icon id={props.icon} />}
    </button>
  )
}
