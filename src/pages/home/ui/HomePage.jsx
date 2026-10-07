import { BelieveEyesSection } from '@/widgets/believe-eyes'
import { BlogSection } from '@/widgets/blog'
import { ClientsSection } from '@/widgets/clients'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { HeroSection } from '@/widgets/hero'
import { IntegrationsSection } from '@/widgets/integrations'
import { MoreFromOneflowSection } from '@/widgets/more-from-oneflow'
import { PlatformSection } from '@/widgets/platform'
import { PressPlaySection } from '@/widgets/press-play'
import { SmartContractsSection } from '@/widgets/smart-contracts'
import { TestimonialsSection } from '@/widgets/testimonials'

/**
 * Страница только СОБИРАЕТ виджеты в нужном порядке — никакой вёрстки здесь.
 */
export function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <ClientsSection />
        <SmartContractsSection />
        <PressPlaySection />
        <PlatformSection />
        <BelieveEyesSection />
        <TestimonialsSection />
        <IntegrationsSection />
        <BlogSection />
        <MoreFromOneflowSection />
      </main>
      <Footer />
    </>
  )
}
