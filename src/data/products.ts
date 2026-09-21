export type ProductShape =
  | 'businessCard'
  | 'weddingCard'
  | 'brochure'
  | 'flyer'
  | 'magazine'
  | 'box'
  | 'mug'
  | 'pen'
  | 'bag'
  | 'stickerSheet'
  | 'notebook'
  | 'invitationCard'

export interface ShowcaseProduct {
  id: string
  name: string
  description: string
  shape: ProductShape
  color: string
  enabled: boolean
}

/** PRINTED TO IMPRESS — hover for detail, click for a larger preview. */
export const showcaseProducts: ShowcaseProduct[] = [
  { id: 'business-card', name: 'Business Card', description: 'Crisp, tactile cards that make a strong first impression.', shape: 'businessCard', color: '#1c1a22', enabled: true },
  { id: 'wedding-card', name: 'Wedding Card', description: 'Elegant invitations finished with premium detailing.', shape: 'weddingCard', color: '#f3ecdf', enabled: true },
  { id: 'brochure', name: 'Brochure', description: 'Multi-panel brochures that present your story with clarity.', shape: 'brochure', color: '#faf6ee', enabled: true },
  { id: 'flyer', name: 'Flyer', description: 'Bold, single-sheet flyers built to grab attention.', shape: 'flyer', color: '#5a2ad1', enabled: true },
  { id: 'magazine', name: 'Magazine', description: 'Saddle-stitched magazines with a premium page feel.', shape: 'magazine', color: '#2f6fed', enabled: true },
  { id: 'packaging-box', name: 'Packaging Box', description: 'Structural packaging that protects and presents.', shape: 'box', color: '#e9ddc7', enabled: true },
  { id: 'mug', name: 'Mug', description: 'Full-color mugs, personalized edge to edge.', shape: 'mug', color: '#faf6ee', enabled: true },
  { id: 'pen', name: 'Pen', description: 'Branded pens finished with your logo and colors.', shape: 'pen', color: '#1c1a22', enabled: true },
  { id: 'shopping-bag', name: 'Shopping Bag', description: 'Durable, brand-forward retail bags.', shape: 'bag', color: '#5a2ad1', enabled: true },
  { id: 'sticker-sheet', name: 'Sticker Sheet', description: 'Die-cut sticker sheets in any shape you need.', shape: 'stickerSheet', color: '#f3ecdf', enabled: true },
  { id: 'notebook', name: 'Notebook', description: 'Branded notebooks with a premium cover finish.', shape: 'notebook', color: '#2a2732', enabled: true },
  { id: 'invitation-card', name: 'Invitation Card', description: 'Refined invitations for milestone celebrations.', shape: 'invitationCard', color: '#e9ddc7', enabled: true },
]
