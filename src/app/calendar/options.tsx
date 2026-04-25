import { useState } from "react"
import * as Styles from "./styles"
import { Secondary, SecondaryIcon } from "@components/button"
import { Dropdown } from "@components/dropdown"
import { Switch } from "@components/switch"
import { formatWeekRange } from "./utils"

export interface CalendarOptionsProps {
  weekStart: Date
  navigate: (date: Date) => void
}

export const CalendarOptions = ({ weekStart, navigate }: CalendarOptionsProps) => {
  const [weekends, setWeekends] = useState(true)
  const [declinedEvents, setDeclinedEvents] = useState(true)
  const [completedTasks, setCompletedTasks] = useState(false)

  return (
    <div className={Styles.options}>
      <Secondary onClick={() => navigate(new Date())}>Go to today</Secondary>
      <hr />
      <span style={{ display: "inline-flex", gap: 0 }}>
        <SecondaryIcon icon="chevron-left" onClick={() => navigate(new Date(weekStart.getTime() - 7 * 86_400_000))} />
        <Secondary>{formatWeekRange(weekStart)}</Secondary>
        <SecondaryIcon icon="chevron-right" onClick={() => navigate(new Date(weekStart.getTime() + 7 * 86_400_000))} />
      </span>
      <hr />
      <Dropdown button={<SecondaryIcon icon="more" />}>
        {(ref, style, close) => (
          <Dropdown.Overlay ref={ref as React.Ref<HTMLDivElement>} style={style}>
            <Switch as={Dropdown.Option} checked={weekends} onChange={setWeekends}>
              View week-ends
            </Switch>
            <Switch as={Dropdown.Option} checked={declinedEvents} onChange={setDeclinedEvents}>
              View declined events
            </Switch>
            <Switch as={Dropdown.Option} checked={completedTasks} onChange={setCompletedTasks}>
              View completed tasks
            </Switch>
            <Dropdown.Divider />
            <Dropdown.Option icon="calendar" onClick={close}>Lorem ipsum</Dropdown.Option>
            <Dropdown.Option icon="calendar" onClick={close}>Lorem ipsum</Dropdown.Option>
          </Dropdown.Overlay>
        )}
      </Dropdown>
    </div>
  )
}
