import { Heading } from '@/shared/ui/heading'
import { Section } from '@/shared/ui/section'

import { CLIENTS, CLIENTS_TITLE } from '../config/clients'
import { LogoList } from './LogoList'

/**
 * Полоса с логотипами клиентов.
 * < lg: бесконечная бегущая строка (два одинаковых ряда, сдвиг на 50% — см. animate-marquee).
 * ≥ lg: статичный ряд по центру, копия скрыта.
 * Если у пользователя включено "уменьшить движение" — вместо анимации обычный горизонтальный скролл.
 */
export function ClientsSection() {
  return (
    <Section id="clients" tone="dark" spacing="sm" fluid>
      <Heading as="h2" size="sm" className="px-4 text-center font-normal">
        {CLIENTS_TITLE}
      </Heading>

      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:overflow-x-auto lg:[mask-image:none]">
        <div className="flex w-max animate-marquee motion-reduce:animate-none lg:mx-auto lg:animate-none">
          <LogoList clients={CLIENTS} />
          <LogoList clients={CLIENTS} hidden className="motion-reduce:hidden lg:hidden" />
        </div>
      </div>
    </Section>
  )
}
