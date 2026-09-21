export interface ServiceItem {
  id: string
  name: string
  description: string
  icon: string
  enabled: boolean
}

/** WHAT WE PRINT — Business Printing essentials. Set `enabled: false` to hide an item. */
export const businessPrintingServices: ServiceItem[] = [
  {
    id: 'business-cards',
    name: 'Business Cards',
    description: 'Professional business cards for individuals and businesses.',
    icon: 'CreditCard',
    enabled: true,
  },
  {
    id: 'letterheads',
    name: 'Letterheads',
    description: 'Branded company stationery.',
    icon: 'FileText',
    enabled: true,
  },
  {
    id: 'envelopes',
    name: 'Envelopes',
    description: 'Customized branded envelopes.',
    icon: 'Mail',
    enabled: true,
  },
  {
    id: 'flyers',
    name: 'Flyers',
    description: 'Promotional and informational flyers.',
    icon: 'FileStack',
    enabled: true,
  },
  {
    id: 'brochures',
    name: 'Brochures',
    description: 'Professional brochures and marketing materials.',
    icon: 'BookOpen',
    enabled: true,
  },
  {
    id: 'posters',
    name: 'Posters',
    description: 'Promotional, event and advertising posters.',
    icon: 'Image',
    enabled: true,
  },
  {
    id: 'calendars',
    name: 'Calendars',
    description: 'Personalized and corporate calendars.',
    icon: 'Calendar',
    enabled: true,
  },
  {
    id: 'diaries',
    name: 'Diaries',
    description: 'Customized diaries and notebooks.',
    icon: 'NotebookPen',
    enabled: true,
  },
]
