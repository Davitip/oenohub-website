/** Shared animation constants for the Education page (design.md §5). */

export const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export const staggerContainer = (stagger = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
})

export const fadeUpItem = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}
