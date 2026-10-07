import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Склеивает классы и убирает конфликты Tailwind.
 * cn('px-4 py-2', isActive && 'bg-ink-900', className)
 * Если снаружи передали 'px-6', он перекроет 'px-4' — поэтому все UI-компоненты
 * принимают className и прогоняют его через cn.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
