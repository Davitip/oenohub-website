import BrandFilm from '@/components/home/BrandFilm'
import CompaniesCarousel from '@/components/home/CompaniesCarousel'
import CtaSection from '@/components/home/CtaSection'
import EcosystemChain from '@/components/home/EcosystemChain'
import EducationFranchise from '@/components/home/EducationFranchise'
import Hero from '@/components/home/Hero'
import Quote from '@/components/home/Quote'
import Stats from '@/components/home/Stats'
import TrustStrip from '@/components/home/TrustStrip'

export default function Home() {
  return (
    <>
      <Hero />
      <BrandFilm />
      <TrustStrip />
      <EcosystemChain />
      <CompaniesCarousel />
      <EducationFranchise />
      <Stats />
      <Quote />
      <CtaSection />
    </>
  )
}
