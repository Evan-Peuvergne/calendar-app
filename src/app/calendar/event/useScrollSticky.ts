import { useEffect, useRef } from "react"
import type { RefObject } from "react"
import { useMotionValue, useSpring } from "motion/react"
import type { MotionValue } from "motion/react"

export function useScrollSticky(
  eventTop: number,
  eventHeight: number,
  enabled: boolean,
): {
  contentRef: RefObject<HTMLDivElement>
  springOffset: MotionValue<number>
} {
  const contentRef = useRef<HTMLDivElement>(null)
  const rawOffset = useMotionValue(0)
  const springOffset = useSpring(rawOffset, { stiffness: 260, damping: 32 })

  useEffect(() => {
    if (!enabled) return

    const onScroll = () => {
      const contentHeight = contentRef.current?.offsetHeight ?? 60
      const maxOffset = Math.max(0, eventHeight - contentHeight - 24)
      rawOffset.set(Math.max(0, Math.min(window.scrollY - eventTop, maxOffset)))
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [enabled, eventTop, eventHeight, rawOffset])

  return { contentRef, springOffset }
}
