import { cn } from '@/shared/lib/cn'
import { prefersReducedMotion } from '@/shared/lib/motion'
import { useInView } from '@/shared/lib/use-in-view'

import { ManAvatar, WomanAvatar } from './Avatars'
import { CollageLayer } from './CollageLayer'
import { Sparkle, TypeBubble, VerifiedSeal } from './Decorations'
import { DonutCard } from './DonutCard'
import { EditorCard } from './EditorCard'
import { PhoneMockup } from './PhoneMockup'
import { SignMethodsCard } from './SignMethodsCard'

/** Искры: позиция в % от коллажа, форма, сдвиг фазы мерцания */
const SPARKLES = [
  { shape: 'ring', position: 'left-[1%] top-[67%]', phase: 0 },
  { shape: 'dots', position: 'left-[3%] top-[78%]', phase: -0.6 },
  { shape: 'plus', position: 'left-[95%] top-[72%]', phase: -1.2 },
  { shape: 'cross', position: 'left-[86%] top-[91%]', phase: -1.8 },
  { shape: 'cross', position: 'left-[64%] top-[8%]', phase: -0.9 },
  { shape: 'dots', position: 'left-[58%] top-[5%]', phase: -1.5 },
  { shape: 'plus', position: 'left-[14%] top-[16%]', phase: -0.3 },
]

/**
 * Интерактивная иллюстрация "договор → подпись → аналитика" (вместо картинки из макета).
 * Раскладка повторяет макет: рамка 480 × 500, позиции слоёв — в % от неё, размеры текста — в cqw,
 * поэтому коллаж целиком масштабируется под любую ширину.
 *
 * Что происходит:
 *  - при появлении на экране слои выезжают по очереди, строки "печатаются", галочки рисуются, диаграмма заполняется;
 *  - карточки плавно парят, искры мерцают, печать вращается;
 *  - слои смещаются за мышью на разную глубину (параллакс);
 *  - способ подписи переключается сам и выбирается кликом.
 * С "уменьшить движение" — сразу финальный кадр без анимаций.
 */
export function ContractCollage({ className }) {
  const [ref, inView] = useInView({ threshold: 0.3 })

  const handlePointerMove = (event) => {
    if (event.pointerType !== 'mouse' || prefersReducedMotion()) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
    event.currentTarget.style.setProperty('--px', x.toFixed(3))
    event.currentTarget.style.setProperty('--py', y.toFixed(3))
  }

  const handlePointerLeave = (event) => {
    event.currentTarget.style.setProperty('--px', '0')
    event.currentTarget.style.setProperty('--py', '0')
  }

  return (
    <div
      ref={ref}
      data-visible={inView}
      aria-hidden
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(
        'group/collage @container relative aspect-[480/500] w-full select-none',
        className,
      )}
    >
      {/* Свечение за телефоном */}
      <CollageLayer className="top-[10%] left-[8%] aspect-square w-[42%]" depth={4}>
        <div className="size-full rounded-full bg-azure-500/45 blur-3xl" />
      </CollageLayer>
      <CollageLayer className="top-[72%] left-[30%] aspect-square w-[36%]" depth={4}>
        <div className="size-full rounded-full bg-coral-500/35 blur-3xl" />
      </CollageLayer>

      <CollageLayer className="top-[25.4%] left-[28.3%] h-[70%] w-[43.5%]" depth={8}>
        <PhoneMockup />
      </CollageLayer>

      <CollageLayer
        className="top-[31.8%] left-[74.4%] aspect-square w-[15.8%]"
        depth={14}
        delay={250}
        float
        floatDelay={-1}
      >
        <ManAvatar />
      </CollageLayer>

      <CollageLayer
        className="top-[18.4%] left-[43.8%] h-[30.2%] w-[37.5%]"
        depth={20}
        delay={150}
        float
        floatDelay={-2}
      >
        <EditorCard />
      </CollageLayer>

      <CollageLayer
        className="top-[53.2%] left-[4.2%] h-[23.6%] w-[53.1%]"
        depth={24}
        delay={350}
        float
        floatDelay={-3}
      >
        <SignMethodsCard isVisible={inView} />
      </CollageLayer>

      <CollageLayer
        className="top-[59.2%] left-[61.7%] aspect-square w-[30.8%]"
        depth={22}
        delay={450}
        float
        floatDelay={-4.5}
      >
        <DonutCard isVisible={inView} />
      </CollageLayer>

      <CollageLayer
        className="top-[80.4%] left-[31.5%] aspect-square w-[16.7%]"
        depth={16}
        delay={550}
        float
        floatDelay={-1.5}
      >
        <WomanAvatar />
      </CollageLayer>

      {/* Печать — на углу карточки подписи, не закрывает подписи плиток */}
      <CollageLayer className="top-[71%] left-[51.5%] aspect-square w-[10%]" depth={30} delay={700}>
        <VerifiedSeal />
      </CollageLayer>

      <CollageLayer
        className="top-[0.6%] left-[69.2%] aspect-square w-[10%]"
        depth={34}
        delay={800}
        float
        floatDelay={-2.5}
      >
        <TypeBubble />
      </CollageLayer>

      {SPARKLES.map((sparkle, index) => (
        <CollageLayer
          key={index}
          className={cn('aspect-square w-[3%]', sparkle.position)}
          depth={40}
          delay={900 + index * 80}
        >
          <Sparkle shape={sparkle.shape} style={{ animationDelay: `${sparkle.phase}s` }} />
        </CollageLayer>
      ))}
    </div>
  )
}
