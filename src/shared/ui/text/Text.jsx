import { cn } from '@/shared/lib/cn'

const sizes = {
  lg: 'text-lg leading-relaxed',
  md: 'text-base leading-relaxed',
  sm: 'text-sm leading-relaxed',
  xs: 'text-xs leading-normal',
}

/**
 * Обычный текст. На тёмном фоне цвет наследуется от Section tone="dark".
 *
 * @param {object} props
 * @param {'p' | 'span' | 'div'} [props.as='p']
 * @param {'lg' | 'md' | 'sm' | 'xs'} [props.size='md']
 * @param {boolean} [props.muted=false] приглушённый цвет
 * @param {string} [props.className]
 */
export function Text({ as: Tag = 'p', size = 'md', muted = false, className, children }) {
  return <Tag className={cn(sizes[size], muted && 'opacity-75', className)}>{children}</Tag>
}
