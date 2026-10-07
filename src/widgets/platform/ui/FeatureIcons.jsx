const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

/** Маятник Ньютона — «Forget friction» */
function FrictionIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 4h16" />
      <path d="M8 4v6M12 4v6M16 4v6" />
      <circle cx="8" cy="13" r="2.5" />
      <circle cx="12" cy="13" r="2.5" />
      <circle cx="16" cy="13" r="2.5" />
    </svg>
  )
}

/** Шляпа фокусника — «Unleash data» */
function DataIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M7 11l1-6h8l1 6" />
      <path d="M4 11h16" />
      <path d="M6 11v7h12v-7" />
      <path d="M10 8h4" />
    </svg>
  )
}

/** Волшебная палочка — «Take control» */
function ControlIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M5 19l9-9" />
      <path d="M15 4v3M13.5 5.5h3" />
      <path d="M19 9v2M18 10h2" />
      <path d="M18 15v2M17 16h2" />
    </svg>
  )
}

export const FEATURE_ICONS = {
  friction: FrictionIcon,
  data: DataIcon,
  control: ControlIcon,
}
