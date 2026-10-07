import { ArticleCard, articles } from '../../../entities/article'

export function BlogSection() {
  const featured = articles.find((a) => a.variant === 'featured')
  const rest = articles.filter((a) => a.variant !== 'featured').slice(0, 3)

  return (
    <section id="blog" className="mx-auto w-full max-w-7xl px-4 py-16">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          And for our next trick...
        </h2>
        <a
          href="#"
          className="shrink-0 rounded bg-[#f8d94b] px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:brightness-95"
        >
          See our blog
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {featured && (
          <div className="md:col-span-3">
            <ArticleCard {...featured} />
          </div>
        )}
        {rest.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </section>
  )
}