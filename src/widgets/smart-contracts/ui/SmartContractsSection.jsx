import { Reveal } from '@/shared/ui/reveal'
import { Section } from '@/shared/ui/section'

import { ProductTabs } from './ProductTabs'
import { SmartContractsIntro } from './SmartContractsIntro'

/** Тёмная секция: "Turn e-signatures into smart contracts" + панель с табами продукта. */
export function SmartContractsSection() {
  return (
    <Section
      id="smart-contracts"
      tone="dark"
      spacing="none"
      className="pt-20 pb-24 lg:pt-28 lg:pb-32"
    >
      <SmartContractsIntro />

      <Reveal className="mt-20 lg:mt-28">
        <ProductTabs />
      </Reveal>
    </Section>
  )
}
