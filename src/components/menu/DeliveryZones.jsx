import { ArrowRight, MapPin } from 'lucide-react'
import { deliveryAreas, deliveryZones } from '../../data/menuData'
import { siteMeta } from '../../data/siteData'
import Reveal from '../shared/Reveal'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'

export default function DeliveryZones() {
  return (
    <section className="section-space bg-intik-black text-white">
      <div className="page-shell">
        <Reveal>
          <SectionTitle
            description="Code couleur inspire du visuel fourni, lecture rapide et detail par secteur pour savoir combien coute la livraison avant d'appeler."
            eyebrow="Livraison / zones"
            light
            title="Les frais varient selon ta zone."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {deliveryZones.map((zone, index) => (
            <Reveal delay={index * 0.05} key={zone.zone}>
              <article className={`rounded-[28px] border p-6 ${zone.tone}`}>
                <p className="text-sm font-extrabold uppercase tracking-[0.28em]">{zone.zone}</p>
                <p className="mt-4 font-display text-4xl leading-none">{zone.range}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {deliveryAreas.map((item, index) => (
            <Reveal delay={index * 0.02} key={item.area}>
              <article className="rounded-[24px] border border-white/8 bg-white/5 px-5 py-4">
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-intik-orange">{item.area}</p>
                <p className="mt-3 text-lg font-bold text-white">{item.fee}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 rounded-[32px] border border-white/8 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-intik-orange">
              Frais variables selon la zone
            </p>
            <p className="text-base text-white/70">
              Contactez-nous pour commander et confirmer la livraison depuis {siteMeta.address}.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={siteMeta.phoneHref} size="lg">
              Commander
              <ArrowRight size={16} />
            </Button>
            <Button
              className="border-white/10 bg-white/8 text-white hover:bg-white/12"
              href={siteMeta.mapsUrl}
              size="lg"
              variant="outline"
            >
              <MapPin size={16} />
              Voir la map
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
