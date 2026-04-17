import { css } from "@linaria/core"

export const container = css`
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  font-size: 1em;
  line-height: inherit;
  overflow: visible;

  &::before {
    display: inline-block;
    width: 0;
    content: "\\00A0";
    visibility: hidden;
  }

  & svg {
    display: inline-block;
    overflow: visible;
  }

  & svg path {
    shape-rendering: geometricPrecision;
    transition: fill 0.2s ease-in-out;
  }
`
