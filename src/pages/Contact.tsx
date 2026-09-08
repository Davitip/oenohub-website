import CompanyDirectory from '@/components/contact/CompanyDirectory'
import ContactForm from '@/components/contact/ContactForm'
import ContactHero from '@/components/contact/ContactHero'
import Faq from '@/components/contact/Faq'
import LocationBand from '@/components/contact/LocationBand'

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <CompanyDirectory />
      <Faq />
      <LocationBand />
    </>
  )
}
