# Oneflow Landing

Учебный проект: вёрстка одностраничного лендинга [Oneflow](https://oneflow.com) командой из 3 фронтенд-разработчиков.

Макет: [`docs/design/reference.jpg`](docs/design/reference.jpg)

## Стек

| Что         | Чем                                                                           |
| ----------- | ----------------------------------------------------------------------------- |
| UI          | React 19 (JavaScript, JSX)                                                    |
| Сборка      | Vite                                                                          |
| Стили       | Tailwind CSS v4 (токены в `src/app/styles/index.css`)                         |
| Архитектура | [Feature-Sliced Design](https://feature-sliced.design/ru/)                    |
| Линтеры     | oxlint (код), steiger (правила FSD), prettier (+ сортировка классов Tailwind) |

## Быстрый старт

```bash
npm install
npm run dev        # http://localhost:5173
```

## Скрипты

| Команда            | Что делает                                     |
| ------------------ | ---------------------------------------------- |
| `npm run dev`      | Dev-сервер                                     |
| `npm run build`    | Продакшн-сборка                                |
| `npm run lint`     | Линтер кода                                    |
| `npm run lint:fsd` | Проверка архитектуры FSD (импорты, public API) |
| `npm run format`   | Отформатировать весь код                       |
| `npm run check`    | **Всё сразу. Запускайте перед каждым PR.**     |

## Структура

```
src/
├── app/          # инициализация: глобальные стили, провайдеры
├── pages/        # страницы — только собирают виджеты
│   └── home/
├── widgets/      # секции лендинга (header, hero, blog, footer ...)
├── features/     # действия пользователя (play-video ...)
├── entities/     # бизнес-сущности (testimonial, article ...)
└── shared/       # переиспользуемое без бизнес-логики
    ├── ui/       # UI-кит: Button, Section, Heading, Text ...
    ├── lib/      # утилиты (cn)
    └── config/   # глобальные константы и ссылки
```

Подробно — в [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Документация

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — FSD, правила импортов, UI-кит, стили
- [`docs/TASKS.md`](docs/TASKS.md) — **кто что делает**, чек-листы, Definition of Done

## Git-процесс

1. `main` — всегда рабочая. Напрямую в неё не пушим.
2. Одна задача = одна ветка: `feat/hero`, `feat/testimonials`, `fix/header-mobile`.
3. Коммиты в стиле [Conventional Commits](https://www.conventionalcommits.org/ru/):
   `feat(blog): add article card`, `fix(header): close menu on navigate`.
4. Перед PR: `git pull origin main` → `npm run check` → PR со скриншотами (mobile + desktop).
5. Мёржим после одного апрува (код-ревью делает Lead или любой второй разработчик).
