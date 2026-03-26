import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks, siteMeta } from '../../data/siteData'
import Button from '../ui/Button'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.3,
  })

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="page-shell pt-4">
          <div
            className={[
              'relative flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6',
              isScrolled
                ? 'border-black/8 bg-white/78 shadow-[0_16px_70px_rgba(10,10,10,0.08)] backdrop-blur-xl'
                : 'border-white/35 bg-white/58 backdrop-blur-md',
            ].join(' ')}
          >
            <motion.span
              className="absolute inset-x-0 top-0 h-px origin-left rounded-full bg-intik-orange"
              style={{ scaleX: progress }}
            />

            <Link aria-label="Accueil INTIK" className="relative z-10 flex items-center gap-3" to="/">
              <img alt="Logo INTIK" className="h-11 w-auto rounded-2xl bg-white p-1" src={siteMeta.logo} />
            </Link>

            <nav aria-label="Navigation principale" className="hidden items-center gap-2 lg:flex">
              {navLinks.map((link) => (
                <NavLink
                  className={({ isActive }) =>
                    [
                      'rounded-full px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] transition',
                      isActive
                        ? 'bg-intik-black text-white'
                        : 'text-intik-black/70 hover:bg-black/5 hover:text-intik-black',
                    ].join(' ')
                  }
                  key={link.to}
                  to={link.to}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Button href={siteMeta.phoneHref}>
                <ShoppingBag size={16} />
                Commander
              </Button>
            </div>

            <button
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/8 bg-white text-intik-black shadow-[0_10px_30px_rgba(10,10,10,0.06)] lg:hidden"
              onClick={() => setIsOpen((value) => !value)}
              type="button"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
