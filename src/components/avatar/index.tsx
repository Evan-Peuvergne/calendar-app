import { Root, Initials, Image } from "./styles"

export interface AvatarProps {
  src?: string
  children?: string
  className?: string
  color?: string
}

export const Avatar = ({ src, children, className, color }: AvatarProps) => (
  <Root className={className} style={color ? { backgroundColor: color } : undefined}>
    {children && (
      <Initials style={color ? { color: "white" } : undefined}>
        {children}
      </Initials>
    )}
    {src && <Image src={src} alt={children ?? ""} />}
  </Root>
)
