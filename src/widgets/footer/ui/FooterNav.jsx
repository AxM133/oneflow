export function FooterNav({ columns }) {
  return (
    <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {columns.map((column) => (
        <div key={column.title}>
          <h3 className="mb-4 text-sm font-semibold">{column.title}</h3>
          <ul className="space-y-2.5">
            {column.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
