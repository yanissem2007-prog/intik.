import { brandVideos } from '../../data/siteData'
import Reveal from '../shared/Reveal'
import SectionTitle from '../ui/SectionTitle'

export default function VideoSection() {
  return (
    <section className="section-space bg-intik-black text-white">
      <div className="page-shell">
        <div className="grid gap-8 xl:grid-cols-[0.74fr_1.26fr] xl:items-end">
          <Reveal>
            <SectionTitle
              description="Des loops video plus editoriaux, plus propres et plus assumes pour renforcer le sentiment de marque en mouvement."
              eyebrow="Brand motion"
              light
              title="L'energie INTIK en mouvement."
            />
          </Reveal>

          <Reveal delay={0.1} from="left">
            <p className="max-w-2xl text-base leading-8 text-white/62 xl:ml-auto xl:text-right xl:text-lg">
              Une lecture horizontale, un rythme de film strip, et des cartes video faites pour sentir le
              mobile-first sans perdre la tenue premium du site.
            </p>
          </Reveal>
        </div>

        <div className="hide-scrollbar mt-12 flex gap-5 overflow-x-auto pb-4">
          {brandVideos.slice(0, 6).map((video, index) => (
            <Reveal
              className="min-w-[17rem] sm:min-w-[18rem] lg:min-w-[20rem]"
              delay={index * 0.04}
              key={video.title}
            >
              <article className="group/card overflow-hidden rounded-[30px] border border-white/10 bg-white/6">
                <div className="relative aspect-[9/13] overflow-hidden">
                  <video
                    autoPlay
                    className="h-full w-full object-cover transition duration-700 group-hover/card:scale-[1.04]"
                    loop
                    muted
                    playsInline
                    src={video.src}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.02)_0%,rgba(8,8,8,0.76)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.28em] text-intik-orange">
                      {video.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/72">{video.description}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
