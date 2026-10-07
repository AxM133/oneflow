import { cn } from '@/shared/lib/cn'

import {
  ApoteaLogo,
  DagensIndustriLogo,
  DormakabaLogo,
  ExperisLogo,
  NewsecLogo,
  SystembolagetLogo,
  Tele2Logo,
} from './ClientLogos'

const LOGOS = {
  apotea: ApoteaLogo,
  tele2: Tele2Logo,
  'dagens-industri': DagensIndustriLogo,
  dormakaba: DormakabaLogo,
  experis: ExperisLogo,
  newsec: NewsecLogo,
  systembolaget: SystembolagetLogo,
}

/**
 * Ряд логотипов (только визуально — для скринридеров названия выводит ClientsSection).
 * Каждый логотип — в ячейке 96 × 56, по центру; между ячейками 64px воздуха.
 */
export function LogoList({ clients, className }) {
  return (
    <ul aria-hidden className={cn('flex shrink-0 items-center gap-16 pr-16', className)}>
      {clients.map((client, index) => {
        const Logo = LOGOS[client.logo]

        return (
          <li
            key={`${client.logo}-${index}`}
            className="flex h-14 w-24 shrink-0 items-center justify-center text-white/60 transition duration-300 hover:scale-105 hover:text-white"
          >
            <Logo className="h-auto w-24" />
          </li>
        )
      })}
    </ul>
  )
}
