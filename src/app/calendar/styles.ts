import { css, cx } from "@linaria/core"

import { color, shadow } from "@tokens"
import { NAV_HEIGHT } from "@common/navigation/tokens"
import { HOUR_HEIGHT, LABELS_BAR_HEIGHT, CALENDAR_PADDING } from "./tokens"

export const options = css`
  display: flex;
  align-items: center;
  padding: 0 8px;
  gap: 8px;
  position: fixed;
  z-index: 5;
  left: 50%;
  bottom: 0;
  height: 58px;
  transform: translate3d(-50%, 0, 0);
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(4px);
  outline: 1px solid ${color.stroke.base};
  box-shadow: ${shadow.overlay};
  border-radius: 16px 16px 0 0;

  & hr {
    display: block;
    height: 24px;
    border-right: 1px solid ${color.stroke.base};
  }
`

export const hour = css`
  display: block;
  height: ${HOUR_HEIGHT}px;
  position: relative;
  border-top: 1px solid;
  border-image: linear-gradient(
      to right,
      transparent 0px,
      #ececec 64px,
      #ececec calc(100% - 64px),
      transparent 100%
    )
    1;

  &::after {
    display: block;
    position: absolute;
    width: 24px;
    top: -24px;
    left: 28px;
    text-align: right;
    font-size: 12px;
    font-weight: 500;
    color: ${color.text.disabled};
    content: var(--hour-value);
  }
`

export const currentTime = css`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  border-top: 1px solid;
  border-image: linear-gradient(
      to right,
      transparent 0px,
      ${color.fill.danger} 64px,
      ${color.fill.danger} calc(100% - 64px),
      transparent 100%
    )
    1;

  & span {
    position: absolute;
    left: 56px;
    transform: translate3d(-100%, -50%, 0);
    display: inline-flex;
    height: 24px;
    padding: 0 4px;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    color: ${color.text.contrast};
    background: ${color.fill.danger};
    border-radius: 20px;
  }
`

export const hours = css`
  display: block;
  position: absolute;
  top: ${CALENDAR_PADDING}px;
  left: 0;
  width: 100%;
  z-index: -1;
`

const labelBase = css`
  display: inline-flex;
  height: 32px;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  font-size: 12px;
  font-weight: 600;
  color: ${color.text.light};
  border-radius: 20px;
  background: rgba(248, 248, 248, 0.5);
  backdrop-filter: blur(4px);
`

const labelCurrent = css`
  background: rgba(0, 0, 0, 0.16);
  color: ${color.text.base};
`

export const label = ({ current = false } = {}) =>
  cx(labelBase, current && labelCurrent)

export const labels = css`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  top: ${NAV_HEIGHT + 8}px;
  left: 0;
  padding: 0 64px;
  z-index: 100;
`

export const day = css`
  padding-top: ${NAV_HEIGHT}px;
  padding-left: 4px;
  padding-right: 4px;
  position: relative;
  border-left: 1px solid #ececec;

  &:last-child {
    border-right: 1px solid #ececec;
  }
`

export const week = css`
  display: flex;
  padding: 0 64px;
  height: ${CALENDAR_PADDING * 2 + HOUR_HEIGHT * 24}px;
  position: relative;

  & .${day} {
    flex: 1;
    z-index: 1;
    position: relative;
  }

  &::before,
  &::after {
    display: block;
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    content: "";
    pointer-events: none;
  }

  &::before {
    top: 0;
    height: ${CALENDAR_PADDING}px;
    background: linear-gradient(
      to bottom,
      ${color.fill.background} 0%,
      transparent 88%
    );
  }

  &::after {
    bottom: 0;
    height: ${CALENDAR_PADDING}px;
    background: linear-gradient(
      to top,
      ${color.fill.background} 0%,
      transparent 88%
    );
  }
`

export const container = css`
  min-height: 100vh;
  padding-top: ${NAV_HEIGHT + LABELS_BAR_HEIGHT}px;
`
