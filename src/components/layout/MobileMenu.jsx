import { AnimatePresence, motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navLinks, siteMeta } from '../../data/siteData'
import Button from '../ui/Button'

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-intik-black/28 backdrop-blur-sm lg:hidden"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            className="page-shell pt-24"
            exit={{ y: -16, opacity: 0 }}
            initial={{ y: -18, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ink-panel noise-overlay overflow-hidden p-6">
              <div className="mb-8 flex items-center gap-3">
                <img alt="Logo INTIK" className="h-12 w-auto rounded-2xl bg-white/95 p-1" src={siteMeta.logo} />
                <div>
                  <p className="font-display text-3xl leading-none">{siteMeta.name}</p>
                  <p className="text-sm text-white/60">{siteMeta.slogan}</p>
                </div>
              </div>

              <nav aria-label="Navigation mobile" className="flex flex-col gap-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -18 }}
                    key={link.to}
                    transition={{ delay: index * 0.06 }}
                  >
                    <NavLink
                      className={({ isActive }) =>
                        [
                          'flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-bold transition',
                          isActive ? 'bg-white text-intik-black' : 'bg-white/6 text-white/84 hover:bg-white/10',
                        ].join(' ')
                      }
                      onClick={onClose}
                      to={link.to}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-8 grid gap-3 text-sm text-white/68">
                <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                  <MapPin className="mt-0.5 text-intik-orange" size={18} />
                  <span>{siteMeta.address}</span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                  <Phone className="mt-0.5 text-intik-orange" size={18} />
                  <span>{siteMeta.phoneDisplay}</span>
                </div>
              </div>

              <div className="mt-8">
                <Button className="w-full" href={siteMeta.phoneHref} size="lg">
                  Commander
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
