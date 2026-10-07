import { ButtonLink } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'
import { CheckIcon } from '@/shared/ui/icons'
import { Text } from '@/shared/ui/text'

/**
 * Содержимое активного таба: заголовок, описание, список, кнопка, картинка справа.
 * key={tab.id} на обёртке перезапускает анимацию появления при смене таба.
 */
export function ProductTabPanel({ id, labelledBy, tab }) {
  return (
    <div
      role="tabpanel"
      id={id}
      aria-labelledby={labelledBy}
      tabIndex={0}
      className="relative px-6 pt-8 pb-10 sm:px-10 lg:min-h-[478px] lg:px-24 lg:pt-12 lg:pb-[78px]"
    >
      {/* Ширина текста не больше 560px и не заходит под картинку справа (на 1024 она ближе к тексту) */}
      <div key={tab.id} className="animate-fade-in lg:max-w-[min(560px,calc(100%-360px))]">
        <Heading as="h3" className="text-4xl leading-none font-bold sm:text-5xl lg:text-[56px]">
          {tab.title}
        </Heading>

        <Text className="mt-6 text-lg leading-7 tracking-[0.02em] sm:text-xl">
          {tab.description}
        </Text>

        <ul className="mt-8 lg:mt-13">
          {tab.features.map((feature) => (
            <li key={feature} className="flex h-7 items-center gap-2 text-sm">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-ink-900/80 text-white">
                <CheckIcon className="size-3" strokeWidth={3} />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-8 lg:mt-10">
          <ButtonLink href={tab.href} variant="outline">
            Learn more
          </ButtonLink>
        </div>
      </div>

      {tab.image && (
        <img
          src={tab.image}
          alt=""
          width={436}
          height={300}
          loading="lazy"
          className="mt-8 -mr-6 ml-auto w-full max-w-[436px] sm:-mr-10 lg:absolute lg:top-[76px] lg:right-0 lg:mt-0 lg:mr-0"
        />
      )}
    </div>
  )
}
