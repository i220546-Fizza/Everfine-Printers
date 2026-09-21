import { useRef, type RefObject, type MouseEvent as ReactMouseEvent } from 'react'
import { useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion'
import { useReducedMotion } from './useReducedMotion'

interface TiltResult<T extends HTMLElement> {
  ref: RefObject<T | null>
  style: {
    rotateX: MotionValue<number>
    rotateY: MotionValue<number>
    transformPerspective: number
  }
  glareStyle: { opacity: MotionValue<number>; x: MotionValue<string>; y: MotionValue<string> }
  onMouseMove: (e: ReactMouseEvent<T>) => void
  onMouseLeave: () => void
}

/** Spring-driven 3D tilt-on-hover for cards and photographs; no-ops under prefers-reduced-motion. */
export function useTilt<T extends HTMLElement = HTMLDivElement>(intensity = 10): TiltResult<T> {
  const ref = useRef<T>(null)
  const reducedMotion = useReducedMotion()

  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(y, [0, 1], [intensity, -intensity]), { stiffness: 220, damping: 20 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-intensity, intensity]), { stiffness: 220, damping: 20 })
  const glareOpacity = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 })
  const glareX = useTransform(x, [0, 1], ['0%', '100%'])
  const glareY = useTransform(y, [0, 1], ['0%', '100%'])

  function onMouseMove(e: ReactMouseEvent<T>) {
    if (reducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
    glareOpacity.set(0.15)
  }

  function onMouseLeave() {
    x.set(0.5)
    y.set(0.5)
    glareOpacity.set(0)
  }

  return {
    ref,
    style: { rotateX, rotateY, transformPerspective: 900 },
    glareStyle: { opacity: glareOpacity, x: glareX, y: glareY },
    onMouseMove,
    onMouseLeave,
  }
}
