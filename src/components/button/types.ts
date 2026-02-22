import type { Icons } from "@components/icon"

export type ButtonIntent = "neutral" | "action" | "danger"

export interface AbstractButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>
  intent?: ButtonIntent
  disabled?: boolean
  active?: boolean
  style?: React.CSSProperties
  className?: string
}

export interface ButtonProps extends AbstractButtonProps {
  children: React.ReactNode
}

export interface IconButtonProps extends AbstractButtonProps {
  icon: Icons
}
