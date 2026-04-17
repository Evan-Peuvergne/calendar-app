import { css, cx } from "@linaria/core"

import { t } from "@tokens"
import { base } from "@components/button/styles"

const optionBase = css`
  color: ${t.text.neutral};
  display: flex;
  justify-content: space-between;
  padding-right: 16px;
  font-weight: 500;
  border-radius: 8px;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${t.opacify.hover};
  }

  &:active {
    background-color: ${t.opacify.active};
  }

  & i {
    width: 16px;
    margin-right: -4px;
    margin-left: 16px;
    justify-content: center;
  }
`

const intentNeutral = css`color: ${t.text.neutral};`
const intentAction = css`color: ${t.text.action};`
const intentDanger = css`color: ${t.text.danger};`
const intentClasses = { neutral: intentNeutral, action: intentAction, danger: intentDanger }

export const option = ({ intent = "neutral" as "neutral" | "action" | "danger" } = {}) =>
  cx(base, optionBase, intentClasses[intent])

export const divider = css`
  width: 100%;
  border-bottom: 1px solid ${t.stroke.base};
  margin: 4px 2px;
`

export const overlay = css`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 4px;
  background: rgba(255, 255, 255, 0.88);
  outline: 1px solid ${t.stroke.base};
  border-radius: 12px;
  box-shadow: ${t.shadow.overlay};
  backdrop-filter: blur(4px);
`
