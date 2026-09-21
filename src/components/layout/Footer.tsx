import { Printer, Phone, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { scrollToId } from '@/utils/scrollTo'
import { buildWhatsAppLink } from '@/utils/whatsapp'
import { Container } from '@/components/ui/Container'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '@/components/ui/SocialIcons'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'Home', href: 'home' },
      { label: 'About', href: 'about' },
      { label: 'Leadership', href: 'leadership' },
      { label: 'Portfolio', href: 'portfolio' },
      { label: 'Contact', href: 'contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Business Printing', href: 'services' },
      { label: 'Wedding Cards', href: 'wedding' },
      { label: 'Packaging', href: 'packaging' },
      { label: 'Promotional Products', href: 'promotional' },
      { label: 'Digital Printing', href: 'digital-offset' },
      { label: 'Offset Printing', href: 'digital-offset' },
      { label: 'Large Format', href: 'large-format' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Mugs', href: 'products' },
      { label: 'Pens', href: 'products' },
      { label: 'Bags', href: 'products' },
      { label: 'Cards', href: 'products' },
      { label: 'Stickers', href: 'products' },
      { label: 'Boxes', href: 'products' },
      { label: 'Notebooks', href: 'products' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: 'faq' },
      { label: 'Artwork Guidelines', href: 'artwork-guidelines' },
      { label: 'Request Quote', href: 'quote' },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-charcoal-deep text-ivory">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-royal/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-electric/15 blur-[120px]" />

      <Container className="relative py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <button onClick={() => scrollToId('home')} className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-electric text-ivory">
                <Printer size={18} strokeWidth={1.75} />
              </span>
              <span className="font-display text-xl font-medium text-ivory">
                Everfine<span className="text-electric-light font-semibold">Printers</span>
              </span>
            </button>
            <p className="mt-4 max-w-xs text-sm text-ivory/50">{siteConfig.tagline}</p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: FacebookIcon, href: siteConfig.social.facebook, label: 'Facebook' },
                { Icon: InstagramIcon, href: siteConfig.social.instagram, label: 'Instagram' },
                { Icon: LinkedinIcon, href: siteConfig.social.linkedin, label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory/60 transition-colors hover:border-electric-light hover:text-electric-light"
                >
                  <Icon className="h-[15px] w-[15px]" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/40">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToId(link.href)}
                      className="text-sm text-ivory/65 transition-colors hover:text-electric-light"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/40">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-ivory/65">
              <li className="flex items-start gap-2">
                <Phone size={15} className="mt-0.5 shrink-0 text-electric-light" strokeWidth={1.75} />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-electric-light">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={15} className="mt-0.5 shrink-0 text-electric-light" strokeWidth={1.75} />
                <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer" className="hover:text-electric-light">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={15} className="mt-0.5 shrink-0 text-electric-light" strokeWidth={1.75} />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-electric-light">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-electric-light" strokeWidth={1.75} />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/40 sm:flex-row">
          <p>© {year} EverfinePrinters. All Rights Reserved.</p>
          <p>Print Beyond Ordinary.</p>
        </div>
      </Container>
    </footer>
  )
}
