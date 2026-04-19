import type { Meta } from "@storybook/react-vite"

import { Avatar } from "./"
import { AvatarGroup } from "./group"

export default {
  title: "AvatarGroup",
} satisfies Meta

export const Initials = {
  render: () => (
    <AvatarGroup>
      <Avatar>EP</Avatar>
      <Avatar>JD</Avatar>
      <Avatar>ML</Avatar>
      <Avatar>AB</Avatar>
    </AvatarGroup>
  ),
}

export const WithImages = {
  render: () => (
    <AvatarGroup>
      <Avatar src="https://i.pravatar.cc/64?img=1">EP</Avatar>
      <Avatar src="https://i.pravatar.cc/64?img=2">JD</Avatar>
      <Avatar src="https://i.pravatar.cc/64?img=3">ML</Avatar>
      <Avatar src="https://i.pravatar.cc/64?img=4">AB</Avatar>
    </AvatarGroup>
  ),
}

export const Mixed = {
  render: () => (
    <AvatarGroup>
      <Avatar src="https://i.pravatar.cc/64?img=5">EP</Avatar>
      <Avatar>JD</Avatar>
      <Avatar src="https://i.pravatar.cc/64?img=6">ML</Avatar>
    </AvatarGroup>
  ),
}

export const Sizes = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {[12, 16, 20, 28].map((size) => (
        <div key={size} style={{ fontSize: size }}>
          <AvatarGroup>
            <Avatar src="https://i.pravatar.cc/64?img=1">EP</Avatar>
            <Avatar src="https://i.pravatar.cc/64?img=2">JD</Avatar>
            <Avatar src="https://i.pravatar.cc/64?img=3">ML</Avatar>
            <Avatar>AB</Avatar>
          </AvatarGroup>
        </div>
      ))}
    </div>
  ),
}
