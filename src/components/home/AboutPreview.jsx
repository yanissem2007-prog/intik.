import { ArrowUpRight } from 'lucide-react'
import { aboutPreview } from '../../data/siteData'
import Reveal from '../shared/Reveal'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'

export default function AboutPreview() {
  return (
    <section className="section-space bg-intik-black text-white">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/5">
              <img alt="INTIK burger story" className="aspect-[4/4.6] w-full object-cover" src={aboutPreview.image} />
            </div>
          </Reveal>

          <Reveal delay={0.1} from="left">
            <SectionTitle
              description={aboutPreview.description}
              eyebrow="A propos d’INTIK"
              light
              title={aboutPreview.title}
            />

            <div className="mt-8 grid gap-4">
              {aboutPreview.points.map((point) => (
                <div
                  className="rounded-[26px] border border-white/8 bg-white/5 px-5 py-4 text-sm leading-7 text-white/70"
                  key={point}
                >
                  {point}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button className="bg-white text-intik-black hover:bg-intik-orange" to="/a-propos" variant="light">
                Explorer la marque
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
