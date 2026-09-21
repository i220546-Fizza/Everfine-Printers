import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode, Ref } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useMagnetic } from '@/hooks/useMagnetic'
import { mergeRefs } from '@/utils/mergeRefs'

const base =
  'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-sans font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric disabled:pointer-events-none disabled:opacity-50'

const variants = {
  primary:
    'bg-gradient-to-r from-royal to-electric text-ivory shadow-[0_18px_40px_-14px_rgba(218,6,121,0.55)] hover:shadow-[0_22px_50px_-12px_rgba(10,75,150,0.6)]',
  secondary:
    'border border-charcoal/20 bg-transparent text-charcoal hover:border-charcoal/40 hover:bg-charcoal/5',
  ghost: 'text-charcoal hover:text-royal',
  light: 'bg-ivory text-charcoal hover:bg-ivory-soft',
}

const sizes = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm sm:text-base',
}

interface CommonProps {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  children: ReactNode
  className?: string
  icon?: ReactNode
  /** Subtle cursor-following nudge on hover. Default on; set false to disable. */
  magnetic?: boolean
  /** Label the custom cursor shows while hovering this button. Defaults to "cta". */
  cursorLabel?: string
}

type MotionConflicts = 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd'

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps | MotionConflicts>
type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | MotionConflicts> & { href: string }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', children, className, icon, magnetic = true, cursorLabel = 'cta', onMouseMove, onMouseLeave, ...props },
  ref
) {
  const magnet = useMagnetic(0.3)

  return (
    <motion.button
      ref={mergeRefs(ref, magnetic ? (magnet.ref as Ref<HTMLButtonElement>) : undefined)}
      data-cursor={cursorLabel}
      style={magnetic ? { x: magnet.style.x, y: magnet.style.y } : undefined}
      onMouseMove={(e) => {
        if (magnetic) magnet.onMouseMove(e)
        onMouseMove?.(e)
      }}
      onMouseLeave={(e) => {
        if (magnetic) magnet.onMouseLeave()
        onMouseLeave?.(e)
      }}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={cn(base, variants[variant], sizes[size], 'group', className)}
      {...props}
    >
      <span className="btn-shine pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:animate-shimmer group-hover:opacity-100" />
      <span className="relative">{children}</span>
      {icon && <span className="relative">{icon}</span>}
    </motion.button>
  )
})

export function LinkButton({ variant = 'primary', size = 'md', children, className, icon, ...props }: LinkButtonProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={cn(base, variants[variant], sizes[size], 'group cursor-pointer', className)}
      {...props}
    >
      <span className="btn-shine pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:animate-shimmer group-hover:opacity-100" />
      <span className="relative">{children}</span>
      {icon && <span className="relative">{icon}</span>}
    </motion.a>
  )
}
