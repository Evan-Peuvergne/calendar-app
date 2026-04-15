import styled from "styled-components"

export const Divider = styled.hr`
  width: 1px;
  height: 24px;
  background: var(--c-stroke-base);
  border: none;
  margin: 0;
`

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 112px;
  gap: 32px;
  position: sticky;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;

  > * {
    position: relative;
    z-index: 1;
  }
`
