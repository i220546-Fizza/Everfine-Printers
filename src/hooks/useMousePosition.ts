import { useEffect, useRef, useState } from 'react'

interface Point {
  x: number
  y: number
}

/**
 * Smoothed, normalized (-1..1) pointer position relative to viewport center.
 * Used to drive subtle mouse-parallax on decorative/3D layers. No-ops under reduced motion.
 */
export function useMousePosition(enabled = true) {
  const [pos, setPos] = useState<Point>({ x: 0, y: 0 })
  const target = useRef<Point>({ x: 0, y: 0 })
  const frame = useRef<number | null>(null)

  useEffect(() => {
    if (!enabled) return

    function onMove(e: MouseEvent) {
      target.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      }
    }

    function tick() {
      setPos((prev) => ({
        x: prev.x + (target.current.x - prev.x) * 0.06,
        y: prev.y + (target.current.y - prev.y) * 0.06,
      }))
      frame.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    frame.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [enabled])

  return pos
}
