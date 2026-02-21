import * as Styles from "./styles"
import { Icon } from "@components/icon"

import type { Icons } from "@components/icon"

export interface TabProps {
  children: React.ReactNode
  icon?: Icons | [Icons, Icons]
  active?: boolean
}

export const Tab = (props: TabProps) => {
  const resolvedIcon = Array.isArray(props.icon)
    ? props.active
      ? props.icon[1]
      : props.icon[0]
    : props.icon

  return (
    <Styles.Container active={props.active!!}>
      {resolvedIcon && <Icon id={resolvedIcon} />}
      {props.children}
    </Styles.Container>
  )
}
