const items = [
  {
    id: 1,
    image: '/images/more-from-oneflow/more-1.jpg',
    caption: 'One platform. All departments',
    title: 'Create, sign and manage any type of agreement you can think of',
    href: '#',
  },
  {
    id: 2,
    image: '/images/more-from-oneflow/more-2.jpg',
    caption: 'Why Oneflow',
    title: 'Six reasons why teams around the world love the magic of flow',
    href: '#',
  },
]

export function MoreFromOneflowSection() {
  return (
    <section
      id="more-from-oneflow"
      className="mx-auto w-full max-w-7xl px-4 py-16"
    >
      <h2 className="mb-8 text-3xl font-semibold text-slate-900 md:text-4xl">
        More from Oneflow
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.id} className="group text-center">
            <div className="overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-xs text-slate-500">{item.caption}</p>
            <h3 className="mx-auto mt-2 max-w-sm text-lg font-medium text-slate-900">
              {item.title}
            </h3>
            <a
              href={item.href}
              className="mt-4 inline-block rounded bg-[#f8d94b] px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:brightness-95"
            >
              Find out more
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}