import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export const Container = forwardRef<HTMLDivElement, { className?: string; children: ReactNode }>(
  function Container({ className, children }, ref) {
    return (
      <div ref={ref} className={cn('container-ep', className)}>
        {children}
      </div>
    )
  }
)
