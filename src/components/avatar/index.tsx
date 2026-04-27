import cn from "classnames"

import { root, initials, image } from "./styles"

export interface AvatarProps {
  src?: string
  children?: string
  className?: string
  color?: string
}

export const Avatar = ({ src, children, className, color }: AvatarProps) => (
  <div className={cn(root, className)} style={color ? { backgroundColor: color } : undefined}>
    {children && (
      <span className={initials} style={color ? { color: "white" } : undefined}>
        {children}
      </span>
    )}
    {src && <img className={image} src={src} alt={children ?? ""} />}
  </div>
)
