import { ArrowUpRight, MapPin } from 'lucide-react'
import { aboutPreview, siteMeta } from '../../data/siteData'
import Reveal from '../shared/Reveal'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'

export default function AboutPreview() {
  return (
    <section className="section-space relative">
      <div className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[0.82fr_1.18fr] xl:items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute left-4 top-6 hidden h-[82%] w-full rounded-[34px] border border-black/8 bg-white/38 lg:block" />
              <div className="glass-panel relative overflow-hidden p-3">
                <div className="relative overflow-hidden rounded-[30px]">
                  <img
                    alt="INTIK burger story"
                    className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
                    src={aboutPreview.image}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.06)_16%,rgba(8,8,8,0.74)_100%)]" />
                  <div className="absolute left-5 top-5">
                    <span className="eyebrow border-white/10 bg-black/24 text-white/76">Brand / city / food</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.3em] text-white/56">
                      INTIK inside the frame
                    </p>
                    <p className="mt-3 max-w-md font-display text-4xl leading-none sm:text-5xl">
                      Food with more attitude and cleaner presence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="orange-glow absolute -bottom-6 right-4 hidden max-w-[15rem] rounded-[28px] bg-intik-black p-4 text-white lg:block">
                <div className="mb-3 inline-flex rounded-2xl bg-intik-orange p-2.5 text-intik-black">
                  <MapPin size={16} />
                </div>
                <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.28em] text-white/48">
                  Adresse
                </p>
                <p className="mt-3 text-sm leading-6 text-white/76">{siteMeta.address}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} from="left">
            <SectionTitle
              description={aboutPreview.description}
              eyebrow="A propos INTIK"
              title={aboutPreview.title}
              titleClassName="max-w-[12ch]"
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutPreview.points.map((point, index) => (
                <article className="glass-panel p-5" key={point}>
                  <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.28em] text-intik-orange">
                    0{index + 1}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-black/66">{point}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button size="lg" to="/a-propos">
                Explorer la marque
                <ArrowUpRight size={16} />
              </Button>
              <p className="max-w-md text-sm leading-7 text-black/56">
                Premium street-food, fast service, strong visual identity, and a sharper brand point of
                view.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
