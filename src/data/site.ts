export const siteConfig = {
  name: 'EverfinePrinters',
  tagline: 'Print Beyond Ordinary.',
  taglineAlt: 'From Ideas to Impressions.',
  supportingText:
    'Turning ideas into beautifully crafted prints, packaging and promotional products.',
  founder: {
    name: 'Srafraz Ahmed Bhatti',
    role: 'Founder',
  },
  ceo: {
    name: 'Ashfaq Ahmad',
    role: 'Chief Executive Officer',
  },
  contact: {
    // WhatsApp destination — international format, no + or spaces
    whatsappNumber: '923005285548',
    phone: '+92 300 5285548',
    phoneNumbers: [
      { display: '+92 300 5285548', href: 'tel:+923005285548' },
      { display: '+92 301 5163456', href: 'tel:+923015163456' },
    ],
    email: 'info@everfineprinters.com',
    address: 'Shop #00, Main Boulevard, Your City, Pakistan',
    openingHours: 'Mon – Sat: 10:00 AM – 8:00 PM',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Pakistan&output=embed',
  },
  social: {
    facebook: 'https://facebook.com/everfineprinters',
    instagram: 'https://instagram.com/everfineprinters',
    linkedin: 'https://linkedin.com/company/everfineprinters',
    whatsapp: '#',
  },
} as const
