import { Container as ButtonContainer } from "./styles"
import { Container as PrimaryContainer } from "./primary"
import { Container as SecondaryContainer } from "./secondary"

import { Icon as IconComponent } from "@components/icon"

import type { StyledComponent } from "styled-components"
import type { ButtonProps, IconButtonProps } from "./types"
import type { Icons } from "@components/icon"

function createButton<T extends ButtonProps>(
  Container: StyledComponent<"button", any, any>
) {
  return (props: T) => {
    const { intent, children, onClick, ...rest } = props

    return (
      <Container intent={intent || "neutral"} onClick={onClick} {...rest}>
        {children}
      </Container>
    )
  }
}

function createIconButton<T extends IconButtonProps>(
  Container: StyledComponent<"button", any, any>
) {
  return (props: T) => {
    const { icon, intent, onClick, ...rest } = props

    return (
      <Container icon intent={intent || "neutral"} onClick={onClick} {...rest}>
        <IconComponent id={icon} />
      </Container>
    )
  }
}

export const Primary = createButton(PrimaryContainer)
export const PrimaryIcon = createIconButton(PrimaryContainer)

export const Secondary = createButton(SecondaryContainer)
export const SecondaryIcon = createIconButton(SecondaryContainer)

export const Button = { Primary, Secondary }
export const Icon = { Primary: PrimaryIcon, Secondary: SecondaryIcon }
