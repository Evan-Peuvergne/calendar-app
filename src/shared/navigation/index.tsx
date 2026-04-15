import * as Styles from "./styles.css"
import { Tab } from "@components/tab"
import { PrimaryIcon, SecondaryIcon } from "@components/button"

import { BlurOverlay } from "./blur-overlay"

export const Navigation = () => {
  return (
    <nav className={Styles.container}>
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
      <hr className={Styles.divider} />
      <div style={{ display: "flex", gap: 12 }}>
        <SecondaryIcon icon="search" />
        <PrimaryIcon icon="plus" />
      </div>
    </nav>
  )
}
