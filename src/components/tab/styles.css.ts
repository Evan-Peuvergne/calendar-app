import { recipe } from "@vanilla-extract/recipes"

const base = {
  display: "inline-flex",
  alignItems: "center",
  height: 40,
  gap: 8,
  padding: "0 12px",
  font: "var(--f-label)",
  fontWeight: 600,
  color: "var(--c-text-light)",
  borderRadius: 12,
  cursor: "pointer",
  userSelect: "none",
  textDecoration: "none",
  appearance: "none",
  ":hover": {
    color: "var(--c-text-neutral)",
    background: "var(--c-opacify-hover)",
  },
} as const

const activeVariant = {
  color: "var(--c-text-neutral)",
  background: "var(--c-opacify-active)",
  ":hover": {
    color: "var(--c-text-neutral)",
    background: "var(--c-opacify-active)",
  },
} as const

export const container = recipe({
  base,
  variants: {
    active: {
      true: activeVariant,
    },
  },
  defaultVariants: { active: false },
})

export const linkContainer = recipe({
  base,
  variants: {
    active: {
      true: activeVariant,
    },
  },
  defaultVariants: { active: false },
})
