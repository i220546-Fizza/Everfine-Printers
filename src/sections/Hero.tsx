import { lazy, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { CanvasStage } from '@/components/three/CanvasStage'
import { ProductArt } from '@/components/ui/ProductArt'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { BigType } from '@/components/ui/BigType'
import { Particles } from '@/components/ui/Particles'
import { siteConfig } from '@/data/site'
import { scrollToId } from '@/utils/scrollTo'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useMousePosition } from '@/hooks/useMousePosition'
import { gsap, ScrollTrigger } from '@/utils/gsapSetup'

const HeroScene = lazy(() => import('@/components/three/HeroScene'))

const orbitShapes: { shape: 'businessCard' | 'weddingCard' | 'box' | 'mug' | 'pen' | 'bag'; className: string }[] = [
  { shape: 'weddingCard', className: 'left-[6%] top-[18%] h-16 w-16 sm:h-20 sm:w-20' },
  { shape: 'businessCard', className: 'right-[8%] top-[26%] h-14 w-14 sm:h-16 sm:w-16' },
  { shape: 'box', className: 'left-[12%] bottom-[16%] h-16 w-16 sm:h-20 sm:w-20' },
  { shape: 'mug', className: 'right-[12%] bottom-[22%] h-14 w-14 sm:h-16 sm:w-16' },
]

const lines = ['Print Beyond', 'Ordinary.']

export function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const mouse = useMousePosition(!reducedMotion)

  useEffect(() => {
    if (reducedMotion || !sceneRef.current || !contentRef.current) return
    const ctx = gsap.context(() => {
      // Foreground 3D layer recedes fastest — furthest "depth" travel.
      gsap.to(sceneRef.current, {
        yPercent: 18,
        scale: 0.9,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: 0.6 },
      })
      // Main content layer moves slower and fades later — closer "depth" plane.
      gsap.to(contentRef.current, {
        yPercent: -12,
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: '#home', start: 'top top', end: '75% top', scrub: 0.6 },
      })
    })
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [reducedMotion])

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      {/* BACK LAYER — gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal-deep via-charcoal to-charcoal-deep" />

      {/* MIDDLE-BACK LAYER — oversized editorial typography, slow independent parallax */}
      <BigType text="PRINT" className="top-1/2 -translate-y-1/2 text-ivory/[0.06]" parallax={-60} />

      {/* MIDDLE-BACK LAYER — blurred abstract light shapes, subtle mouse parallax */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/10 blur-[140px]"
        animate={{ x: mouse.x * -18, y: mouse.y * -14 }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[26rem] w-[26rem] rounded-full bg-electric/10 blur-[120px]"
        animate={{ x: mouse.x * 22, y: mouse.y * 16 }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      />

      {/* FOREGROUND — drifting particles, closest layer, reacts most to mouse */}
      <motion.div
        className="absolute inset-0"
        animate={{ x: mouse.x * 10, y: mouse.y * 8 }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      >
        <Particles count={18} className="opacity-70" color="bg-royal/25" />
      </motion.div>

      <Container ref={contentRef} className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
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

          <h1 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight text-ivory sm:text-6xl lg:text-6xl xl:text-7xl">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  initial={reducedMotion ? undefined : { y: '110%', opacity: 0, filter: 'blur(12px)' }}
                  animate={reducedMotion ? undefined : { y: '0%', opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={cnLine(i)}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ivory/60 sm:text-lg lg:mx-0"
          >
            Professional printing, packaging and promotional solutions crafted to bring your ideas to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <Button size="lg" variant="secondary" cursorLabel="explore" onClick={() => scrollToId('services')}>
              Explore Our Services
            </Button>
            <Button size="lg" cursorLabel="quote" onClick={() => scrollToId('quote')} icon={<ArrowRight size={16} />}>
              Get a Quote
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 text-xs uppercase tracking-[0.3em] text-ivory/35"
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

      {/* Cinematic bridge into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-charcoal-deep" />

      <motion.button
        onClick={() => scrollToId('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        aria-label="Scroll to explore"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/40 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-9 w-5 rounded-full border border-ivory/25 p-1">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="block h-1.5 w-1.5 rounded-full bg-ivory/50"
          />
        </span>
      </motion.button>
    </section>
  )
}

function cnLine(i: number) {
  return i === 0 ? 'inline-block text-gradient-royal' : 'inline-block'
}
