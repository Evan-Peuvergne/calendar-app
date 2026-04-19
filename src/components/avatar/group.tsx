import { Children, cloneElement, isValidElement } from "react"

import type { AvatarProps } from "./"
import { root, slotClass, overflowBadge, overflowText } from "./group.styles"

interface AvatarGroupProps {
  children: React.ReactNode
  colors?: string | string[]
  limit?: number
}

export const AvatarGroup = ({ children, colors, limit }: AvatarGroupProps) => {
  const items = Children.toArray(children)

  const visibleItems = limit !== undefined ? items.slice(0, limit) : items
  const overflowCount = limit !== undefined ? Math.max(0, items.length - limit) : 0

  const getColor = (index: number): string | undefined => {
    if (!colors) return undefined
    if (typeof colors === "string") return colors
    return colors[index % colors.length]
  }

  return (
    <div className={root}>
      {visibleItems.map((child, index) => (
        <div
          key={index}
          className={slotClass({ overlapping: index > 0 })}
          style={{ zIndex: items.length - index }}
        >
          {isValidElement<AvatarProps>(child)
            ? cloneElement(child, { color: getColor(index) })
            : child}
        </div>
      ))}
      {overflowCount > 0 && (
        <div
          className={slotClass({ overlapping: visibleItems.length > 0 })}
          style={{ zIndex: 0 }}
        >
          <div className={overflowBadge}>
            <span className={overflowText}>+{overflowCount}</span>
          </div>
        </div>
      )}
    </div>
  )
}
