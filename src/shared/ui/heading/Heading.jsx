import { cn } from '@/shared/lib/cn'

const sizes = {
  // "Press play" — гигантский заголовок
  display: 'text-6xl leading-none sm:text-8xl lg:text-[10rem]',
  // "Work wonders", "Turn signatures into smart contracts"
  xl: 'text-4xl leading-tight sm:text-5xl lg:text-6xl',
  // "Seamless integrations", "Believe your eyes"
  lg: 'text-3xl leading-tight sm:text-4xl lg:text-5xl',
  // "Don't take our word for it..."
  md: 'text-2xl leading-snug sm:text-3xl',
  // заголовки карточек: "Forget friction"
  sm: 'text-lg leading-snug sm:text-xl',
}

/**
 * Заголовок (шрифт Roboto — font-display). На странице ровно один h1 (в Hero), у секций — h2, у карточек — h3.
 *
 * @param {object} props
 * @param {'h1' | 'h2' | 'h3' | 'h4'} [props.as='h2'] семантика — отдельно от размера
 * @param {'display' | 'xl' | 'lg' | 'md' | 'sm'} [props.size='lg']
 * @param {string} [props.className]
 *
 * @example <Heading as="h2" size="lg">Seamless integrations</Heading>
 *
 * Свой размер через className перебивайте на КАЖДОМ брейкпоинте:
 * className="text-xl sm:text-[25px] lg:text-[25px]" — иначе останется lg:text-5xl из size.
 */
export function Heading({ as: Tag = 'h2', size = 'lg', className, children }) {
  return <Tag className={cn('font-display font-normal', sizes[size], className)}>{children}</Tag>
}
