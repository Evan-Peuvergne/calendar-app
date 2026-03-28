import { useEffect } from "react"

export function useClickOutside(
  $ref: React.RefObject<HTMLElement | null>,
  func: Function
) {
  const _handleClickOutside = (e: MouseEvent) => {
    const $target = e.target as Node | null
    if ($ref.current && $target && !$ref.current.contains($target)) func()
  }

  useEffect(() => {
    window.addEventListener("click", _handleClickOutside, true)
    return () => window.removeEventListener("click", _handleClickOutside, true)
  })

  return $ref
}
