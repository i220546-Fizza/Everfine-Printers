import { useMemo, useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Modal } from '@/components/ui/Modal'
import { BigType } from '@/components/ui/BigType'
import { useTilt } from '@/hooks/useTilt'
import { cn } from '@/utils/cn'
import { portfolioItems, portfolioCategories, type PortfolioCategory, type PortfolioItem } from '@/data/portfolio'

const patternHeights = ['h-64', 'h-80', 'h-72', 'h-96', 'h-64', 'h-80']

function PortfolioCard({ item, index, onOpen }: { item: PortfolioItem; index: number; onOpen: () => void }) {
  const tilt = useTilt<HTMLButtonElement>(5)

  return (
    <motion.button
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.03 }}
      style={{
        rotateX: tilt.style.rotateX,
        rotateY: tilt.style.rotateY,
        transformPerspective: tilt.style.transformPerspective,
      }}
      onClick={onOpen}
      data-cursor="view"
      className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl text-left shadow-[0_20px_50px_-30px_rgba(10,9,13,0.35)]"
    >
      <div
        className={cn(
          'relative flex w-full items-center justify-center overflow-hidden',
          patternHeights[index % patternHeights.length]
        )}
        style={{
          background: `linear-gradient(135deg, ${item.accent}, color-mix(in srgb, ${item.accent} 40%, #1c1a22))`,
        }}
      >
        <span className="font-display text-lg font-medium text-ivory/90 transition-transform duration-500 group-hover:scale-105">
          {item.title}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="bg-white px-5 py-4">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-royal">{item.category}</p>
        <p className="mt-1 font-display text-base font-medium text-charcoal">{item.title}</p>
      </div>
    </motion.button>
  )
}

export function Portfolio() {
  const [filter, setFilter] = useState<PortfolioCategory | 'All'>('All')
  const [activeId, setActiveId] = useState<string | null>(null)

  const items = useMemo(
    () => portfolioItems.filter((p) => p.enabled && (filter === 'All' || p.category === filter)),
    [filter]
  )
  const active = portfolioItems.find((p) => p.id === activeId) ?? null

  return (
    <section id="portfolio" className="relative overflow-hidden py-24 sm:py-32">
      <BigType text="WORK" className="top-10 text-ivory/[0.06]" />

      <Container className="relative">
        <SectionHeading eyebrow="Showcase" title="Our Work" subtitle="A selection of projects across print, packaging and branding." />

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-colors duration-300',
                filter === cat
                  ? 'border-transparent bg-gradient-to-r from-royal to-electric text-ivory'
                  : 'border-ivory/15 text-ivory/60 hover:border-royal/40 hover:text-royal-light'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <LayoutGroup>
          <motion.div layout className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
            <AnimatePresence mode="popLayout">
              {items.map((item, i) => (
                <PortfolioCard key={item.id} item={item} index={i} onOpen={() => setActiveId(item.id)} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </Container>

      <Modal open={Boolean(active)} onClose={() => setActiveId(null)} labelledBy="portfolio-modal-title">
        {active && (
          <div>
            <div
              className="flex h-48 items-center justify-center rounded-2xl"
              style={{ background: `linear-gradient(135deg, ${active.accent}, color-mix(in srgb, ${active.accent} 40%, #1c1a22))` }}
            >
              <span className="font-display text-2xl font-medium text-ivory/90">{active.title}</span>
            </div>
            <p className="eyebrow mt-6">{active.category}</p>
            <h3 id="portfolio-modal-title" className="mt-2 font-display text-2xl font-medium text-charcoal">
              {active.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/60">{active.description}</p>
            <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-charcoal/10 pt-6 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wide text-charcoal/40">Printing</dt>
                <dd className="mt-1 text-charcoal/75">{active.printingType}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-charcoal/40">Material</dt>
                <dd className="mt-1 text-charcoal/75">{active.material}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-charcoal/40">Finishing</dt>
                <dd className="mt-1 text-charcoal/75">{active.finishing}</dd>
              </div>
            </dl>
          </div>
        )}
      </Modal>
    </section>
  )
}
