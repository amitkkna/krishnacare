import type { Metadata } from 'next'
import Header from '@/components/Header'
import AboutHero from '@/components/about/AboutHero'
import CompanyStory from '@/components/about/CompanyStory'
import MissionVision from '@/components/about/MissionVision'
import VisinaryLeaders from '@/components/about/VisinaryLeaders'
import SisterCompanies from '@/components/SisterCompanies'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us - Krishna Care | Leading Healthcare Solutions',
  description: 'Learn about Krishna Care\'s mission, vision, and leadership team. Discover our journey in providing exceptional healthcare solutions across India.',
  keywords: 'Krishna Care about, healthcare company, medical solutions, leadership team, company mission',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-100">
        <AboutHero />
        <CompanyStory />
        <MissionVision />
        <VisinaryLeaders />
        <SisterCompanies />
      </main>
      <Footer />
    </>
  )
}