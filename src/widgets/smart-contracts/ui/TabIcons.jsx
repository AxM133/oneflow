/*
 * Иконки табов — перерисованы с макета пиксель в пиксель (сетка 24 × 24), цвет = currentColor.
 */
const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': true,
}

/** Четыре черты крестом с пустым центром */
export function CreateIcon(props) {
  return (
    <svg {...svgProps} {...props}>
      <rect x="10" y="0" width="4" height="7" />
      <rect x="10" y="17" width="4" height="7" />
      <rect x="0" y="10" width="7" height="4" />
      <rect x="17" y="10" width="7" height="4" />
    </svg>
  )
}

/** "Солнце" из 8 лучей */
export function CollaborateIcon(props) {
  return (
    <svg {...svgProps} {...props}>
      <rect x="10" y="0" width="4" height="6" />
      <rect x="10" y="18" width="4" height="6" />
      <rect x="0" y="10" width="6" height="4" />
      <rect x="18" y="10" width="6" height="4" />
      <g stroke="currentColor" strokeWidth="4" strokeLinecap="round">
        <path d="M5 5l2.5 2.5M19 5l-2.5 2.5M5 19l2.5-2.5M19 19l-2.5-2.5" />
      </g>
    </svg>
  )
}

/** Крест X */
export function SignIcon(props) {
  return (
    <svg {...svgProps} {...props}>
      <path d="M2 2l20 20M22 2 2 22" stroke="currentColor" strokeWidth="3.5" />
    </svg>
  )
}

/** Пунктирный круг из 8 точек */
export function ManageIcon(props) {
  return (
    <svg {...svgProps} {...props}>
      <rect x="10" y="0" width="4" height="4" />
      <rect x="10" y="20" width="4" height="4" />
      <rect x="0" y="10" width="4" height="4" />
      <rect x="20" y="10" width="4" height="4" />
      <circle cx="4.8" cy="4.8" r="2.4" />
      <circle cx="19.2" cy="4.8" r="2.4" />
      <circle cx="4.8" cy="19.2" r="2.4" />
      <circle cx="19.2" cy="19.2" r="2.4" />
    </svg>
  )
}

/** Плюс с пустым квадратиком в центре */
export function AnalyzeIcon(props) {
  return (
    <svg {...svgProps} {...props}>
      <rect x="10" y="0" width="4" height="10" />
      <rect x="10" y="14" width="4" height="10" />
      <rect x="0" y="10" width="10" height="4" />
      <rect x="14" y="10" width="10" height="4" />
    </svg>
  )
}

/** X без центра: четыре черты, смотрящие внутрь */
export function IntegrateIcon(props) {
  return (
    <svg {...svgProps} {...props}>
      <g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
        <path d="M3 3l6 6M21 3l-6 6M3 21l6-6M21 21l-6-6" />
      </g>
    </svg>
  )
}
