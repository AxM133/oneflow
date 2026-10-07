import { ChevronDownIcon } from '@/shared/ui/icons'

/** Горизонтальное меню. Дропдауны открываются по hover и по фокусу с клавиатуры (без JS). */
export function DesktopNav({ items }) {
  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {items.map((item) => (
          <li key={item.label} className="group relative">
            <a
              href={item.href}
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-ink-900/5"
            >
              {item.label}
              {item.children && (
                <ChevronDownIcon className="size-3.5 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" />
              )}
            </a>

            {item.children && (
              <div className="invisible absolute top-full left-0 pt-2 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <ul className="min-w-52 rounded-xl bg-white p-2 shadow-xl ring-1 ring-ink-900/5">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-blush-50"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
