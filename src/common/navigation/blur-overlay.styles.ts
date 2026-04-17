import { styled } from "@linaria/react"

const layerBase = `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  mask-image: linear-gradient(180deg, black, transparent);
  -webkit-mask-image: linear-gradient(180deg, black, transparent);
`

export const BlurLayer = styled.div<{ blur: number; height: number }>`
  ${layerBase}
  height: ${({ height }) => height}px;
  backdrop-filter: blur(${({ blur }) => blur}px);
  -webkit-backdrop-filter: blur(${({ blur }) => blur}px);
`

export const ColorLayer = styled.div<{ saturate: number; brightness: number; height: number }>`
  ${layerBase}
  height: ${({ height }) => height}px;
  backdrop-filter: saturate(${({ saturate }) => saturate}) brightness(${({ brightness }) => brightness});
  -webkit-backdrop-filter: saturate(${({ saturate }) => saturate}) brightness(${({ brightness }) => brightness});
`

export const GradientLayer = styled.div`
  ${layerBase}
  height: 152px;
  background: linear-gradient(180deg, var(--c-fill-background), transparent);
`
