# Архитектура проекта (Feature-Sliced Design)

Официальная документация: https://feature-sliced.design/ru/

## 1. Слои

Код разложен по **слоям**. Чем выше слой — тем «конкретнее» код и тем больше он знает о других.

```
app        ↑  инициализация приложения, глобальные стили
pages      │  страницы (у нас одна — home)
widgets    │  крупные самостоятельные блоки = секции лендинга
features   │  действия пользователя, которые несут ценность (открыть видео, подписаться)
entities   │  бизнес-сущности (отзыв, статья) — карточка + данные
shared     ↓  всё переиспользуемое и не знающее о бизнесе (кнопки, утилиты)
```

### Главное правило импортов

> **Слой может импортировать только из слоёв НИЖЕ себя.**

| Откуда ↓ / Куда → | shared | entities | features | widgets | pages |
| ----------------- | :----: | :------: | :------: | :-----: | :---: |
| **pages**         |   ✅   |    ✅    |    ✅    |   ✅    |   —   |
| **widgets**       |   ✅   |    ✅    |    ✅    |   ❌    |  ❌   |
| **features**      |   ✅   |    ✅    |    ❌    |   ❌    |  ❌   |
| **entities**      |   ✅   |    ❌    |    ❌    |   ❌    |  ❌   |
| **shared**        |   ✅   |    ❌    |    ❌    |   ❌    |  ❌   |

Слайсы **одного** слоя друг друга не импортируют: `widgets/blog` не может импортировать `widgets/hero`.
Если двум виджетам нужно одно и то же — это кандидат на перенос вниз (`entities` или `shared`).

`npm run lint:fsd` проверяет эти правила автоматически.

## 2. Слайсы и сегменты

Внутри слоя (кроме `app` и `shared`) лежат **слайсы** — папки по смыслу: `widgets/hero`, `entities/article`.
Внутри слайса — **сегменты** по назначению:

```
widgets/smart-contracts/
├── ui/                      # React-компоненты
│   ├── SmartContractsSection.jsx   ← главный компонент слайса
│   └── ProductTabs.jsx             ← внутренние компоненты
├── config/                  # статичные данные: тексты, списки, ссылки
│   └── tabs.js
├── model/                   # состояние, хуки (useSomething), моковые данные
├── lib/                     # вспомогательные функции только для этого слайса
└── index.js                 # PUBLIC API — единственная точка входа
```

Создавайте только те сегменты, которые реально нужны.

### Public API (`index.js`)

Наружу отдаём только то, что экспортировано из `index.js`:

```js
// widgets/blog/index.js
export { BlogSection } from './ui/BlogSection'
```

```js
// ✅ правильно
import { BlogSection } from '@/widgets/blog'
import { Button } from '@/shared/ui/button'

// ❌ неправильно — лезем во внутренности слайса
import { BlogSection } from '@/widgets/blog/ui/BlogSection'
import { ArticleCard } from '../../entities/article/ui/ArticleCard'
```

Внутри своего слайса используйте **относительные** импорты (`./`, `../config/tabs`),
между слайсами — **абсолютные** через алиас `@/`.

## 3. Где что лежит — шпаргалка

| Что нужно сделать                                       | Куда положить                              |
| ------------------------------------------------------- | ------------------------------------------ |
| Новая секция лендинга                                   | `widgets/<section-name>/`                  |
| Тексты, списки ссылок, данные секции                    | `widgets/<section-name>/config/`           |
| Карточка отзыва / статьи + моковые данные               | `entities/<name>/` (`ui/`, `model/`)       |
| Кнопка «Play» + модалка с видео (действие пользователя) | `features/play-video/`                     |
| Универсальный UI без бизнес-смысла (Modal, Tabs, Card)  | `shared/ui/<component>/`                   |
| Хелпер, нужный везде (`cn`, `formatDate`)               | `shared/lib/<name>/`                       |
| Ссылки и константы, нужные нескольким виджетам          | `shared/config/`                           |
| Картинки                                                | `public/images/<section-name>/`            |
| Цвета, шрифты, анимации                                 | `src/app/styles/index.css` → блок `@theme` |

## 4. UI-кит (`shared/ui`)

Все компоненты «тупые» (presentational): получают данные через props, не знают о бизнесе,
принимают `className` для точечной донастройки.

Пропсы каждого компонента описаны в JSDoc-комментарии над ним — VS Code показывает их
при наведении и подсказывает варианты (`variant="…"`) при вводе. Добавляете компонент — пишите такой же комментарий.

| Компонент            | Импорт                            | Пример                                                                                           |
| -------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| `Button`             | `@/shared/ui/button`              | `<Button variant="secondary" onClick={open}>Watch</Button>`                                      |
| `ButtonLink`         | `@/shared/ui/button`              | `<ButtonLink href="#demo" size="lg">Try Oneflow free</ButtonLink>`                               |
| `Section`            | `@/shared/ui/section`             | `<Section id="blog" tone="white" spacing="lg">…</Section>`                                       |
| `Container`          | `@/shared/ui/container`           | `<Container className="flex">…</Container>`                                                      |
| `Heading`            | `@/shared/ui/heading`             | `<Heading as="h2" size="lg">Seamless integrations</Heading>`                                     |
| `Text`               | `@/shared/ui/text`                | `<Text size="lg" muted>Be more effective…</Text>`                                                |
| `Badge`              | `@/shared/ui/badge`               | `<Badge tone="pink">Guide</Badge>`                                                               |
| `Logo`               | `@/shared/ui/logo`                | `<Logo tone="light" />`                                                                          |
| `Modal`              | `@/shared/ui/modal`               | `<Modal open={isOpen} onClose={close} label="Video">…</Modal>`                                   |
| Иконки               | `@/shared/ui/icons`               | `<ArrowRightIcon className="size-4" />` (Arrow, Check, ChevronDown, Close, Document, Menu, Play) |
| `SectionPlaceholder` | `@/shared/ui/section-placeholder` | временная заглушка — удалить, когда секция свёрстана                                             |

