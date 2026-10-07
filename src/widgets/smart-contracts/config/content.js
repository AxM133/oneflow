import { SITE_LINKS } from '@/shared/config'

export const INTRO_CONTENT = {
  /**
   * Заголовок: "Turn signatures into smart contracts".
   * Поверх начала слова word наложено зачёркнутое struck ("e-signatures" → "signatures"), как в макете.
   */
  title: { before: 'Turn', word: 'signatures', struck: 'e-', after: 'into smart contracts' },
  description:
    'Experience true contract magic by automating the entire contract process — from creating to signing and managing.',
  action: { label: 'Take our product tour', href: SITE_LINKS.productTour },
}
