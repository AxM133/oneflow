import { PlayVideoButton } from '@/features/play-video'
import { Heading } from '@/shared/ui/heading'
import { Section } from '@/shared/ui/section'

import { PRESS_PLAY } from '../config/press-play'

export function PressPlaySection() {
  return (
    <Section
      id="press-play"
      tone="blush"
      spacing="none"
      className="relative overflow-hidden"
      containerClassName="relative flex min-h-[420px] items-end justify-center pb-6 sm:min-h-[560px] lg:min-h-[720px]"
    >
      {/* Фон на всю ширину секции */}
      <img
        src={PRESS_PLAY.image}
        alt={PRESS_PLAY.imageAlt}
        className="absolute inset-0 size-full object-cover object-center"
      />

      {/* Кнопка поверх картинки */}
      <PlayVideoButton
        videoId={PRESS_PLAY.videoId}
        label="Play video"
        className="absolute top-[45%] left-[48%] z-10"
      />

      <Heading as="h2" size="display" className="relative z-0 text-center text-white">
        {PRESS_PLAY.title}
      </Heading>
    </Section>
  )
}
