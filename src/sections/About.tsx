import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import { aboutContent } from '@/data/about'

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="About EverfinePrinters" title="Printing with purpose" />

        <RevealGroup className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.08}>
          {aboutContent.map((block) => (
            <RevealItem key={block.id}>
              <div className="h-full rounded-2xl border border-charcoal/8 bg-white/70 p-8 shadow-[0_20px_50px_-30px_rgba(10,9,13,0.25)]">
                <h3 className="font-display text-xl font-medium text-charcoal">{block.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">{block.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
