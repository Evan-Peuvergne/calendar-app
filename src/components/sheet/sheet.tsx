import * as Styles from "./styles"

export interface SheetProps {
  children: React.ReactNode
}

const SheetComponent = (props: SheetProps) => (
  <Styles.Container>{props.children}</Styles.Container>
)

export const Sheet = Object.assign(SheetComponent, Styles)
