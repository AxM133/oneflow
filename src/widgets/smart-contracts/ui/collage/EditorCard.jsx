import { cn } from '@/shared/lib/cn'

const GRAY_LINES = ['w-full', 'w-full', 'w-1/2']

/** Синие строки "печатаются" одна за другой после появления коллажа */
const TYPED_LINES = [
  { color: 'bg-steel-300', width: 'w-full', delay: 0 },
  { color: 'bg-steel-300', width: 'w-full', delay: 0 },
  { color: 'bg-azure-500', width: 'w-full', delay: 1100 },
  { color: 'bg-azure-500', width: 'w-1/2', delay: 1700, cursor: true },
]

/** Карточка редактора договора: панель "B I U" + строки текста с мигающим курсором. */
export function EditorCard() {
  return (
    <div className="flex size-full flex-col rounded-[3px] bg-white px-[8%] py-[8%] shadow-xl shadow-black/25">
      <div className="flex items-center gap-[1.6cqw] font-display text-[2.8cqw] leading-none text-ink-900">
        <span className="font-bold">B</span>
        <span className="italic">I</span>
        <span className="underline underline-offset-2">U</span>
      </div>

      <div className="mt-[3cqw] flex flex-col gap-[1cqw]">
        {GRAY_LINES.map((width, index) => (
          <span key={index} className={cn('h-[1.6cqw] bg-steel-300', width)} />
        ))}
      </div>

      <div className="mt-[3cqw] flex flex-col gap-[1cqw]">
        {TYPED_LINES.map((line, index) => (
          <div key={index} className="flex items-center gap-[0.4cqw]">
            <span
              style={{ transitionDelay: `${line.delay}ms` }}
              className={cn(
                'h-[1.6cqw] origin-left transition-transform duration-700 ease-out motion-reduce:transition-none',
                line.color,
                line.width,
                line.delay > 0 &&
                  'scale-x-0 group-data-[visible=true]/collage:scale-x-100 motion-reduce:scale-x-100',
              )}
            />
            {line.cursor && (
              <span className="h-[2.8cqw] w-[0.3cqw] bg-ink-900 motion-safe:animate-blink" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
