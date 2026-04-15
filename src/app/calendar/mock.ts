export const seeded = (seed: number) => {
  let s = seed
  return () => {
    s |= 0
    s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 0xffffffff
  }
}

export const getMockEvents = (weekStart: Date) => {
  const rand = seeded((weekStart.getTime() / 1000) | 0)
  const count = 5 + Math.floor(rand() * 5) // 5–9 events
  return Array.from({ length: count }, () => ({
    dayIndex: Math.floor(rand() * 7),
    startHour: 8 + Math.floor(rand() * 20) / 2, // 8h–18h, par demi-heure
    duration: (1 + Math.floor(rand() * 3)) / 2, // 0.5h, 1h ou 1.5h
  }))
}
