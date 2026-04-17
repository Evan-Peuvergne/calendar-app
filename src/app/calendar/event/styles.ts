import { css, cx } from "@linaria/core"
import { styled } from "@linaria/react"

import { t } from "@tokens"
import { NAV_HEIGHT } from "@common/navigation/tokens"
import { HOUR_HEIGHT, EVENT_GAP } from "../tokens"

export const time = css`
  display: block;
  font-size: 14px;
  line-height: 20px;
  color: rgba(15, 15, 15, 0.48);
`

export const title = css`
  display: block;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: #246a54;

  & + .${time} {
    margin-top: 4px;
  }
`

const containerBase = css`
  display: block;
  position: absolute;
  left: 4px;
  right: 4px;
  z-index: 3;
  padding: 12px;
  border-radius: 12px;
  background: radial-gradient(126.03% 93.63% at 8.16% 12.64%, rgba(57, 167, 132, 0.08) 0%, rgba(57, 167, 132, 0.04) 100%), var(--colors-lightlucent-70, rgba(255, 255, 255, 0.78));
  cursor: pointer;

  &::before,
  &::after {
    display: block;
    position: absolute;
    z-index: -1;
    content: "";
    border-radius: 12px;
  }

  &::before {
    inset: -1px;
    border-radius: 13px;
    background: ${t.stroke.base};
    box-shadow: ${t.shadow.raised};
  }

  &::after {
    inset: 0;
    background: radial-gradient(126.03% 93.63% at 8.16% 12.64%, rgba(57, 167, 132, 0.08) 0%, rgba(57, 167, 132, 0.04) 100%), ${t.fill.base};
    transition: background 0.2s ease;
  }

  &:hover::before {
    background: radial-gradient(126.03% 93.63% at 8.16% 12.64%, rgb(51, 103, 86, 0.8) 0%, rgba(43, 87, 73, 0.4) 100%), var(--colors-lightlucent-70, rgba(255, 255, 255, 0.78));
  }

  &:hover::after {
    background: radial-gradient(126.03% 93.63% at 8.16% 12.64%, rgba(57, 167, 132, 0.08) 0%, rgba(57, 167, 132, 0.04) 100%), #f8f8f8;
  }
`

const containerActive = css`
  &::before {
    inset: -2px;
    border-radius: 14px;
    background: radial-gradient(126.03% 93.63% at 8.16% 12.64%, rgb(51, 103, 86, 0.8) 0%, rgba(43, 87, 73, 0.4) 100%), var(--colors-lightlucent-70, rgba(255, 255, 255, 0.78));
  }
`

export const Container = styled.div<{ startHour: number; duration: number }>`
  top: ${({ startHour }) => NAV_HEIGHT + startHour * HOUR_HEIGHT + EVENT_GAP / 2}px;
  height: ${({ duration }) => duration * HOUR_HEIGHT - EVENT_GAP}px;
`

export const container = ({ active = false } = {}) => cx(containerBase, active && containerActive)
