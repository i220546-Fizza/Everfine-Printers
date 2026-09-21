import { lazy } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealGroup } from '@/components/ui/Reveal'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { CanvasStage } from '@/components/three/CanvasStage'
import { ProductArt } from '@/components/ui/ProductArt'
import { promotionalProducts } from '@/data/promotionalProducts'

const PromoObjectsScene = lazy(() => import('@/components/three/PromoObjectsScene'))

export function Promotional() {
  const items = promotionalProducts.filter((p) => p.enabled)

  return (
    <section id="promotional" className="relative overflow-hidden bg-charcoal py-24 text-ivory sm:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-electric/15 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-royal/20 blur-[120px]" />

      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Promotional Products"
          title="Put your brand everywhere"
          subtitle="From mugs to merch — promotional products that keep your brand in hand."
        />

        <div className="relative mx-auto mt-10 h-64 w-full max-w-2xl sm:h-80">
          <CanvasStage
            className="h-full w-full"
            fallback={
              <div className="flex h-full items-center justify-center gap-8">
                {(['mug', 'pen', 'bag'] as const).map((shape) => (
                  <ProductArt key={shape} shape={shape} className="h-20 w-20 animate-float text-electric-light" />
                ))}
              </div>
            }
          >
            <PromoObjectsScene />
          </CanvasStage>
        </div>

        <RevealGroup className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {items.map((item) => (
            <ServiceCard key={item.id} item={item} dark />
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
