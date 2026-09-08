import AboutCta from '@/components/about/AboutCta'
import AboutHero from '@/components/about/AboutHero'
import AtmosphereStrip from '@/components/about/AtmosphereStrip'
import MissionCards from '@/components/about/MissionCards'
import PhilosophyRing from '@/components/about/PhilosophyRing'
import Story from '@/components/about/Story'
import Timeline from '@/components/about/Timeline'

export default function About() {
  return (
    <>
      <AboutHero />
      <Story />
      <MissionCards />
      <PhilosophyRing />
      <Timeline />
      <AtmosphereStrip />
      <AboutCta />
    </>
  )
}
