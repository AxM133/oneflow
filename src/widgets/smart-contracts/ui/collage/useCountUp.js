import { useEffect, useState } from 'react'

import { prefersReducedMotion } from '@/shared/lib/motion'

/**
 * Плавно считает от 0 до target, когда start становится true.
 * С "уменьшить движение" сразу показывает итоговое число.
 */
export function useCountUp(target, start, { duration = 1400, delay = 0 } = {}) {
  const [value, setValue] = useState(0)
  const reduced = prefersReducedMotion()

  useEffect(() => {
    if (!start || reduced) return

    let frame
    let startTime

    const tick = (now) => {
      startTime ??= now + delay
      const progress = Math.min(1, Math.max(0, (now - startTime) / duration))
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, start, duration, delay, reduced])

  if (reduced) return start ? target : 0
  return value
}
