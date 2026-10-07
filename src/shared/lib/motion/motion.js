/**
 * true, если в системе включено "уменьшить движение".
 * Для CSS-анимаций используйте классы motion-safe: / motion-reduce:,
 * а эту функцию — для анимаций на JS (счётчики, автопереключение, параллакс).
 */
export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}
