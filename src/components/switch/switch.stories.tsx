import { useState, useEffect } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Switch } from "./"
import { Secondary as SecondaryButton } from "@components/button"

export default {
  title: "Switch",
  args: { checked: false },
  argTypes: { checked: { control: "boolean" } },
} satisfies Meta

const SwitchStory = ({ checked: controlledChecked }: { checked: boolean }) => {
  const [checked, setChecked] = useState(controlledChecked)
  useEffect(() => setChecked(controlledChecked), [controlledChecked])
  return <Switch checked={checked} onChange={setChecked} />
}

export const Default: StoryObj = {
  render: (args) => <SwitchStory checked={args.checked} />,
}

const ControlledSwitch = () => {
  const [checked, setChecked] = useState(false)
  return <Switch checked={checked} onChange={setChecked} />
}

export const Controlled: StoryObj = {
  render: () => <ControlledSwitch />,
}

const ButtonSwitch = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Switch checked={checked} onChange={setChecked} as={SecondaryButton}>
      Dark mode
    </Switch>
  )
}

export const AsButton: StoryObj = {
  render: () => <ButtonSwitch />,
}
