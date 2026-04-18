import { Children } from "react"

import { root, slotClass } from "./group.styles"

interface AvatarGroupProps {
  children: React.ReactNode
}

export const AvatarGroup = ({ children }: AvatarGroupProps) => {
  const items = Children.toArray(children)

  return (
    <div className={root}>
      {items.map((child, index) => (
        <div
          key={index}
          className={slotClass({ overlapping: index > 0 })}
          style={{ zIndex: items.length - index }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
