import { recipe } from "@vanilla-extract/recipes"

import { t } from "@tokens"

const base = {
  display: "inline-flex",
  alignItems: "center",
  height: 40,
  gap: 8,
  padding: "0 12px",
  font: t.font.label,
  fontWeight: 600,
  color: t.text.light,
  borderRadius: 12,
  cursor: "pointer",
  userSelect: "none",
  textDecoration: "none",
  appearance: "none",
  ":hover": {
    color: t.text.neutral,
    background: t.opacify.hover,
  },
} as const

const activeVariant = {
  color: t.text.neutral,
  background: t.opacify.active,
  ":hover": {
    color: t.text.neutral,
    background: t.opacify.active,
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
