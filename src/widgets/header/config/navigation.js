/**
 * Пункты меню. Если у пункта есть children — показывается выпадающий список.
 * Формат: { label: string, href: string, children?: { label, href }[] }
 */
export const NAV_ITEMS = [
  {
    label: 'Why Oneflow?',
    href: '#why-oneflow',
    children: [
      { label: 'Product tour', href: '#product-tour' },
      { label: 'Smart contracts', href: '#smart-contracts' },
      { label: 'Integrations', href: '#integrations' },
      { label: 'Customer stories', href: '#testimonials' },
    ],
  },
  {
    label: 'Learn',
    href: '#learn',
    children: [
      { label: 'Blog', href: '#blog' },
      { label: 'Help center', href: '#help' },
      { label: 'Webinars', href: '#webinars' },
    ],
  },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
]
