import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance: Lenis | null = null

/** Site-wide Lenis smooth scroll (lerp 0.09, smoothWheel). Mount once in Layout. */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
    lenisInstance = lenis

    // keep GSAP ScrollTrigger in sync with Lenis-driven scrolling
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}

/** Smooth-scroll to an element by id, using Lenis when available. */
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: -64, duration: 1.4 })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/** Instant scroll to top (route change). */
export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true })
  }
  window.scrollTo(0, 0)
}
