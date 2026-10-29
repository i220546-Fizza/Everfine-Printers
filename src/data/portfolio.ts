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
  /** Accent color used for the placeholder artwork tile when no imageSrc is set (or fails to load). */
  accent: string
  /** Path under /public, e.g. '/assets/portfolio/corporate-identity-set.jpg'. Falls back to the accent placeholder if omitted or the file is missing. */
  imageSrc?: string
  enabled: boolean
}

/**
 * OUR WORK — editable portfolio data.
 * Several entries now use real EverfinePrinters project photos; the rest are
 * still placeholder sample projects — replace the titles/details with real
 * projects, or drop a real photo at the path below for any entry to replace
 * its placeholder artwork tile (filename must match the id):
 *   /public/assets/portfolio/<id>.jpg  (or .png / .webp)
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
    imageSrc: '/assets/portfolio/corporate-identity-set.jpg',
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
    imageSrc: '/assets/portfolio/royal-ivory-wedding-suite.jpg',
    enabled: true,
  },
  {
    id: 'artisan-coffee-packaging',
    title: 'Mövenpick Hotel Centaurus Amenity Packaging',
    category: 'Packaging',
    description: 'Branded guest amenity packaging produced for Mövenpick Hotel Centaurus Islamabad, with a repeating wave pattern across box, tube and compact formats.',
    printingType: 'Offset',
    material: 'Rigid Board',
    finishing: 'Matte Lamination',
    accent: '#2a2732',
    imageSrc: '/assets/portfolio/artisan-coffee-packaging.jpg',
    enabled: true,
  },
  {
    id: 'studio-launch-merch-kit',
    title: 'Kaspersky Corporate Gift Set',
    category: 'Promotional Products',
    description: 'A branded glass water bottle and neoprene sleeve produced as a corporate gift set for Kaspersky.',
    printingType: 'Screen + Digital',
    material: 'Glass, Neoprene',
    finishing: 'Full-Color Wrap, Debossing',
    accent: '#0a4b96',
    imageSrc: '/assets/portfolio/studio-launch-merch-kit.jpg',
    enabled: true,
  },
  {
    id: 'northline-brand-refresh',
    title: 'UNICEF Flagship Partner Recognition Plate',
    category: 'Branding',
    description: 'A custom engraved recognition plate produced for UNICEF’s Generation Unlimited — Pergazm Pakistan flagship partnership.',
    printingType: 'Engraving',
    material: 'Metal',
    finishing: 'Polished Finish',
    accent: '#e75da8',
    imageSrc: '/assets/portfolio/northline-brand-refresh.jpg',
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
    imageSrc: '/assets/portfolio/quarterly-catalogue.jpg',
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
    imageSrc: '/assets/portfolio/summer-festival-poster-series.jpg',
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
    imageSrc: '/assets/portfolio/storefront-banner-rollout.jpg',
    enabled: true,
  },
  {
    id: 'heritage-cafe-menu-cards',
    title: 'Mövenpick Hotel Centaurus Menu Board',
    category: 'Business Printing',
    description: 'A freestanding "Menu of the Day" board produced for Mövenpick Hotel Centaurus Islamabad’s café.',
    printingType: 'Digital',
    material: 'Foam Board',
    finishing: 'Matte Lamination',
    accent: '#e9ddc7',
    imageSrc: '/assets/portfolio/heritage-cafe-menu-cards.jpg',
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
    imageSrc: '/assets/portfolio/garden-engagement-invitations.jpg',
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
    imageSrc: '/assets/portfolio/gift-box-collection.jpg',
    enabled: true,
  },
  {
    id: 'expo-signage-suite',
    title: 'Mango Festival Retail Standee',
    category: 'Large Format',
    description: 'A free-standing A-frame display produced for a seasonal Mango Festival retail promotion.',
    printingType: 'Large Format',
    material: 'Foam Board',
    finishing: 'UV Coating',
    accent: '#2a2732',
    imageSrc: '/assets/portfolio/expo-signage-suite.jpg',
    enabled: true,
  },
  {
    id: 'navien-gift-set',
    title: 'Navien Corporate Gift Set',
    category: 'Promotional Products',
    description: 'A branded corporate gift box for Navien, including a notebook, pen, tech accessories and drinkware.',
    printingType: 'Screen + Digital',
    material: 'Mixed Media',
    finishing: 'Full-Color Branding',
    accent: '#faf6ee',
    imageSrc: '/assets/portfolio/navien-gift-set.jpg',
    enabled: true,
  },
  {
    id: 'tiss-branded-set',
    title: 'TISS Branded Stationery & Drinkware',
    category: 'Promotional Products',
    description: 'A branded notebook, pen, keychain and mug set produced for TISS.',
    printingType: 'Screen + Digital',
    material: 'Mixed Media',
    finishing: 'Full-Color Wrap, Debossing',
    accent: '#1c1a22',
    imageSrc: '/assets/portfolio/tiss-branded-set.jpg',
    enabled: true,
  },
  {
    id: 'pearl-continental-tote',
    title: 'Pearl-Continental Bhurban Tote Bag',
    category: 'Promotional Products',
    description: 'A hand-painted floral design tote bag produced for Pearl-Continental Hotel Bhurban.',
    printingType: 'Digital',
    material: 'Canvas Cotton',
    finishing: 'Full-Color Print',
    accent: '#e9ddc7',
    imageSrc: '/assets/portfolio/pearl-continental-tote.jpg',
    enabled: true,
  },
  {
    id: 'legend-hotels-gift-set',
    title: 'Legend Hotels & Resorts Corporate Gift Set',
    category: 'Promotional Products',
    description: 'A branded corporate gift box for Legend Hotels & Resorts, including a card holder, keychain, USB drive and pen.',
    printingType: 'Engraving',
    material: 'Metal, Mixed Media',
    finishing: 'Laser Engraving',
    accent: '#1c1a22',
    imageSrc: '/assets/portfolio/legend-hotels-gift-set.jpg',
    enabled: true,
  },
  {
    id: 'premium-menu-folder',
    title: 'Premium Leather Menu Folder',
    category: 'Business Printing',
    description: 'A suede-bound restaurant menu folder with brass stud detailing and replaceable printed inserts.',
    printingType: 'Digital',
    material: 'Suede, Paper Insert',
    finishing: 'Brass Stud Binding',
    accent: '#2a2732',
    imageSrc: '/assets/portfolio/premium-menu-folder.jpg',
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
