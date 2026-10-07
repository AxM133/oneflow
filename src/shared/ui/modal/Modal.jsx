import { useEffect, useRef } from 'react'

import { cn } from '@/shared/lib/cn'

import { CloseIcon } from '../icons'

const sizes = {
  sm: 'max-w-md',
  md: 'max-w-2xl',
  lg: 'max-w-5xl',
}

/**
 * Модальное окно на нативном <dialog>.
 * Браузер сам даёт: закрытие по Esc, фокус внутри окна, слой поверх всей страницы.
 * Мы добавляем: закрытие по клику на фон и кнопке ×, блок скролла страницы (см. app/styles).
 *
 * Содержимое рендерится ТОЛЬКО пока окно открыто — видео в iframe остановится при закрытии.
 *
 * @param {object} props
 * @param {boolean} props.open открыто ли окно
 * @param {() => void} props.onClose вызывается при Esc, клике на фон или ×
 * @param {string} props.label название окна для скринридеров ("Product video")
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] максимальная ширина
 * @param {string} [props.className] классы для панели с контентом
 *
 * @example
 * const [isOpen, setIsOpen] = useState(false)
 *
 * <Button onClick={() => setIsOpen(true)}>Watch</Button>
 * <Modal open={isOpen} onClose={() => setIsOpen(false)} label="Product video" size="lg">
 *   <iframe ... />
 * </Modal>
 */
export function Modal({ open, onClose, label, size = 'md', className, children }) {
  const dialogRef = useRef(null)

  // Синхронизируем проп open с нативным состоянием <dialog>
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  // Клик мимо панели попадает в сам <dialog> (его фон) — закрываем
  const handleClick = (event) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      aria-label={label}
      onClose={onClose}
      onClick={handleClick}
      className={cn(
        'm-auto w-full overflow-visible bg-transparent p-4',
        'backdrop:bg-ink-950/70 backdrop:backdrop-blur-sm',
        'open:animate-fade-in',
        sizes[size],
      )}
    >
      {/* pointer-events-none: клик по пустому месту строки "проваливается" в фон и закрывает окно */}
      <div className="pointer-events-none mb-2 flex justify-end">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="pointer-events-auto inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <CloseIcon className="size-5" />
        </button>
      </div>

      <div
        className={cn('overflow-hidden rounded-2xl bg-white text-ink-900 shadow-2xl', className)}
      >
        {open && children}
      </div>
    </dialog>
  )
}
