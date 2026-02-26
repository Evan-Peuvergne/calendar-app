import styled from "styled-components"

import { Container as ButtonContainer } from "@components/button/secondary"

export const Option = styled(ButtonContainer)`
  display: flex;
  justify-content: space-between;
  padding-right: 16px;
  font-weight: 500;
  border-radius: 8px;

  i {
    width: 16px;
    margin-right: -4px;
    margin-left: 16px;
    justify-content: center;
  }
`

export const Divider = styled.hr`
  width: 100%;
  border-bottom: 1px solid var(--c-stroke-base);
  margin: 4px 2px;
`

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 4px;
  background: rgba(255, 255, 255, 0.88);
  outline: 1px solid var(--c-stroke-base);
  border-radius: 12px;
  box-shadow: var(--s-overlay);
  backdrop-filter: blur(4px);
`
