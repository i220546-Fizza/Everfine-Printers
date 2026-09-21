import { Suspense, type ReactNode } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { useWebGLSupport } from '@/hooks/useWebGLSupport'
import { cn } from '@/utils/cn'

interface CanvasStageProps {
  children: ReactNode
  fallback: ReactNode
  className?: string
  loadingClassName?: string
}

/**
 * Standard wrapper for every R3F scene on the site: Suspense for lazy geometry/chunks,
 * an ErrorBoundary so a WebGL context failure degrades gracefully instead of crashing the
 * page, and an automatic swap to `fallback` when WebGL isn't available at all.
 */
export function CanvasStage({ children, fallback, className, loadingClassName }: CanvasStageProps) {
  const webglSupported = useWebGLSupport()

  if (!webglSupported) {
    return <div className={className}>{fallback}</div>
  }

  return (
    <div className={cn('relative', className)}>
      <ErrorBoundary fallback={fallback}>
        <Suspense
          fallback={
            <div className={cn('flex h-full w-full items-center justify-center', loadingClassName)}>
              <span className="h-10 w-10 animate-spin rounded-full border-2 border-royal/30 border-t-royal" />
            </div>
          }
        >
          {children}
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
