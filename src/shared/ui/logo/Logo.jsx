import { cn } from '@/shared/lib/cn'

/**
 * Логотип-вордмарк "oneflow".
 *
 * @param {object} props
 * @param {'dark' | 'light'} [props.tone='dark'] dark — на светлом фоне, light — на тёмном
 * @param {string} [props.href='/']
 * @param {string} [props.className]
 */
export function Logo({ tone = 'dark', href = '/', className }) {
  return (
    <a
      href={href}
      aria-label="Oneflow — home"
      className={cn(
        'inline-flex items-baseline text-2xl font-bold tracking-tight lowercase',
        tone === 'dark' ? 'text-ink-900' : 'text-white',
        className,
      )}
    >
      oneflow
      <span className="ml-0.5 inline-block size-1.5 rounded-full bg-accent-500" aria-hidden />
    </a>
  )
}
