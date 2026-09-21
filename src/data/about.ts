export interface AboutBlock {
  id: string
  title: string
  body: string
  icon: string
}

/**
 * ABOUT EVERFINEPRINTERS — editable placeholders describing the company's focus areas.
 * No company history, awards, years of experience, client counts or statistics are implied here.
 */
export const aboutContent: AboutBlock[] = [
  {
    id: 'printing-quality',
    title: 'Printing Quality',
    body: 'Editable placeholder — describe the standard of print quality EverfinePrinters holds itself to, from material selection to finished output.',
    icon: 'Gem',
  },
  {
    id: 'creativity',
    title: 'Creativity',
    body: 'Editable placeholder — describe how EverfinePrinters approaches creative print and design solutions for each project.',
    icon: 'Sparkles',
  },
  {
    id: 'precision',
    title: 'Precision',
    body: 'Editable placeholder — describe the attention to detail and consistency applied throughout production.',
    icon: 'Target',
  },
  {
    id: 'customer-requirements',
    title: 'Customer Requirements',
    body: 'Editable placeholder — describe how projects are shaped around each customer’s specific requirements.',
    icon: 'Users',
  },
  {
    id: 'professional-finishing',
    title: 'Professional Finishing',
    body: 'Editable placeholder — describe the finishing techniques and presentation standards used on completed work.',
    icon: 'Sparkle',
  },
  {
    id: 'branding-solutions',
    title: 'Printing & Branding Solutions',
    body: 'Editable placeholder — describe how EverfinePrinters supports clients across printing, packaging and branding needs.',
    icon: 'Stamp',
  },
]
