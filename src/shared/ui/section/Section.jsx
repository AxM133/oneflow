import { cn } from '@/shared/lib/cn'

import { Container } from '../container'

const tones = {
  white: 'bg-white text-ink-900',
  dark: 'bg-ink-900 text-white',
  blush: 'bg-blush-100 text-ink-900',
  sky: 'bg-sky-100 text-ink-900',
}

const spacings = {
  none: '',
  sm: 'py-10 md:py-12',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-28',
}

/**
 * Обёртка для каждой секции лендинга: фон, вертикальные отступы, контейнер.
 *
 * @param {object} props
 * @param {string} [props.id] якорь для навигации (#integrations)
 * @param {'white' | 'dark' | 'blush' | 'sky'} [props.tone='white'] фон секции
 * @param {'none' | 'sm' | 'md' | 'lg'} [props.spacing='md'] вертикальные отступы
 * @param {boolean} [props.fluid=false] true — без Container, контент на всю ширину
 * @param {string} [props.className] классы для <section>
 * @param {string} [props.containerClassName] классы для внутреннего Container
 *
 * @example <Section id="integrations" tone="white" spacing="lg">...</Section>
 */
export function Section({
  id,
  tone = 'white',
  spacing = 'md',
  fluid = false,
  className,
  containerClassName,
  children,
}) {
  return (
    <section
      id={id}
      className={cn('relative overflow-hidden', tones[tone], spacings[spacing], className)}
    >
      {fluid ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  )
}
