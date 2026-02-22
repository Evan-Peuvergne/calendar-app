import styled from "styled-components"

export const Container = styled.i`
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  font-size: 1em;
  line-height: inherit;
  overflow: visible;

  &:before {
    display: inline-block;
    width: 0px;
    content: "\u00A0";
    visibility: hidden;
  }

  svg {
    display: inline-block;
    overflow: visible;

    path {
      shape-rendering: geometricPrecision;
      transition: fill 0.2s ease-in-out;
    }
  }
`
