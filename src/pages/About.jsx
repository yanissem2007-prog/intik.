import { ArrowRight } from 'lucide-react'
import { audienceProfiles, aboutStorySections, brandPromises, brandVideos } from '../data/siteData'
import Reveal from '../components/shared/Reveal'
import Button from '../components/ui/Button'
import SectionTitle from '../components/ui/SectionTitle'

const aboutStats = ['Premium burger house', 'Alger centre', 'Late-night appetite']

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-intik-black pb-16 pt-32 text-white sm:pb-20">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-intik-orange/16 blur-[140px]" />
        <div className="page-shell relative">
          <Reveal>
            <SectionTitle
              description="INTIK raconte une marque jeune, urbaine et premium. Une adresse food qui assume son style autant que ses portions."
              eyebrow="A propos"
              light
              title="Une burger house pensee comme une vraie marque."
            />

            <div className="mt-8 flex flex-wrap gap-2">
              {aboutStats.map((stat) => (
                <span
                  className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[0.66rem] font-extrabold uppercase tracking-[0.28em] text-white/64"
                  key={stat}
                >
                  {stat}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell space-y-16">
          {aboutStorySections.map((section, index) => (
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center" key={section.title}>
              <Reveal className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <SectionTitle description={section.description} eyebrow={section.eyebrow} title={section.title} />
                <div className="mt-8 grid gap-3">
                  {section.points.map((point) => (
                    <div className="glass-panel px-5 py-4 text-sm leading-7 text-black/66" key={point}>
                      {point}
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal className={index % 2 === 1 ? 'lg:order-1' : ''} delay={0.1} from="left">
                <div className="overflow-hidden rounded-[34px] border border-black/8">
                  {section.mediaType === 'video' ? (
                    <video
                      autoPlay
                      className="aspect-[4/4.5] w-full object-cover"
                      loop
                      muted
                      playsInline
                      src={section.media}
                    />
                  ) : (
                    <img alt={section.title} className="aspect-[4/4.5] w-full object-cover" src={section.media} />
                  )}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="section-space bg-intik-black text-white">
        <div className="page-shell">
          <div className="grid gap-10 xl:grid-cols-[0.7fr_1.3fr] xl:items-start">
            <Reveal>
              <SectionTitle
                description="Pourquoi INTIK existe, ce qu'on veut faire ressentir et pour qui le spot a ete pense."
                eyebrow="Pourquoi INTIK"
                light
                title="Une food identity qui ne joue pas petit."
              />
            </Reveal>

            <div className="grid gap-5 md:grid-cols-3">
              {brandPromises.map((item, index) => (
                <Reveal delay={index * 0.05} key={item.title}>
                  <article className="rounded-[28px] border border-white/8 bg-white/5 p-6">
                    <h3 className="font-display text-4xl leading-none">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/68">{item.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-[0.78fr_1.22fr] xl:items-center">
            <Reveal>
              <div className="overflow-hidden rounded-[34px] border border-white/8 bg-white/5">
                <video
                  autoPlay
                  className="aspect-[4/4.5] w-full object-cover"
                  loop
                  muted
                  playsInline
                  src={brandVideos[2].src}
                />
              </div>
            </Reveal>

            <Reveal delay={0.1} from="left">
              <div className="ink-panel p-6 sm:p-8">
                <h3 className="font-display text-5xl leading-none sm:text-6xl">Pour qui est INTIK ?</h3>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {audienceProfiles.map((profile) => (
                    <div
                      className="rounded-[24px] border border-white/8 bg-white/5 px-5 py-4 text-sm leading-7 text-white/72"
                      key={profile}
                    >
                      {profile}
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button href="tel:0793331700" size="lg">
                    Commander maintenant
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
