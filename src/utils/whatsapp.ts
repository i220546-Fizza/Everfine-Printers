import { siteConfig } from '@/data/site'

export function buildWhatsAppLink(message?: string) {
  const text = encodeURIComponent(
    message ?? 'Hello EverfinePrinters, I would like to get a quotation for a printing project.'
  )
  const number = siteConfig.contact.whatsappNumber.replace(/[^\d]/g, '')
  return `https://wa.me/${number}?text=${text}`
}
