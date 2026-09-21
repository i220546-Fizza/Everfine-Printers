import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { FileText } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { processSteps } from '@/data/process'

export function HowItWorks() {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 75%', 'end 45%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 })
  const lineScale = useTransform(progress, [0, 1], [0, 1])
  const markerLeft = useTransform(progress, [0, 1], ['0%', '100%'])

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Our Process" title="How it works" subtitle="From your first idea to a finished, delivered product." />

        <div ref={trackRef} className="relative mt-20">
          <div className="absolute left-6 top-0 h-full w-px bg-charcoal/10 lg:left-0 lg:top-6 lg:h-px lg:w-full">
            <motion.div
              style={{ scaleY: lineScale }}
              className="h-full w-full origin-top bg-gradient-to-b from-royal to-electric lg:hidden"
            />
            <motion.div
              style={{ scaleX: lineScale }}
              className="hidden h-full w-full origin-left bg-gradient-to-r from-royal to-electric lg:block"
            />
          </div>

          <motion.div
            style={{ top: '-7px', left: markerLeft }}
            className="absolute hidden h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-electric shadow-[0_0_0_6px_rgba(47,111,237,0.18)] lg:flex"
          >
            <FileText size={9} className="text-ivory" />
          </motion.div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-6 lg:gap-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.06} className="relative pl-14 lg:pl-0 lg:pt-14 lg:text-center">
                <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border-2 border-royal/30 bg-ivory text-royal lg:static lg:mx-auto lg:mb-4">
                  <Icon name={step.icon} className="h-[18px] w-[18px]" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">{step.step}</p>
                <h3 className="mt-1 font-display text-lg font-medium text-charcoal">{step.title}</h3>
                <p className="mt-1 text-sm text-charcoal/55">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
