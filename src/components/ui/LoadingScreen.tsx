import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/**
 * Short cinematic intro: a blank sheet fills with ink, then the wordmark assembles.
 * Shown once per page load, skipped instantly under prefers-reduced-motion.
 */
export function LoadingScreen() {
  const reducedMotion = useReducedMotion()
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (reducedMotion) {
      setDone(true)
      return
    }
    const timer = setTimeout(() => setDone(true), 1700)
    return () => clearTimeout(timer)
  }, [reducedMotion])

  useEffect(() => {
    document.body.style.overflow = done ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[500] flex items-center justify-center bg-charcoal-deep"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scaleY: 0, opacity: 0.4 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'bottom' }}
              className="relative h-24 w-16 overflow-hidden rounded-sm bg-ivory shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] sm:h-32 sm:w-20"
            >
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.7, 0, 0.3, 1] }}
                className="absolute inset-0 bg-gradient-to-t from-royal via-electric to-royal-light"
              />
            </motion.div>

            <div className="mt-8 overflow-hidden">
              <motion.p
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-2xl font-medium tracking-[0.08em] text-ivory sm:text-3xl"
              >
                Everfine<span className="text-electric-light font-semibold">Printers</span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
