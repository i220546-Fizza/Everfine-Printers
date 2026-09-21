import { lazy, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { CanvasStage } from '@/components/three/CanvasStage'
import { ProductArt } from '@/components/ui/ProductArt'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/data/site'
import { scrollToId } from '@/utils/scrollTo'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { gsap, ScrollTrigger } from '@/utils/gsapSetup'

const HeroScene = lazy(() => import('@/components/three/HeroScene'))

const orbitShapes: { shape: 'businessCard' | 'weddingCard' | 'box' | 'mug' | 'pen' | 'bag'; className: string }[] = [
  { shape: 'weddingCard', className: 'left-[6%] top-[18%] h-16 w-16 sm:h-20 sm:w-20' },
  { shape: 'businessCard', className: 'right-[8%] top-[26%] h-14 w-14 sm:h-16 sm:w-16' },
  { shape: 'box', className: 'left-[12%] bottom-[16%] h-16 w-16 sm:h-20 sm:w-20' },
  { shape: 'mug', className: 'right-[12%] bottom-[22%] h-14 w-14 sm:h-16 sm:w-16' },
]

export function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || !sceneRef.current) return
    const ctx = gsap.context(() => {
      gsap.to(sceneRef.current, {
        yPercent: 18,
        scale: 0.92,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: {
          trigger: '#home',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      })
    })
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [reducedMotion])

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ivory via-ivory to-ivory-soft" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[26rem] w-[26rem] rounded-full bg-electric/10 blur-[120px]" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="relative z-10 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mx-auto justify-center lg:mx-0 lg:justify-start"
          >
            <Sparkles size={14} strokeWidth={1.75} />
            Premium Printing &amp; Branding
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight text-charcoal sm:text-6xl lg:text-6xl xl:text-7xl"
          >
            <span className="text-gradient-royal">Print Beyond</span>
            <br />
            Ordinary.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-charcoal/60 sm:text-lg lg:mx-0"
          >
            Professional printing, packaging and promotional solutions crafted to bring your ideas to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <Button size="lg" variant="secondary" onClick={() => scrollToId('services')}>
              Explore Our Services
            </Button>
            <Button size="lg" onClick={() => scrollToId('quote')} icon={<ArrowRight size={16} />}>
              Get a Quote
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-xs uppercase tracking-[0.3em] text-charcoal/35"
          >
            {siteConfig.taglineAlt}
          </motion.p>
        </div>

        <div ref={sceneRef} className="relative mx-auto aspect-square w-full max-w-lg lg:max-w-none">
          <CanvasStage
            className="h-full w-full"
            fallback={
              <div className="relative flex h-full w-full items-center justify-center">
                <div className="h-56 w-56 rounded-full bg-gradient-to-br from-royal/20 to-electric/20 blur-2xl" />
                {orbitShapes.map(({ shape, className }) => (
                  <div
                    key={shape}
                    className={`absolute ${className} animate-float rounded-2xl bg-white/70 p-3 text-charcoal shadow-premium backdrop-blur`}
                  >
                    <ProductArt shape={shape} className="h-full w-full text-royal" />
                  </div>
                ))}
              </div>
            }
          >
            <HeroScene />
          </CanvasStage>
        </div>
      </Container>

      <motion.button
        onClick={() => scrollToId('intro')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        aria-label="Scroll to explore"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-charcoal/40 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-9 w-5 rounded-full border border-charcoal/25 p-1">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="block h-1.5 w-1.5 rounded-full bg-charcoal/50"
          />
        </span>
      </motion.button>
    </section>
  )
}
