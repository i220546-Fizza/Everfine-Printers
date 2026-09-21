import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealGroup } from '@/components/ui/Reveal'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { StickerSheet } from '@/components/ui/StickerPeel'
import { labelsStickersServices } from '@/data/packaging'
import { Reveal } from '@/components/ui/Reveal'

export function LabelsStickers() {
  const items = labelsStickersServices.filter((s) => s.enabled)

  return (
    <section id="labels-stickers" className="relative bg-charcoal py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Labels & Stickers"
          title="Details matter"
          subtitle="Precisely cut labels and stickers that add a finishing touch to every product and package."
        />

        <Reveal className="mx-auto mt-14 max-w-3xl" delay={0.1}>
          <StickerSheet icons={items.map((i) => i.icon)} />
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
          {items.map((item) => (
            <ServiceCard key={item.id} item={item} dark />
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
