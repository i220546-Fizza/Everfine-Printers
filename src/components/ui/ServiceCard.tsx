import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Icon } from './Icon'
import { RevealItem } from './Reveal'
import { scrollToId } from '@/utils/scrollTo'
import { useTilt } from '@/hooks/useTilt'
import type { ServiceItem } from '@/data/services'

export function ServiceCard({ item, dark = false }: { item: ServiceItem; dark?: boolean }) {
  const tilt = useTilt<HTMLDivElement>(6)

  return (
    <RevealItem>
      <motion.div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        data-cursor="explore"
        whileHover={{ y: -6 }}
        style={{
          rotateX: tilt.style.rotateX,
          rotateY: tilt.style.rotateY,
          transformPerspective: tilt.style.transformPerspective,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className={
          dark
            ? 'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ivory/10 bg-charcoal-soft/60 p-6 transition-colors duration-300 hover:border-electric-light/40'
            : 'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal/8 bg-white/60 p-6 shadow-[0_20px_50px_-30px_rgba(10,9,13,0.25)] backdrop-blur-sm transition-colors duration-300 hover:border-royal/30'
        }
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: 'radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255,255,255,0.35), transparent 55%)',
            // @ts-expect-error -- CSS custom properties aren't in the style typings
            '--glare-x': tilt.glareStyle.x,
            '--glare-y': tilt.glareStyle.y,
          }}
        />

        <div
          className={
            dark
              ? 'flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-royal/30 to-electric/30 text-electric-light transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110'
              : 'flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-royal/10 to-electric/10 text-royal transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110'
          }
        >
          <Icon name={item.icon} className="h-5 w-5" />
        </div>
        <h3 className={dark ? 'mt-4 font-display text-lg font-medium text-ivory' : 'mt-4 font-display text-lg font-medium text-charcoal'}>
          {item.name}
        </h3>
        <p className={dark ? 'mt-1.5 text-sm leading-relaxed text-ivory/55' : 'mt-1.5 text-sm leading-relaxed text-charcoal/55'}>
          {item.description}
        </p>

        <button
          onClick={() => scrollToId('quote')}
          className={
            dark
              ? 'mt-4 inline-flex w-fit items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-electric-light transition-transform duration-300 hover:gap-2.5'
              : 'mt-4 inline-flex w-fit items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-royal transition-transform duration-300 hover:gap-2.5'
          }
        >
          Explore Service
          <ArrowRight size={13} strokeWidth={2} />
        </button>

        <div
          className={
            dark
              ? 'pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-electric/10 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100'
              : 'pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-royal/10 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100'
          }
        />
      </motion.div>
    </RevealItem>
  )
}
