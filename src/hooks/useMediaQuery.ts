import { useEffect, useState } from 'react'

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  )

  useEffect(() => {
    const mq = window.matchMedia(query)
    setMatches(mq.matches)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [query])

  return matches
}

/** True on small/touch devices where the full 3D experience should be simplified. */
export function useIsMobile() {
  return useMediaQuery('(max-width: 767px)')
}

/** True on medium (tablet) viewports where 3D complexity should be reduced. */
export function useIsTablet() {
  return useMediaQuery('(min-width: 768px) and (max-width: 1279px)')
}
