import { motion } from 'framer-motion'
import { PanelTop } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealGroup } from '@/components/ui/Reveal'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { largeFormatServices } from '@/data/packaging'

export function LargeFormat() {
  const items = largeFormatServices.filter((s) => s.enabled)

  return (
    <section id="large-format" className="relative overflow-hidden py-24 sm:py-32">
      <Container className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative mx-auto flex h-[26rem] w-full max-w-xs items-start justify-center overflow-hidden rounded-3xl bg-charcoal shadow-premium sm:h-[30rem]">
          <div className="absolute inset-x-6 top-0 flex h-6 items-center justify-center rounded-b-lg bg-charcoal-soft">
            <PanelTop size={14} className="text-ivory/40" />
          </div>
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{ transformOrigin: 'top' }}
            className="relative mt-6 h-[85%] w-[78%] rounded-b-md bg-gradient-to-b from-royal via-electric to-royal-light p-6 shadow-2xl"
          >
            <div className="flex h-full flex-col justify-between text-ivory">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-ivory/70">EverfinePrinters</p>
                <p className="mt-3 font-display text-2xl font-medium leading-tight">Large Format Printing</p>
              </div>
              <p className="text-xs text-ivory/60">Banners · Flex · Signage</p>
            </div>
          </motion.div>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Large Format Printing"
            title="Made to be seen from a distance"
            subtitle="Bold, durable large-format prints for storefronts, exhibitions and outdoor campaigns."
          />

          <RevealGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.06}>
            {items.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  )
}
