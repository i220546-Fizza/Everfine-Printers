import type { ReactNode } from 'react'

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

interface ProductArtProps {
  shape: ProductShape
  className?: string
  strokeColor?: string
}

/**
 * Minimal line-art illustrations used as elegant placeholder artwork for each product shape —
 * consistent "blueprint" visual identity in place of stock photography.
 */
export function ProductArt({ shape, className, strokeColor = 'currentColor' }: ProductArtProps) {
  const common = {
    fill: 'none',
    stroke: strokeColor,
    strokeWidth: 1.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  const paths: Record<ProductShape, ReactNode> = {
    businessCard: (
      <>
        <rect x="20" y="38" width="80" height="46" rx="6" {...common} />
        <line x1="30" y1="52" x2="60" y2="52" {...common} />
        <line x1="30" y1="60" x2="70" y2="60" {...common} />
        <circle cx="82" cy="68" r="8" {...common} />
      </>
    ),
    weddingCard: (
      <>
        <rect x="24" y="20" width="72" height="86" rx="4" {...common} />
        <path d="M36 46 C48 34 72 34 84 46" {...common} />
        <line x1="40" y1="66" x2="80" y2="66" {...common} />
        <line x1="48" y1="76" x2="72" y2="76" {...common} />
        <circle cx="60" cy="56" r="3" {...common} />
      </>
    ),
    invitationCard: (
      <>
        <rect x="26" y="22" width="68" height="84" rx="4" {...common} />
        <path d="M38 40 L60 54 L82 40" {...common} />
        <line x1="42" y1="70" x2="78" y2="70" {...common} />
        <line x1="48" y1="80" x2="72" y2="80" {...common} />
      </>
    ),
    brochure: (
      <>
        <path d="M24 26 H60 V100 H24 Z" {...common} />
        <path d="M60 26 H96 V100 H60 Z" {...common} />
        <line x1="32" y1="42" x2="52" y2="42" {...common} />
        <line x1="32" y1="52" x2="52" y2="52" {...common} />
        <line x1="68" y1="42" x2="88" y2="42" {...common} />
        <line x1="68" y1="52" x2="88" y2="52" {...common} />
        <line x1="68" y1="62" x2="88" y2="62" {...common} />
      </>
    ),
    flyer: (
      <>
        <rect x="28" y="18" width="64" height="90" rx="3" {...common} />
        <line x1="38" y1="36" x2="82" y2="36" {...common} />
        <rect x="38" y="48" width="44" height="26" rx="2" {...common} />
        <line x1="38" y1="84" x2="70" y2="84" {...common} />
        <line x1="38" y1="92" x2="60" y2="92" {...common} />
      </>
    ),
    magazine: (
      <>
        <rect x="26" y="16" width="68" height="92" rx="3" {...common} />
        <line x1="26" y1="30" x2="94" y2="30" {...common} />
        <rect x="36" y="42" width="48" height="30" rx="2" {...common} />
        <line x1="36" y1="82" x2="76" y2="82" {...common} />
        <line x1="36" y1="90" x2="64" y2="90" {...common} />
      </>
    ),
    box: (
      <>
        <path d="M28 46 L60 30 L92 46 V84 L60 100 L28 84 Z" {...common} />
        <path d="M28 46 L60 62 L92 46" {...common} />
        <line x1="60" y1="62" x2="60" y2="100" {...common} />
      </>
    ),
    mug: (
      <>
        <path d="M34 34 H74 V78 C74 88 66 94 54 94 C42 94 34 88 34 78 Z" {...common} />
        <path d="M74 44 C88 44 88 68 74 68" {...common} />
        <line x1="42" y1="46" x2="66" y2="46" {...common} />
        <line x1="42" y1="56" x2="60" y2="56" {...common} />
      </>
    ),
    pen: (
      <>
        <path d="M42 92 L74 60 L88 46 L96 54 L82 68 L50 100 L38 104 Z" {...common} />
        <line x1="74" y1="60" x2="88" y2="74" {...common} />
        <path d="M92 42 L100 50" {...common} />
      </>
    ),
    bag: (
      <>
        <path d="M32 42 H88 L82 100 H38 Z" {...common} />
        <path d="M44 42 V30 C44 20 52 14 60 14 C68 14 76 20 76 30 V42" {...common} />
        <line x1="32" y1="58" x2="88" y2="58" {...common} />
      </>
    ),
    stickerSheet: (
      <>
        <rect x="22" y="22" width="76" height="76" rx="6" {...common} strokeDasharray="4 4" />
        <circle cx="46" cy="46" r="12" {...common} />
        <path d="M70 38 L82 38 L82 50 Z" {...common} />
        <rect x="38" y="66" width="24" height="20" rx="4" {...common} />
        <circle cx="80" cy="76" r="10" {...common} />
      </>
    ),
    notebook: (
      <>
        <rect x="30" y="18" width="62" height="88" rx="4" {...common} />
        <line x1="30" y1="18" x2="30" y2="106" {...common} strokeWidth={3} />
        <line x1="42" y1="40" x2="78" y2="40" {...common} />
        <line x1="42" y1="52" x2="78" y2="52" {...common} />
        <line x1="42" y1="64" x2="66" y2="64" {...common} />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      {paths[shape]}
    </svg>
  )
}
