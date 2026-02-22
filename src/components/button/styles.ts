import styled from "styled-components"

import type { ButtonIntent } from "./types"

export const Container = styled.button<{
  icon?: boolean
  intent: ButtonIntent
  disabled?: boolean
  active?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  aspect-ratio: ${(p) => (p.icon ? "1 / 1" : "auto")};
  padding: 8px;
  gap: 8px;
  font: var(--f-label);
  border-radius: 12px;
  cursor: pointer;
  appearance: none;

  ${(p) => p.disabled && `cursor: not-allowed`};
`
