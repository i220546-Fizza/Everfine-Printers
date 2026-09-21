import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { cn } from '@/utils/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  light?: boolean
  className?: string
  as?: 'h2' | 'h1'
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
  as: As = 'h2',
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'mx-auto max-w-3xl',
        align === 'center' ? 'text-center' : 'text-left mx-0',
        className
      )}
    >
      {eyebrow && (
        <p className={cn('eyebrow mb-4', light && 'text-electric-light')}>
          <span className="h-px w-6 bg-current opacity-60" />
          {eyebrow}
        </p>
      )}
      <As
        className={cn(
          'text-3xl font-medium leading-[1.1] sm:text-4xl lg:text-5xl',
          light ? 'text-ivory' : 'text-charcoal'
        )}
      >
        {title}
      </As>
      {subtitle && (
        <p className={cn('mt-5 text-base leading-relaxed sm:text-lg', light ? 'text-ivory/70' : 'text-charcoal/60')}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
