import * as Styles from "./styles"
import { Secondary, SecondaryIcon } from "@components/button"
import { formatWeekRange } from "./utils"

export interface CalendarOptionsProps {
  weekStart: Date
  navigate: (date: Date) => void
}

export const CalendarOptions = ({ weekStart, navigate }: CalendarOptionsProps) => {
  return (
    <Styles.Options>
      <Secondary onClick={() => navigate(new Date())}>Go to today</Secondary>
      <hr />
      <span style={{ display: "inline-flex", gap: 0 }}>
        <SecondaryIcon icon="chevron-left"  onClick={() => navigate(new Date(weekStart.getTime() - 7 * 86_400_000))} />
        <Secondary>{formatWeekRange(weekStart)}</Secondary>
        <SecondaryIcon icon="chevron-right" onClick={() => navigate(new Date(weekStart.getTime() + 7 * 86_400_000))} />
      </span>
      <hr />
      <SecondaryIcon icon="more" />
    </Styles.Options>
  )
}
