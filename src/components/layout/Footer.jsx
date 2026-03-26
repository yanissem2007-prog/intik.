import { ArrowUpRight, MapPin, Phone, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navLinks, siteMeta, socialLinks } from '../../data/siteData'

export default function Footer() {
  return (
    <footer className="bg-intik-black text-white">
      <div className="page-shell py-14 sm:py-20">
        <div className="ink-panel noise-overlay overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.8fr_0.8fr]">
            <div className="space-y-5">
              <img alt="Logo INTIK" className="h-auto w-[150px] rounded-[24px] bg-white/95 p-2" src={siteMeta.logo} />
              <div className="space-y-2">
                <p className="font-display text-5xl leading-none sm:text-6xl">{siteMeta.name}</p>
                <p className="text-sm uppercase tracking-[0.34em] text-white/56">{siteMeta.slogan}</p>
              </div>
              <p className="max-w-md text-sm leading-7 text-white/66">
                Hungry? We Got You. Ton spot burger a Alger. Une marque jeune, chargee et visuelle,
                pensee pour manger bien et marquer les esprits.
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-sm font-extrabold uppercase tracking-[0.26em] text-white/54">
                Navigation rapide
              </p>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    className="inline-flex items-center gap-2 text-base text-white/78 transition hover:text-intik-orange"
                    key={link.to}
                    to={link.to}
                  >
                    <ArrowUpRight size={16} />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-sm font-extrabold uppercase tracking-[0.26em] text-white/54">Contact</p>
              <div className="grid gap-3 text-sm text-white/72">
                <a className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 transition hover:bg-white/8" href={siteMeta.mapsUrl} rel="noreferrer" target="_blank">
                  <MapPin className="mt-0.5 text-intik-orange" size={18} />
                  <span>{siteMeta.address}</span>
                </a>
                <a className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 transition hover:bg-white/8" href={siteMeta.phoneHref}>
                  <Phone className="mt-0.5 text-intik-orange" size={18} />
                  <span>{siteMeta.phoneDisplay}</span>
                </a>
                <a className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 transition hover:bg-white/8" href={`mailto:${siteMeta.email}`}>
                  <Send className="mt-0.5 text-intik-orange" size={18} />
                  <span>{siteMeta.email}</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    className="rounded-full border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white/78 transition hover:border-intik-orange hover:bg-intik-orange hover:text-intik-black"
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

          <div className="mt-10 flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-white/54 sm:flex-row sm:items-center sm:justify-between">
            <p>{siteMeta.copyright}</p>
            <button
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-bold uppercase tracking-[0.2em] transition hover:border-intik-orange hover:text-intik-orange"
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
