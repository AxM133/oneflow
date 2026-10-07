import { useCountUp } from './useCountUp'

const RADIUS = 38
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

/** Доли диаграммы (по часовой от 12 часов), как в макете: красный, синий, остальное — пурпурный */
const SEGMENTS = [
  { color: 'var(--color-coral-500)', start: 0.02, length: 0.08, delay: 300 },
  { color: 'var(--color-azure-500)', start: 0.1, length: 0.06, delay: 500 },
  { color: 'var(--color-magenta-500)', start: 0.16, length: 0.86, delay: 700 },
]

/** Карточка с кольцевой диаграммой: доли "дорисовываются", число считает до 87%. */
export function DonutCard({ isVisible }) {
  const value = useCountUp(87, isVisible, { delay: 700 })

  return (
    <div className="relative flex size-full items-center justify-center rounded-[3px] bg-white shadow-xl shadow-black/25">
      <svg viewBox="0 0 100 100" className="size-[84%] -rotate-90" aria-hidden>
        {SEGMENTS.map((segment) => (
          <circle
            key={segment.color}
            cx="50"
            cy="50"
            r={RADIUS}
            fill="none"
            stroke={segment.color}
            strokeWidth="15"
            strokeDasharray={`${isVisible ? segment.length * CIRCUMFERENCE : 0} ${CIRCUMFERENCE}`}
            strokeDashoffset={-segment.start * CIRCUMFERENCE}
            style={{ transitionDelay: `${segment.delay}ms` }}
            className="transition-[stroke-dasharray] duration-1000 ease-out motion-reduce:transition-none"
          />
        ))}
      </svg>
      <span className="absolute font-display text-[5.6cqw] leading-none text-ink-900 tabular-nums">
        {value}%
      </span>
    </div>
  )
}
