import type { LucideIcon } from 'lucide-react'
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { siteConfig } from '@/data/site'
import { buildWhatsAppLink } from '@/utils/whatsapp'
import { scrollToId } from '@/utils/scrollTo'

const rows: { icon: LucideIcon; label: string; value?: string; href?: string; links?: { display: string; href: string }[] }[] = [
  { icon: Phone, label: 'Phone', links: [...siteConfig.contact.phoneNumbers] },
  { icon: MessageCircle, label: 'WhatsApp', value: siteConfig.contact.phone, href: buildWhatsAppLink() },
  { icon: Mail, label: 'Email', value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: MapPin, label: 'Address', value: siteConfig.contact.address },
  { icon: Clock, label: 'Opening Hours', value: siteConfig.contact.openingHours },
]

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Contact" title="Let's start your project" subtitle="Reach out and we'll get back to you as soon as possible." />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-ivory/10 bg-charcoal-soft/50 p-8 shadow-premium sm:p-10">
              <ul className="space-y-5">
                {rows.map((row) => (
                  <li key={row.label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-royal/15 text-royal-light">
                      <row.icon size={17} strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-ivory/40">{row.label}</p>
                      {row.links ? (
                        <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm font-medium text-ivory">
                          {row.links.map((link, i) => (
                            <span key={link.href} className="inline-flex items-center gap-2">
                              <a href={link.href} className="hover:text-royal-light">
                                {link.display}
                              </a>
                              {i < row.links!.length - 1 && <span className="text-ivory/30">·</span>}
                            </span>
                          ))}
                        </p>
                      ) : row.href ? (
                        <a href={row.href} target={row.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="mt-0.5 block text-sm font-medium text-ivory hover:text-royal-light">
                          {row.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium text-ivory">{row.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button icon={<Phone size={15} />} onClick={() => (window.location.href = `tel:${siteConfig.contact.phone}`)}>
                  Call Us
                </Button>
                <Button variant="secondary" icon={<MessageCircle size={15} />} onClick={() => window.open(buildWhatsAppLink(), '_blank', 'noreferrer')}>
                  WhatsApp Us
                </Button>
                <Button variant="ghost" icon={<ArrowRight size={15} />} onClick={() => scrollToId('quote')}>
                  Get a Quote
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full min-h-[22rem] overflow-hidden rounded-3xl border border-ivory/10 shadow-premium">
              <iframe
                title="EverfinePrinters location map"
                src={siteConfig.contact.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[22rem] w-full opacity-90 invert-[0.92] grayscale-[30%]"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
