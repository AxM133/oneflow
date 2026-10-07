import { COMPANY, SITE_LINKS } from '@/shared/config'
import { cn } from '@/shared/lib/cn'
import { ButtonLink } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { Logo } from '@/shared/ui/logo'
import { Text } from '@/shared/ui/text'

import { FOOTER_COLUMNS, LEGAL_LINKS, SOCIAL_LINKS } from '../config/links'
import { FooterNav } from './FooterNav'

const CURRENT_YEAR = new Date().getFullYear()

/**
 * Подвал сайта: адрес, колонки ссылок, CTA "Get in the flow", юридические ссылки.
 *
 * @param {object} props
 * @param {typeof FOOTER_COLUMNS} [props.columns] колонки ссылок (по умолчанию из config/links)
 * @param {string} [props.className]
 */
export function Footer({ columns = FOOTER_COLUMNS, className }) {
  return (
    <footer className={cn('bg-ink-900 text-white', className)}>
      <Container className="pt-16 pb-8 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Logo tone="light" />
            <address className="mt-6 text-sm text-white/70 not-italic">
              <span className="mb-1 block font-semibold text-white">Headquarters</span>
              {COMPANY.legalName}
              {COMPANY.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <FooterNav columns={columns} />
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <h2 className="text-xl font-medium">Get in the flow</h2>
            <Text size="sm" muted className="mt-2">
              Every month we'll send you our best tips, guides and stories about smarter contracts.
            </Text>
          </div>
          <ButtonLink href={SITE_LINKS.tryFree}>Get Oneflow free</ButtonLink>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-4 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>
              © {CURRENT_YEAR} {COMPANY.name}
            </span>
            {LEGAL_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ))}
          </div>

          <ul className="flex gap-5">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer" className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
