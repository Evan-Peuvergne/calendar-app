import { styled } from "@linaria/react"

export const Thumb = styled.span`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 14px;
  border-radius: 10px;
  background-color: rgba(15, 15, 15, 0.12);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &[data-checked="true"] {
    background-color: #0968ac;
  }

  &:after {
    position: absolute;
    display: block;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 10px;
    content: "";
    background: #fff;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
    border-radius: 100px;
    transition: transform 0.2s ease;
  }
  &[data-checked="true"]::after {
    transform: translate3d(10px, 0, 0);
  }
`
