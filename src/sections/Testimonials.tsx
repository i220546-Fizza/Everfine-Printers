import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const active = testimonials[index]

  function go(delta: number) {
    setDirection(delta)
    setIndex((i) => (i + delta + testimonials.length) % testimonials.length)
  }

  if (!active) return null

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What clients say" subtitle="Placeholder reviews shown until real customer testimonials are added." />

        <div className="relative mx-auto mt-14 max-w-2xl">
          <Quote className="mx-auto h-10 w-10 text-royal/25" strokeWidth={1.5} />

          <div className="relative mt-4 min-h-[220px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 text-center"
              >
                <p className="font-display text-xl font-medium leading-relaxed text-ivory sm:text-2xl">
                  &ldquo;{active.review}&rdquo;
                </p>
                <div className="mt-5 flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className={i < active.rating ? 'fill-royal-light text-royal-light' : 'text-ivory/20'}
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm font-semibold text-ivory">{active.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-ivory/40">{active.company}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/60 transition-colors hover:border-royal-light hover:text-royal-light"
            >
              <ChevronLeft size={17} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1)
                    setIndex(i)
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-royal' : 'w-1.5 bg-ivory/20'}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/60 transition-colors hover:border-royal-light hover:text-royal-light"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
