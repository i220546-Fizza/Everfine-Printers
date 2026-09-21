import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'
import { printingMethods } from '@/data/digitalOffset'

function DigitalAnimation() {
  return (
    <div className="grid grid-cols-6 gap-1.5 opacity-90">
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.span
          key={i}
          className="h-2 w-2 rounded-full bg-electric-light"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: (i % 6) * 0.12 + Math.floor(i / 6) * 0.08 }}
        />
      ))}
    </div>
  )
}

function OffsetAnimation() {
  return (
    <div className="relative flex h-16 items-center justify-center gap-3">
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="relative h-14 w-14 rounded-full border-4 border-royal-light/60"
        >
          <span className="absolute left-1/2 top-1/2 h-1.5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal-light" />
        </motion.div>
      ))}
      <motion.div
        className="absolute -bottom-2 h-1 w-32 rounded-full bg-ivory/50"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.4, repeat: Infinity }}
      />
    </div>
  )
}

export function DigitalOffset() {
  return (
    <section id="digital-offset" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Printing Methods"
          title="The right process for every run"
          subtitle="Whether it's a short personalized batch or a large production run, we match the method to the job."
        />

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {printingMethods.map((method, i) => (
            <Reveal key={method.id} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-ivory/10 bg-charcoal-soft/50 p-8 shadow-premium">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-royal to-electric text-ivory">
                  <Icon name={method.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium text-ivory">{method.title}</h3>
                <p className="mt-2 text-sm text-ivory/60">{method.description}</p>

                <div className="my-6 flex h-16 items-center justify-center rounded-xl bg-ivory/[0.04]">
                  {method.id === 'digital' ? <DigitalAnimation /> : <OffsetAnimation />}
                </div>

                <ul className="space-y-2">
                  {method.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ivory/65">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-royal" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
