import { css, cx } from "@linaria/core"

import { color, font } from "@tokens"

const base = css`
  display: inline-flex;
  align-items: center;
  height: 40px;
  gap: 8px;
  padding: 0 12px;
  font: ${font.label};
  font-weight: 600;
  color: ${color.text.light};
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  appearance: none;

  &:hover {
    color: ${color.text.neutral};
    background: ${color.opacify.hover};
  }
`

const activeStyle = css`
  color: ${color.text.neutral};
  background: ${color.opacify.active};

  &:hover {
    color: ${color.text.neutral};
    background: ${color.opacify.active};
  }
`

export const container = ({ active = false } = {}) => cx(base, active && activeStyle)
export const linkContainer = ({ active = false } = {}) => cx(base, active && activeStyle)
