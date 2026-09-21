import { motion, type Variants } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface RevealHeadingProps {
  text: string
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  delay?: number
  /** Stagger step between words, in seconds. */
  stagger?: number
  align?: 'left' | 'center'
}

const wordVariants: Variants = {
  hidden: { y: '115%', opacity: 0, filter: 'blur(10px)' },
  show: { y: '0%', opacity: 1, filter: 'blur(0px)' },
}

/**
 * Word-by-word mask + blur-to-sharp reveal for major headings. The heading itself owns the
 * single `whileInView` trigger and broadcasts it to each word via variants — triggering
 * `whileInView` independently on many small nested inline spans is unreliable across browsers.
 */
export function RevealHeading({ text, as = 'h2', className, delay = 0, stagger = 0.05, align = 'center' }: RevealHeadingProps) {
  const reducedMotion = useReducedMotion()
  const words = text.split(' ')
  const wrapClassName = cn(className, 'flex flex-wrap', align === 'center' ? 'justify-center' : 'justify-start')

  if (reducedMotion) {
    const Tag = as
    return <Tag className={className}>{text}</Tag>
  }

  const headingProps = {
    className: wrapClassName,
    initial: 'hidden' as const,
    whileInView: 'show' as const,
    viewport: { once: true, margin: '-80px' } as const,
    transition: { staggerChildren: stagger, delayChildren: delay },
  }

  const content = words.map((word, i) => (
    <span key={`${word}-${i}`} className="mr-[0.28em] inline-block overflow-hidden pb-[0.12em]">
      <motion.span
        className="inline-block"
        variants={wordVariants}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {word}
      </motion.span>
    </span>
  ))

  if (as === 'h1') return <motion.h1 {...headingProps}>{content}</motion.h1>
  if (as === 'h3') return <motion.h3 {...headingProps}>{content}</motion.h3>
  return <motion.h2 {...headingProps}>{content}</motion.h2>
}
