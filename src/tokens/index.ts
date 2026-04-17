import { colors } from "./colors"
import { shadows } from "./shadows"
import { typography } from "./typography"

export { colors, shadows, typography }

export const t = {
  fill: colors.fill,
  text: colors.text,
  stroke: colors.stroke,
  opacify: colors.opacify,
  shadow: shadows,
  font: typography,
}
