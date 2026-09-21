/** Returns the given hex color when it has enough contrast against a light card background, otherwise a dark fallback. */
export function readableAccent(hex: string, fallback = '#1c1a22') {
  const clean = hex.replace('#', '')
  const r = parseInt(clean.substring(0, 2), 16)
  const g = parseInt(clean.substring(2, 4), 16)
  const b = parseInt(clean.substring(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.75 ? fallback : hex
}
