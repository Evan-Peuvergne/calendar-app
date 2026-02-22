import * as Styles from "./styles"
import { Tab } from "@components/tab"
import { BlurOverlay } from "./blur-overlay"

export const Navigation = () => {
  return (
    <Styles.Container>
      <BlurOverlay />
      <Tab icon={["home", "home-fill"]}>Overview</Tab>
      <Tab icon={["calendar", "calendar-fill"]} active>
        Calendar
      </Tab>
      <Tab>Priorize</Tab>
      <Tab>Notes</Tab>
      <Styles.Divider />
      <Tab>Find</Tab>
    </Styles.Container>
  )
}
