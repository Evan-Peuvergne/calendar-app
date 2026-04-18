import { styled } from "@linaria/react"

import { color } from "@tokens"

export const Root = styled.div`
  position: relative;
  width: 1em;
  height: 1em;
  border-radius: 100px;
  background: rgba(15, 15, 15, 0.06);
  overflow: hidden;
  flex-shrink: 0;
`

export const Initials = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5em;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.02em;
  color: ${color.text.neutral};
`

export const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
