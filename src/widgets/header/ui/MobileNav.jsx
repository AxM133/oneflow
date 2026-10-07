import { SITE_LINKS } from '@/shared/config'
import { ButtonLink } from '@/shared/ui/button'

/** Выпадающая панель меню для экранов < lg. */
export function MobileNav({ id, items, onNavigate }) {
  return (
    <div id={id} className="animate-fade-in border-t border-ink-900/10 bg-blush-50 lg:hidden">
      <nav aria-label="Mobile" className="mx-auto max-w-content px-4 py-4 sm:px-6">
        <ul className="flex flex-col">
          {items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={onNavigate}
                className="block rounded-md px-2 py-3 text-base font-medium hover:bg-ink-900/5"
              >
                {item.label}
              </a>
              {item.children && (
                <ul className="mb-2 ml-4 border-l border-ink-900/10 pl-3">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        onClick={onNavigate}
                        className="block py-2 text-sm text-ink-700 hover:text-ink-900"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-col gap-2 sm:hidden">
          <ButtonLink href={SITE_LINKS.demo} fullWidth onClick={onNavigate}>
            Get a demo
          </ButtonLink>
          <ButtonLink href={SITE_LINKS.login} variant="outline" fullWidth onClick={onNavigate}>
            Log in
          </ButtonLink>
        </div>
      </nav>
    </div>
  )
}
