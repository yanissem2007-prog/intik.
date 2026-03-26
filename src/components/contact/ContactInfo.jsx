import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { siteMeta } from '../../data/siteData'
import Reveal from '../shared/Reveal'

export default function ContactInfo() {
  const items = [
    {
      icon: Phone,
      title: 'Telephone',
      value: siteMeta.phoneDisplay,
      href: siteMeta.phoneHref,
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: siteMeta.address,
      href: siteMeta.mapsUrl,
      external: true,
    },
    {
      icon: Mail,
      title: 'Email',
      value: siteMeta.email,
      href: `mailto:${siteMeta.email}`,
    },
    {
      icon: Send,
      title: 'Maps',
      value: "Ouvrir l'itineraire",
      href: siteMeta.mapsUrl,
      external: true,
    },
  ]

  return (
    <div className="grid gap-5">
      {items.map((item, index) => {
        const Icon = item.icon

        return (
          <Reveal delay={index * 0.05} key={item.title}>
            <a
              className="glass-panel flex items-start gap-4 p-6 transition hover:-translate-y-1"
              href={item.href}
              rel={item.external ? 'noreferrer' : undefined}
              target={item.external ? '_blank' : undefined}
            >
              <div className="rounded-2xl bg-intik-black p-3 text-intik-orange">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-black/50">{item.title}</p>
                <p className="mt-3 text-lg font-bold text-intik-black">{item.value}</p>
              </div>
            </a>
          </Reveal>
        )
      })}
    </div>
  )
}
