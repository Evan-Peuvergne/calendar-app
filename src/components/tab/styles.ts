import { css, cx } from "@linaria/core"

import { t } from "@tokens"

const base = css`
  display: inline-flex;
  align-items: center;
  height: 40px;
  gap: 8px;
  padding: 0 12px;
  font: ${t.font.label};
  font-weight: 600;
  color: ${t.text.light};
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  appearance: none;

  &:hover {
    color: ${t.text.neutral};
    background: ${t.opacify.hover};
  }
`

const activeStyle = css`
  color: ${t.text.neutral};
  background: ${t.opacify.active};

  &:hover {
    color: ${t.text.neutral};
    background: ${t.opacify.active};
  }
`

export const container = ({ active = false } = {}) => cx(base, active && activeStyle)
export const linkContainer = ({ active = false } = {}) => cx(base, active && activeStyle)
