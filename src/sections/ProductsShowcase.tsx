import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import { ProductTiltCard } from '@/components/ui/ProductTiltCard'
import { ProductArt } from '@/components/ui/ProductArt'
import { Modal } from '@/components/ui/Modal'
import { readableAccent } from '@/utils/color'
import { showcaseProducts } from '@/data/products'

export function ProductsShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const items = showcaseProducts.filter((p) => p.enabled)
  const active = items.find((p) => p.id === activeId) ?? null

  return (
    <section id="products" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Printed to impress"
          subtitle="Hover to explore, click any piece for a closer look."
        />

        <RevealGroup className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4" stagger={0.04}>
          {items.map((product) => (
            <RevealItem key={product.id}>
              <ProductTiltCard product={product} onOpen={() => setActiveId(product.id)} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>

      <Modal open={Boolean(active)} onClose={() => setActiveId(null)} labelledBy="product-modal-title">
        {active && (
          <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
            <div
              className="flex aspect-square items-center justify-center rounded-2xl"
              style={{ backgroundColor: `${active.color}14` }}
            >
              <ProductArt shape={active.shape} className="h-40 w-40" strokeColor={readableAccent(active.color)} />
            </div>
            <div>
              <p className="eyebrow">Product</p>
              <h3 id="product-modal-title" className="mt-2 font-display text-3xl font-medium text-charcoal">
                {active.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/60">{active.description}</p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
