import Header from '@/components/Header'
import Services from '@/components/Services'
import DivisionsSection from '@/components/DivisionsSection'
import InfrastructureAssets from '@/components/InfrastructureAssets'
import WhyChooseUs from '@/components/WhyChooseUs'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <Services />
      <DivisionsSection />
      <InfrastructureAssets />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}