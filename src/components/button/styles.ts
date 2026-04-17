import { css } from "@linaria/core"

import { t } from "@tokens"

export const base = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 8px;
  gap: 8px;
  font: ${t.font.label};
  border-radius: 12px;
  cursor: pointer;
  appearance: none;
`

export const iconBase = css`
  aspect-ratio: 1 / 1;
`

export const disabledBase = css`
  cursor: not-allowed;
`
