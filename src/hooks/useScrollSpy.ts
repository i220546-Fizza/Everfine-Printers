import { useEffect, useState } from 'react'

/** Tracks which section id is currently most visible in the viewport, for nav active-state. */
export function useScrollSpy(ids: string[], offset = 140) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (sections.length === 0) return

    function onScroll() {
      const scrollPos = window.scrollY + offset
      let current = sections[0]?.id ?? ''
      for (const section of sections) {
        if (section.offsetTop <= scrollPos) {
          current = section.id
        }
      }
      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return activeId
}
