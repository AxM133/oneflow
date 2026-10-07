/*
 * Логотипы клиентов в векторе — перерисованы с макета, чёткие на любом экране.
 * Белые части = currentColor (меняется при hover), "вырезы" = цвет фона полосы (ink-900).
 * Текст растянут/сжат через textLength — ширина одинаковая при любом шрифте системы.
 */
const KNOCKOUT = 'var(--color-ink-900)'

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'currentColor',
  'aria-hidden': true,
  focusable: false,
}

export function ApoteaLogo(props) {
  return (
    <svg {...base} viewBox="0 0 96 28" {...props}>
      <path d="M0 2h84l10 12-10 12H0z" />
      <path
        d="M9 9.5h7.5a4.5 4.5 0 0 1 0 9H9l3.2-4.5z"
        fill="none"
        stroke={KNOCKOUT}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <text
        x="24"
        y="18.5"
        fill={KNOCKOUT}
        fontFamily="Work Sans, sans-serif"
        fontSize="12.5"
        fontWeight="600"
        textLength="56"
        lengthAdjust="spacingAndGlyphs"
      >
        apotea·se
      </text>
    </svg>
  )
}

export function Tele2Logo(props) {
  return (
    <svg {...base} viewBox="0 0 96 56" {...props}>
      <text
        x="1"
        y="38"
        fontFamily="Roboto, sans-serif"
        fontSize="46"
        fontWeight="700"
        textLength="94"
        lengthAdjust="spacingAndGlyphs"
      >
        TELE2
      </text>
      {[6, 22.5, 39, 55.5, 72, 88.5].map((cx) => (
        <circle key={cx} cx={cx} cy="51" r="3" />
      ))}
    </svg>
  )
}

export function DagensIndustriLogo(props) {
  return (
    <svg {...base} viewBox="0 0 96 20" {...props}>
      <rect width="96" height="20" />
      <text
        x="4"
        y="14.5"
        fill={KNOCKOUT}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="13"
        fontWeight="700"
        textLength="88"
        lengthAdjust="spacingAndGlyphs"
      >
        Dagens industri
      </text>
    </svg>
  )
}

export function DormakabaLogo(props) {
  return (
    <svg {...base} viewBox="0 0 96 16" {...props}>
      <text
        x="0"
        y="13"
        fontFamily="Work Sans, sans-serif"
        fontSize="15"
        fontWeight="600"
        textLength="80"
        lengthAdjust="spacingAndGlyphs"
      >
        dormakaba
      </text>
      <path d="M83 13l4.5-6.5L92 13zM89 13l6-9v9z" />
    </svg>
  )
}

export function ExperisLogo(props) {
  return (
    <svg {...base} viewBox="0 0 96 36" {...props}>
      <path
        d="M5 6l8 9M27 6l-8 9M5 30l8-9M27 30l-8-9"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      <text
        x="42"
        y="20"
        fontFamily="Work Sans, sans-serif"
        fontSize="16"
        textLength="50"
        lengthAdjust="spacingAndGlyphs"
      >
        Experis
      </text>
      <text x="93" y="11" fontFamily="Work Sans, sans-serif" fontSize="4">
        ®
      </text>
      <text
        x="42"
        y="31"
        fontFamily="Work Sans, sans-serif"
        fontSize="6"
        textLength="51"
        lengthAdjust="spacingAndGlyphs"
      >
        ManpowerGroup
      </text>
    </svg>
  )
}

export function NewsecLogo(props) {
  return (
    <svg {...base} viewBox="0 0 96 48" {...props}>
      <rect width="96" height="48" />
      <text
        x="9"
        y="38"
        fill={KNOCKOUT}
        fontFamily="Work Sans, sans-serif"
        fontSize="13"
        fontWeight="500"
        textLength="78"
        lengthAdjust="spacing"
      >
        NEWSEC
      </text>
    </svg>
  )
}

export function SystembolagetLogo(props) {
  return (
    <svg {...base} viewBox="0 0 96 54" {...props}>
      <path d="M11 0h74l11 11v32L85 54H11L0 43V11z" />
      <path
        d="M12.5 3.5h71l9 9v29l-9 9h-71l-9-9v-29z"
        fill="none"
        stroke={KNOCKOUT}
        strokeWidth="1.6"
      />
      <g
        fill={KNOCKOUT}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="12"
        fontWeight="700"
        lengthAdjust="spacingAndGlyphs"
      >
        <text x="21" y="24" textLength="54">
          SYSTEM
        </text>
        <text x="16" y="39" textLength="64">
          BOLAGET
        </text>
      </g>
    </svg>
  )
}
