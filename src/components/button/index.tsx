import cn from "classnames"

import { container as primaryContainer } from "./primary"
import { container as secondaryContainer } from "./secondary"

import { Icon as IconComponent } from "@components/icon"

import type { ButtonIntent } from "./types"
import type { ButtonProps, IconButtonProps } from "./types"

type ContainerFn = (variants: {
  intent?: ButtonIntent
  icon?: boolean
  active?: boolean
  disabled?: boolean
}) => string

function createButton<T extends ButtonProps>(containerFn: ContainerFn) {
  return ({ ref, intent, active, disabled, children, onClick, onMouseDown, style, className }: T) => (
    <button
      ref={ref}
      className={cn(containerFn({ intent: intent || "neutral", active, disabled }), className)}
      onClick={onClick}
      onMouseDown={onMouseDown}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  )
}

function createIconButton<T extends IconButtonProps>(containerFn: ContainerFn) {
  return ({ ref, icon, intent, active, disabled, onClick, onMouseDown, style, className }: T) => (
    <button
      ref={ref}
      className={cn(containerFn({ intent: intent || "neutral", icon: true, active, disabled }), className)}
      onClick={onClick}
      onMouseDown={onMouseDown}
      disabled={disabled}
      style={style}
    >
      <IconComponent id={icon} />
    </button>
  )
}

export const Primary = createButton(primaryContainer)
export const PrimaryIcon = createIconButton(primaryContainer)

export const Secondary = createButton(secondaryContainer)
export const SecondaryIcon = createIconButton(secondaryContainer)

export const Button = { Primary, Secondary }
export const Icon = { Primary: PrimaryIcon, Secondary: SecondaryIcon }
