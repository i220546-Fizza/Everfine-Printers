import { MotionConfig } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { Home } from '@/pages/Home'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-ivory">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-royal focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-ivory"
        >
          Skip to content
        </a>
        <Navbar />
        <main>
          <Home />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </MotionConfig>
  )
}

export default App
