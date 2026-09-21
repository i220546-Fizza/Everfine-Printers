import { useMemo } from 'react'
import { useIsMobile } from '@/hooks/useMediaQuery'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils/cn'

interface ParticlesProps {
  count?: number
  className?: string
  color?: string
}

/**
 * Lightweight CSS-driven drifting dots for foreground/background depth. Pure transform
 * animations (GPU-friendly), count halved on mobile, disabled entirely under reduced motion.
 */
export function Particles({ count = 16, className, color = 'bg-royal/30' }: ParticlesProps) {
  const isMobile = useIsMobile()
  const reducedMotion = useReducedMotion()
  const total = isMobile ? Math.ceil(count / 2) : count

  const dots = useMemo(
    () =>
      Array.from({ length: total }).map((_, i) => ({
        id: i,
        left: Math.round((((i * 137.5) % 100) + 100) % 100),
        top: Math.round((((i * 71.3) % 100) + 100) % 100),
        size: 2 + (i % 4),
        duration: 12 + (i % 6) * 2,
        delay: (i % 8) * -1.3,
        slow: i % 3 === 0,
      })),
    [total]
  )

  if (reducedMotion) return null

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      {dots.map((dot) => (
        <span
          key={dot.id}
          className={cn('absolute rounded-full', color, dot.slow ? 'animate-drift-slow' : 'animate-drift')}
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: dot.size,
            height: dot.size,
            animationDuration: `${dot.duration}s`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
