import Header from '@/components/Header'
import FullGallery from '@/components/FullGallery'
import BannerSection from '@/components/BannerSection'
import ExperienceClients from '@/components/ExperienceClients'
import Footer from '@/components/Footer'

export default function GalleryPage() {
  return (
    <main>
      <Header />
      <FullGallery />
      <BannerSection />
      <ExperienceClients />
      <Footer />
    </main>
  )
}