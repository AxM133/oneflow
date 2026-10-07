# Распределение задач

Макет: [`design/reference.jpg`](design/reference.jpg). Секции сверху вниз:

| #   | Секция на макете                            | Слайс                       | Кто      |
| --- | ------------------------------------------- | --------------------------- | -------- |
| —   | Шапка                                       | `widgets/header`            | Dev 1 ✅ |
| 1   | Work wonders                                | `widgets/hero`              | Dev 1 ✅ |
| 2   | Join these companies making business flow   | `widgets/clients`           | Dev 1 ✅ |
| 3   | Turn signatures into smart contracts + табы | `widgets/smart-contracts`   | Dev 2    |
| 4   | Press play                                  | `widgets/press-play`        | Dev 2    |
| 5   | The complete platform for smart contracts   | `widgets/platform`          | Dev 2    |
| 6   | Believe your eyes                           | `widgets/believe-eyes`      | Dev 2    |
| 7   | Don't take our word for it...               | `widgets/testimonials`      | Dev 3    |
| 8   | Seamless integrations                       | `widgets/integrations`      | Dev 3    |
| 9   | And for our next trick...                   | `widgets/blog`              | Dev 3    |
| 10  | More from Oneflow                           | `widgets/more-from-oneflow` | Dev 3    |
| —   | Подвал                                      | `widgets/footer`            | Dev 1 ✅ |

Заглушки для всех секций уже лежат в своих папках и подключены в `HomePage`.
Каждый работает **только в своих слайсах** → конфликтов при мёрже почти не будет.

---

## Dev 1 · Lead — фундамент, Hero, Clients

Зона ответственности: архитектура, `shared/`, `app/`, `pages/`, код-ревью.

### Фундамент

- [x] Проект: Vite + React (JS) + Tailwind v4, алиас `@/`
- [x] Структура FSD, линтеры (oxlint, steiger, prettier), скрипт `npm run check`
- [x] Дизайн-токены в `app/styles/index.css`
- [x] `shared/ui`: Button, ButtonLink, Container, Section, Heading, Text, Badge, Logo, иконки
- [x] `widgets/header` (дропдауны, мобильное меню), `widgets/footer`
- [x] Документация
- [x] **`shared/ui/modal`** — на нативном `<dialog>`: Esc, клик по фону, кнопка ×, блок скролла страницы
- [ ] Поднять репозиторий на GitHub, защитить `main`, добавить ребят

### `widgets/hero` — «Work wonders»

- [x] Фото на весь блок (`public/images/hero/hero.webp`), пропорции макета 1440 × 770, сверено с макетом попиксельно
- [x] `h1` «Work wonders», подзаголовок, кнопки «Get Oneflow free» (`primary`) и «Take a tour» (`secondary` → скролл к `#smart-contracts`)
- [x] < lg — текст сверху на градиенте, фото под ним
- [x] Тексты и путь к фото — `config/content.js`

### `widgets/clients` — логотипы компаний

- [x] Тёмная полоса, заголовок «Join these companies making business flow»
- [x] Логотипы — SVG в `public/images/clients/`, список — `config/clients.js`
- [x] < lg — бесконечная бегущая строка, ≥ lg — статичный ряд; при «уменьшить движение» — обычный скролл

### В конце

- [ ] Финальный проход по адаптиву всей страницы (375 / 768 / 1440)
- [ ] Lighthouse: Accessibility ≥ 90, картинки в `.webp`, `loading="lazy"` ниже первого экрана
- [ ] Деплой (Vercel / GitHub Pages)

---

## Dev 2 — интерактив и визуальные секции

Прокачиваешь: состояние в React, доступные табы, модалки, сложную вёрстку с декором.

### `widgets/smart-contracts` — «Turn signatures into smart contracts»

- [ ] Верх: заголовок, текст, кнопка «Take our product tour», коллаж-картинка справа
- [ ] Голубая панель (`bg-sky-100`, скругление) с табами: **Create, Collaborate, Sign, Manage, Analyze, Integrate**
- [ ] Клик по табу меняет контент: заголовок, текст, список из 3 пунктов, кнопка «Learn more» (`outline`), картинка
- [ ] Данные табов — `config/tabs.js` (массив объектов), состояние активного таба — `useState` в виджете
- [ ] Доступность: `role="tablist"` / `role="tab"` / `role="tabpanel"`, `aria-selected`, переключение стрелками ← →
- [ ] На мобилке табы скроллятся горизонтально

### `features/play-video` + `widgets/press-play` — «Press play»

- [ ] `features/play-video`: компонент `PlayVideoButton` — круглая кнопка с `PlayIcon`, по клику открывает `Modal` из `@/shared/ui/modal` (готов, пример использования — в JSDoc над компонентом) с YouTube-iframe
- [ ] `widgets/press-play`: розовый фон, огромный заголовок «Press play» (`Heading size="display"`), картинка с рукой и кольцом, `PlayVideoButton` поверх

