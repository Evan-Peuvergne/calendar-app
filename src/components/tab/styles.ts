import styled, { css } from "styled-components"
import { Link } from "react-router"

const base = css<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  height: 40px;
  gap: 8px;
  padding: 0 12px;
  font: var(--f-label);
  font-weight: 600;
  color: var(--c-text-light);
  border-radius: 8px;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: var(--c-text-neutral);
    background: var(--c-opacify-hover);
  }

  ${(p) =>
    p.$active &&
    css`
      color: var(--c-text-neutral) !important;
      background: var(--c-opacify-active) !important;
    `}
`

export const Container = styled.button<{ $active: boolean }>`
  ${base}
`

export const LinkContainer = styled(Link)<{ $active: boolean }>`
  ${base}

  appearance: none;
  text-decoration: none;
`
