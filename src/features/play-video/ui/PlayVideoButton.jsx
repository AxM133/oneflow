import { useState } from 'react'

import { cn } from '@/shared/lib/cn'
import { PlayIcon } from '@/shared/ui/icons'
import { Modal } from '@/shared/ui/modal'

/**
 * Круглая кнопка «Play». По клику открывает модалку с YouTube-видео.
 *
 * @param {object} props
 * @param {string} props.videoId  id ролика на YouTube (то, что после `v=` в ссылке)
 * @param {string} [props.label]  подпись для скринридеров и для модалки
 * @param {string} [props.className]
 */
export function PlayVideoButton({ videoId, label = 'Play video', className }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        aria-label={label}
        onClick={() => setIsOpen(true)}
        className={cn(
          'grid size-12 place-items-center rounded-full bg-ink-900 text-white',
          'shadow-[0_0_24px_6px_rgb(255_140_80/0.45)] transition-transform',
          'hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white',
          className,
        )}
      >
        <PlayIcon className="size-4" />
      </button>

      <Modal open={isOpen} onClose={() => setIsOpen(false)} label={label}>
        <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
          {/* iframe создаём только пока модалка открыта — при закрытии видео останавливается */}
          {isOpen && (
            <iframe
              className="size-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={label}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </Modal>
    </>
  )
}
