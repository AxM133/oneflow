import { cn } from '@/shared/lib/cn'

/**
 * Центрирует контент и задаёт боковые отступы. Ширина — токен --container-content.
 *
 * @param {object} props
 * @param {React.ElementType} [props.as='div'] какой тег отрендерить
 * @param {string} [props.className]
 */
export function Container({ as: Tag = 'div', className, children }) {
  return (
    <Tag className={cn('mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </Tag>
  )
}
