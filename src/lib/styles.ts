/** Shared button / link styles — Apple-inspired pill buttons.
 *  Primary: solid burgundy pill. Secondary: neutral gray pill.
 *  Instant press feedback via active:scale-[0.97]. */

export const btnPrimary =
  'inline-flex items-center justify-center gap-2 rounded-full bg-burgundy-900 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-burgundy-700 active:scale-[0.97]'

export const btnSecondaryDark =
  'inline-flex items-center justify-center gap-2 rounded-full bg-black/[0.05] px-8 py-3.5 text-sm font-semibold text-ink-900 transition-all duration-200 hover:bg-black/[0.09] active:scale-[0.97]'

export const btnSecondaryLight =
  'inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-8 py-3.5 text-sm font-semibold text-ink-900 transition-all duration-200 hover:bg-black/[0.04] active:scale-[0.97]'

export const ghostLinkDark =
  'group inline-flex items-center gap-2 text-sm font-medium text-burgundy-700 transition-colors hover:text-burgundy-600'

export const ghostLinkLight =
  'group inline-flex items-center gap-2 text-sm font-medium text-burgundy-700 transition-colors hover:text-burgundy-600'
