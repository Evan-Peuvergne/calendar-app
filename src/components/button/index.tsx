import { Container as PrimaryContainer } from "./primary"
import { Container as SecondaryContainer } from "./secondary"

import { Icon as IconComponent } from "@components/icon"

import type { StyledComponent } from "styled-components"
import type { ButtonProps, IconButtonProps } from "./types"

function createButton<T extends ButtonProps>(
  Container: StyledComponent<"button", any, any>
) {
  return ({ ref, intent, children, onClick, ...rest }: T) => (
    <Container ref={ref} intent={intent || "neutral"} onClick={onClick} {...rest}>
      {children}
    </Container>
  )
}

function createIconButton<T extends IconButtonProps>(
  Container: StyledComponent<"button", any, any>
) {
  return ({ ref, icon, intent, onClick, ...rest }: T) => (
    <Container ref={ref} icon intent={intent || "neutral"} onClick={onClick} {...rest}>
      <IconComponent id={icon} />
    </Container>
  )
}

export const Primary = createButton(PrimaryContainer)
export const PrimaryIcon = createIconButton(PrimaryContainer)

export const Secondary = createButton(SecondaryContainer)
export const SecondaryIcon = createIconButton(SecondaryContainer)

export const Button = { Primary, Secondary }
export const Icon = { Primary: PrimaryIcon, Secondary: SecondaryIcon }
