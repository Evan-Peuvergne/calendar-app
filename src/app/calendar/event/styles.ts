import { css, cx } from "@linaria/core"
import { styled } from "@linaria/react"

import { color, shadow } from "@tokens"

// All classes defined before containerBase so they can be referenced via ${} interpolation

export const time = css`
  display: block;
  margin-top: 2px;
  font-size: 14px;
  line-height: 20px;
  color: rgba(15, 15, 15, 0.48);
  flex-shrink: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const timeEnd = css`
  /* hidden in tier 1 via conditional rendering, always visible when rendered */
`

export const eventLocation = css`
  display: block;
  margin-top: 2px;
  font-size: 14px;
  line-height: 20px;
  color: rgba(15, 15, 15, 0.48);
  flex-shrink: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const title = css`
  display: block;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: #246a54;
`

export const inner = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`

export const avatarWrapper = css`
  margin-top: auto;
  padding-top: 12px;
`

const containerBase = css`
  display: block;
  position: absolute;
  z-index: 3;
  padding: 12px;
  border-radius: 12px;
  background:
    radial-gradient(
      126.03% 93.63% at 8.16% 12.64%,
      rgba(57, 167, 132, 0.08) 0%,
      rgba(57, 167, 132, 0.04) 100%
    ),
    var(--colors-lightlucent-70, rgba(255, 255, 255, 0.78));
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
    background: ${color.stroke.base};
    box-shadow: ${shadow.raised};
  }

  &::after {
    inset: 0;
    background:
      radial-gradient(
        126.03% 93.63% at 8.16% 12.64%,
        rgba(57, 167, 132, 0.08) 0%,
        rgba(57, 167, 132, 0.04) 100%
      ),
      ${color.fill.base};
    transition: background 0.2s ease;
  }

  &:hover::before {
    background:
      radial-gradient(
        126.03% 93.63% at 8.16% 12.64%,
        rgb(51, 103, 86, 0.8) 0%,
        rgba(43, 87, 73, 0.4) 100%
      ),
      var(--colors-lightlucent-70, rgba(255, 255, 255, 0.78));
  }

  &:hover::after {
    background:
      radial-gradient(
        126.03% 93.63% at 8.16% 12.64%,
        rgba(57, 167, 132, 0.08) 0%,
        rgba(57, 167, 132, 0.04) 100%
      ),
      #f8f8f8;
  }

  /* Tier 1 — compact horizontal (< 48px)
     No vertical padding, content centered, title + start time on one line */
  &[data-tier="1"] {
    padding: 0 12px;
  }
  &[data-tier="1"] .${inner} {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
  &[data-tier="1"] .${title} {
    flex: 1 0 0;
    min-width: 1px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &[data-tier="1"] .${time} {
    margin-top: 0;
  }

  /* Tier 2 — vertical, title on 1 line (48–85px adjusted) */
  &[data-tier="2"] .${title} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Tier 3 — vertical, title up to 2 lines (≥ 86px adjusted) */
  &[data-tier="3"] .${title} {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

`

const containerActive = css`
  &::before {
    inset: -2px;
    border-radius: 14px;
    background:
      radial-gradient(
        126.03% 93.63% at 8.16% 12.64%,
        rgb(51, 103, 86, 0.8) 0%,
        rgba(43, 87, 73, 0.4) 100%
      ),
      var(--colors-lightlucent-70, rgba(255, 255, 255, 0.78));
  }
`

export const Container = styled.div``

export const container = ({ active = false } = {}) =>
  cx(containerBase, active && containerActive)
