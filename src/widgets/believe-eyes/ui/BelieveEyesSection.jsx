import { ButtonLink } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'
import { Section } from '@/shared/ui/section'
import { Text } from '@/shared/ui/text'

import { BELIEVE_EYES } from '../config/believe-eyes'

export function BelieveEyesSection() {
  return (
    <Section
      id="believe-eyes"
      tone="dark"
      spacing="none"
      className="relative overflow-hidden"
      containerClassName="relative flex min-h-[520px] items-center py-16 sm:min-h-[560px] lg:min-h-[640px]"
    >
      <img
        src={BELIEVE_EYES.image}
        alt={BELIEVE_EYES.imageAlt}
        className="absolute inset-0 size-full object-cover object-[70%_center] lg:object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-ink-900/90 via-ink-900/50 to-ink-900/20 lg:bg-linear-to-r lg:from-ink-900/80 lg:via-ink-900/30 lg:to-transparent"
      />

      <div className="relative max-w-md">
        <Heading as="h2" size="xl" className="text-blush-100">
          {BELIEVE_EYES.title}
        </Heading>
        <Text size="lg" className="mt-4 text-white">
          {BELIEVE_EYES.text}
        </Text>
        <ButtonLink href={BELIEVE_EYES.buttonHref} className="mt-8">
          {BELIEVE_EYES.buttonText}
        </ButtonLink>
      </div>
    </Section>
  )
}
