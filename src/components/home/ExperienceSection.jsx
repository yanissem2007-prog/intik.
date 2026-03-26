import {
  Bike,
  MapPinned,
  MoonStar,
  PackageCheck,
  UtensilsCrossed,
  Zap,
} from 'lucide-react'
import { experienceHighlights } from '../../data/siteData'
import Reveal from '../shared/Reveal'
import InfoCard from '../ui/InfoCard'
import SectionTitle from '../ui/SectionTitle'

const icons = {
  Bike,
  MapPinned,
  MoonStar,
  PackageCheck,
  UtensilsCrossed,
  Zap,
}

const supportTags = ['Late-night food', 'Fast service', 'Alger centre']

export default function ExperienceSection() {
  return (
    <section className="section-space bg-intik-black text-white">
      <div className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[0.74fr_1.26fr] xl:items-start">
          <Reveal>
            <SectionTitle
              align="left"
              description="Sur place, a emporter ou en livraison, INTIK garde la meme energie: rapide, net, appetite-driven, et construit comme une vraie marque."
              eyebrow="L'experience INTIK"
              light
              title="Pense pour la faim. Construit pour la ville."
            />

            <div className="mt-6 flex flex-wrap gap-2">
              {supportTags.map((tag) => (
                <span
                  className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[0.66rem] font-extrabold uppercase tracking-[0.28em] text-white/68"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="hide-scrollbar flex gap-5 overflow-x-auto pb-4">
            {experienceHighlights.map((item, index) => {
              const Icon = icons[item.icon]

              return (
                <Reveal
                  className="min-w-[18rem] snap-start sm:min-w-[20rem] lg:min-w-[22rem]"
                  delay={index * 0.04}
                  key={item.title}
                >
                  <InfoCard
                    className="h-full min-h-[18rem]"
                    dark
                    description={item.description}
                    icon={Icon}
                    title={item.title}
                  />
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
