import { recipe } from "@vanilla-extract/recipes"

import { theme } from "@tokens"

const base = {
  display: "inline-flex",
  alignItems: "center",
  height: 40,
  gap: 8,
  padding: "0 12px",
  font: theme.font.label,
  fontWeight: 600,
  color: theme.color.text.light,
  borderRadius: 12,
  cursor: "pointer",
  userSelect: "none",
  textDecoration: "none",
  appearance: "none",
  ":hover": {
    color: theme.color.text.neutral,
    background: theme.color.opacify.hover,
  },
} as const

const activeVariant = {
  color: theme.color.text.neutral,
  background: theme.color.opacify.active,
  ":hover": {
    color: theme.color.text.neutral,
    background: theme.color.opacify.active,
  },
} as const

export const container = recipe({
  base,
  variants: { active: { true: activeVariant } },
  defaultVariants: { active: false },
})

export const linkContainer = recipe({
  base,
  variants: { active: { true: activeVariant } },
  defaultVariants: { active: false },
})
