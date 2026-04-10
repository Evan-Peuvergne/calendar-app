import styled from "styled-components"

export const Container = styled.div`
  display: block;
  height: 80px;
  position: relative;
  z-index: 3;
  padding: 16px;
  font-weight: 500;
  color: var(--c-text-neutral);
  border-radius: 12px;
  background: var(--c-fill-base);
  outline: 1px solid var(--c-stroke-base);
  box-shadow: var(--s-block);
  cursor: pointer;

  &:hover {
    outline: 1px solid var(--c-stroke-hover);
  }
`
