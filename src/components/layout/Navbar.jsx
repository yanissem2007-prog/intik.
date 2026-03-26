import { Menu, ShoppingBag } from 'lucide-react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { setupGsap } from '../../lib/animations/gsap'
import { navLinks, siteMeta } from '../../data/siteData'
import Button from '../ui/Button'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const shellRef = useRef(null)
  const lastScrollRef = useRef(0)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useLayoutEffect(() => {
    if (!shellRef.current) {
      return undefined
    }

    const { gsap } = setupGsap()
    const quickY = gsap.quickTo(shellRef.current, 'y', {
      duration: prefersReducedMotion ? 0 : 0.45,
      ease: 'power3.out',
    })

    const handleScroll = () => {
      const currentScroll = window.scrollY
      setIsScrolled(currentScroll > 18)

      if (prefersReducedMotion || isOpen || currentScroll <= 88 || currentScroll < lastScrollRef.current) {
        quickY(0)
      } else {
        quickY(-26)
      }

      lastScrollRef.current = currentScroll
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      quickY(0)
    }
  }, [isOpen, prefersReducedMotion])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60]">
        <div className="page-shell pt-4 sm:pt-5">
          <div
            className={[
              'grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[30px] border px-3 py-3 transition-all duration-500 sm:px-4 lg:rounded-full',
              isScrolled
                ? 'border-black/8 bg-[rgba(255,247,238,0.82)] shadow-[0_24px_80px_rgba(12,10,9,0.12)] backdrop-blur-[22px]'
                : 'border-white/20 bg-[rgba(255,255,255,0.56)] backdrop-blur-[18px]',
            ].join(' ')}
            ref={shellRef}
          >
            <Link aria-label="Accueil INTIK" className="flex items-center gap-3" to="/">
              <img alt="Logo INTIK" className="h-12 w-auto rounded-[20px] bg-white/96 p-1.5" src={siteMeta.logo} />
              <div className="hidden min-w-0 sm:block">
                <p className="truncate text-[0.62rem] font-extrabold uppercase tracking-[0.3em] text-black/46">
                  Hungry? We Got You.
                </p>
                <p className="font-display text-4xl leading-none text-intik-black">INTIK</p>
              </div>
            </Link>

            <nav aria-label="Navigation principale" className="hidden items-center justify-center gap-1 xl:flex">
              {navLinks.map((link) => (
                <NavLink
                  className={({ isActive }) =>
                    [
                      'rounded-full px-4 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.28em] transition duration-300',
                      isActive
                        ? 'bg-intik-black text-white shadow-[0_16px_45px_rgba(10,10,10,0.18)]'
                        : 'text-black/60 hover:bg-black/5 hover:text-intik-black',
                    ].join(' ')
                  }
                  key={link.to}
                  to={link.to}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center justify-end gap-2 lg:flex">
              <a
                className="hidden items-center gap-2 rounded-full border border-black/8 bg-white/55 px-4 py-3 text-[0.64rem] font-extrabold uppercase tracking-[0.24em] text-black/60 transition hover:border-black/16 hover:text-intik-black 2xl:inline-flex"
                href={siteMeta.mapsUrl}
                rel="noreferrer"
                target="_blank"
              >
                Alger centre
              </a>
              <Button href={siteMeta.phoneHref} size="md">
                <ShoppingBag size={16} />
                Commander
              </Button>
            </div>

            <button
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/8 bg-white text-intik-black shadow-[0_14px_35px_rgba(10,10,10,0.08)] transition hover:-translate-y-0.5 hover:border-black/14 lg:hidden"
              onClick={() => setIsOpen((value) => !value)}
              type="button"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
