export interface QuoteFormValues {
  fullName: string
  companyName: string
  phone: string
  email: string
  service: string
  quantity: string
  size: string
  material: string
  finishing: string
  message: string
}

export type QuoteFormErrors = Partial<Record<keyof QuoteFormValues, string>>

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^[+\d][\d\s-]{6,}$/

export function validateQuoteForm(values: QuoteFormValues): QuoteFormErrors {
  const errors: QuoteFormErrors = {}

  if (!values.fullName.trim()) errors.fullName = 'Name is required.'
  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!phoneRegex.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number.'
  }
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailRegex.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.service) errors.service = 'Please select the service you need.'

  return errors
}
