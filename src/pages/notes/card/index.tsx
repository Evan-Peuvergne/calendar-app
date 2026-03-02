import * as Styles from "./styles"
import { SecondaryIcon } from "@components/button"
import { Dropdown } from "@components/dropdown"
import { useSheet, Sheet } from "@components/sheet"

const Test = () => (
  <Sheet>
    <Sheet.Header>
      <Sheet.Close />
      <Sheet.Title>Career path Senior Brand designer</Sheet.Title>
      <Sheet.Subtitle>Last edited 2 days ago</Sheet.Subtitle>
    </Sheet.Header>
  </Sheet>
)

export const Card = () => {
  const { open } = useSheet()

  return (
    <Styles.Container onClick={() => open(<Test />, "test")}>
      <Styles.Head>
        <Dropdown button={<Styles.More />}>
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
        <Styles.Title>Career path Senior Brand designer</Styles.Title>
        <Styles.Substitle>Last update 2 days ago</Styles.Substitle>
      </Styles.Head>
      <Styles.Body>{Fake}</Styles.Body>
    </Styles.Container>
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
