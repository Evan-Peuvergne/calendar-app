import * as Styles from "./styles"

export interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  className?: string
  style?: React.CSSProperties
}

export const Switch = (props: SwitchProps) => {
  return <Styles.Container className={props.className} style={props.style} />
}
