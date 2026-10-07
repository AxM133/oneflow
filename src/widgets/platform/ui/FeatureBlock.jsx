import { cn } from '@/shared/lib/cn'
import { ButtonLink } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'
import { Text } from '@/shared/ui/text'

import { ControlIcon, DataIcon, FrictionIcon } from './FeatureIcons'

const FEATURE_ICONS = {
  friction: FrictionIcon,
  data: DataIcon,
  control: ControlIcon,
}

// Зигзаг только на lg+, на мобилке и планшете — одна колонка
const ALIGN_CLASSES = {
  right: 'lg:ml-[46%]',
  left: 'lg:ml-[6%]',
}

export function FeatureBlock({ feature, className }) {
  const Icon = FEATURE_ICONS[feature.icon]

  return (
    <article className={cn('max-w-md', ALIGN_CLASSES[feature.align], className)}>
      <div className="grid size-12 place-items-center rounded-full bg-ink-900 text-white">
        <Icon className="size-6" />
      </div>
      <Heading as="h3" size="sm" className="mt-4">
        {feature.title}
      </Heading>
      <Text className="mt-3 text-sm">{feature.text}</Text>
      <ButtonLink href={feature.href} variant="secondary" size="sm" className="mt-5">
        Take the tour
      </ButtonLink>
    </article>
  )
}
