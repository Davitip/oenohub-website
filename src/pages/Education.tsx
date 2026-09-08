import AudienceGrid from '@/components/education/AudienceGrid'
import EduCta from '@/components/education/EduCta'
import EduHero from '@/components/education/EduHero'
import EnrollmentSteps from '@/components/education/EnrollmentSteps'
import FranchiseBanner from '@/components/education/FranchiseBanner'
import InstituteSection from '@/components/education/InstituteSection'

export default function Education() {
  return (
    <>
      <EduHero />
      <FranchiseBanner />

      <InstituteSection
        id="isg"
        title="International Sommelier Guild"
        lead="სომელიეთა მომზადების საერთაშორისო სტანდარტი — ახლა კავკასიაში. პროფესიული კურსები, დეგუსტაციური ტექნიკა და სერვისის ხელოვნება, დასრულებული საერთაშორისო სერტიფიკატით."
        programs={[
          {
            title: 'სომელიეს ძირითადი კურსი',
            desc: 'ღვინის ისტორია, ძირითადი რეგიონები, დეგუსტაციის საფუძვლები, სერვისის ეტიკეტი.',
          },
          {
            title: 'დეგუსტაციის ტექნიკა',
            desc: 'ბრმა დეგუსტაცია, არომატების ბიბლიოთეკა, სტრუქტურის ანალიზი.',
          },
          {
            title: 'სერტიფიცირება და გამოცდა',
            desc: 'საერთაშორისო სტანდარტის შეფასება და ISG დიპლომი.',
          },
        ]}
        checklist={[
          'საერთაშორისო აღიარებული დიპლომი',
          'პრაქტიკული დეგუსტაციები ქართული და საერთაშორისო ღვინოებით',
          'კავშირი კავკასიის სომელიეთა ქსელთან',
        ]}
        image="/edu-sommelier.png"
        imageAlt="სომელიე მუქ სარაფანში ღვინის ბოკალით"
        emblem="/isg-emblem.png"
        emblemAlt="International Sommelier Guild-ის ემბლემა"
      />

      <InstituteSection
        id="ewa"
        title="Edinburgh Whisky Academy"
        lead="შოტლანდიური ვისკის აკადემიის ოფიციალური პროგრამები კავკასიის რეგიონში — სასმელის ინდუსტრიის პროფესიონალების, ბარ-მენეჯერებისა და ვისკის ენთუზიასტებისთვის."
        programs={[
          {
            title: 'ვისკის ძირითადი კურსი',
            desc: 'წარმოების პროცესი, რეგიონები, სტილები და ტერმინოლოგია.',
          },
          {
            title: 'დეგუსტაცია და შეფასება',
            desc: 'პროფესიული დეგუსტაციის მეთოდოლოგია, არომატისა და გემოს პროფილები.',
          },
          {
            title: 'სერტიფიკატი და კარიერა',
            desc: 'EWA სერტიფიკატი ინდუსტრიაში აღიარებული კვალიფიკაციით.',
          },
        ]}
        checklist={[
          'Edinburgh Whisky Academy-ს ოფიციალური სერტიფიკატი',
          'შოტლანდიური სასწავლო მეთოდოლოგია და მასალები',
          'პრაქტიკული სესიები პრემიუმ ვისკის ნიმუშებით',
        ]}
        image="/edu-whisky.png"
        imageAlt="ვისკის ჭიქები მურა მურა მაგიდაზე"
        emblem="/ewa-emblem.png"
        emblemAlt="Edinburgh Whisky Academy-ს ემბლემა"
        mirrored
        amberGlow
      />

      <AudienceGrid />
      <EnrollmentSteps />
      <EduCta />
    </>
  )
}
