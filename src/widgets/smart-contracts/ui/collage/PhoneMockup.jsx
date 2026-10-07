/** Телефон: тёмная панель с логотипом Oneflow слева, светлый экран справа. */
export function PhoneMockup() {
  return (
    <div className="flex size-full overflow-hidden rounded-[10%/6%] bg-mist-300 shadow-2xl ring-1 shadow-black/40 ring-white/10">
      <div className="h-full w-[42%] bg-ink-900 p-[9%]">
        <svg viewBox="0 0 32 26" className="w-[70%] text-white" fill="currentColor" aria-hidden>
          <circle cx="10" cy="16" r="7" fill="none" stroke="currentColor" strokeWidth="3.4" />
          <rect x="20" y="2" width="4.5" height="4.5" />
          <rect x="26" y="7" width="4.5" height="4.5" />
          <rect x="20" y="12" width="4.5" height="4.5" />
        </svg>
      </div>
      <div className="flex flex-1 flex-col gap-[4%] p-[10%] pt-[60%]">
        <span className="h-[2%] w-full rounded-full bg-white/50" />
        <span className="h-[2%] w-3/4 rounded-full bg-white/50" />
      </div>
    </div>
  )
}
