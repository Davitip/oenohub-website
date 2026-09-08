import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  value: number
  duration?: number
  suffix?: string
  className?: string
}

/** Count-up 0 → value on first viewport entry (easeOutExpo-like quart easing). */
export default function Counter({ value, duration = 1.6, suffix = '', className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}
