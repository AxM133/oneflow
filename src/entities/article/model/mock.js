/**
 * Статьи блога (моки вместо API).
 * variant — как показывать карточку:
 *   featured — большая розовая карточка на всю ширину (текст слева, картинка справа)
 *   dark     — тёмная карточка с картинкой сверху ("Guide")
 *   story    — синяя карточка истории клиента ("Sweco")
 *   light    — розовая карточка с картинкой сверху
 */
export const articles = [
  {
    id: 'e-signature-guide',
    variant: 'featured',
    category: 'Article',
    // \u2011 — неразрывный дефис: "E-signatures" не разрывается на две строки
    title: 'A Basic Guide on E\u2011signatures and What Makes Them Legally Binding',
    topic: 'E-signature',
    readTime: '11 min read',
    image: '/images/blog/1.webp',
    href: '#blog',
  },
  {
    id: 'documents-to-sign-online',
    variant: 'dark',
    category: 'Guide',
    title: '29 documents you can sign online in 2021',
    topic: 'Contract automation',
    readTime: '18 min read',
    image: '/images/blog/2.webp',
    href: '#blog',
  },
  {
    id: 'sweco-story',
    variant: 'story',
    category: 'Customer Story',
    title: 'Sweco',
    href: '#blog',
  },
  {
    id: 'master-digital-sales',
    variant: 'light',
    category: 'Article',
    title: 'Master digital sales: How to close deals when you’re not allowed to shake hands',
    topic: 'Sales',
    readTime: '6 min read',
    image: '/images/blog/3.webp',
    href: '#blog',
  },
]
