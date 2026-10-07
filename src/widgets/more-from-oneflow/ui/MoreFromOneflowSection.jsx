import { ButtonLink } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'
import { Reveal } from '@/shared/ui/reveal'
import { Section } from '@/shared/ui/section'
import { Text } from '@/shared/ui/text'

import { MORE_ITEMS, MORE_TITLE } from '../config/items'

/** "More from Oneflow": две промо-карточки с картинкой, подписью и кнопкой. */
export function MoreFromOneflowSection() {
  return (
    <Section id="more-from-oneflow" spacing="lg">
      <Reveal>
        <Heading className="text-3xl font-bold sm:text-4xl lg:text-5xl">{MORE_TITLE}</Heading>
      </Reveal>

      <ul className="mt-10 grid gap-12 md:grid-cols-2 md:gap-8 lg:mt-12">
        {MORE_ITEMS.map((item, index) => (
          <Reveal as="li" key={item.id} delay={index * 120}>
            <article className="group flex flex-col items-center text-center">
              <div className="w-full overflow-hidden rounded-sm">
                <img
                  src={item.image}
                  alt=""
                  width={1440}
                  height={810}
                  loading="lazy"
                  className="aspect-[560/314] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <Text size="sm" className="mt-4">
                {item.caption}
              </Text>
              <Heading as="h3" className="mt-3 max-w-md text-2xl sm:text-3xl lg:text-3xl">
                {item.title}
              </Heading>
              <ButtonLink href={item.href} className="mt-6">
                Find out more
              </ButtonLink>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
