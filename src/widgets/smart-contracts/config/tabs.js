/**
 * Табы панели "Create / Collaborate / Sign / Manage / Analyze / Integrate".
 * icon — ключ иконки из ui/TabIcons.jsx.
 *
 * В макете есть только таб Collaborate — его тексты и картинка точные.
 * TODO: тексты и картинки остальных табов заменить, когда появится дизайн.
 */
const COLLABORATE_IMAGE = '/images/smart-contracts/collaborate.webp'

export const DEFAULT_TAB_ID = 'collaborate'

export const PRODUCT_TABS = [
  {
    id: 'create',
    label: 'Create',
    icon: 'create',
    title: 'Create',
    description: 'Build contracts from templates in minutes. No copy-paste magic needed.',
    features: ['Start from a template', 'Add your own branding', 'Insert products and prices'],
    href: '#create',
    image: COLLABORATE_IMAGE,
  },
  {
    id: 'collaborate',
    label: 'Collaborate',
    icon: 'collaborate',
    title: 'Collaborate',
    description: 'Work together on one version in real-time. No hocus pocus.',
    features: ['Edit live', 'Make fields interactive', 'Stay one step ahead'],
    href: '#collaborate',
    image: COLLABORATE_IMAGE,
  },
  {
    id: 'sign',
    label: 'Sign',
    icon: 'sign',
    title: 'Sign',
    description: 'Sign anywhere, on any device. Legally binding in seconds.',
    features: ['eSign, SMS or BankID', 'Sign on any device', 'Legally binding'],
    href: '#sign',
    image: COLLABORATE_IMAGE,
  },
  {
    id: 'manage',
    label: 'Manage',
    icon: 'manage',
    title: 'Manage',
    description: 'Keep every contract in one place and never miss a renewal again.',
    features: ['Smart reminders', 'Search and filter', 'Secure storage'],
    href: '#manage',
    image: COLLABORATE_IMAGE,
  },
  {
    id: 'analyze',
    label: 'Analyze',
    icon: 'analyze',
    title: 'Analyze',
    description: 'See what happens with your contracts in real-time.',
    features: ['Live dashboards', 'Track every deal', 'Export reports'],
    href: '#analyze',
    image: COLLABORATE_IMAGE,
  },
  {
    id: 'integrate',
    label: 'Integrate',
    icon: 'integrate',
    title: 'Integrate',
    description: 'Connect Oneflow with the tools your team already loves.',
    features: ['CRM integrations', 'Open API', 'Webhooks'],
    href: '#integrate',
    image: COLLABORATE_IMAGE,
  },
]
