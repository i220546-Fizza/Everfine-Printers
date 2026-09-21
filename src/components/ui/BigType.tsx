import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface BigTypeProps {
  text: string
  className?: string
  /** How far (px) the layer drifts across the section's scroll range — negative moves it up. */
  parallax?: number
  fill?: boolean
}

/**
 * Oversized, low-opacity editorial background typography that drifts slowly as the
 * containing section scrolls through the viewport — creates depth behind the main content.
 * Stays static (no parallax) under prefers-reduced-motion.
 */
export function BigType({ text, className, parallax = -80, fill = false }: BigTypeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : parallax])

  return (
    <div ref={ref} className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      <motion.span style={{ y }} className={fill ? 'big-type-fill block' : 'big-type block'}>
        {text}
      </motion.span>
    </div>
  )
}
