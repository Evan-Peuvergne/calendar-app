import styled from "styled-components"

import { Container as ButtonContainer } from "./styles"

import type { ButtonIntent } from "./types"

const INTENTS: { [key in ButtonIntent]: string } = {
  action: "var(--c-text-action)",
  danger: "var(--c-text-danger)",
  neutral: "var(--c-text-neutral)",
}

export const Container = styled(ButtonContainer)`
  color: ${(p) => INTENTS[p.intent]};
  background: var(--c-fill-base);
  outline: 1px solid var(--c-stroke-base);
  box-shadow: var(--s-raised);
  transition:
    background 0.2s ease-in-out,
    outline 0.2s ease-in-out;

  &:hover {
    background:
      linear-gradient(var(--c-opacify-hover), var(--c-opacify-hover)),
      var(--c-fill-base);
    outline: 1px solid var(--c-stroke-hover);
  }
  &:active {
    background:
      linear-gradient(var(--c-opacify-active), var(--c-opacify-active)),
      var(--c-fill-base);
    outline: 1px solid var(--c-stroke-hover);
    box-shadow: none;
  }

  ${(p) =>
    p.active &&
    `background: linear-gradient(var(--c-opacify-active), var(--c-opacify-active)), var(--c-fill-base) !important;
    outline: 1px solid var(--c-stroke-hover) !important;
    box-shadow: none !important;`}

  ${(p) =>
    p.disabled &&
    `
      color: var(--c-text-disabled) !important;
      background-color: var(--c-fill-disabled) !important;
      outline: 1px solid var(--c-stroke-base) !important;
      box-shadow: none !important;
    `}
`
