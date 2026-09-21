export interface Testimonial {
  id: string
  name: string
  company: string
  review: string
  rating: number
}

/** PLACEHOLDER testimonials — replace with real customer reviews when available. */
export const testimonials: Testimonial[] = [
  {
    id: 'placeholder-1',
    name: 'Placeholder Client Name',
    company: 'Placeholder Company',
    review: 'This is placeholder testimonial content. Replace with a real customer review once available.',
    rating: 5,
  },
  {
    id: 'placeholder-2',
    name: 'Placeholder Client Name',
    company: 'Placeholder Company',
    review: 'This is placeholder testimonial content. Replace with a real customer review once available.',
    rating: 5,
  },
  {
    id: 'placeholder-3',
    name: 'Placeholder Client Name',
    company: 'Placeholder Company',
    review: 'This is placeholder testimonial content. Replace with a real customer review once available.',
    rating: 5,
  },
]
