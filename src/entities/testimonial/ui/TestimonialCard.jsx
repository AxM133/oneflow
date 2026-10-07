import { cn } from '@/shared/lib/cn'

/**
 * Карточка отзыва: цитата, ссылка на историю, автор с аватаром.
 * Ширину задаёт тот, кто использует карточку (через className) — например, слайдер.
 *
 * @param {object} props
 * @param {{ quote: string, author: string, role: string, company: string, avatar: string, href: string }} props.testimonial
 * @param {string} [props.className]
 */
export function TestimonialCard({ testimonial, className }) {
  const { quote, author, role, company, avatar, href } = testimonial

  return (
    <article
      className={cn(
        'flex flex-col justify-between rounded-sm border border-ink-900/15 bg-white p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink-900/10',
        className,
      )}
    >
      <div>
        <blockquote className="text-base leading-6 tracking-[0.02em] text-ink-900">
          “{quote}”
        </blockquote>
        <a
          href={href}
          className="mt-4 inline-block text-sm text-magenta-500 underline-offset-4 hover:underline"
        >
          Read full story
        </a>
      </div>

      <div className="mt-10 flex items-center gap-4">
        <img
          src={avatar}
          alt=""
          width={48}
          height={48}
          loading="lazy"
          className="size-12 shrink-0 rounded-full object-cover"
        />
        <p className="text-sm leading-5 text-ink-900">
          <span className="block">{author}</span>
          <span className="block">{role}</span>
          <span className="block">{company}</span>
        </p>
      </div>
    </article>
  )
}
