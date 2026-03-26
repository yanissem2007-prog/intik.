import {
  Accessibility,
  Bath,
  Banknote,
  Dog,
  ParkingCircle,
  Sparkles,
  Store,
  Users,
  UtensilsCrossed,
} from 'lucide-react'
import { helpGroups, orderSteps } from '../../data/faqData'
import Reveal from '../shared/Reveal'
import SectionTitle from '../ui/SectionTitle'

const icons = {
  Accessibility,
  Bath,
  Banknote,
  Dog,
  ParkingCircle,
  Sparkles,
  Store,
  Users,
  UtensilsCrossed,
}

export default function HelpCards() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <Reveal>
          <SectionTitle
            description="Tout ce qu'il faut pour commander, venir, manger sur place ou verifier les infos de service avant de bouger."
            eyebrow="Mode d'emploi"
            title="Besoin d'aide, mais en version propre et rapide."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {orderSteps.map((step, index) => (
            <Reveal delay={index * 0.05} key={step.step}>
              <article className="glass-panel h-full p-6">
                <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-intik-orange">{step.step}</p>
                <h3 className="mt-4 font-display text-4xl leading-none text-intik-black">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/64">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {helpGroups.map((group, index) => {
            const Icon = icons[group.icon]

            return (
              <Reveal delay={index * 0.03} key={group.title}>
                <article className="glass-panel h-full p-6">
                  <div className="mb-5 inline-flex rounded-2xl bg-intik-black p-3 text-intik-orange">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-extrabold">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        className="rounded-full border border-black/8 bg-intik-paper px-3 py-1.5 text-sm text-black/70"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
