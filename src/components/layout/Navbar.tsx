import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/nav'
import { siteConfig } from '@/data/site'
import { scrollToId } from '@/utils/scrollTo'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useScrollSpy(navLinks.map((l) => l.href))

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  function handleNavClick(href: string) {
    setMobileOpen(false)
    scrollToId(href)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'glass-panel border-b border-ivory/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.5)]' : 'bg-transparent'
      )}
    >
      <nav className="container-ep flex h-20 items-center justify-between" aria-label="Primary">
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
          aria-label="EverfinePrinters — go to home"
        >
          <img
            src="/assets/brand/logo.png"
            alt="EverfinePrinters"
            className="h-9 w-auto drop-shadow-[0_2px_14px_rgba(255,255,255,0.18)] sm:h-10"
          />
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <button
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300',
                  activeId === link.href ? 'text-royal-light' : 'text-ivory/70 hover:text-ivory'
                )}
              >
                {link.label}
                {activeId === link.href && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-royal to-electric"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button size="md" onClick={() => handleNavClick('quote')}>
            Get a Quote
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-ivory lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel overflow-hidden border-t border-ivory/10 lg:hidden"
          >
            <ul className="container-ep flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      'block w-full rounded-xl px-4 py-3 text-left text-base font-medium',
                      activeId === link.href ? 'bg-royal/15 text-royal-light' : 'text-ivory/80'
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <Button className="w-full" onClick={() => handleNavClick('quote')}>
                  Get a Quote
                </Button>
              </li>
              <li className="pt-1 text-center text-xs text-ivory/40">{siteConfig.tagline}</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
