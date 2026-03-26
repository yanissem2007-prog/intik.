import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, MapPin, Phone, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navLinks, siteMeta, socialLinks } from '../../data/siteData'
import Button from '../ui/Button'

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[70] overflow-y-auto bg-[rgba(7,7,7,0.9)] text-white backdrop-blur-2xl xl:hidden"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,125,26,0.22),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_18%)]" />
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="page-shell relative flex min-h-screen flex-col py-5"
            exit={{ opacity: 0, y: 20 }}
            initial={{ opacity: 0, y: 28 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/6 px-4 py-3 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <img alt="Logo INTIK" className="h-11 w-auto rounded-[18px] bg-white/96 p-1.5" src={siteMeta.logo} />
                <div>
                  <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.28em] text-white/48">
                    brand menu
                  </p>
                  <p className="font-display text-3xl leading-none">INTIK</p>
                </div>
              </div>

              <button
                aria-label="Fermer le menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white transition hover:bg-white/12"
                onClick={onClose}
                type="button"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-between gap-10 py-8">
              <nav aria-label="Navigation mobile" className="grid gap-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    key={link.to}
                    transition={{ delay: 0.08 + index * 0.06, duration: 0.45 }}
                  >
                    <NavLink
                      className={({ isActive }) =>
                        [
                          'group/menu relative flex items-end justify-between gap-5 rounded-[30px] border px-5 py-5 transition duration-300',
                          isActive
                            ? 'border-intik-orange/35 bg-white/12 text-white'
                            : 'border-white/8 bg-white/6 text-white/78 hover:border-white/14 hover:bg-white/10',
                        ].join(' ')
                      }
                      onClick={onClose}
                      to={link.to}
                    >
                      <div>
                        <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.3em] text-white/44">
                          0{index + 1}
                        </p>
                        <p className="mt-3 font-display text-[2.6rem] leading-none sm:text-[3.4rem]">
                          {link.label}
                        </p>
                      </div>
                      <ArrowUpRight className="transition duration-300 group-hover/menu:-translate-y-1 group-hover/menu:translate-x-1" size={24} />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  className="rounded-[28px] border border-white/8 bg-white/6 p-5 backdrop-blur-xl transition hover:bg-white/10"
                  href={siteMeta.mapsUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="mb-3 inline-flex rounded-2xl bg-intik-orange p-3 text-intik-black">
                    <MapPin size={18} />
                  </div>
                  <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.28em] text-white/48">Adresse</p>
                  <p className="mt-3 text-base leading-7 text-white/76">{siteMeta.address}</p>
                </a>

                <a
                  className="rounded-[28px] border border-white/8 bg-white/6 p-5 backdrop-blur-xl transition hover:bg-white/10"
                  href={siteMeta.phoneHref}
                >
                  <div className="mb-3 inline-flex rounded-2xl bg-intik-orange p-3 text-intik-black">
                    <Phone size={18} />
                  </div>
                  <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.28em] text-white/48">Commande</p>
                  <p className="mt-3 text-base leading-7 text-white/76">{siteMeta.phoneDisplay}</p>
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <a
                    className="rounded-full border border-white/10 px-4 py-2 text-[0.64rem] font-extrabold uppercase tracking-[0.26em] text-white/68 transition hover:border-intik-orange hover:bg-intik-orange hover:text-intik-black"
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <Button className="w-full" href={siteMeta.phoneHref} size="lg">
                Commander maintenant
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
