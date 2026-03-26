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

export default function ExperienceSection() {
  return (
    <section className="section-space bg-intik-black text-white">
      <div className="page-shell">
        <Reveal>
          <SectionTitle
            align="center"
            description="Sur place, a emporter ou en livraison, INTIK garde la meme energie: service rapide, identité forte et vraie vibe de spot moderne."
            eyebrow="L’experience INTIK"
            light
            title="Pense pour la faim. Construit pour la ville."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {experienceHighlights.map((item, index) => {
            const Icon = icons[item.icon]

            return (
              <Reveal delay={index * 0.05} key={item.title}>
                <InfoCard dark description={item.description} icon={Icon} title={item.title} />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
