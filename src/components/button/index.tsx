import cn from "classnames"

import { button } from "./styles"
import { Icon as IconComponent } from "@components/icon"

import type { ButtonProps, IconButtonProps } from "./types"

function createButton(variant: "primary" | "secondary") {
  return ({ ref, intent, active, disabled, children, onClick, onMouseDown, style, className }: ButtonProps) => (
    <button
      ref={ref}
      className={cn(button({ variant, intent, active, disabled }), className)}
      onClick={onClick}
      onMouseDown={onMouseDown}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  )
}

function createIconButton(variant: "primary" | "secondary") {
  return ({ ref, icon, intent, active, disabled, onClick, onMouseDown, style, className }: IconButtonProps) => (
    <button
      ref={ref}
      className={cn(button({ variant, intent, icon: true, active, disabled }), className)}
      onClick={onClick}
      onMouseDown={onMouseDown}
      disabled={disabled}
      style={style}
    >
      <IconComponent id={icon} />
    </button>
  )
}

export const Primary = createButton("primary")
export const PrimaryIcon = createIconButton("primary")

export const Secondary = createButton("secondary")
export const SecondaryIcon = createIconButton("secondary")

export const Button = { Primary, Secondary }
export const Icon = { Primary: PrimaryIcon, Secondary: SecondaryIcon }
