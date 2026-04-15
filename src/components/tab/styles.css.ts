import { recipe } from "@vanilla-extract/recipes"

import { tokens } from "@tokens"

const base = {
  display: "inline-flex",
  alignItems: "center",
  height: 40,
  gap: 8,
  padding: "0 12px",
  font: tokens.font.label,
  fontWeight: 600,
  color: tokens.color.text.light,
  borderRadius: 12,
  cursor: "pointer",
  userSelect: "none",
  textDecoration: "none",
  appearance: "none",
  ":hover": {
    color: tokens.color.text.neutral,
    background: tokens.color.opacify.hover,
  },
} as const

const activeVariant = {
  color: tokens.color.text.neutral,
  background: tokens.color.opacify.active,
  ":hover": {
    color: tokens.color.text.neutral,
    background: tokens.color.opacify.active,
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
