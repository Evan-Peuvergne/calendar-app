import { css } from "@linaria/core"

import { t } from "@tokens"
import { NAV_HEIGHT } from "./tokens"

export const divider = css`
  width: 1px;
  height: 24px;
  background: ${t.stroke.base};
  border: none;
  margin: 0;
`

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${NAV_HEIGHT}px;
  gap: 32px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;

  & > * {
    position: relative;
    z-index: 1;
  }
`
