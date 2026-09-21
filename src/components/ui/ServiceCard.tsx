import { motion } from 'framer-motion'
import { Icon } from './Icon'
import { RevealItem } from './Reveal'
import type { ServiceItem } from '@/data/services'

export function ServiceCard({ item, dark = false }: { item: ServiceItem; dark?: boolean }) {
  return (
    <RevealItem>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className={
          dark
            ? 'group relative h-full overflow-hidden rounded-2xl border border-ivory/10 bg-charcoal-soft/60 p-6 transition-colors duration-300 hover:border-electric-light/40'
            : 'group relative h-full overflow-hidden rounded-2xl border border-charcoal/8 bg-white/60 p-6 shadow-[0_20px_50px_-30px_rgba(10,9,13,0.25)] backdrop-blur-sm transition-colors duration-300 hover:border-royal/30'
        }
      >
        <div
          className={
            dark
              ? 'flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-royal/30 to-electric/30 text-electric-light'
              : 'flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-royal/10 to-electric/10 text-royal'
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
