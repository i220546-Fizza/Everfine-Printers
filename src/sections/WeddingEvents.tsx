import { lazy } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealGroup } from '@/components/ui/Reveal'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { CanvasStage } from '@/components/three/CanvasStage'
import { ProductArt } from '@/components/ui/ProductArt'
import { weddingEventServices } from '@/data/weddingEvents'
import { useInViewOnce } from '@/hooks/useInView'

const WeddingCardScene = lazy(() => import('@/components/three/WeddingCardScene'))

export function WeddingEvents() {
  const items = weddingEventServices.filter((s) => s.enabled)
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.35)

  return (
    <section id="wedding" className="relative overflow-hidden bg-ivory-soft py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-royal/10 blur-[110px]" />

      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div ref={ref} className="relative mx-auto aspect-square w-full max-w-md">
          <CanvasStage
            className="h-full w-full"
            fallback={
              <div className="flex h-full w-full items-center justify-center rounded-3xl bg-white/60 p-10 shadow-premium">
                <ProductArt shape="weddingCard" className="h-40 w-40 text-royal" />
              </div>
            }
          >
            <WeddingCardScene active={inView} />
          </CanvasStage>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Wedding & Event Printing"
            title="Made for your special moments"
            subtitle="Elegant, custom invitations and event stationery — finished with premium detailing for the moments that matter most."
          />

          <RevealGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.08}>
            {items.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  )
}
