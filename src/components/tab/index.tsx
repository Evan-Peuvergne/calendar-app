import * as Styles from "./styles"

export interface TabProps {
  children: React.ReactNode
  active?: boolean
}

export const Tab = (props: TabProps) => (
  <Styles.Container active={props.active!!}>{props.children}</Styles.Container>
)
