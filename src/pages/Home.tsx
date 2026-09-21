import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { WhyChooseUs } from '@/sections/WhyChooseUs'
import { Services } from '@/sections/Services'
import { WeddingEvents } from '@/sections/WeddingEvents'
import { Packaging } from '@/sections/Packaging'
import { Promotional } from '@/sections/Promotional'
import { LabelsStickers } from '@/sections/LabelsStickers'
import { LargeFormat } from '@/sections/LargeFormat'
import { DigitalOffset } from '@/sections/DigitalOffset'
import { Portfolio } from '@/sections/Portfolio'
import { Leadership } from '@/sections/Leadership'
import { HowItWorks } from '@/sections/HowItWorks'
import { Testimonials } from '@/sections/Testimonials'
import { FAQ } from '@/sections/FAQ'
import { ArtworkGuidelines } from '@/sections/ArtworkGuidelines'
import { QuoteForm } from '@/sections/QuoteForm'
import { Contact } from '@/sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <WeddingEvents />
      <Packaging />
      <Promotional />
      <LabelsStickers />
      <LargeFormat />
      <DigitalOffset />
      <Portfolio />
      <Leadership />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <ArtworkGuidelines />
      <QuoteForm />
      <Contact />
    </>
  )
}
