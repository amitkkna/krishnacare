import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import About from '@/components/About'
import DivisionsSection from '@/components/DivisionsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import AwardsSection from '@/components/AwardsSection'
import CoreValues from '@/components/CoreValues'
import Partners from '@/components/Partners'
import Footer from '@/components/Footer'
import FloatingContactWidget from '@/components/FloatingContactWidget'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSlider />
      <About />
      <DivisionsSection />
      <TestimonialsSection />
      <AwardsSection />
      <CoreValues />
      <Partners />
      <Footer />
      <FloatingContactWidget />
    </main>
  )
}
