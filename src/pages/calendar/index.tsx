import * as Styles from "./styles"
import { Secondary, SecondaryIcon } from "@components/button"

export const Calendar = () => {
  return (
    <Styles.Container>
      <Styles.Week>
        <Styles.Labels>
          <Styles.Label>Mon 18</Styles.Label>
          <Styles.Label>Tue 19</Styles.Label>
          <Styles.Label>Wed 20</Styles.Label>
          <Styles.Label>Thu 21</Styles.Label>
          <Styles.Label>Fri 22</Styles.Label>
          <Styles.Label>Sat 23</Styles.Label>
          <Styles.Label>Sun 24</Styles.Label>
        </Styles.Labels>
        <Styles.Day></Styles.Day>
        <Styles.Day></Styles.Day>
        <Styles.Day>
          <Styles.Event style={{ marginTop: 850 }}>Hello world</Styles.Event>
        </Styles.Day>
        <Styles.Day></Styles.Day>
        <Styles.Day></Styles.Day>
        <Styles.Day></Styles.Day>
        <Styles.Day></Styles.Day>
      </Styles.Week>
      <Styles.Hours>
        {Array.from({ length: 25 })
          .fill(null)
          .map((_, k) => (
            <Styles.Hour value={`${k.toString()}h`} key={k} />
          ))}
      </Styles.Hours>
      <Styles.Options>
        <Secondary>January 12-19, 2026</Secondary>
        <hr />
        <SecondaryIcon icon="calendar" />
        <SecondaryIcon icon="flag" />
        <SecondaryIcon icon="home" />
        <hr />
        <SecondaryIcon icon="more" />
      </Styles.Options>
    </Styles.Container>
  )
}
