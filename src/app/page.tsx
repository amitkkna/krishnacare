import Header from '@/components/Header'
import About from '@/components/About'
import DivisionsSection from '@/components/DivisionsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import AwardsSection from '@/components/AwardsSection'
import CoreValues from '@/components/CoreValues'
import Partners from '@/components/Partners'
import Footer from '@/components/Footer'
import NoSSR from '@/components/NoSSR'
import dynamic from 'next/dynamic'

// Dynamic imports to prevent hydration issues
const HeroSlider = dynamic(() => import('@/components/HeroSlider'), {
  ssr: false,
  loading: () => (
    <section className="min-h-screen bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-pulse">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">Krishna Care</h1>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-orange-300">Leading Agricultural Solutions</h2>
          <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto">Your Trusted Partner for 25+ Years in Agricultural Excellence</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {['25+ Years', '200+ Clients', '169K+ Sq Ft', '6+ Companies'].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl">
                <div className="text-2xl font-bold">{stat.split(' ')[0]}</div>
                <div className="text-sm opacity-80">{stat.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

const FloatingContactWidget = dynamic(() => import('@/components/FloatingContactWidget'), {
  ssr: false
})

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSlider />
      <DivisionsSection />
      <About />
      <TestimonialsSection />
      <AwardsSection />
      <CoreValues />
      <Partners />
      <Footer />
      <FloatingContactWidget />
    </main>
  )
}