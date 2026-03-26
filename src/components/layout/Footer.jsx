import { ArrowUpRight, MapPin, Phone, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navLinks, siteMeta, socialLinks } from '../../data/siteData'
import Reveal from '../shared/Reveal'
import Button from '../ui/Button'

const marqueeItems = [
  'Hungry? We Got You.',
  'Alger centre',
  'Delivery / Dine-in / Takeaway',
  'Premium burger house',
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-intik-black text-white">
      <div className="border-y border-white/8 bg-white/[0.03]">
        <div className="marquee-track flex items-center gap-8 px-6 py-4 text-[0.72rem] font-extrabold uppercase tracking-[0.32em] text-white/52">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <span className="inline-flex items-center gap-3" key={`${item}-${index}`}>
              <span className="h-2 w-2 rounded-full bg-intik-orange/72" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="page-shell py-14 sm:py-18 lg:py-24">
        <div className="ink-panel noise-overlay relative overflow-hidden p-6 sm:p-8 lg:p-12">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-intik-orange/12 blur-[120px]" />
          <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-white/6 blur-[100px]" />

          <div className="grid gap-12 xl:grid-cols-[1.18fr_0.82fr] xl:items-end">
            <Reveal>
              <div className="max-w-4xl">
                <span className="eyebrow border-white/10 bg-white/6 text-white/68">Final call</span>
                <h2 className="mt-6 font-display text-[4.8rem] leading-[0.86] sm:text-[6.2rem] lg:text-[8rem]">
                  See you in Alger after dark.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
                  INTIK should close like a brand film, not a utility block. One more strong invitation,
                  clear contact paths, and a final premium brand moment before the page ends.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={siteMeta.phoneHref} size="lg">
                    Commander maintenant
                  </Button>
                  <Button
                    className="border-white/10 bg-white/8 text-white hover:border-white/16 hover:bg-white/12"
                    href={siteMeta.mapsUrl}
                    size="lg"
                    variant="outline"
                  >
                    Voir la map
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} from="left">
              <div className="grid gap-4">
                <div className="rounded-[30px] border border-white/8 bg-white/6 p-5 backdrop-blur-xl">
                  <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.28em] text-white/46">
                    Contact direct
                  </p>
                  <div className="mt-5 grid gap-3">
                    <a
                      className="flex items-start gap-3 rounded-[22px] border border-white/8 bg-white/4 px-4 py-4 transition hover:bg-white/10"
                      href={siteMeta.mapsUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <MapPin className="mt-0.5 text-intik-orange" size={18} />
                      <span className="text-sm leading-7 text-white/72">{siteMeta.address}</span>
                    </a>
                    <a
                      className="flex items-start gap-3 rounded-[22px] border border-white/8 bg-white/4 px-4 py-4 transition hover:bg-white/10"
                      href={siteMeta.phoneHref}
                    >
                      <Phone className="mt-0.5 text-intik-orange" size={18} />
                      <span className="text-sm leading-7 text-white/72">{siteMeta.phoneDisplay}</span>
                    </a>
                    <a
                      className="flex items-start gap-3 rounded-[22px] border border-white/8 bg-white/4 px-4 py-4 transition hover:bg-white/10"
                      href={`mailto:${siteMeta.email}`}
                    >
                      <Send className="mt-0.5 text-intik-orange" size={18} />
                      <span className="text-sm leading-7 text-white/72">{siteMeta.email}</span>
                    </a>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[30px] border border-white/8 bg-white/6 p-5 backdrop-blur-xl">
                    <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.28em] text-white/46">
                      Navigation
                    </p>
                    <div className="mt-4 grid gap-3">
                      {navLinks.map((link) => (
                        <Link
                          className="inline-flex items-center gap-2 text-sm text-white/72 transition hover:text-intik-orange"
                          key={link.to}
                          to={link.to}
                        >
                          <ArrowUpRight size={15} />
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[30px] border border-white/8 bg-white/6 p-5 backdrop-blur-xl">
                    <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.28em] text-white/46">
                      Social
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
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
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
            <p>{siteMeta.copyright}</p>
            <button
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-extrabold uppercase tracking-[0.22em] transition hover:border-intik-orange hover:text-intik-orange"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              type="button"
            >
              Retour en haut
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
