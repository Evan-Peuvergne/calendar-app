import type { Icons } from "./types"

import * as Styles from "./styles"

const modules = import.meta.glob<React.FC<React.SVGProps<SVGSVGElement>>>(
  "../../../assets/icons/*.svg",
  {
    import: "default",
    query: "?react",
    eager: true,
  }
)
let ICONS: { [key: string]: any } = {}
for (const path in modules) {
  const splits = path.replace(".svg", "").split("/")
  const name = splits[splits.length - 1]
  ICONS[name] = modules[path]
}

export interface IconProps {
  id: Icons
  style?: React.CSSProperties
  className?: string
}

export const Icon = (props: IconProps) => {
  const { id, ...rest } = props
  const SVG = ICONS[id]

  return (
    <Styles.Container {...rest}>
      <SVG height="1em" />
    </Styles.Container>
  )
}

export type { Icons }
