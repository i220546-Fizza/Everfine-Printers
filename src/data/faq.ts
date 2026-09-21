export interface FaqItem {
  id: string
  question: string
  answer: string
}

/** All answers are editable placeholders — update with EverfinePrinters' exact policies. */
export const faqItems: FaqItem[] = [
  {
    id: 'services-offered',
    question: 'What printing services do you offer?',
    answer:
      'We offer business printing, wedding and event stationery, packaging, promotional products, labels and stickers, large-format printing, and both digital and offset printing. See the sections above for the full list.',
  },
  {
    id: 'wedding-cards',
    question: 'Do you print wedding cards?',
    answer: 'Yes — we design and print elegant, customized wedding invitations and full event stationery suites.',
  },
  {
    id: 'mugs',
    question: 'Do you print mugs?',
    answer: 'Yes, custom and personalized mugs are available. Contact us for available styles and minimum quantities.',
  },
  {
    id: 'pens',
    question: 'Do you print promotional pens?',
    answer: 'Yes, branded promotional pens are available with your logo and brand colors.',
  },
  {
    id: 'bags',
    question: 'Do you provide customized bags?',
    answer: 'Yes — customized shopping and promotional bags are available depending on material and quantity.',
  },
  {
    id: 'packaging',
    question: 'Do you offer packaging?',
    answer: 'Yes, we offer custom boxes, product packaging, gift boxes, branded packaging, labels and tags.',
  },
  {
    id: 'graphic-design',
    question: 'Do you provide graphic design?',
    answer: 'Please contact us to discuss design support and current availability for your project.',
  },
  {
    id: 'file-formats',
    question: 'What file formats do you accept?',
    answer: 'We generally accept print-ready PDF, AI and high-resolution image files. See our Artwork Guidelines for details.',
  },
  {
    id: 'minimum-order',
    question: 'What is the minimum order quantity?',
    answer: 'Minimum order quantities vary by product. Please contact us or request a quote for specifics.',
  },
  {
    id: 'turnaround-time',
    question: 'How long does printing take?',
    answer: 'Turnaround time depends on the product, quantity and finishing required. We will confirm a timeline when you request a quote.',
  },
  {
    id: 'request-quote',
    question: 'Can I request a quotation?',
    answer: 'Yes — use the Request a Quote form on this site, or reach out to us directly via WhatsApp, phone or email.',
  },
  {
    id: 'delivery',
    question: 'Do you provide delivery?',
    answer: 'Please contact us to confirm delivery options and coverage for your location.',
  },
]
