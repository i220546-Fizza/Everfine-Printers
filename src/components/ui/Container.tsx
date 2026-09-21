import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('container-ep', className)}>{children}</div>
}
