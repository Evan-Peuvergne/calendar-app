import * as Styles from "./styles"

export interface TabProps {
  children: React.ReactNode
}

export const Tab = (props: TabProps) => (
  <Styles.Container>{props.children}</Styles.Container>
)
