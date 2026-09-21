import { motion } from 'framer-motion'
import { useTilt } from '@/hooks/useTilt'
import { ProductArt } from './ProductArt'
import { readableAccent } from '@/utils/color'
import type { ShowcaseProduct } from '@/data/products'

export function ProductTiltCard({ product, onOpen }: { product: ShowcaseProduct; onOpen: () => void }) {
  const tilt = useTilt<HTMLButtonElement>(12)
  const stroke = readableAccent(product.color)

  return (
    <motion.button
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      onClick={onOpen}
      style={{ rotateX: tilt.style.rotateX, rotateY: tilt.style.rotateY, transformPerspective: tilt.style.transformPerspective }}
      whileHover={{ scale: 1.03 }}
      className="group relative flex aspect-[4/5] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-charcoal/8 bg-white text-left shadow-[0_16px_40px_-24px_rgba(10,9,13,0.3)] transition-shadow duration-300 hover:shadow-[0_30px_60px_-20px_rgba(90,42,209,0.35)]"
      aria-label={`View ${product.name}`}
    >
      <div
        className="flex h-24 w-24 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110 sm:h-28 sm:w-28"
        style={{ backgroundColor: `${product.color}14` }}
      >
        <ProductArt shape={product.shape} className="h-16 w-16 sm:h-20 sm:w-20" strokeColor={stroke} />
      </div>

      <div className="absolute inset-x-0 bottom-0 translate-y-4 bg-gradient-to-t from-white via-white/95 to-transparent px-4 pb-4 pt-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="font-display text-base font-medium text-charcoal">{product.name}</p>
        <p className="mt-1 line-clamp-2 text-xs text-charcoal/55">{product.description}</p>
      </div>

      <p className="absolute left-4 top-4 text-xs font-medium uppercase tracking-[0.2em] text-charcoal/30 transition-opacity duration-300 group-hover:opacity-0">
        {product.name}
      </p>
    </motion.button>
  )
}
