import { cn } from '@/shared/lib/cn'

const tones = {
  pink: 'bg-blush-300 text-ink-900',
  blush: 'bg-blush-200 text-ink-900',
  magenta: 'bg-magenta-500 text-white',
  azure: 'bg-azure-300 text-white',
  dark: 'bg-ink-900 text-white',
  light: 'bg-white/80 text-ink-900',
}

/**
 * Маленькая плашка-метка: "BLOG", "GUIDE", "NEW".
 *
 * @param {object} props
 * @param {'pink' | 'blush' | 'magenta' | 'azure' | 'dark' | 'light'} [props.tone='pink']
 * @param {string} [props.className]
 */
export function Badge({ tone = 'pink', className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-xs px-2 py-1 text-[10px] leading-none tracking-wider',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
