import { cn } from '@/shared/lib/cn'

/**
 * ВРЕМЕННАЯ заглушка для ещё не свёрстанной секции.
 * Удалите её из своего виджета, когда начнёте вёрстку.
 *
 * @param {object} props
 * @param {string} props.title название секции как на макете
 * @param {string} props.owner кто делает секцию (см. docs/TASKS.md)
 * @param {string} props.path путь до слайса, чтобы сразу было видно, где писать код
 * @param {string} [props.className]
 */
export function SectionPlaceholder({ title, owner, path, className }) {
  return (
    <section className={cn('px-4 py-6 sm:px-6 lg:px-8', className)}>
      <div className="mx-auto flex min-h-56 max-w-content flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-ink-300 bg-ink-300/10 p-6 text-center">
        <span className="text-xs font-semibold tracking-widest text-ink-500 uppercase">
          TODO · {owner}
        </span>
        <p className="text-2xl font-medium text-ink-900">{title}</p>
        <code className="rounded bg-white px-2 py-1 text-xs text-ink-700">{path}</code>
      </div>
    </section>
  )
}
