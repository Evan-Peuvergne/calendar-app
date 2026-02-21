import styled, { css } from "styled-components"

export const Container = styled.a<{ active: boolean }>`
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
    p.active &&
    css`
    color: var(--c-text-neutral) !important;
    background: var(--c-opacify-active) !important;}`}
`
