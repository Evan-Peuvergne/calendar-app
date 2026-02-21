import { Icon, IconProps } from "@components/icon"
import { IconsList } from "./types"

const meta = {
  title: "Icon",
  component: Icon,
  args: { id: "home" },
  argTypes: {
    id: { options: IconsList, control: { type: "select" } },
  },
}

export const Default = (props: IconProps) => (
  <div style={{ display: "flex" }}>
    This is a text
    <Icon {...props} style={{ margin: "0 4px" }} />
    and after the icon
  </div>
)

export default meta
