export function TestimonialCard({ quote, author, role, company, avatar, href }) {
  return (
    <article
      data-card
      className="flex w-[85%] shrink-0 snap-start flex-col justify-between rounded-2xl bg-white p-6 shadow-sm sm:w-[calc((100%-3rem)/3)] lg:w-[calc((100%-4.5rem)/4)]"
    >
      <div>
        <p className="text-base leading-relaxed text-slate-800">“{quote}”</p>
        <a
          href={href}
          className="mt-4 inline-block text-sm font-medium text-slate-900 underline underline-offset-4 hover:opacity-70"
        >
          Read the story
        </a>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <img
          src={avatar}
          alt={author}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="text-sm leading-tight">
          <p className="font-semibold text-slate-900">{author}</p>
          <p className="text-slate-600">{role}</p>
          <p className="text-slate-600">{company}</p>
        </div>
      </div>
    </article>
  )
}