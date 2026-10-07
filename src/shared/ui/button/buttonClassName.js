import { cn } from '@/shared/lib/cn'

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold whitespace-nowrap ' +
  'transition-colors duration-200 select-none disabled:pointer-events-none disabled:opacity-50'

const variants = {
  // жёлтая CTA: "Try Oneflow free", "Get a demo"
  primary: 'bg-accent-500 text-ink-900 hover:bg-accent-400 active:bg-accent-600',
  // тёмная: "Watch", "Take the tour"
  secondary: 'bg-ink-900 text-white hover:bg-ink-800 active:bg-ink-950',
  // обводка на светлом фоне: "Log in", "Learn more"
  outline: 'border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white',
  // обводка на тёмном фоне
  'outline-light': 'border border-white text-white hover:bg-white hover:text-ink-900',
  // текстовая ссылка-кнопка
  ghost: 'text-ink-900 underline-offset-4 hover:underline',
}

const sizes = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-7 text-base',
}

/**
 * Классы кнопки отдельно — если нужно стилизовать что-то другое "под кнопку".
 *
 * @param {object} [options]
 * @param {'primary' | 'secondary' | 'outline' | 'outline-light' | 'ghost'} [options.variant='primary']
 * @param {'sm' | 'md' | 'lg'} [options.size='md']
 * @param {boolean} [options.fullWidth=false] растянуть на всю ширину
 * @param {string} [options.className]
 */
export function buttonClassName({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
} = {}) {
  return cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className)
}
