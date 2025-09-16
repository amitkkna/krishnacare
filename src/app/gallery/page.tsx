import Header from '@/components/Header'
import PhotoGallery from '@/components/PhotoGallery'
import BannerSection from '@/components/BannerSection'
import ExperienceClients from '@/components/ExperienceClients'
import Footer from '@/components/Footer'

export default function GalleryPage() {
  return (
    <main>
      <Header />
      <PhotoGallery />
      <BannerSection />
      <ExperienceClients />
      <Footer />
    </main>
  )
}