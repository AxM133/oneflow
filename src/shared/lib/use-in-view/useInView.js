import { useEffect, useRef, useState } from 'react'

/**
 * Следит, появился ли элемент на экране (IntersectionObserver).
 * По умолчанию срабатывает один раз — для анимаций появления при скролле.
 *
 * @param {object} [options]
 * @param {number} [options.threshold=0.25] какая доля элемента должна быть видна (0..1)
 * @param {boolean} [options.once=true] перестать следить после первого появления
 * @returns {[React.RefObject, boolean]} ref для элемента и флаг "виден"
 *
 * @example
 * const [ref, inView] = useInView()
 * <div ref={ref} data-visible={inView}>...</div>
 */
export function useInView({ threshold = 0.25, once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, inView]
}
