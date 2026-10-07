import { cn } from '@/shared/lib/cn'
import { useInView } from '@/shared/lib/use-in-view'

/**
 * Плавно проявляет содержимое снизу вверх, когда оно появляется на экране.
 * С "уменьшить движение" показывает сразу, без анимации.
 *
 * @param {object} props
 * @param {number} [props.delay=0] задержка в мс — для "лесенки" из нескольких Reveal
 * @param {React.ElementType} [props.as='div']
 * @param {string} [props.className]
 *
 * @example
 * <Reveal><Heading>…</Heading></Reveal>
 * <Reveal delay={150}><Text>…</Text></Reveal>
 */
export function Reveal({ as: Tag = 'div', delay = 0, className, children }) {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition duration-700 ease-out motion-reduce:transition-none',
        inView
          ? 'translate-y-0 opacity-100'
          : 'translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