**Варианты кнопок** (`variant`): `primary` (жёлтая CTA), `secondary` (тёмная), `outline`,
`outline-light` (на тёмном фоне), `ghost` (текстовая). **Размеры** (`size`): `sm`, `md`, `lg`.

**Тона секций** (`tone`): `white`, `dark`, `blush` (розовый), `sky` (голубой).
**Отступы** (`spacing`): `none`, `sm`, `md`, `lg`.

**Размеры заголовков** (`size`): `display` («Press play»), `xl` (hero), `lg` (секции), `md`, `sm` (карточки).
Семантика (`as="h1"…"h4"`) задаётся отдельно от размера. На странице ровно один `h1` — в Hero.

### Как изменить или добавить компонент в `shared/ui`

`shared` используют все, поэтому:

1. Новый компонент — **отдельный маленький PR**, чтобы остальные могли быстро его подтянуть.
2. Изменение API существующего компонента (переименование пропа, удаление варианта) — только после обсуждения с Lead.
3. Добавлять новый `variant` / `size` можно свободно, если старые не ломаются.

## 5. Стили

- Только Tailwind-классы. Отдельные `.css`-файлы для компонентов не создаём.
- **Никаких hex-цветов в компонентах** (`bg-[#0b3c44]` ❌). Используем токены:
  `bg-ink-900`, `text-accent-500`, `bg-blush-100`, `bg-sky-100`. Нужен новый цвет — добавьте токен в `@theme`.
- Условные классы и проброс `className` — через `cn()` из `@/shared/lib/cn`:
  ```jsx
  <div className={cn('rounded-xl p-6', isActive && 'bg-ink-900 text-white', className)} />
  ```
- Mobile-first: базовые классы — для телефона, дальше `sm:` `md:` `lg:`.
  Проверяем на ширинах **375 / 768 / 1440**.
- Порядок классов выравнивает prettier автоматически (`npm run format`).
- Готовые анимации из `@theme`: `animate-fade-in`, `animate-float` (парение), `animate-marquee` (бегущая строка).
  Оборачивайте декоративные в `motion-safe:` — у кого включено «уменьшить движение», они не будут дёргаться.

## 6. Нейминг

| Что                         | Стиль              | Пример                            |
| --------------------------- | ------------------ | --------------------------------- |
| Папки слайсов и сегментов   | `kebab-case`       | `more-from-oneflow`, `play-video` |
| React-компоненты и их файлы | `PascalCase`       | `TestimonialCard.jsx`             |
| Главный компонент виджета   | `<Name>Section`    | `IntegrationsSection`             |
| Хуки                        | `useCamelCase`     | `useSlider.js`                    |
| Константы с данными         | `UPPER_SNAKE_CASE` | `NAV_ITEMS`, `PRODUCT_TABS`       |

## 7. Пример: как сверстать свою секцию

Возьмём `widgets/integrations`.

**1. Данные — в `config/`:**

```js
// widgets/integrations/config/integrations.js
export const INTEGRATIONS = [
  { name: 'HubSpot', logo: '/images/integrations/hubspot.svg' },
  { name: 'Salesforce', logo: '/images/integrations/salesforce.svg' },
]
```

**2. Компонент — в `ui/`, собран из `shared/ui`:**

```jsx
// widgets/integrations/ui/IntegrationsSection.jsx
import { ButtonLink } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'
import { Section } from '@/shared/ui/section'
import { Text } from '@/shared/ui/text'

import { INTEGRATIONS } from '../config/integrations'

export function IntegrationsSection() {
  return (
    <Section id="integrations" spacing="lg" containerClassName="grid gap-12 lg:grid-cols-2">
      <div>
        <Heading>Seamless integrations</Heading>
        <Text className="mt-4">Integrate your favorite tools…</Text>
        <ButtonLink href="#integrations-all" className="mt-6">
          See all integrations
        </ButtonLink>
      </div>
      <ul className="grid grid-cols-3 gap-6">
        {INTEGRATIONS.map((item) => (
          <li key={item.name}>
            <img src={item.logo} alt={item.name} className="h-10" />
          </li>
        ))}
      </ul>
    </Section>
  )
}
```

**3. `index.js` и `HomePage` трогать не нужно** — они уже подключены.

Образцы готовых слайсов — смотрите, как там всё устроено, и делайте так же:

| Слайс                                       | Что в нём полезно подсмотреть                                      |
| ------------------------------------------- | ------------------------------------------------------------------ |
| [`widgets/hero`](../src/widgets/hero)       | тексты в `config/`, фото на фоне + отдельная раскладка для мобилки |
| [`widgets/clients`](../src/widgets/clients) | список из `config/`, картинки из `public/images/`, бегущая строка  |
| [`widgets/header`](../src/widgets/header)   | состояние (`useState`), разбивка на `DesktopNav` / `MobileNav`     |
| [`widgets/footer`](../src/widgets/footer)   | несколько списков ссылок из `config/`                              |
| [`shared/ui/modal`](../src/shared/ui/modal) | как подключить модалку — пример в JSDoc над компонентом            |
