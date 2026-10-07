import { cn } from '@/shared/lib/cn'
import { ButtonLink } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'
import { Reveal } from '@/shared/ui/reveal'
import { Section } from '@/shared/ui/section'
import { Text } from '@/shared/ui/text'

import { INTEGRATION_COLUMNS, INTEGRATIONS_CONTENT } from '../config/integrations'

/**
 * "Seamless integrations": текст слева, логотипы справа в три колонки зигзагом.
 * Боковые колонки опущены относительно средней; логотипы плавно парят со сдвигом фазы.
 */
export function IntegrationsSection() {
  const { title, text, action } = INTEGRATIONS_CONTENT

  return (
    <Section
      id="integrations"
      spacing="lg"
      containerClassName="grid items-center gap-16 lg:grid-cols-2"
    >
      <Reveal>
        <Heading className="lg:text-6xl">{title}</Heading>
        <Text size="lg" className="mt-6 max-w-sm tracking-[0.02em]">
          {text}
        </Text>
        <ButtonLink href={action.href} className="mt-6">
          {action.label}
        </ButtonLink>
      </Reveal>

      <Reveal delay={150} className="mx-auto grid grid-cols-3 gap-x-12 sm:gap-x-20 lg:gap-x-24">
        {INTEGRATION_COLUMNS.map((column, columnIndex) => (
          <ul
            key={columnIndex}
            className={cn('flex flex-col gap-12 sm:gap-20', columnIndex !== 1 && 'mt-12 sm:mt-20')}
          >
            {column.map((integration, index) => (
              <li
                key={integration.logo}
                style={{ animationDelay: `${-(columnIndex * 2 + index * 1.3)}s` }}
                className="motion-safe:animate-float"
              >
                <img
                  src={integration.logo}
                  alt={integration.name}
                  width={72}
                  height={72}
                  loading="lazy"
                  className="size-14 object-contain transition-transform duration-300 hover:scale-110 sm:size-18"
                />
              </li>
            ))}
          </ul>
        ))}
      </Reveal>
    </Section>
  )
}
