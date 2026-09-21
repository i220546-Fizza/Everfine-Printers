import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import { whyChooseUsItems } from '@/data/whyChooseUs'

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Why Choose Us" title="What sets EverfinePrinters apart" />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {whyChooseUsItems.map((item) => (
            <RevealItem key={item.id}>
              <motion.div
                whileHover={{ rotateX: -4, rotateY: 4, y: -4 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                style={{ transformPerspective: 800 }}
                className="group h-full rounded-2xl border border-charcoal/8 bg-gradient-to-br from-white to-ivory-soft p-8 shadow-[0_20px_50px_-30px_rgba(10,9,13,0.25)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-royal/10 to-electric/10 text-royal transition-colors duration-300 group-hover:from-royal group-hover:to-electric group-hover:text-ivory">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-medium text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm text-charcoal/55">{item.description}</p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
