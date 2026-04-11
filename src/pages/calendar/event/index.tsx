import * as Styles from "./styles"
import { Sheet, useSheetStack } from "@components/sheet"

export interface CalendarEventProps {
  style: React.CSSProperties
  title?: string
}

const EventSheet = () => (
  <Sheet style={{ padding: 24, height: 320 }}>Hello world</Sheet>
)

export const CalendarEvent = (props: CalendarEventProps) => {
  const { push } = useSheetStack()

  return (
    <Styles.Container
      onClick={() => push(<EventSheet />, "event-sheet")}
      style={props.style}
    >
      {props.title ?? "Event"}
    </Styles.Container>
  )
}
