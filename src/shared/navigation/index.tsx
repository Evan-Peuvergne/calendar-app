import * as Styles from "./styles"
import { Tab } from "@components/tab"

export const Navigation = () => {
  return (
    <Styles.Container>
      <Tab>Overview</Tab>
      <Tab>Planning</Tab>
      <Tab>Priorize</Tab>
      <Tab>Roadmap</Tab>
      <Styles.Divider />
      <Tab>Find</Tab>
    </Styles.Container>
  )
}
