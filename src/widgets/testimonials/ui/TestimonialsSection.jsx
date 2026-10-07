import { useRef } from 'react'

import { TestimonialCard, testimonials } from '@/entities/testimonial'
import { ArrowRightIcon } from '@/shared/ui/icons'
import { Heading } from '@/shared/ui/heading'
import { Reveal } from '@/shared/ui/reveal'
import { Section } from '@/shared/ui/section'

const arrowClassName =
  'flex size-11 items-center justify-center rounded-full border border-ink-900/20 text-ink-900 transition-colors hover:bg-ink-900 hover:text-white'

/**
 * "Don't just take our word for it…": слайдер отзывов.
 * Лента выходит за правый край контейнера до края экрана (как в макете — 4-я карточка обрезана).
 * Прокрутка: свайп/тачпад (scroll-snap) или стрелки — на одну карточку.
 */
export function TestimonialsSection() {
  const trackRef = useRef(null)

  const scrollByCard = (direction) => {
    const track = trackRef.current
    const card = track?.firstElementChild
    if (!card) return
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' })
  }

  return (
    <Section id="testimonials" spacing="lg">
      <Reveal className="flex items-end justify-between gap-6">
        <Heading className="text-3xl sm:text-4xl lg:text-[40px]">
          Don’t just take our word for it…
        </Heading>
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => scrollByCard(-1)}
            className={arrowClassName}
          >
            <ArrowRightIcon className="size-5 rotate-180" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => scrollByCard(1)}
            className={arrowClassName}
          >
            <ArrowRightIcon className="size-5" />
          </button>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <ul
          ref={trackRef}
          className="mt-10 mr-[calc(50%-50vw)] flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto pr-4 pb-4 lg:mt-12 [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="flex w-[300px] shrink-0 snap-start sm:w-[374px]">
              <TestimonialCard testimonial={testimonial} className="w-full" />
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
