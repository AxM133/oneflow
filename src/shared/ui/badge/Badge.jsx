import { cn } from '@/shared/lib/cn'

const tones = {
  pink: 'bg-blush-300 text-ink-900',
  dark: 'bg-ink-900 text-white',
  light: 'bg-white/80 text-ink-900',
}

/**
 * Маленькая плашка-метка: "BLOG", "GUIDE", "NEW".
 *
 * @param {object} props
 * @param {'pink' | 'dark' | 'light'} [props.tone='pink']
 * @param {string} [props.className]
 */
export function Badge({ tone = 'pink', className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
