import type { ServiceItem } from './services'

/** PACKAGING THAT SPEAKS FOR YOUR BRAND */
export const packagingServices: ServiceItem[] = [
  { id: 'custom-boxes', name: 'Custom Boxes', description: 'Made-to-size boxes for any product.', icon: 'Package', enabled: true },
  { id: 'product-packaging', name: 'Product Packaging', description: 'Packaging tailored to your product line.', icon: 'PackageCheck', enabled: true },
  { id: 'gift-boxes', name: 'Gift Boxes', description: 'Elegant boxes for gifting and events.', icon: 'Gift', enabled: true },
  { id: 'branded-packaging', name: 'Branded Packaging', description: 'Packaging that carries your brand identity.', icon: 'Stamp', enabled: true },
  { id: 'packaging-shopping-bags', name: 'Shopping Bags', description: 'Sturdy branded retail bags.', icon: 'ShoppingBag', enabled: true },
  { id: 'labels', name: 'Labels', description: 'Precision-cut product labels.', icon: 'Tag', enabled: true },
  { id: 'stickers', name: 'Stickers', description: 'Custom-shaped promotional stickers.', icon: 'Sticker', enabled: true },
  { id: 'product-tags', name: 'Product Tags', description: 'Branded hang tags and swing tags.', icon: 'Tags', enabled: true },
]

/** DETAILS MATTER — Labels & Stickers */
export const labelsStickersServices: ServiceItem[] = [
  { id: 'product-labels', name: 'Product Labels', description: 'Durable, precisely cut product labels.', icon: 'Tag', enabled: true },
  { id: 'custom-stickers', name: 'Custom Stickers', description: 'Die-cut stickers in any shape.', icon: 'Sticker', enabled: true },
  { id: 'logo-stickers', name: 'Logo Stickers', description: 'Branded stickers for packaging and merch.', icon: 'Stamp', enabled: true },
  { id: 'packaging-labels', name: 'Packaging Labels', description: 'Labels built for boxes and containers.', icon: 'PackageCheck', enabled: true },
  { id: 'thank-you-stickers', name: 'Thank-You Stickers', description: 'A personal finishing touch on every order.', icon: 'Heart', enabled: true },
  { id: 'promotional-stickers', name: 'Promotional Stickers', description: 'Stickers for campaigns and giveaways.', icon: 'Sparkles', enabled: true },
  { id: 'labels-product-tags', name: 'Product Tags', description: 'Hang tags that elevate presentation.', icon: 'Tags', enabled: true },
]

/** Large Format Printing */
export const largeFormatServices: ServiceItem[] = [
  { id: 'banners', name: 'Banners', description: 'Vibrant banners for events and storefronts.', icon: 'PanelTop', enabled: true },
  { id: 'flex-printing', name: 'Flex Printing', description: 'Durable flex prints for outdoor use.', icon: 'RectangleHorizontal', enabled: true },
  { id: 'large-posters', name: 'Posters', description: 'Large-format promotional posters.', icon: 'Image', enabled: true },
  { id: 'signage', name: 'Signage', description: 'Indoor and outdoor signage solutions.', icon: 'SignpostBig', enabled: true },
  { id: 'large-format-material', name: 'Large-Format Promotional Material', description: 'Big-format print for maximum visibility.', icon: 'Maximize', enabled: true },
]
