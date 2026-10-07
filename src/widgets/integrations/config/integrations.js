import { SITE_LINKS } from '@/shared/config'

export const INTEGRATIONS_CONTENT = {
  title: 'Seamless integrations',
  text: 'Integrate your favorite tools with your contract workflow and work wonders.',
  action: { label: 'View all integrations', href: SITE_LINKS.home + '#integrations' },
}

/**
 * Логотипы в три колонки "зигзагом", как в макете: средняя колонка выше боковых.
 * TODO(Dev 3): уточнить названия трёх логотипов с пометкой "partner" (нужны для alt).
 */
export const INTEGRATION_COLUMNS = [
  [
    { name: 'Integration partner', logo: '/images/integrations/logo-1.webp' },
    { name: 'Microsoft Dynamics', logo: '/images/integrations/logo-4.webp' },
    { name: 'HubSpot', logo: '/images/integrations/logo-7.webp' },
  ],
  [
    { name: 'Intelliplan', logo: '/images/integrations/logo-2.webp' },
    { name: 'Integration partner', logo: '/images/integrations/logo-5.webp' },
    { name: 'Salesforce', logo: '/images/integrations/logo-8.webp' },
  ],
  [
    { name: 'Integration partner', logo: '/images/integrations/logo-3.webp' },
    { name: 'Upsales', logo: '/images/integrations/logo-6.webp' },
    { name: 'Teamtailor', logo: '/images/integrations/logo-9.webp' },
  ],
]
