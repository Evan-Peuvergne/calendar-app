import cn from "classnames"

import * as Styles from "./styles.css"
import { SecondaryIcon } from "@components/button"
import { Dropdown } from "@components/dropdown"
import { useSheetStack, Sheet } from "@components/sheet"

import type { AbstractButtonProps } from "@components/button/types"

const More = ({ active, className, ...props }: AbstractButtonProps) => (
  <SecondaryIcon
    icon="more"
    active={active}
    className={cn(Styles.more, active && Styles.moreActive, className)}
    {...props}
  />
)

const Test = () => {
  const { closeLast } = useSheetStack()
  return (
    <Sheet>
      <Sheet.Header>
        <Sheet.Close onClick={closeLast} />
        <Sheet.Title>Career path Senior Brand designer</Sheet.Title>
        <Sheet.Subtitle>Last edited 2 days ago</Sheet.Subtitle>
      </Sheet.Header>
    </Sheet>
  )
}

export const Card = () => {
  const { push } = useSheetStack()

  return (
    <div className={Styles.container} onClick={() => push(<Test />)}>
      <div className={Styles.head}>
        <Dropdown button={<More />}>
          <Dropdown.Overlay>
            <Dropdown.Option icon="external">Open new tab</Dropdown.Option>
            <Dropdown.Option icon="bottom-to-right">Move to</Dropdown.Option>
            <Dropdown.Option icon="copy">Duplicate</Dropdown.Option>
            <Dropdown.Divider />
            <Dropdown.Option icon="bin" intent="danger">
              Delete
            </Dropdown.Option>
          </Dropdown.Overlay>
        </Dropdown>
        <h3 className={Styles.title}>Career path Senior Brand designer</h3>
        <span className={Styles.subtitle}>Last update 2 days ago</span>
      </div>
      <div className={Styles.body}>{Fake}</div>
    </div>
  )
}

const Fake = (
  <>
    <p>
      1. Started as a Junior Graphic Designer at Creative Minds Agency, learning
      the ropes of design fundamentals.
    </p>
    <p>
      2. Transitioned to a Mid-Level Designer role, focusing on branding
      projects for local businesses.{" "}
    </p>
    <p>
      3. Joined a startup as a Brand Designer, where I developed my skills in
      creating cohesive brand identities.{" "}
    </p>
    <p>
      4. Collaborated with marketing teams to launch successful campaigns,
      gaining valuable experience in brand strategy.{" "}
    </p>
    <p>
      5. Promoted to Senior Designer, leading a team of creatives on
      high-profile projects.
    </p>
  </>
)
