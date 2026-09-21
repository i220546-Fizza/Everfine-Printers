import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import { featureCards } from '@/data/whyChooseUs'

export function Intro() {
  return (
    <section id="intro" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="EverfinePrinters"
          title="Ideas deserve a great finish."
          subtitle="EverfinePrinters brings ideas to life through professional printing, packaging, personalized products and branding solutions."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {featureCards.map((item) => (
            <RevealItem key={item.id}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-charcoal/8 bg-white/70 p-7 shadow-[0_20px_50px_-30px_rgba(10,9,13,0.25)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-royal/30">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-royal to-electric text-ivory shadow-[0_10px_25px_-8px_rgba(90,42,209,0.5)]">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-medium text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/55">{item.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
