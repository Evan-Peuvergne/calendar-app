import { useLocation } from "react-router"

import * as Styles from "./styles"
import { Icon } from "@components/icon"

import type { Icons } from "@components/icon"

export interface TabProps {
  children: React.ReactNode
  icon?: Icons | [Icons, Icons]
  to?: string
  active?: boolean
}

export const Tab = (props: TabProps) => {
  const location = useLocation()
  const isActive = props.to ? location.pathname === props.to : (props.active ?? false)

  const resolvedIcon = Array.isArray(props.icon)
    ? isActive
      ? props.icon[1]
      : props.icon[0]
    : props.icon

  if (props.to) {
    return (
      <Styles.LinkContainer to={props.to} $active={isActive}>
        {resolvedIcon && <Icon id={resolvedIcon} />}
        {props.children}
      </Styles.LinkContainer>
    )
  }

  return (
    <Styles.Container $active={isActive}>
      {resolvedIcon && <Icon id={resolvedIcon} />}
      {props.children}
    </Styles.Container>
  )
}
