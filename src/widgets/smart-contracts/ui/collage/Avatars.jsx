/* Векторные аватары-иллюстрации (вместо фото из макета). */

export function ManAvatar() {
  return (
    <svg
      viewBox="0 0 80 80"
      className="size-full rounded-full shadow-lg shadow-black/30"
      aria-hidden
    >
      <rect width="80" height="80" fill="var(--color-azure-500)" />
      <path d="M14 80c2-15 13-22 26-22s24 7 26 22z" fill="#fff" />
      <path d="M34 50h12v10a6 6 0 0 1-12 0z" fill="#e9b08f" />
      <ellipse cx="40" cy="38" rx="13" ry="15" fill="#f2c4a2" />
      <path d="M27 38c0 10 6 17 13 17s13-7 13-17c-2 4-5 6-13 6s-11-2-13-6z" fill="#c4693a" />
      <path
        d="M26.5 35c-1-11 5-18 14-18 8 0 14 6 13 16-3-4-8-6-13-6-6 0-11 3-14 8z"
        fill="#b85e30"
      />
      <path
        d="M35 47.5c3 1.5 7 1.5 10 0"
        stroke="#7a3a1c"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function WomanAvatar() {
  return (
    <svg
      viewBox="0 0 80 80"
      className="size-full rounded-full shadow-lg shadow-black/30"
      aria-hidden
    >
      <rect width="80" height="80" fill="var(--color-magenta-500)" />
      <path d="M22 70c-3-25 2-48 18-48s21 23 18 48z" fill="#2b1d1a" />
      <path d="M14 80c2-14 12-21 26-21s24 7 26 21z" fill="#2f4a40" />
      <path d="M35 50h10v9a5 5 0 0 1-10 0z" fill="#d79c7a" />
      <ellipse cx="40" cy="39" rx="11.5" ry="14" fill="#f1c7a8" />
      <path d="M28 37c1-9 6-14 12-14s11 5 12 14c-4-5-8-7-12-7-5 0-9 2-12 7z" fill="#2b1d1a" />
      <path
        d="M35 44.5c3 3 7 3 10 0"
        stroke="#9c3f3f"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}
