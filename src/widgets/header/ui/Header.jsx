import { useState } from 'react'

import { SITE_LINKS } from '@/shared/config'
import { cn } from '@/shared/lib/cn'
import { ButtonLink } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { CloseIcon, MenuIcon } from '@/shared/ui/icons'
import { Logo } from '@/shared/ui/logo'

import { NAV_ITEMS } from '../config/navigation'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

const MOBILE_NAV_ID = 'mobile-nav'

/**
 * Шапка сайта: логотип, навигация, CTA. Липкая, белая, высота 80px — как в макете.
 *
 * @param {object} props
 * @param {typeof NAV_ITEMS} [props.items] пункты меню (по умолчанию из config/navigation)
 * @param {string} [props.className]
 */
export function Header({ items = NAV_ITEMS, className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={cn('sticky top-0 z-50 bg-white', className)}>
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo />

        <DesktopNav items={items} />

        <div className="flex items-center gap-2">
          <ButtonLink href={SITE_LINKS.demo} className="hidden sm:inline-flex">
            Get a demo
          </ButtonLink>
          <ButtonLink href={SITE_LINKS.login} variant="outline" className="hidden sm:inline-flex">
            Log in
          </ButtonLink>

          <button
            type="button"
            className="-mr-2 inline-flex size-10 items-center justify-center rounded-md hover:bg-ink-900/5 lg:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_NAV_ID}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </Container>

      {isMenuOpen && <MobileNav id={MOBILE_NAV_ID} items={items} onNavigate={closeMenu} />}
    </header>
  )
}
