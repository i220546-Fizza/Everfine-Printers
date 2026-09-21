export type PortfolioCategory =
  | 'Business Printing'
  | 'Wedding Cards'
  | 'Packaging'
  | 'Promotional Products'
  | 'Branding'
  | 'Brochures'
  | 'Posters'
  | 'Large Format'

export interface PortfolioItem {
  id: string
  title: string
  category: PortfolioCategory
  description: string
  printingType: string
  material: string
  finishing: string
  /** Accent color used for the placeholder artwork tile; swap for a real project photo. */
  accent: string
  enabled: boolean
}

/**
 * OUR WORK — editable portfolio data.
 * Each item renders a placeholder artwork tile until real project photography is supplied.
 * To add a project, copy an object below and give it a unique `id`.
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: 'corporate-identity-set',
    title: 'Corporate Identity Set',
    category: 'Business Printing',
    description: 'A cohesive stationery suite spanning business cards, letterheads and envelopes.',
    printingType: 'Offset',
    material: '350gsm Matte Card',
    finishing: 'Spot UV, Foil Edge',
    accent: '#da0679',
    enabled: true,
  },
  {
    id: 'royal-ivory-wedding-suite',
    title: 'Royal Ivory Wedding Suite',
    category: 'Wedding Cards',
    description: 'A layered invitation suite with a floral motif and metallic detailing.',
    printingType: 'Digital + Foil',
    material: 'Pearl Board',
    finishing: 'Foil Stamping, Die-Cut',
    accent: '#e9ddc7',
    enabled: true,
  },
  {
    id: 'artisan-coffee-packaging',
    title: 'Artisan Coffee Packaging',
    category: 'Packaging',
    description: 'Structural retail packaging with a matte finish and tactile texture.',
    printingType: 'Offset',
    material: 'Kraft Board',
    finishing: 'Soft-Touch Lamination',
    accent: '#2a2732',
    enabled: true,
  },
  {
    id: 'studio-launch-merch-kit',
    title: 'Studio Launch Merch Kit',
    category: 'Promotional Products',
    description: 'Mugs, pens and tote bags produced for a brand launch event.',
    printingType: 'Screen + Digital',
    material: 'Mixed Media',
    finishing: 'Full-Color Wrap',
    accent: '#0a4b96',
    enabled: true,
  },
  {
    id: 'northline-brand-refresh',
    title: 'Northline Brand Refresh',
    category: 'Branding',
    description: 'Full visual identity rollout across print collateral.',
    printingType: 'Offset',
    material: 'Assorted',
    finishing: 'Varied',
    accent: '#e75da8',
    enabled: true,
  },
  {
    id: 'quarterly-catalogue',
    title: 'Quarterly Product Catalogue',
    category: 'Brochures',
    description: 'A saddle-stitched, multi-page catalogue with a premium page feel.',
    printingType: 'Digital',
    material: '150gsm Silk',
    finishing: 'Saddle Stitch',
    accent: '#faf6ee',
    enabled: true,
  },
  {
    id: 'summer-festival-poster-series',
    title: 'Summer Festival Poster Series',
    category: 'Posters',
    description: 'A bold poster series for a seasonal event campaign.',
    printingType: 'Digital',
    material: '200gsm Poster Paper',
    finishing: 'Matte Coating',
    accent: '#da0679',
    enabled: true,
  },
  {
    id: 'storefront-banner-rollout',
    title: 'Storefront Banner Rollout',
    category: 'Large Format',
    description: 'Vertical banners and signage for a multi-location retail rollout.',
    printingType: 'Large Format',
    material: 'Flex / Vinyl',
    finishing: 'Eyelets, Hemmed Edges',
    accent: '#1c1a22',
    enabled: true,
  },
  {
    id: 'heritage-cafe-menu-cards',
    title: 'Heritage Café Menu Cards',
    category: 'Business Printing',
    description: 'Durable, elegant menu cards designed for daily handling.',
    printingType: 'Digital',
    material: '400gsm Card',
    finishing: 'Lamination, Rounded Corners',
    accent: '#e9ddc7',
    enabled: true,
  },
  {
    id: 'garden-engagement-invitations',
    title: 'Garden Engagement Invitations',
    category: 'Wedding Cards',
    description: 'A botanical-inspired invitation set with delicate line art.',
    printingType: 'Digital',
    material: 'Textured Cotton Paper',
    finishing: 'Letterpress',
    accent: '#0a4b96',
    enabled: true,
  },
  {
    id: 'gift-box-collection',
    title: 'Seasonal Gift Box Collection',
    category: 'Packaging',
    description: 'A modular gift box system for a seasonal retail collection.',
    printingType: 'Offset',
    material: 'Rigid Board',
    finishing: 'Foil Stamping',
    accent: '#e75da8',
    enabled: true,
  },
  {
    id: 'expo-signage-suite',
    title: 'Trade Expo Signage Suite',
    category: 'Large Format',
    description: 'Backdrop banners and directional signage for a trade exhibition.',
    printingType: 'Large Format',
    material: 'PVC / Flex',
    finishing: 'Mounted Frames',
    accent: '#2a2732',
    enabled: true,
  },
]

export const portfolioCategories: (PortfolioCategory | 'All')[] = [
  'All',
  'Business Printing',
  'Wedding Cards',
  'Packaging',
  'Promotional Products',
  'Branding',
  'Brochures',
  'Posters',
  'Large Format',
]
