import { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'
import { useTilt } from '@/hooks/useTilt'
import { cn } from '@/utils/cn'

interface LeadershipPhotoProps {
  src: string
  name: string
  className?: string
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

/**
 * Elegant, upload-ready photo container. Accepts JPG/PNG/WebP at `src`; if the file is
 * missing (404), it gracefully renders a refined placeholder instead of a broken image.
 */
export function LeadershipPhoto({ src, name, className }: LeadershipPhotoProps) {
  const [failed, setFailed] = useState(false)
  const tilt = useTilt(8)

  return (
    <motion.div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={{ rotateX: tilt.style.rotateX, rotateY: tilt.style.rotateY, transformPerspective: tilt.style.transformPerspective }}
      className={cn(
        'group relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-premium',
        'rounded-tr-[5rem] rounded-bl-[5rem]',
        className
      )}
    >
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-royal via-charcoal to-electric opacity-90" />

      {!failed && (
        <img
          src={src}
          alt={`Portrait of ${name}`}
          onError={() => setFailed(true)}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 [&.loaded]:opacity-100"
          onLoad={(e) => e.currentTarget.classList.add('loaded')}
        />
      )}

      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-charcoal via-charcoal-deep to-royal-deep text-ivory">
          <span className="font-display text-5xl font-medium tracking-wide text-ivory/90">
            {getInitials(name)}
          </span>
          <div className="flex items-center gap-2 rounded-full border border-ivory/25 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-ivory/60">
            <Camera size={13} strokeWidth={1.75} />
            Photo coming soon
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-t from-black/40 via-transparent to-white/10" />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/15 transition-all duration-500 group-hover:ring-electric-light/50" />
    </motion.div>
  )
}
