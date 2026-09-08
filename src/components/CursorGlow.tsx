import { memo, useEffect, useRef } from 'react'

/**
 * Small gold circular glow follower for dark sections (desktop only).
 * mix-blend screen, 24px, lerp 0.15 — per design.md §5.
 */
const CursorGlow = memo(function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    let raf = 0
    let visible = false
    const target = { x: -100, y: -100 }
    const pos = { x: -100, y: -100 }

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX
      target.y = e.clientY
      // only glow over interactive elements inside dark sections
      const t = e.target as HTMLElement | null
      const interactive = !!t?.closest('a, button, [data-glow]')
      const dark = !!t?.closest('[data-theme="dark"]')
      visible = interactive && dark
    }

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.15
      pos.y += (target.y - pos.y) * 0.15
      el.style.transform = `translate(${pos.x - 12}px, ${pos.y - 12}px)`
      el.style.opacity = visible ? '1' : '0'
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    window.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-6 w-6 rounded-full opacity-0 transition-opacity duration-300 md:block"
      style={{
        background: 'radial-gradient(circle, rgba(201,162,39,0.55) 0%, rgba(201,162,39,0) 70%)',
        mixBlendMode: 'screen',
      }}
    />
  )
})

export default CursorGlow
