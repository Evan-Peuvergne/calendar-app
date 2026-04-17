import { css, cx } from "@linaria/core"

import { t } from "@tokens"

export const title = css`
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  color: ${t.text.base};

  & + * {
    margin-top: 8px;
  }
`

export const subtitle = css`
  color: ${t.text.light};
`

export const header = css`
  position: relative;
  padding: 40px;

  &::after {
    position: absolute;
    bottom: 0;
    left: 32px;
    right: 32px;
    display: block;
    content: "";
    border-bottom: 1px solid ${t.stroke.base};
  }
`

export const closeInHeader = css`
  float: right;
  margin-right: -24px;
  margin-top: -24px;
  position: sticky;
`

export const body = css`
  padding: 48px 40px;
`

export const sheetContent = css`
  display: flex;
  flex-direction: column;
`

const sheetBase = css`
  display: block;
  width: 980px;
  margin: 0 auto;
  overflow: hidden;
  outline: 1px solid ${t.stroke.base};
  backdrop-filter: blur(8px);
  border-radius: 24px 24px 0 0;
  box-shadow: ${t.shadow.overlay};
  transition: background 300ms ease;
`

const sheetElevated = css`background: rgba(248, 248, 248, 0.88);`
const sheetNotElevated = css`background: rgba(255, 255, 255, 0.88);`
const sheetRootScroll = css`position: relative; top: auto; max-height: none;`
const sheetNotRootScroll = css`position: sticky; top: 104px; max-height: calc(100vh - 104px);`

export const sheet = ({ elevated = false, rootScroll = false } = {}) =>
  cx(
    sheetBase,
    elevated ? sheetElevated : sheetNotElevated,
    rootScroll ? sheetRootScroll : sheetNotRootScroll,
  )

export const scroll = css`
  min-height: 100vh;
  position: relative;
`

export const container = css`
  position: fixed;
  inset: 0;
  overflow-y: auto;
  z-index: 1000;
`

export const containerInactive = css`pointer-events: none;`
export const containerHidden = css`overflow-y: hidden;`
export const containerRootScroll = css`display: flex; align-items: flex-end;`
