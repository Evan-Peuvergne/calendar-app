import { createGlobalTheme } from "@vanilla-extract/css"

import { colors } from "./colors"
import { shadows } from "./shadows"
import { typography } from "./typography"

export { colors, shadows, typography }

export const tokens = createGlobalTheme(":root", {
  color: colors,
  shadow: shadows,
  font: typography,
})
