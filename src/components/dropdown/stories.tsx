import { action } from "storybook/actions"
import type { Meta } from "@storybook/react-vite"
import * as Button from "@components/button"
import { Dropdown } from "./"

export default {
  title: "Dropdown",
} satisfies Meta

export const WithButtonComponent = {
  render: () => (
    <Dropdown button={<Button.PrimaryIcon icon="more" />} defaultOpen>
      <Dropdown.Overlay>
        <Dropdown.Option icon="external" onClick={action("new-tab")}>
          New tab
        </Dropdown.Option>
        <Dropdown.Option
          icon="bottom-to-right"
          onClick={action("move-to")}
        >
          Move to
        </Dropdown.Option>
        <Dropdown.Option icon="copy" onClick={action("duplicate")}>
          Duplicate
        </Dropdown.Option>
        <Dropdown.Option
          icon="bin"
          intent="danger"
          onClick={action("delete")}
        >
          Delete
        </Dropdown.Option>
      </Dropdown.Overlay>
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
      defaultOpen
    >
      {(ref, style, close) => (
        <Dropdown.Overlay ref={ref as any} style={style}>
          Hello world ça va ?
        </Dropdown.Overlay>
      )}
    </Dropdown>
  ),
}
