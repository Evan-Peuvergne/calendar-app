import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`

  // Global

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    appearance: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }


  // Root

  html, body{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;

    --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

    scrollbar-gutter: stable;
  }

  body{
    background: var(--c-fill-background);
  }

  #portal {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 999;
  }


  // Styles

  button{
    background: none;
  }

  label{
    font: var(--f-label);
  }


  // Scroll

  *::-webkit-scrollbar {
    display: block;
    width: 16px;
    background: #00000000;
  }
  *::-webkit-scrollbar-button {
    display: none;
  }
  *::-webkit-scrollbar-track {
    background-color: #00000000;
  }
  *::-webkit-scrollbar-track-piece {
    background-color: #00000000;
  }
  *::-webkit-scrollbar-thumb {
    background: red;
    background-color: #00000000;
    border: 4px solid transparent;
    box-shadow: 4px 0 0 4px var(--c-stroke-base) inset;
    border-radius: 24px;
    transition: box-shadow 0.2s ease;
    cursor: pointer;
  }

  .scrollable{
    --scrollbar-color: transparent;

    &:hover{
      --scrollbar-color: var(--c-stroke-base);
    }

    &::-webkit-scrollbar-thumb{
      box-shadow: 4px 0 0 4px var(--scrollbar-color) inset;
    }
  }






  // Variables

  :root{
    --c-fill-base: hsla(0, 0%, 100%, 1);
    --c-fill-depth: hsla(0, 0%, 99%, 1);
    --c-fill-background: hsla(0, 0%, 97%, 1);
    --c-fill-disabled: hsla(0, 0%, 93%, 1);
    --c-fill-contrast: hsla(0, 0%, 22%, 0.88);

    --c-fill-neutral: hsla(0, 0%, 44%, 1);
    --c-fill-neutral-hover: hsla(0, 0%, 31%, 1);
    --c-fill-neutral-active: hsla(0, 0%, 22%, 1);
    --c-fill-action: hsla(205, 90%, 35%, 1);
    --c-fill-action-hover: hsla(205, 90%, 28%, 1);
    --c-fill-action-active: hsla(205, 90%, 24%, 1);
    --c-fill-danger: hsla(6, 84%, 47%, 1);
    --c-fill-danger-hover: hsla(5, 84%, 40%, 1);
    --c-fill-danger-active: hsla(5, 85%, 34%, 1);

    --c-text-base: hsla(0, 0%, 22%, 1);
    --c-text-light: hsla(0, 0%, 44%, 1);
    --c-text-disabled: hsla(0, 0%, 64%, 1);
    --c-text-contrast: hsla(0, 0%, 100%, 0.92);
    --c-text-contrast-light: hsla(0, 0%, 100%, 0.82);
    --c-text-contrast-disabled: hsla(0, 0%, 100%, 0.27);
    --c-text-neutral: hsla(0, 0%, 31%, 1);
    --c-text-action: hsla(205, 90%, 28%, 1);
    --c-text-danger: hsla(5, 85%, 34%, 1);

    --c-stroke-base: hsla(0, 0%, 6%, 0.12);
    --c-stroke-hover: hsla(0, 0%, 6%, 0.22);
    --c-stroke-action: hsla(205, 90%, 35%, 1);
    --c-stroke-danger: hsla(5, 85%, 34%, 1);

    --c-opacify-base: hsla(0, 0%, 6%, 0.04);
    --c-opacify-hover: hsla(0, 0%, 6%, 0.08);
    --c-opacify-active: hsla(0, 0%, 6%, 0.16);
    --c-opacify-contrast-hover: hsla(0, 0%, 6%, 0.22);
    --c-opacify-contrast-active: hsla(0, 0%, 6%, 0.38);


    --f-base: 400 16px/24px var(--font);
    --f-label: 500 16px/24px var(--font);


    --s-raised: 0px 1px 3px 0px rgba(15, 15, 15, 0.06);
    --s-block: 0px 1px 8px 0px rgba(15, 15, 15, 0.02), 0px 1px 3px 0px rgba(15, 15, 15, 0.08);
    --s-overlay: 0px 1px 12px 0px rgba(15, 15, 15, 0.08), 0px 1px 4px 0px rgba(15, 15, 15, 0.06);


    --r-container: 8px;
    --r-control: 6px;
  }
`
