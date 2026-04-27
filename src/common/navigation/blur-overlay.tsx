import { layer, gradientLayer } from "./blur-overlay.styles"

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
    {colorLayers.map(({ saturate, brightness, height }) => (
      <div
        key={height}
        className={layer}
        style={{
          position: "absolute",
          height: `${height}px`,
          backdropFilter: `saturate(${saturate}) brightness(${brightness})`,
          WebkitBackdropFilter: `saturate(${saturate}) brightness(${brightness})`,
        }}
      />
    ))}
    {blurLayers.map(({ blur, height }) => (
      <div
        key={blur}
        className={layer}
        style={{
          position: "absolute",
          height: `${height}px`,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
        }}
      />
    ))}
    <div className={gradientLayer} style={{ position: "absolute" }} />
  </>
)
