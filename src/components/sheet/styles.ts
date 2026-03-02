import styled from "styled-components"

import { SecondaryIcon } from "@components/button"

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  color: var(--c-text-base);
`

export const Subtitle = styled.p`
  color: var(--c-text-light);
`

export const Close = styled(SecondaryIcon).attrs({ icon: "close" })``

export const Header = styled.header`
  position: relative;
  padding: 40px 40px 40px 40px;

  ${Close} {
    float: right;
    margin-right: -24px;
    margin-top: -24px;
  }

  ${Title} + ${Subtitle} {
    margin-top: 8px;
  }

  &:after {
    position: absolute;
    bottom: 0;
    left: 32px;
    right: 32px;
    display: block;
    content: "";
    border-bottom: 1px solid var(--c-stroke-base);
  }
`

export const Container = styled.div`
  position: fixed;
  top: 104px;
  left: calc((100% - 1080px) / 2);
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 1080px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  outline: 1px solid var(--c-stroke-base);
  box-shadow: var(--s-overlay);
  border-radius: 16px 16px 0 0;
`
