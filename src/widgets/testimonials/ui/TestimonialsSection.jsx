import { useRef } from 'react'
import { TestimonialCard, testimonials } from '../../../entities/testimonial'

export function TestimonialsSection() {
  const trackRef = useRef(null)

  const scroll = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-card]')
    if (!card) return
    const gap = 24
    track.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: 'smooth',
    })
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          Don’t take our word for it...
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-900 transition hover:bg-slate-100"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-900 transition hover:bg-slate-100"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}