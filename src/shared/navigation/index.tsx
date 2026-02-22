import * as Styles from "./styles"
import { Tab } from "@components/tab"
import { BlurOverlay } from "./blur-overlay"

export const Navigation = () => {
  return (
    <Styles.Container>
      <BlurOverlay />
      <Tab to="/" icon={["home", "home-fill"]}>
        Overview
      </Tab>
      <Tab to="/calendar" icon={["calendar", "calendar-fill"]}>
        Calendar
      </Tab>
      <Tab to="/priorize" icon={["flag", "flag-fill"]}>
        Priorize
      </Tab>
      <Tab to="/notes" icon={["document", "document-fill"]}>
        Notes
      </Tab>
      <Styles.Divider />
      <Tab icon="search">Find</Tab>
    </Styles.Container>
  )
}
