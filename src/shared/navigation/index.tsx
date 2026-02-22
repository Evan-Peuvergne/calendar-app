import * as Styles from "./styles"
import { Tab } from "@components/tab"
import { PrimaryIcon, SecondaryIcon } from "@components/button"

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
      <div style={{ display: "flex", gap: 12 }}>
        <SecondaryIcon icon="search" />
        <PrimaryIcon icon="plus" />
      </div>
    </Styles.Container>
  )
}
