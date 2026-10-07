import { cn } from '@/shared/lib/cn'

/**
 * Один ряд логотипов.
 * hidden=true — это копия для бесконечной бегущей строки: её не читают скринридеры
 * и она не нужна на десктопе, где логотипы стоят статично.
 */
export function LogoList({ clients, hidden = false, className }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={cn('flex shrink-0 items-center gap-12 pr-12 lg:gap-10 lg:pr-0', className)}
    >
      {clients.map((client) => (
        <li key={client.name} className="shrink-0">
          <img
            src={client.logo}
            alt={hidden ? '' : client.name}
            loading="lazy"
            className="h-9 w-auto opacity-80 transition-opacity duration-200 hover:opacity-100"
          />
        </li>
      ))}
    </ul>
  )
}
