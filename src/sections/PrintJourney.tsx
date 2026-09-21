import { lazy, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { CanvasStage } from '@/components/three/CanvasStage'
import { ProductArt } from '@/components/ui/ProductArt'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useIsMobile } from '@/hooks/useMediaQuery'
import { gsap, ScrollTrigger } from '@/utils/gsapSetup'

const PrintJourneyScene = lazy(() => import('@/components/three/PrintJourneyScene'))

const STAGE_LABELS = [
  'Blank Paper',
  'Printing in Progress',
  'Business Card',
  'Wedding Invitation',
  'Brochure',
  'Packaging Box',
  'Branded Bag',
  'EverfinePrinters',
]

export function PrintJourney() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const wordmarkRef = useRef<HTMLDivElement>(null)
  const progress = useRef(0)
  const [activeLabel, setActiveLabel] = useState(STAGE_LABELS[0])
  const reducedMotion = useReducedMotion()
  const isMobile = useIsMobile()

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return
    const activeIndexRef = { current: -1 }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=350%',
        scrub: 0.7,
        pin: !isMobile,
        onUpdate: (self) => {
          progress.current = self.progress
          const idx = Math.min(STAGE_LABELS.length - 1, Math.round(self.progress * (STAGE_LABELS.length - 1)))
          if (idx !== activeIndexRef.current) {
            activeIndexRef.current = idx
            setActiveLabel(STAGE_LABELS[idx])
          }
          if (wordmarkRef.current) {
            const wp = Math.max(0, (self.progress - 0.86) / 0.14)
            wordmarkRef.current.style.opacity = String(Math.min(1, wp))
            wordmarkRef.current.style.transform = `translateY(${(1 - Math.min(1, wp)) * 24}px) scale(${0.94 + Math.min(1, wp) * 0.06})`
          }
        },
      })
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [reducedMotion, isMobile])

  if (reducedMotion) {
    return (
      <section className="relative overflow-hidden bg-charcoal py-24 text-ivory sm:py-32">
        <div className="container-ep text-center">
          <p className="eyebrow justify-center text-electric-light">The Print Journey</p>
          <h2 className="mt-4 font-display text-3xl font-medium text-ivory sm:text-4xl">From a blank sheet to a finished brand</h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/60">
            Paper &rarr; Business Card &rarr; Wedding Invitation &rarr; Brochure &rarr; Packaging &rarr; Branded Bag &rarr; EverfinePrinters
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-charcoal text-ivory md:h-[100svh]"
      aria-label="The Print Journey — from paper to finished brand"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal-deep via-charcoal to-charcoal-deep" />

      <div className="container-ep relative grid items-center gap-6 py-16 md:h-full md:grid-cols-[0.7fr_1.3fr]">
        <div className="relative z-10">
          <p className="eyebrow text-electric-light">
            <span className="h-px w-6 bg-current opacity-60" />
            The Print Journey
          </p>
          <h2 className="mt-5 font-display text-3xl font-medium leading-tight text-ivory sm:text-4xl">
            From a blank sheet to a finished brand
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/55">
            Keep scrolling — watch a single sheet of paper become every product EverfinePrinters creates.
          </p>

          <div className="mt-8 h-8 overflow-hidden">
            <motion.p
              key={activeLabel}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-lg font-medium text-electric-light"
            >
              {activeLabel}
            </motion.p>
          </div>
        </div>

        <div className="relative h-[60vh] w-full sm:h-[70vh]">
          <CanvasStage
            className="h-full w-full"
            fallback={
              <div className="flex h-full w-full items-center justify-center">
                <ProductArt shape="box" className="h-40 w-40 text-electric-light" />
              </div>
            }
          >
            <PrintJourneyScene progress={progress} />
          </CanvasStage>

          <div
            ref={wordmarkRef}
            className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0"
          >
            <p className="font-display text-4xl font-medium tracking-tight text-ivory sm:text-6xl">
              Everfine<span className="text-electric-light font-semibold">Printers</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
