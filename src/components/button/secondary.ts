import styled from "styled-components"

import { Container as ButtonContainer } from "./styles"

import type { ButtonIntent } from "./types"

const INTENTS: { [key in ButtonIntent]: string } = {
  action: "var(--c-text-action)",
  danger: "var(--c-text-danger)",
  neutral: "var(--c-text-neutral)",
}

export const Container = styled(ButtonContainer)`
  --button-inline-color: var(--c-text-light);
  --button-inline-color-interact: ${(p) => INTENTS[p.intent]};
  --button-inline-color-disabled: var(--c-text-disabled);
  --button-inline-background-hover: var(--c-opacify-hover);
  --button-inline-background-active: var(--c-opacify-active);

  color: ${(p) => INTENTS[p.intent]};
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out;

  &:hover {
    color: var(--button-inline-color-interact);
    background-color: var(--button-inline-background-hover);
  }
  &:active,
  &.active {
    color: var(--button-inline-color-interact);
    background-color: var(--button-inline-background-active);
    background-color: green !red;
  }

  ${(p) =>
    p.active &&
    `color: var(--button-inline-color-interact) !important;
    background-color: var(--button-inline-background-active) !important;`}

  ${(p) =>
    p.disabled &&
    `
    color: var(--button-inline-color-disabled) !important;
    background-color: transparent !important;
  `}
`
