import { Heading } from '@/shared/ui/heading'
import { Reveal } from '@/shared/ui/reveal'
import { Section } from '@/shared/ui/section'

import { CLIENTS, CLIENTS_TITLE } from '../config/clients'
import { LogoList } from './LogoList'

/** Логотипы дважды в каждой половине ленты — чтобы она не "кончалась" даже на широких экранах */
const TRACK = [...CLIENTS, ...CLIENTS]

/**
 * Полоса с логотипами клиентов: бесконечная лента на всех ширинах.
 * Наведение — лента замирает, логотип под курсором подсвечивается.
 * Края растворяются (mask-image), чтобы логотипы не "обрезались" резко.
 * "Уменьшить движение" — вместо ленты статичный ряд с переносом.
 */
export function ClientsSection() {
  return (
    <Section id="clients" tone="dark" spacing="none" fluid className="py-16 md:py-20">
      <Reveal>
        <Heading
          as="h2"
          className="px-4 text-center text-xl leading-tight tracking-[0.025em] sm:text-[25px] lg:text-[25px]"
        >
          {CLIENTS_TITLE}
        </Heading>
      </Reveal>

      <ul className="sr-only">
        {CLIENTS.map((client) => (
          <li key={client.name}>{client.name}</li>
        ))}
      </ul>

      <Reveal delay={150} className="mx-auto mt-10 max-w-content md:mt-12">
        <div className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] motion-reduce:[mask-image:none]">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none">
            <LogoList clients={TRACK} className="motion-reduce:hidden" />
            <LogoList clients={TRACK} className="motion-reduce:hidden" />
            <LogoList
              clients={CLIENTS}
              className="hidden w-full flex-wrap justify-center gap-y-6 pr-0 motion-reduce:flex"
            />
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
