import { ButtonLink } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'
import { Reveal } from '@/shared/ui/reveal'
import { Text } from '@/shared/ui/text'

import { INTRO_CONTENT } from '../config/content'
import { ContractCollage } from './collage/ContractCollage'

/**
 * "Turn e-signatures into smart contracts" + интерактивная иллюстрация.
 * ≥ lg: две колонки (текст | коллаж до 520px), выровнены по центру — ничего не наезжает друг на друга.
 * < lg: коллаж под текстом.
 */
export function SmartContractsIntro() {
  const { title, description, action } = INTRO_CONTENT

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16">
      <div>
        <Reveal>
          <Heading
            as="h2"
            className="text-[2.75rem] leading-none text-blush-100 sm:text-6xl lg:max-w-[340px] lg:text-7xl"
          >
            {title.before}{' '}
            <span className="relative">
              <span aria-hidden className="absolute left-0">
                {title.struck}
              </span>
              {title.word}
            </span>{' '}
            {title.after}
          </Heading>
        </Reveal>

        <Reveal delay={120}>
          <Text className="mt-9 max-w-[530px] text-lg leading-7 tracking-[0.02em] text-white sm:text-xl">
            {description}
          </Text>
        </Reveal>

        <Reveal delay={240} className="mt-6">
          <ButtonLink href={action.href} size="lg">
            {action.label}
          </ButtonLink>
        </Reveal>
      </div>

      <ContractCollage className="mx-auto max-w-[440px] lg:max-w-none" />
    </div>
  )
}
