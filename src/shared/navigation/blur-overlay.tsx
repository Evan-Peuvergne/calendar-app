const blurLayers = Array.from({ length: 10 }, (_, i) => {
  const t = Math.pow((i + 1) / 10, 2)
  return {
    blur: t * 20,
    height: `calc(100% + ${(10 - i) * 11}px)`,
  }
})

const colorLayers = Array.from({ length: 10 }, (_, i) => {
  const t = Math.pow((i + 1) / 10, 0.35)
  return {
    saturate: Math.max(0, 1 - t),
    brightness: 1 + t * 0.55,
    height: `calc(100% + ${(10 - i) * 14}px)`,
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
        height: "calc(100% + 80px)",
        background:
          "linear-gradient(180deg, rgba(248,248,248,0.88), rgba(248,248,248,0.5) 50%, transparent)",
      }}
    />
  </>
)
