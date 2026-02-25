import type { Meta } from "@storybook/react-vite"
import * as Button from "@components/button"
import * as Styles from "./styles"
import { Dropdown } from "./"

export default {
  title: "Dropdown",
} satisfies Meta

export const WithButtonComponent = {
  render: () => (
    <Dropdown button={<Button.PrimaryIcon icon="more" />}>
      <Styles.Overlay>Contenu du dropdown</Styles.Overlay>
    </Dropdown>
  ),
}

export const WithRenderProp = {
  render: () => (
    <Dropdown
      button={([open, setOpen, ref]) => (
        <Button.PrimaryIcon
          icon="more"
          ref={ref as any}
          active={open}
          onClick={() => setOpen((o) => !o)}
        />
      )}
    >
      {(ref, style, close) => (
        <Styles.Overlay ref={ref as any} style={style}>
          Hello world ça va ?
        </Styles.Overlay>
      )}
    </Dropdown>
  ),
}
