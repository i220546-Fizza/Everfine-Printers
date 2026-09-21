/** Options for the "Service Required" field on the Request a Quote form. */
export const quoteServiceOptions: string[] = [
  'Business Cards',
  'Letterheads & Envelopes',
  'Flyers & Brochures',
  'Posters & Calendars',
  'Wedding Cards',
  'Invitation & Event Cards',
  'Custom Mugs',
  'Promotional Pens',
  'Custom Bags',
  'Notebooks & Keychains',
  'Promotional Gifts / T-Shirts / Caps',
  'Custom Boxes & Packaging',
  'Labels & Stickers',
  'Banners & Signage',
  'Digital Printing',
  'Offset Printing',
  'Graphic / Print Design',
  'Other',
]

export const finishingOptions: string[] = [
  'None',
  'Matte Lamination',
  'Glossy Lamination',
  'Spot UV',
  'Foil Stamping',
  'Die-Cut',
  'Embossing',
  'Other',
]

export interface ArtworkGuideline {
  id: string
  title: string
  description: string
  icon: string
}

export const artworkGuidelines: ArtworkGuideline[] = [
  { id: 'resolution', title: 'High-Resolution Artwork', description: 'Submit files at 300 DPI or higher for crisp, sharp printing.', icon: 'ScanEye' },
  { id: 'cmyk', title: 'CMYK Color Mode', description: 'Use CMYK where appropriate — RGB files may print with color shifts.', icon: 'Palette' },
  { id: 'bleed', title: 'Bleed', description: 'Include bleed where required so edge-to-edge designs print cleanly.', icon: 'Crop' },
  { id: 'safe-margins', title: 'Safe Margins', description: 'Keep important text and logos within the safe margin area.', icon: 'Frame' },
  { id: 'fonts', title: 'Proper Fonts', description: 'Embed or outline fonts to avoid substitution issues.', icon: 'Type' },
  { id: 'print-ready-pdf', title: 'Print-Ready PDF', description: 'Export a print-ready PDF where appropriate for the most reliable results.', icon: 'FileCheck2' },
]
