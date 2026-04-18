import { Root, Initials, Image } from "./styles"

export interface AvatarProps {
  src?: string
  children?: string
  className?: string
}

export const Avatar = ({ src, children, className }: AvatarProps) => (
  <Root className={className}>
    {children && <Initials>{children}</Initials>}
    {src && <Image src={src} alt={children ?? ""} />}
  </Root>
)
