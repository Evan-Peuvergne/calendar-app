const blurLayers = Array.from({ length: 10 }, (_, i) => {
  const t = Math.pow((i + 1) / 10, 2)
  return {
    blur: t * 20,
    height: `${152 - i * 3}px`,
  }
})

const colorLayers = Array.from({ length: 10 }, (_, i) => {
  const t = Math.pow((i + 1) / 10, 0.35)
  return {
    saturate: Math.max(0, 1 - t),
    brightness: 1 + t * 0.55,
    height: `${152 - i * 3}px`,
  }
})

const layerStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  maskImage: "linear-gradient(180deg, black, transparent)",
  WebkitMaskImage: "linear-gradient(180deg, black, transparent)",
  pointerEvents: "none",
}

export const BlurOverlay = () => (
  <>
    {colorLayers.map(({ saturate, brightness, height }) => (
      <div
        key={height}
        style={{
          ...layerStyle,
          height,
          backdropFilter: `saturate(${saturate}) brightness(${brightness})`,
          WebkitBackdropFilter: `saturate(${saturate}) brightness(${brightness})`,
        }}
      />
    ))}

    {blurLayers.map(({ blur, height }) => (
      <div
        key={blur}
        style={{
          ...layerStyle,
          height,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
        }}
      />
    ))}

    <div
      style={{
        ...layerStyle,
        height: "152px",
        background:
          "linear-gradient(180deg, var(--c-fill-background), transparent)",
      }}
    />
  </>
)
