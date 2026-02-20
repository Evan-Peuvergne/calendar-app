import * as Styles from "./styles"
import { Tab } from "@components/tab"
import { BlurOverlay } from "./blur-overlay"

export const Navigation = () => {
  return (
    <Styles.Container>
      <BlurOverlay />
      <Tab active>Overview</Tab>
      <Tab>Planning</Tab>
      <Tab>Priorize</Tab>
      <Tab>Roadmap</Tab>
      <Styles.Divider />
      <Tab>Find</Tab>
    </Styles.Container>
  )
}
