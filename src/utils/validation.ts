export interface QuoteFormValues {
  fullName: string
  companyName: string
  phone: string
  whatsapp: string
  email: string
  product: string
  quantity: string
  size: string
  material: string
  printingType: string
  finishing: string
  deliveryDate: string
  requirements: string
}

export type QuoteFormErrors = Partial<Record<keyof QuoteFormValues, string>>

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^[+\d][\d\s-]{6,}$/

export function validateQuoteForm(values: QuoteFormValues): QuoteFormErrors {
  const errors: QuoteFormErrors = {}

  if (!values.fullName.trim()) errors.fullName = 'Full name is required.'
  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!phoneRegex.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number.'
  }
  if (values.whatsapp.trim() && !phoneRegex.test(values.whatsapp.trim())) {
    errors.whatsapp = 'Enter a valid WhatsApp number.'
  }
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailRegex.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.product) errors.product = 'Please select a product.'
  if (!values.quantity.trim()) errors.quantity = 'Quantity is required.'

  return errors
}
