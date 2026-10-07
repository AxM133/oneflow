/*
 * Набор простых иконок (stroke = currentColor, размер через className: "size-4").
 * Нужна новая иконка — добавьте её сюда по тому же шаблону.
 */
const defaults = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function ChevronDownIcon(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function ArrowRightIcon(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function PlayIcon(props) {
  return (
    <svg {...defaults} fill="currentColor" stroke="none" {...props}>
      <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  )
}

export function DocumentIcon(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  )
}
