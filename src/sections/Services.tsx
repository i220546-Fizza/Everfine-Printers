import { lazy } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealGroup, Reveal } from '@/components/ui/Reveal'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { CanvasStage } from '@/components/three/CanvasStage'
import { ProductArt } from '@/components/ui/ProductArt'
import { businessPrintingServices } from '@/data/services'

const BusinessCardFlip = lazy(() => import('@/components/three/BusinessCardFlip'))

export function Services() {
  const items = businessPrintingServices.filter((s) => s.enabled)

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionHeading
          align="left"
          eyebrow="What We Print"
          title="Business essentials, done with precision."
          subtitle="From everyday business essentials to memorable personal and promotional products."
        />

        <Reveal delay={0.1} className="mx-auto aspect-[16/10] w-full max-w-md lg:max-w-none">
          <CanvasStage
            className="h-full w-full"
            fallback={
              <div className="flex h-full w-full items-center justify-center rounded-3xl bg-white/60 p-10 shadow-premium">
                <ProductArt shape="businessCard" className="h-24 w-24 text-royal" />
              </div>
            }
          >
            <BusinessCardFlip />
          </CanvasStage>
          <p className="mt-2 text-center text-xs uppercase tracking-[0.2em] text-charcoal/35">Hover the card to flip it</p>
        </Reveal>
      </Container>

      <Container>
        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {items.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
