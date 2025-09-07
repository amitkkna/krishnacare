import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import Leadership from '@/components/Leadership'
import About from '@/components/About'
import CoreValues from '@/components/CoreValues'
import DivisionsSection from '@/components/DivisionsSection'
import SisterCompanies from '@/components/SisterCompanies'
import ExperienceClients from '@/components/ExperienceClients'
import InfrastructureAssets from '@/components/InfrastructureAssets'
import BannerSection from '@/components/BannerSection'
import Services from '@/components/Services'
import PhotoGallery from '@/components/PhotoGallery'
import Partners from '@/components/Partners'
import WhyChooseUs from '@/components/WhyChooseUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSlider />
      <Leadership />
      <About />
      <CoreValues />
      <DivisionsSection />
      <SisterCompanies />
      <ExperienceClients />
      <InfrastructureAssets />
      <BannerSection />
      <Services />
      <PhotoGallery />
      <Partners />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  )
}
