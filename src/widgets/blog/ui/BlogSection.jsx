import { ArticleCard, articles } from '@/entities/article'
import { ButtonLink } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'
import { Reveal } from '@/shared/ui/reveal'
import { Section } from '@/shared/ui/section'

/** "And for our next trick…": большая статья на всю ширину + три карточки под ней. */
export function BlogSection() {
  const [featured, ...rest] = articles

  return (
    <Section id="blog" spacing="lg">
      <Reveal className="flex flex-wrap items-center justify-between gap-6">
        <Heading className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          And for our next trick…
        </Heading>
        <ButtonLink href="#blog">Visit our blog</ButtonLink>
      </Reveal>

      <Reveal delay={100} className="mt-10 lg:mt-12">
        <ArticleCard article={featured} />
      </Reveal>

      <ul className="mt-6 grid gap-6 md:grid-cols-3">
        {rest.map((article, index) => (
          <Reveal as="li" key={article.id} delay={150 + index * 100}>
            <ArticleCard article={article} />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
