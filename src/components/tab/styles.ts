import styled from "styled-components"

export const Container = styled.a`
  display: inline-flex;
  align-items: center;
  height: 40px;
  padding: 0 8px;
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
`
