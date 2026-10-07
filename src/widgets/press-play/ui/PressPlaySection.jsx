import { PlayVideoButton } from '@/features/play-video'
import { Section } from '@/shared/ui/section'

import { PRESS_PLAY } from '../config/press-play'

/**
 * "Press play": кадр из макета на всю ширину, сохраняет пропорции (на мобилке ничего не обрезается).
 * Кнопка — по центру нарисованной кнопки: x 719 / y 403 из 1440 × 814, диаметр 66px.
 */
export function PressPlaySection() {
  const { title, videoId, image } = PRESS_PLAY

  return (
    <Section id="press-play" tone="blush" spacing="none" fluid>
      {/* Надпись нарисована на картинке — для скринридеров дублируем её заголовком */}
      <h2 className="sr-only">{title}</h2>

      <div className="relative">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          className="block h-auto w-full"
        />

        <PlayVideoButton
          videoId={videoId}
          label="Play video"
          className="absolute top-[45.45%] left-[47.64%] aspect-square h-auto w-[4.6%] min-w-9"
        />
      </div>
    </Section>
  )
}
