import { iconMap } from '@/utils/iconMap'
import { Sparkles, type LucideIcon } from 'lucide-react'

interface IconProps {
  name: string
  className?: string
  strokeWidth?: number
}

/** Resolves a data-driven icon name (e.g. "Gem") to its lucide-react component. */
export function Icon({ name, className, strokeWidth = 1.75 }: IconProps) {
  const Component: LucideIcon = iconMap[name] ?? Sparkles
  return <Component className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}
