import { cn } from '@/shared/lib/cn'

/** Жёлтый кружок "Aa" — символ редактирования текста */
export function TypeBubble() {
  return (
    <div className="flex size-full items-center justify-center rounded-full bg-accent-500 font-display text-[3.6cqw] font-bold text-ink-900 shadow-xl shadow-black/30">
      Aa
    </div>
  )
}

/** Волнистая "печать" для зубчатого края: 24 вершины попеременно на радиусах 15 и 13 */
const SEAL_POINTS = Array.from({ length: 24 }, (_, index) => {
  const angle = (index / 24) * Math.PI * 2
  const radius = index % 2 === 0 ? 15 : 13
  return `${(24 + radius * Math.cos(angle)).toFixed(2)},${(24 + radius * Math.sin(angle)).toFixed(2)}`
}).join(' ')

/** Жёлтая печать "проверено": зубчатая рамка медленно вращается, галочка стоит на месте */
export function VerifiedSeal() {
  return (
    <div className="relative size-full rounded-full bg-accent-500 shadow-xl shadow-black/30">
      <svg
        viewBox="0 0 48 48"
        className="absolute inset-0 size-full motion-safe:animate-spin-slow"
        aria-hidden
      >
        <polygon
          points={SEAL_POINTS}
          fill="none"
          stroke="var(--color-ink-900)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
      <svg viewBox="0 0 48 48" className="absolute inset-0 size-full" aria-hidden>
        <path
          d="m18.5 24.5 3.8 3.8 7.4-8"
          fill="none"
          stroke="var(--color-ink-900)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

const SPARKLE_SHAPES = {
  plus: <path d="M12 3v18M3 12h18" />,
  cross: <path d="m5 5 14 14M19 5 5 19" />,
  dots: (
    <g fill="currentColor" stroke="none">
      <circle cx="7" cy="7" r="2" />
      <circle cx="17" cy="7" r="2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </g>
  ),
  ring: <circle cx="12" cy="12" r="8" strokeDasharray="2.5 3" />,
}

/** Маленькая мерцающая искра. shape: plus | cross | dots | ring */
export function Sparkle({ shape, className, style }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      className={cn('size-full text-white motion-safe:animate-twinkle', className)}
      style={style}
      aria-hidden
    >
      {SPARKLE_SHAPES[shape]}
    </svg>
  )
}
