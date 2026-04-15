import styled from "styled-components"

export const Time = styled.span`
  display: block;
  font-size: 14px;
  line-height: 20px;
  color: rgba(15, 15, 15, 0.48);
`

export const Title = styled.span`
  display: block;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: #246a54;

  & + ${Time} {
    margin-top: 4px;
  }
`

export const Container = styled.div<{ active?: boolean }>`
  display: block;
  position: relative;
  z-index: 3;
  padding: 12px 12px 12px 12px;
  border-radius: 12px;
  background: var(--c-fill-base);
  background:
    radial-gradient(
      126.03% 93.63% at 8.16% 12.64%,
      rgba(57, 167, 132, 0.08) 0%,
      rgba(57, 167, 132, 0.04) 100%
    ),
    var(--colors-lightlucent-70, rgba(255, 255, 255, 0.78));
  cursor: pointer;

  &:before,
  &:after {
    display: block;
    position: absolute;
    z-index: -1;
    content: "";
    border-radius: 12px;
  }

  &:before {
    inset: -1px;
    border-radius: 13px;
    background: var(--c-stroke-base);
    box-shadow: var(--s-raised);
  }
  &:after {
    inset: 0;
    background:
      radial-gradient(
        126.03% 93.63% at 8.16% 12.64%,
        rgba(57, 167, 132, 0.08) 0%,
        rgba(57, 167, 132, 0.04) 100%
      ),
      var(--c-fill-base);
    transition: background 0.2s ease;
  }

  &:hover:before {
    background:
      radial-gradient(
        126.03% 93.63% at 8.16% 12.64%,
        rgb(51, 103, 86, 0.8) 0%,
        rgba(43, 87, 73, 0.4) 100%
      ),
      var(--colors-lightlucent-70, rgba(255, 255, 255, 0.78));
  }
  &:hover:after {
    background:
      radial-gradient(
        126.03% 93.63% at 8.16% 12.64%,
        rgba(57, 167, 132, 0.08) 0%,
        rgba(57, 167, 132, 0.04) 100%
      ),
      #f8f8f8;
  }

  ${(p) =>
    p.active &&
    `
    &:before{
    inset: -2px;
    border-radius: 14px;
    background:
        radial-gradient(
        126.03% 93.63% at 8.16% 12.64%,
        rgb(51, 103, 86, 0.8) 0%,
        rgba(43, 87, 73, 0.4) 100%
      ),
      var(--colors-lightlucent-70, rgba(255, 255, 255, 0.78));
    }
  `}
`
