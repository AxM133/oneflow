import { useEffect, useState } from 'react'

import { cn } from '@/shared/lib/cn'
import { prefersReducedMotion } from '@/shared/lib/motion'

const iconProps = {
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

function TapSignIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="22.5" cy="9" r="6" />
      <path d="m19.8 9 1.8 1.8 3.4-3.6" />
      <path d="M10 28v-3.5l-3.3-4.4a1.8 1.8 0 0 1 2.8-2.3l1.7 1.9V8.5a1.9 1.9 0 0 1 3.8 0V16l5.4 1.2a2.6 2.6 0 0 1 2 3l-1 4.3V28" />
    </svg>
  )
}

function SmsIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="6" y="9" width="12" height="20" rx="2" />
      <path d="M10.5 25.5h3" />
      <path d="M15 4h12a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 27 15h-6l-3.5 3v-3H15" />
    </svg>
  )
}

function BankIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M4 12 16 5l12 7z" />
      <path d="M7 15v9M12.5 15v9M19.5 15v9M25 15v9M4 27.5h24" />
    </svg>
  )
}

const METHODS = [
  { id: 'esign', label: 'eSIGN', Icon: TapSignIcon },
  { id: 'sms', label: 'SMS', Icon: SmsIcon },
  { id: 'bankid', label: 'BankID', Icon: BankIcon },
]

const AUTO_SWITCH_MS = 2600

/**
 * Карточка "способ подписи". Галочки рисуются по очереди после появления коллажа.
 * Выбранный способ подсвечен; способы переключаются сами, пока пользователь не кликнет по плитке.
 */
export function SignMethodsCard({ isVisible }) {
  const [activeId, setActiveId] = useState(METHODS[0].id)
  const [isPinned, setIsPinned] = useState(false)

  useEffect(() => {
    if (!isVisible || isPinned || prefersReducedMotion()) return

    const timer = setInterval(() => {
      setActiveId((current) => {
        const index = METHODS.findIndex((method) => method.id === current)
        return METHODS[(index + 1) % METHODS.length].id
      })
    }, AUTO_SWITCH_MS)

    return () => clearInterval(timer)
  }, [isVisible, isPinned])

  const choose = (id) => {
    setActiveId(id)
    setIsPinned(true)
  }

  return (
    <div className="flex size-full gap-[1.8cqw] rounded-[5px] bg-white p-[2.2cqw] shadow-xl shadow-black/25">
      {METHODS.map(({ id, label, Icon }, index) => {
        const isActive = id === activeId

        return (
          <div
            key={id}
            onClick={() => choose(id)}
            className={cn(
              'relative flex flex-1 cursor-pointer flex-col items-center justify-between rounded-[3px] pt-[5.5cqw] pb-[1.6cqw] text-white transition-all duration-500',
              isActive ? 'scale-[1.04] bg-magenta-500 shadow-lg' : 'bg-ink-900 hover:bg-ink-800',
            )}
          >
            <span className="absolute top-[1.4cqw] left-[1.4cqw] flex size-[3cqw] items-center justify-center rounded-[2px] border-[1.5px] border-white">
              <svg viewBox="0 0 12 12" className="size-full" fill="none" aria-hidden>
                <path
                  d="m2.5 6.2 2.3 2.3 4.7-5"
                  pathLength="1"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="1"
                  style={{ transitionDelay: `${700 + index * 250}ms` }}
                  className="transition-[stroke-dashoffset] duration-500 [stroke-dashoffset:1] group-data-[visible=true]/collage:[stroke-dashoffset:0] motion-reduce:transition-none motion-reduce:[stroke-dashoffset:0]"
                />
              </svg>
            </span>

            <Icon className="w-[55%]" />
            <span className="text-[1.8cqw] font-semibold tracking-wider">{label}</span>
          </div>
        )
      })}
    </div>
  )
}
