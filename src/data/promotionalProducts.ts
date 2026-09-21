import type { ServiceItem } from './services'

/**
 * PUT YOUR BRAND EVERYWHERE
 * If any item below is not actually offered by EverfinePrinters, set `enabled: false`
 * (or remove it) to hide it from the site without touching any component code.
 */
export const promotionalProducts: ServiceItem[] = [
  {
    id: 'custom-mugs',
    name: 'Custom Mugs',
    description: 'Personalized mugs and branded mugs.',
    icon: 'Coffee',
    enabled: true,
  },
  {
    id: 'custom-pens',
    name: 'Custom Pens',
    description: 'Branded promotional pens.',
    icon: 'PenLine',
    enabled: true,
  },
  {
    id: 'shopping-bags',
    name: 'Shopping Bags',
    description: 'Customized paper, plastic or fabric bags.',
    icon: 'ShoppingBag',
    enabled: true,
  },
  {
    id: 'promotional-bags',
    name: 'Promotional Bags',
    description: 'Branded bags for businesses and events.',
    icon: 'Briefcase',
    enabled: true,
  },
  {
    id: 'keychains',
    name: 'Keychains',
    description: 'Customized promotional keychains.',
    icon: 'KeyRound',
    enabled: true,
  },
  {
    id: 'notebooks',
    name: 'Notebooks',
    description: 'Customized branded notebooks.',
    icon: 'Notebook',
    enabled: true,
  },
  {
    id: 't-shirts',
    name: 'T-Shirts',
    description: 'Customized printed apparel.',
    icon: 'Shirt',
    enabled: true,
  },
  {
    id: 'caps',
    name: 'Caps',
    description: 'Customized promotional caps.',
    icon: 'Crown',
    enabled: true,
  },
  {
    id: 'promotional-gifts',
    name: 'Promotional Gifts',
    description: 'Customized corporate and promotional items.',
    icon: 'Gift',
    enabled: true,
  },
]