### `widgets/platform` — «The complete platform for smart contracts»

- [ ] Центрированный заголовок
- [ ] 3 блока зигзагом: **Forget friction**, **Unleash data**, **Take control** — иконка в тёмном круге, заголовок (`size="sm"`), текст, маленькая тёмная кнопка (`secondary`, `size="sm"`)
- [ ] Данные блоков — `config/features.js`
- [ ] Декор: градиентная «волна» (CSS `bg-linear-*` / `blur`) и картинка с рукой снизу
- [ ] На мобилке — блоки в одну колонку

### `widgets/believe-eyes` — «Believe your eyes»

- [ ] Тёмный фон на всю ширину с картинкой (мужчина с телефоном)
- [ ] Заголовок, текст, жёлтая кнопка «Let's go»
- [ ] Текст читается поверх картинки на любой ширине (градиент-оверлей)

---

## Dev 3 — контент, карточки, сущности

Прокачиваешь: слой `entities`, переиспользуемые карточки, слайдер, сетки.

### `entities/testimonial` + `widgets/testimonials` — «Don't take our word for it...»

- [ ] `entities/testimonial/model/mock.js` — 5–6 отзывов, каждый объект: `{ id, quote, author, role, company, avatar, href }`
- [ ] `entities/testimonial/ui/TestimonialCard.jsx` — карточка: цитата, ссылка «Read the story», аватар + имя + должность
- [ ] `entities/testimonial/index.js` — экспорт карточки и моков
- [ ] `widgets/testimonials`: заголовок + горизонтальный слайдер (CSS `snap-x`, `overflow-x-auto`), кнопки ← → прокручивают на одну карточку (`scrollBy`)

### `widgets/integrations` — «Seamless integrations»

- [ ] Слева: заголовок, текст, кнопка «See all integrations»
- [ ] Справа: сетка логотипов (HubSpot, Salesforce, Teams, Upsales, Dynamics …) — данные в `config/integrations.js`
- [ ] Hover-эффект на логотипах
- [ ] Пример этой секции уже разобран в `docs/ARCHITECTURE.md`, п. 7 — начни с него

### `entities/article` + `widgets/blog` — «And for our next trick...»

- [ ] `entities/article`: моки (объект: `{ id, title, category, image, href, date, readTime }`), компонент `ArticleCard` c вариантами:
  - `featured` — большая горизонтальная розовая карточка (текст слева, картинка справа)
  - `default` — обычная квадратная
  - `dark` — тёмная (как «Sweco»)
- [ ] Категория — через `Badge`
- [ ] `widgets/blog`: заголовок + кнопка «See our blog» справа, 1 `featured` + 3 карточки в сетку
- [ ] На мобилке — одна колонка

### `widgets/more-from-oneflow` — «More from Oneflow»

- [ ] Две промо-карточки: картинка, подпись, заголовок, кнопка «Find out more»
- [ ] Hover: лёгкий zoom картинки (`group-hover:scale-105`)

---

## Порядок работы

| Этап | Dev 1 · Lead                          | Dev 2                       | Dev 3                                  |
| ---- | ------------------------------------- | --------------------------- | -------------------------------------- |
| 0    | ✅ основа, `modal`, `hero`, `clients` | —                           | —                                      |
| 1    | GitHub, ревью PR                      | `smart-contracts`           | `entities/testimonial`, `testimonials` |
| 2    | ревью PR                              | `press-play` + `play-video` | `integrations`                         |
| 3    | ревью PR                              | `platform`                  | `entities/article`, `blog`             |
| 4    | адаптив, Lighthouse, деплой           | `believe-eyes`              | `more-from-oneflow`                    |

## Definition of Done — секция готова, если

- [ ] Совпадает с макетом на **375 / 768 / 1440 px**
- [ ] Собрана из `shared/ui` (Section, Heading, Text, Button), а не из «голых» тегов со своими стилями
- [ ] Нет hex-цветов в классах — только токены
- [ ] Данные (тексты, списки) вынесены в `config/` или `entities/*/model`
- [ ] У картинок есть `alt`, у кнопок-иконок — `aria-label`
- [ ] `SectionPlaceholder` удалён
- [ ] `npm run check` проходит без ошибок
- [ ] PR со скриншотами mobile + desktop, один апрув

## Нужно что-то общее?

- Нужен новый компонент в `shared/ui` (например, `Card`) → сделай его **отдельным маленьким PR**, чтобы другие могли переиспользовать.
- Нужно поменять существующий компонент из `shared/ui` → сначала напиши Lead.
- Нужен новый цвет → токен в `app/styles/index.css`, тоже отдельным PR.
