import { ButtonLink } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/heading'
import { Section } from '@/shared/ui/section'
import { Text } from '@/shared/ui/text'

import { HERO_CONTENT } from '../config/content'

/**
 * Первый экран: "Work wonders". Единственный h1 на странице.
 *
 * ≥ lg (как в макете): фото на весь блок, текст поверх слева.
 *   Блок держит пропорции макета 1440 × 770, фото прижато к низу —
 *   верхние 80px снимка уходят "под шапку", ровно как на макете.
 *   lg–xl (1024–1279): шрифт чуть меньше, чтобы текст не наезжал на героиню.
 * < lg: текст сверху на градиенте (цвета верхнего края фото), фото под ним;
 *   верх фото плавно растворяется в градиенте (mask-image), без видимого шва.
 */
export function HeroSection() {
  const { title, subtitle, primaryAction, secondaryAction, image } = HERO_CONTENT

  return (
    <Section
      id="hero"
      spacing="none"
      fluid
      className="bg-linear-to-r from-hero-start to-hero-end lg:flex lg:aspect-[1440/770] lg:flex-col lg:justify-center lg:bg-none"
    >
      <Container className="relative z-10 pt-12 pb-10 sm:pt-16 sm:pb-12 lg:py-0 lg:pb-26">
        <Heading
          as="h1"
          className="text-[2.75rem] leading-none font-normal tracking-[-0.055em] sm:text-6xl xl:text-[5rem]"
        >
          {title}
        </Heading>

        <Text className="mt-6 max-w-[490px] text-lg leading-7 tracking-[0.02em] sm:text-2xl sm:leading-8 lg:text-xl lg:leading-7 xl:mt-7.5 xl:text-2xl xl:leading-8">
          {subtitle}
        </Text>

        <div className="mt-7 flex flex-wrap gap-4 xl:mt-6">
          <ButtonLink href={primaryAction.href} size="lg">
            {primaryAction.label}
          </ButtonLink>
          <ButtonLink href={secondaryAction.href} size="lg" variant="secondary">
            {secondaryAction.label}
          </ButtonLink>
        </div>
      </Container>

      <img
        src={image.src}
        alt={image.alt}
        width={1440}
        height={850}
        fetchPriority="high"
        className="aspect-square w-full [mask-image:linear-gradient(to_bottom,transparent,black_18%)] object-cover object-[58%_50%] sm:aspect-[4/3] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:[mask-image:none] lg:object-bottom"
      />
    </Section>
  )
}
