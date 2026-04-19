import { css } from "@linaria/core"

import { color, shadow } from "@tokens"

export const title = css`
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  color: ${color.text.base};
`

export const subtitle = css`
  display: block;
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
  color: ${color.text.light};
`

export const more = css`
  float: right;
  margin-right: -8px;
  margin-top: -8px;
  opacity: 0;
  transition: opacity 0.2s ease;
`

export const moreActive = css`
  opacity: 1;
`

export const head = css`
  padding: 16px 0;
  border-bottom: 1px solid ${color.stroke.base};
`

export const body = css`
  padding: 16px 0 0 0;
  font-size: 10px;
  font-weight: 300;
  line-height: 14px;
  color: ${color.text.neutral};

  & p + p {
    margin-top: 6px;
  }
`

export const container = css`
  display: flex;
  width: 248px;
  height: 304px;
  position: relative;
  flex-direction: column;
  flex: 0 0 auto;
  padding: 0 16px;
  background: rgba(255, 255, 255, 0.88);
  outline: 1px solid ${color.stroke.base};
  border-radius: 12px;
  box-shadow: ${shadow.block};
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background: #fbfbfb;
    outline: 1px solid ${color.stroke.hover};
  }

  &:hover .${more} {
    opacity: 1;
  }

  &::after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 88px;
    content: "";
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    pointer-events: none;
  }
`
