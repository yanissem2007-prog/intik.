import {
  Armchair,
  Banknote,
  Bike,
  Dog,
  MoonStar,
  Package,
  ParkingCircle,
  Sandwich,
  Store,
  Users,
} from 'lucide-react'
import { practicalInfo, siteMeta } from '../../data/siteData'
import Reveal from '../shared/Reveal'
import Button from '../ui/Button'
import InfoCard from '../ui/InfoCard'

const icons = {
  Armchair,
  Banknote,
  Bike,
  Dog,
  MoonStar,
  Package,
  ParkingCircle,
  Sandwich,
  Store,
  Users,
}

export default function PracticalInfoSection() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="grid gap-5 xl:grid-cols-12">
          <Reveal className="xl:col-span-4">
            <div className="ink-panel h-full p-6 sm:p-8">
              <span className="eyebrow border-white/10 bg-white/6 text-white/68">Infos pratiques</span>
              <h2 className="mt-6 font-display text-[4rem] leading-[0.9] sm:text-[5rem]">
                Clear, fast, useful.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/68 sm:text-lg">
                Toutes les infos utiles en une vue: comment venir, comment payer, comment commander et a
                quoi s'attendre une fois sur place.
              </p>

              <div className="mt-8 grid gap-3">
                <a
                  className="rounded-[26px] border border-white/8 bg-white/5 px-5 py-4 text-sm leading-7 text-white/72 transition hover:bg-white/8"
                  href={siteMeta.mapsUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  {siteMeta.address}
                </a>
                <Button fullWidth href={siteMeta.phoneHref} size="lg">
                  Commander maintenant
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:col-span-8">
            {practicalInfo.map((item, index) => {
              const Icon = icons[item.icon]

              return (
                <Reveal delay={index * 0.03} key={item.title}>
                  <InfoCard className="h-full" description={item.description} icon={Icon} title={item.title} />
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
