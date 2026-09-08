import AudienceGrid from '@/components/education/AudienceGrid'
import EduCta from '@/components/education/EduCta'
import EduHero from '@/components/education/EduHero'
import EnrollmentSteps from '@/components/education/EnrollmentSteps'
import FranchiseBanner from '@/components/education/FranchiseBanner'
import InstituteSection from '@/components/education/InstituteSection'
import { useLang } from '@/i18n/LanguageContext'

export default function Education() {
  const { d } = useLang()
  return (
    <>
      <EduHero />
      <FranchiseBanner />

      <InstituteSection
        id="isg"
        title="International Sommelier Guild"
        lead={d.education.isg.lead}
        programs={d.education.isg.programs}
        checklist={d.education.isg.checklist}
        image="/edu-sommelier.png"
        imageAlt={d.education.isg.imageAlt}
        emblem="/isg-emblem.png"
        emblemAlt={d.education.isg.emblemAlt}
      />

      <InstituteSection
        id="ewa"
        title="Edinburgh Whisky Academy"
        lead={d.education.ewa.lead}
        programs={d.education.ewa.programs}
        checklist={d.education.ewa.checklist}
        image="/edu-whisky.png"
        imageAlt={d.education.ewa.imageAlt}
        emblem="/ewa-emblem.png"
        emblemAlt={d.education.ewa.emblemAlt}
        mirrored
        amberGlow
      />

      <AudienceGrid />
      <EnrollmentSteps />
      <EduCta />
    </>
  )
}
