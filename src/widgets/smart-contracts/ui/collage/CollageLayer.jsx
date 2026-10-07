import { cn } from '@/shared/lib/cn'

/**
 * Один слой коллажа. Три вложенных обёртки, чтобы анимации не перебивали друг друга (у каждой свой transform):
 *   1. позиция + параллакс за мышью (CSS-переменные --px/--py от ContractCollage);
 *   2. появление при скролле (data-visible на ContractCollage);
 *   3. бесконечное "парение".
 *
 * @param {object} props
 * @param {string} props.className позиция и размер в % от коллажа (left-[..%] top-[..%] w-[..%])
 * @param {number} [props.depth=0] насколько px слой смещается за мышью — чем "ближе", тем больше
 * @param {number} [props.delay=0] задержка появления, мс
 * @param {boolean} [props.float=false] парить вверх-вниз
 * @param {number} [props.floatDelay=0] сдвиг фазы парения, с — чтобы слои не двигались синхронно
 */
export function CollageLayer({
  className,
  depth = 0,
  delay = 0,
  float = false,
  floatDelay = 0,
  children,
}) {
  return (
    <div
      className={cn('absolute transition-transform duration-500 ease-out', className)}
      style={{
        transform: `translate3d(calc(var(--px, 0) * ${depth}px), calc(var(--py, 0) * ${depth}px), 0)`,
      }}
    >
      <div
        style={{ transitionDelay: `${delay}ms` }}
        className={cn(
          'size-full translate-y-6 scale-90 opacity-0 transition duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]',
          'group-data-[visible=true]/collage:translate-y-0 group-data-[visible=true]/collage:scale-100 group-data-[visible=true]/collage:opacity-100',
          'motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none',
        )}
      >
        <div
          style={float ? { animationDelay: `${floatDelay}s` } : undefined}
          className={cn('size-full', float && 'motion-safe:animate-float')}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
