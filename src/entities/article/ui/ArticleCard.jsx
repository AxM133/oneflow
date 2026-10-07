import { cn } from '@/shared/lib/cn'
import { Badge } from '@/shared/ui/badge'
import { ButtonLink } from '@/shared/ui/button'

/** Строка "Тема | 11 min read" внизу карточки */
function Meta({ topic, readTime, className }) {
  if (!topic) return null
  return (
    <p className={cn('mt-auto pt-6 text-xs tracking-[0.02em]', className)}>
      {topic}
      <span className="mx-2 opacity-50">|</span>
      {readTime}
    </p>
  )
}

/** Большая карточка на всю ширину: текст слева, картинка справа (на мобилке — сверху) */
function FeaturedCard({ article }) {
  return (
    <a
      href={article.href}
      className="group grid overflow-hidden rounded-sm bg-blush-100 text-ink-900 md:grid-cols-2"
    >
      <div className="flex flex-col p-8 md:order-none md:p-10 lg:p-12">
        <Badge tone="magenta" className="self-start">
          {article.category}
        </Badge>
        <h3 className="mt-8 max-w-[420px] font-display text-3xl leading-tight sm:text-4xl lg:text-[40px]">
          {article.title}
        </h3>
        <Meta topic={article.topic} readTime={article.readTime} />
      </div>
      <div className="order-first overflow-hidden md:order-none">
        <img
          src={article.image}
          alt=""
          loading="lazy"
          className="mx-auto h-64 w-auto object-contain transition-transform duration-700 group-hover:scale-105 md:h-full md:max-h-[470px]"
        />
      </div>
    </a>
  )
}

/** Синяя карточка истории клиента: название компании по центру + кнопка */
function StoryCard({ article }) {
  return (
    <div className="flex min-h-[444px] flex-col items-center rounded-sm bg-azure-700 p-8 text-center text-white">
      <Badge tone="azure">{article.category}</Badge>
      <p className="my-auto font-display text-4xl">{article.title}</p>
      <ButtonLink href={article.href} variant="outline-light">
        Read full story
      </ButtonLink>
    </div>
  )
}

const TONES = {
  dark: { card: 'bg-ink-900 text-white', badge: 'blush' },
  light: { card: 'bg-blush-100 text-ink-900', badge: 'magenta' },
}

/** Обычная карточка: картинка сверху, метка, заголовок, мета внизу */
function DefaultCard({ article }) {
  const tone = TONES[article.variant] ?? TONES.light

  return (
    <a
      href={article.href}
      className={cn('group flex min-h-[444px] flex-col overflow-hidden rounded-sm', tone.card)}
    >
      <div className="aspect-[368/208] overflow-hidden">
        <img
          src={article.image}
          alt=""
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Badge tone={tone.badge} className="self-start">
          {article.category}
        </Badge>
        <h3 className="mt-3 font-display text-xl leading-snug">{article.title}</h3>
        <Meta topic={article.topic} readTime={article.readTime} />
      </div>
    </a>
  )
}

/**
 * Карточка статьи блога. Вид зависит от article.variant: featured | dark | story | light.
 *
 * @param {object} props
 * @param {object} props.article объект из model/mock.js
 */
export function ArticleCard({ article }) {
  if (article.variant === 'featured') return <FeaturedCard article={article} />
  if (article.variant === 'story') return <StoryCard article={article} />
  return <DefaultCard article={article} />
}
