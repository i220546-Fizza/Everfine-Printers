export interface LeadershipMember {
  id: string
  name: string
  role: string
  /** Path under /public — drop a JPG, PNG or WebP file at this exact path to replace the placeholder. */
  photoSrc: string
  bio: string
  linkedin?: string
}

/**
 * MEET OUR LEADERSHIP
 * Replace the photos by adding real image files at:
 *   /public/assets/leadership/founder.jpg  (or .png / .webp)
 *   /public/assets/leadership/ceo.jpg      (or .png / .webp)
 * The <LeadershipCard> component automatically falls back to an elegant
 * placeholder if the file is missing — no code changes required.
 */
export const leadershipTeam: LeadershipMember[] = [
  {
    id: 'founder',
    name: 'Srafraz Ahmed Bhatti',
    role: 'Founder',
    photoSrc: '/assets/leadership/founder.jpg',
    bio: 'A short editable biography placeholder for the Founder — add background, philosophy and vision for EverfinePrinters here.',
    linkedin: '#',
  },
  {
    id: 'ceo',
    name: 'Ashfaq Ahmad',
    role: 'Chief Executive Officer',
    photoSrc: '/assets/leadership/ceo.jpg',
    bio: 'A short editable biography placeholder for the CEO — add background, leadership focus and priorities here.',
    linkedin: '#',
  },
]
