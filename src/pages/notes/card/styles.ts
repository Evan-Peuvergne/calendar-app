import styled from "styled-components"

import { SecondaryIcon } from "@components/button"

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  color: var(--c-text-base);
`

export const Substitle = styled.span`
  display: block;
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
  color: var(--c-text-light);
`

export const More = styled(SecondaryIcon).attrs({ icon: "more" })`
  float: right;
  margin-right: -8px;
  margin-top: -8px;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${(p) => p.active && `opacity: 1;`}
`

export const Head = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid var(--c-stroke-base);
`

export const Body = styled.div`
  padding: 16px 0 0 0;
  font-size: 10px;
  font-weight: 300;
  line-height: 14px;
  color: var(--c-text-neutral);

  p + p {
    margin-top: 6px;
  }
`

export const Container = styled.div`
  display: flex;
  width: 248px;
  height: 304px;
  position: relative;
  flex-direction: column;
  flex: 0 0 auto;
  padding: 0 16px;
  background: rgba(255, 255, 255, 0.88);
  outline: 1px solid var(--c-stroke-base);
  border-radius: 12px;
  box-shadow: var(--s-block);
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background: #fbfbfb;
    outline: 1px solid var(--c-stroke-hover);

    ${More} {
      opacity: 1;
    }
  }

  :after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 88px;
    content: "";
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    pointer-events: none;
  }
`
