import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import { BigType } from '@/components/ui/BigType'
import { aboutContent } from '@/data/about'

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <BigType text="ABOUT" className="-top-10 text-charcoal/[0.05]" parallax={-50} />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-electric/8 blur-[120px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Who We Are"
          title="About EverfinePrinters"
          subtitle="A professional printing partner focused on quality, creativity and precision — from first proof to final finish."
        />

        <RevealGroup className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {aboutContent.map((block) => (
            <RevealItem key={block.id}>
              <div className="h-full rounded-2xl border border-charcoal/8 bg-white/70 p-8 shadow-[0_20px_50px_-30px_rgba(10,9,13,0.25)] backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal/10 text-royal">
                  <Icon name={block.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-medium text-charcoal">{block.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{block.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
