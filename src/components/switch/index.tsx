import { ElementType, ReactNode } from "react"
import * as Styles from "./styles"

export interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  children?: ReactNode
  as?: ElementType
  className?: string
  style?: React.CSSProperties
}

export const Switch = ({ as: Tag = "span", children, checked, onChange, className, style }: SwitchProps) => {
  return (
    <Tag onClick={() => onChange(!checked)} className={className} style={style}>
      <Styles.Thumb data-checked={checked} />
      {children}
    </Tag>
  )
}
