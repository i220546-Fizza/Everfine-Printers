import { motion } from 'framer-motion'
import { Icon } from './Icon'

const shapes = ['rounded-full', 'rounded-2xl', 'rounded-full', 'rounded-xl', 'rounded-full', 'rounded-2xl']

export function StickerSheet({ icons }: { icons: string[] }) {
  return (
    <div className="relative rounded-[2rem] border-2 border-dashed border-ivory/20 bg-charcoal-soft/40 p-8 shadow-inner">
      <div className="grid grid-cols-3 gap-6 sm:grid-cols-6">
        {icons.map((icon, i) => (
          <motion.div
            key={icon + i}
            initial={{ rotate: (i % 2 === 0 ? -1 : 1) * 4 }}
            whileHover={{
              y: -14,
              rotate: (i % 2 === 0 ? -1 : 1) * 14,
              scale: 1.08,
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 16 }}
            className={`relative flex aspect-square items-center justify-center ${shapes[i % shapes.length]} bg-gradient-to-br from-royal/20 to-electric/20 text-royal-light shadow-[0_10px_25px_-12px_rgba(0,0,0,0.5)] ring-1 ring-ivory/15`}
          >
            <Icon name={icon} className="h-6 w-6 sm:h-7 sm:w-7" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
