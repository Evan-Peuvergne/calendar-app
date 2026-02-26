import * as Styles from "./styles"
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
    <Styles.Option intent={props.intent || "neutral"} onClick={props.onClick}>
      {props.children}
      {props.icon && <Icon id={props.icon} />}
    </Styles.Option>
  )
}
