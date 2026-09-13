import { forwardRef, type ComponentProps } from 'react'
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router'
import { useLang } from '@/i18n/LanguageContext'
import { localizedPath } from '@/i18n/localePath'

/**
 * Link/NavLink wrappers that keep navigation inside the active language prefix:
 * internal absolute paths (e.g. "/contact") become "/en/contact" while English
 * is active. External URLs, hashes and non-string targets pass through untouched.
 */
function useLocalizedTo(to: ComponentProps<typeof RouterLink>['to']) {
  const { lang } = useLang()
  if (typeof to === 'string' && to.startsWith('/') && !to.startsWith('//')) {
    return localizedPath(to, lang)
  }
  return to
}

export const Link = forwardRef<HTMLAnchorElement, ComponentProps<typeof RouterLink>>(function Link(
  { to, ...rest },
  ref,
) {
  return <RouterLink ref={ref} to={useLocalizedTo(to)} {...rest} />
})

export const NavLink = forwardRef<HTMLAnchorElement, ComponentProps<typeof RouterNavLink>>(function NavLink(
  { to, ...rest },
  ref,
) {
  return <RouterNavLink ref={ref} to={useLocalizedTo(to)} {...rest} />
})
