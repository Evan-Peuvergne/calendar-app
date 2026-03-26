import { motion } from "motion/react"
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

export const Close = styled(SecondaryIcon).attrs({ icon: "close" })`
  position: sticky;
`

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

export const Body = styled.div`
  padding: 48px 40px;
`

export const SheetContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
`

export const Sheet = styled(motion.div)`
  position: sticky;
  top: 104px;
  max-height: calc(100vh - 104px);
  display: block;
  width: 980px;
  margin-left: calc(50vw - 490px);
  overflow: hidden;
  outline: 1px solid var(--c-stroke-base);
  backdrop-filter: blur(8px);
  border-radius: 16px 16px 0 0;
  box-shadow: var(--s-overlay);
`

export const Scroll = styled.div`
  min-height: 100vh;
  position: relative;
`

export const Container = styled(motion.div)<{ $inactive?: boolean; $ready?: boolean }>`
  position: fixed;
  width: 100vw;
  inset: 0;
  overflow-y: ${(p) => (p.$inactive || !p.$ready ? "hidden" : "auto")};
  z-index: 1000;
  ${({ $inactive }) => $inactive && `pointer-events: none;`}
`
