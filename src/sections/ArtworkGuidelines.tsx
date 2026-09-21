import { Download } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { artworkGuidelines } from '@/data/quoteOptions'

export function ArtworkGuidelines() {
  return (
    <section id="artwork-guidelines" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Ready to Print?" title="Artwork guidelines" subtitle="A few essentials to keep your artwork print-ready." />

        <RevealGroup className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {artworkGuidelines.map((g) => (
            <RevealItem key={g.id}>
              <div className="h-full rounded-2xl border border-charcoal/8 bg-white/70 p-6 shadow-[0_20px_50px_-30px_rgba(10,9,13,0.25)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-royal/10 text-royal">
                  <Icon name={g.icon} className="h-[18px] w-[18px]" />
                </div>
                <h3 className="mt-4 font-display text-base font-medium text-charcoal">{g.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal/55">{g.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-12 flex justify-center">
          <Button
            variant="secondary"
            size="lg"
            icon={<Download size={16} />}
            onClick={() => {
              const link = document.createElement('a')
              link.href = '/downloads/everfineprinters-artwork-guide.txt'
              link.download = 'EverfinePrinters-Artwork-Guide.txt'
              link.click()
            }}
          >
            Download Artwork Guide
          </Button>
        </div>
      </Container>
    </section>
  )
}
