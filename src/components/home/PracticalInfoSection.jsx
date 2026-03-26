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
import { practicalInfo } from '../../data/siteData'
import Reveal from '../shared/Reveal'
import InfoCard from '../ui/InfoCard'
import SectionTitle from '../ui/SectionTitle'

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
        <Reveal>
          <SectionTitle
            description="Toutes les infos pratiques, sans friction: comment venir, comment payer, comment commander et a quoi s’attendre une fois sur place."
            eyebrow="Infos pratiques"
            title="Claire, rapide, utile."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {practicalInfo.map((item, index) => {
            const Icon = icons[item.icon]

            return (
              <Reveal delay={index * 0.04} key={item.title}>
                <InfoCard description={item.description} icon={Icon} title={item.title} />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
