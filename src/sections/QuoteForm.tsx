import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Send, UploadCloud, MessageCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { BigType } from '@/components/ui/BigType'
import { TextField, SelectField, TextAreaField } from '@/components/ui/FormField'
import { quoteServiceOptions, finishingOptions } from '@/data/quoteOptions'
import { validateQuoteForm, type QuoteFormValues, type QuoteFormErrors } from '@/utils/validation'
import { buildWhatsAppLink } from '@/utils/whatsapp'

const initialValues: QuoteFormValues = {
  fullName: '',
  companyName: '',
  phone: '',
  email: '',
  service: '',
  quantity: '',
  size: '',
  material: '',
  finishing: '',
  message: '',
}

export function QuoteForm() {
  const [values, setValues] = useState<QuoteFormValues>(initialValues)
  const [errors, setErrors] = useState<QuoteFormErrors>({})
  const [artworkName, setArtworkName] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof QuoteFormValues>(key: K, value: QuoteFormValues[K]) {
    setValues((v) => ({ ...v, [key]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const validationErrors = validateQuoteForm(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    // NOTE: no backend is wired up yet. Once the MongoDB "Quote Requests" collection
    // and API route exist, POST `values` (+ artwork file) there instead of this local state.
    setSubmitted(true)
  }

  return (
    <section id="quote" className="relative overflow-hidden bg-charcoal-deep py-24 text-ivory sm:py-32">
      <BigType text="QUOTE" className="top-0 text-ivory/[0.035]" parallax={-45} />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-royal/25 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-electric/20 blur-[140px]" />

      <Container className="relative max-w-3xl">
        <SectionHeading light eyebrow="Request a Quote" title="Tell us about your project" subtitle="Share the details and we'll get back to you with a tailored quotation — no orders, no checkout, just a conversation about your project." />

        <div className="relative mt-14 rounded-3xl border border-ivory/10 bg-ivory p-6 shadow-premium sm:p-10">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center py-10 text-center"
              >
                <CheckCircle2 className="h-14 w-14 text-royal" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-2xl font-medium text-charcoal">Request received</h3>
                <p className="mt-2 max-w-sm text-sm text-charcoal/60">
                  Thank you, {values.fullName.split(' ')[0] || 'there'}. We'll be in touch shortly to discuss your project.
                </p>
                <Button className="mt-6" variant="secondary" onClick={() => { setSubmitted(false); setValues(initialValues); setArtworkName(null) }}>
                  Submit another request
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="grid grid-cols-1 gap-5 sm:grid-cols-2"
              >
                <TextField id="fullName" label="Name" required value={values.fullName} onChange={(e) => update('fullName', e.target.value)} error={errors.fullName} placeholder="Your name" />
                <TextField id="companyName" label="Company" value={values.companyName} onChange={(e) => update('companyName', e.target.value)} placeholder="Optional" />

                <TextField id="phone" label="Phone" required type="tel" value={values.phone} onChange={(e) => update('phone', e.target.value)} error={errors.phone} placeholder="+92 300 0000000" />
                <TextField id="email" label="Email" required type="email" value={values.email} onChange={(e) => update('email', e.target.value)} error={errors.email} placeholder="you@company.com" />

                <SelectField
                  id="service"
                  label="Service Required"
                  required
                  options={quoteServiceOptions}
                  value={values.service}
                  onChange={(e) => update('service', e.target.value)}
                  error={errors.service}
                  wrapperClassName="sm:col-span-2"
                />

                <TextField id="quantity" label="Quantity (optional)" value={values.quantity} onChange={(e) => update('quantity', e.target.value)} placeholder="e.g. 500" />
                <TextField id="size" label="Size (optional)" value={values.size} onChange={(e) => update('size', e.target.value)} placeholder="e.g. A5, 3.5 x 2 in" />

                <TextField id="material" label="Material (optional)" value={values.material} onChange={(e) => update('material', e.target.value)} placeholder="e.g. 300gsm Matte Card" />
                <SelectField id="finishing" label="Finishing (optional)" options={finishingOptions} value={values.finishing} onChange={(e) => update('finishing', e.target.value)} />

                <TextAreaField
                  id="message"
                  label="Message"
                  value={values.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Tell us more about your project..."
                  wrapperClassName="sm:col-span-2"
                />

                <div className="sm:col-span-2">
                  <label htmlFor="artwork" className="mb-1.5 block text-sm font-medium text-charcoal/80">
                    Upload Artwork
                  </label>
                  <label
                    htmlFor="artwork"
                    className="flex cursor-pointer items-center justify-center gap-3 rounded-xl border-2 border-dashed border-charcoal/20 bg-white px-4 py-6 text-sm text-charcoal/50 transition-colors hover:border-royal/40 hover:text-royal"
                  >
                    <UploadCloud size={18} strokeWidth={1.75} />
                    {artworkName ?? 'Click to upload a file (PDF, AI, JPG, PNG)'}
                  </label>
                  <input
                    id="artwork"
                    type="file"
                    accept=".pdf,.ai,.jpg,.jpeg,.png"
                    className="sr-only"
                    onChange={(e) => setArtworkName(e.target.files?.[0]?.name ?? null)}
                  />
                </div>

                <div className="sm:col-span-2">
                  <Button type="submit" size="lg" className="w-full" icon={<Send size={15} />}>
                    Send Quote Request
                  </Button>
                </div>

                <div className="flex items-center gap-3 sm:col-span-2">
                  <span className="h-px flex-1 bg-charcoal/10" />
                  <span className="text-xs uppercase tracking-[0.2em] text-charcoal/35">or</span>
                  <span className="h-px flex-1 bg-charcoal/10" />
                </div>

                <div className="sm:col-span-2">
                  <Button
                    type="button"
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    icon={<MessageCircle size={15} />}
                    onClick={() => window.open(buildWhatsAppLink(), '_blank', 'noreferrer')}
                  >
                    Contact Us on WhatsApp
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
