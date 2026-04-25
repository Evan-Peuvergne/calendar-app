import { useEffect, useRef } from "react"
import type { RefObject } from "react"
import { useMotionValue } from "motion/react"
import type { MotionValue } from "motion/react"

// Higher = faster. Time constant ≈ 1/k seconds (63% of the way there in that time).
const LERP_K = 14

export function useScrollSticky(
  eventTop: number,
  eventHeight: number,
  enabled: boolean,
): {
  contentRef: RefObject<HTMLDivElement | null>
  offset: MotionValue<number>
} {
  const contentRef = useRef<HTMLDivElement>(null)
  const offset = useMotionValue(0)
  const stateRef = useRef({ target: 0, rafId: 0, lastTime: 0 })

  useEffect(() => {
    if (!enabled) return

    const state = stateRef.current

    const tick = (time: number) => {
      const dt = Math.min((time - state.lastTime) / 1000, 0.1)
      state.lastTime = time

      const current = offset.get()
      const next = current + (state.target - current) * (1 - Math.exp(-LERP_K * dt))

      if (Math.abs(state.target - next) > 0.2) {
        offset.set(next)
        state.rafId = requestAnimationFrame(tick)
      } else {
        offset.set(state.target)
        state.rafId = 0
      }
    }

    const onScroll = () => {
      const contentHeight = contentRef.current?.offsetHeight ?? 60
      const maxOffset = Math.max(0, eventHeight - contentHeight - 24)
      state.target = Math.max(0, Math.min(window.scrollY - eventTop, maxOffset))

      if (!state.rafId) {
        state.lastTime = performance.now()
        state.rafId = requestAnimationFrame(tick)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(state.rafId)
      state.rafId = 0
    }
  }, [enabled, eventTop, eventHeight, offset])

  return { contentRef, offset }
}
