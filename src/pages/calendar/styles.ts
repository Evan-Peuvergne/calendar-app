import styled from "styled-components"

const HOUR_HEIGHT = 128

export const Options = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  gap: 8px;
  position: fixed;
  z-index: 5;
  left: 50%;
  bottom: 0;
  height: 58px;
  transform: translate3d(-50%, 0, 0);
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(4px);
  outline: 1px solid var(--c-stroke-base);
  box-shadow: var(--s-overlay);
  border-radius: 16px 16px 0 0;

  hr {
    display: block;
    height: 24px;
    border-right: 1px solid var(--c-stroke-base);
  }
`

export const Hour = styled.span<{ value: string }>`
  display: block;
  height: ${HOUR_HEIGHT}px;
  position: relative;
  border-top: 1px solid;
  border-image: linear-gradient(
      to right,
      transparent 0px,
      #ececec 64px,
      #ececec calc(100% - 64px),
      transparent 100%
    )
    1;

  &:after {
    display: block;
    position: absolute;
    width: 24px;
    top: -24px;
    left: 28px;
    text-align: right;
    font-size: 12px;
    font-weight: 500;
    color: var(--c-text-disabled);
    content: "${(p) => p.value}";
  }
`

export const Hours = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
`

export const Event = styled.div`
  display: block;
  height: 80px;
  position: relative;
  z-index: 3;
  padding: 16px;
  font-weight: 500;
  color: var(--c-text-neutral);
  border-radius: 12px;
  background: var(--c-fill-base);
  outline: 1px solid var(--c-stroke-base);
  box-shadow: var(--s-block);
  cursor: pointer;

  &:hover {
    outline: 1px solid var(--c-stroke-hover);
  }
`

export const Label = styled.span`
  display: inline-flex;
  height: 32px;
  align-items: center;
  padding: 0 16px;
  font-size: 12px;
  font-weight: 600;
  color: var(--c-text-light);
  border-radius: 20px;
  background: rgba(248, 248, 248, 0.5);
  backdrop-filter: blur(4px);
`

export const Labels = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  top: 120px;
  left: 0;
  padding: 0 48px;
  z-index: 100;
`

export const Day = styled.div`
  padding: 112px 4px 0 4px;
  position: relative;
  border-left: 1px solid #ececec;

  &:last-child {
    border-right: 1px solid #ececec;
  }
`

export const Week = styled.div`
  display: flex;
  padding: 0 64px;
  height: ${HOUR_HEIGHT * 24}px;
  position: relative;

  ${Day} {
    flex: 1;
    z-index: 1;
    position: relative;
  }

  &:before,
  &:after {
    display: block;
    position: fixed;
    z-index: 2;
    left: 0;
    right: 0;
    content: "";
  }

  &:before {
    top: 0;
    height: 288px;
    background: linear-gradient(
      to bottom,
      var(--c-fill-background),
      transparent
    );
  }
  &:after {
    bottom: 0;
    height: 48px;
    background: linear-gradient(to top, var(--c-fill-background), transparent);
  }
`

export const Container = styled.div`
  min-height: 100vh;
  padding-top: 112px;
`
