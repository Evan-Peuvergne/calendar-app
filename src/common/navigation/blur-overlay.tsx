import { BlurLayer, ColorLayer, GradientLayer } from "./blur-overlay.styles"

const blurLayers = Array.from({ length: 10 }, (_, i) => ({
  blur: Math.pow((i + 1) / 10, 2) * 20,
  height: 152 - i * 3,
}))

const colorLayers = Array.from({ length: 10 }, (_, i) => {
  const t = Math.pow((i + 1) / 10, 0.35)
  return {
    saturate: Math.max(0, 1 - t),
    brightness: 1 + t * 0.55,
    height: 152 - i * 3,
  }
})

export const BlurOverlay = () => (
  <>
    {colorLayers.map((props) => <ColorLayer key={props.height} {...props} />)}
    {blurLayers.map((props) => <BlurLayer key={props.blur} {...props} />)}
    <GradientLayer />
  </>
)
