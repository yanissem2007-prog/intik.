import { ArrowRight } from 'lucide-react'
import { audienceProfiles, aboutStorySections, brandPromises, brandVideos } from '../data/siteData'
import Reveal from '../components/shared/Reveal'
import Button from '../components/ui/Button'
import SectionTitle from '../components/ui/SectionTitle'

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-intik-black pb-16 pt-32 text-white sm:pb-20">
        <div className="page-shell relative">
          <Reveal>
            <SectionTitle
              description="INTIK raconte une marque jeune, urbaine et premium. Une adresse food qui assume son style autant que ses portions."
              eyebrow="A propos"
              light
              title="Un spot burger pense comme une vraie marque."
            />
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
                <div className="overflow-hidden rounded-[34px]">
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
          <Reveal>
            <SectionTitle
              description="Pourquoi INTIK existe, ce qu'on veut faire ressentir et pour qui le spot a ete pense."
              eyebrow="Pourquoi INTIK"
              light
              title="Une food identity qui ne joue pas petit."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {brandPromises.map((item, index) => (
              <Reveal delay={index * 0.05} key={item.title}>
                <article className="rounded-[28px] border border-white/8 bg-white/5 p-6">
                  <h3 className="font-display text-4xl leading-none">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/68">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
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
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
