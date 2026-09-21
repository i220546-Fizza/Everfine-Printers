import { Hero } from '@/sections/Hero'
import { Intro } from '@/sections/Intro'
import { Services } from '@/sections/Services'
import { WeddingEvents } from '@/sections/WeddingEvents'
import { Promotional } from '@/sections/Promotional'
import { Packaging } from '@/sections/Packaging'
import { LabelsStickers } from '@/sections/LabelsStickers'
import { LargeFormat } from '@/sections/LargeFormat'
import { DigitalOffset } from '@/sections/DigitalOffset'
import { ProductsShowcase } from '@/sections/ProductsShowcase'
import { HowItWorks } from '@/sections/HowItWorks'
import { Portfolio } from '@/sections/Portfolio'
import { Leadership } from '@/sections/Leadership'
import { About } from '@/sections/About'
import { WhyChooseUs } from '@/sections/WhyChooseUs'
import { Testimonials } from '@/sections/Testimonials'
import { FAQ } from '@/sections/FAQ'
import { ArtworkGuidelines } from '@/sections/ArtworkGuidelines'
import { QuoteForm } from '@/sections/QuoteForm'
import { Contact } from '@/sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <WeddingEvents />
      <Packaging />
      <Promotional />
      <LabelsStickers />
      <LargeFormat />
      <DigitalOffset />
      <ProductsShowcase />
      <HowItWorks />
      <Portfolio />
      <Leadership />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ArtworkGuidelines />
      <QuoteForm />
      <Contact />
    </>
  )
}
