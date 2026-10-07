import { Heading } from '@/shared/ui/heading'
import { Reveal } from '@/shared/ui/reveal'
import { Section } from '@/shared/ui/section'

import { PLATFORM_FEATURES, PLATFORM_TITLE } from '../config/features'
import { FeatureBlock } from './FeatureBlock'

export function PlatformSection() {
  return (
    <Section
      id="platform"
      tone="blush"
      spacing="lg"
      className="relative overflow-hidden"
      containerClassName="relative"
    >
      {/* Декор: градиентная «волна» (только на lg+, на мобилке мешает тексту) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-[8%] hidden h-full w-[40%] rotate-[-12deg] rounded-full bg-linear-to-b from-orange-300/70 via-pink-300/60 to-sky-300/70 blur-3xl lg:block"
      />

      {/* Декор: рука снизу слева */}
      <img
        src="/images/platform/hand.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 hidden w-48 lg:block xl:w-64"
      />

      <Heading as="h2" size="lg" className="relative mx-auto max-w-2xl text-center">
        {PLATFORM_TITLE}
      </Heading>

      <div className="relative mt-12 flex flex-col gap-12 lg:mt-16 lg:gap-16 lg:pb-24">
        {PLATFORM_FEATURES.map((feature, index) => (
          <Reveal key={feature.id} delay={index * 100}>
            <FeatureBlock feature={feature} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
