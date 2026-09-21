import { lazy } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealGroup } from '@/components/ui/Reveal'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { CanvasStage } from '@/components/three/CanvasStage'
import { ProductArt } from '@/components/ui/ProductArt'
import { packagingServices } from '@/data/packaging'
import { useInViewOnce } from '@/hooks/useInView'

const PackagingBoxScene = lazy(() => import('@/components/three/PackagingBoxScene'))

export function Packaging() {
  const items = packagingServices.filter((s) => s.enabled)
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.35)

  return (
    <section id="packaging" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-electric/10 blur-[130px]" />

      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <SectionHeading
            align="left"
            eyebrow="Packaging"
            title="Packaging that speaks for your brand"
            subtitle="Structural, premium packaging built to protect the product and elevate the unboxing moment."
          />

          <RevealGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4" stagger={0.05}>
            {items.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </RevealGroup>
        </div>

        <div ref={ref} className="order-1 mx-auto aspect-square w-full max-w-md lg:order-2">
          <CanvasStage
            className="h-full w-full"
            fallback={
              <div className="flex h-full w-full items-center justify-center rounded-3xl bg-white/60 p-10 shadow-premium">
                <ProductArt shape="box" className="h-40 w-40 text-royal" />
              </div>
            }
          >
            <PackagingBoxScene active={inView} />
          </CanvasStage>
        </div>
      </Container>
    </section>
  )
}
