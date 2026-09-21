import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const LABELS: Record<string, string> = {
  view: 'VIEW',
  explore: 'EXPLORE',
  quote: 'QUOTE',
  cta: '',
}

/**
 * Elegant custom cursor for desktop pointers only. Elements opt in via `data-cursor="view" |
 * "explore" | "cta"`. Automatically disabled on touch devices and under prefers-reduced-motion.
 */
export function CustomCursor() {
  const reducedMotion = useReducedMotion()
  const [capable, setCapable] = useState(false)
  const [label, setLabel] = useState<string | null>(null)
  const [down, setDown] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.4 })

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setCapable(mq.matches)
    const handler = (e: MediaQueryListEvent) => setCapable(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (!capable) return
    document.documentElement.classList.add('custom-cursor-active')
    return () => document.documentElement.classList.remove('custom-cursor-active')
  }, [capable])

  useEffect(() => {
    if (!capable) return

    function onMove(e: MouseEvent) {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    function onOver(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor]')
      setLabel(target ? (target.dataset.cursor ?? null) : null)
    }
    function onDown() {
      setDown(true)
    }
    function onUp() {
      setDown(false)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [capable, x, y])

  if (!capable || reducedMotion) return null

  const text = label ? (LABELS[label] ?? '') : ''
  const expanded = Boolean(label)

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[300] mix-blend-difference"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.span
          animate={{ scale: down ? 0.6 : 1 }}
          transition={{ duration: 0.15 }}
          className="block h-2 w-2 rounded-full bg-ivory"
        />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[300] flex items-center justify-center rounded-full border border-ivory/70 mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: expanded ? 84 : 34,
          height: expanded ? 84 : 34,
          opacity: 1,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      >
        <AnimatePresence>
          {text && (
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="text-[10px] font-semibold tracking-[0.15em] text-ivory"
            >
              {text}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
