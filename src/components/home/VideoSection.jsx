import { brandVideos } from '../../data/siteData'
import Reveal from '../shared/Reveal'
import SectionTitle from '../ui/SectionTitle'

export default function VideoSection() {
  return (
    <section className="section-space bg-intik-black text-white">
      <div className="page-shell">
        <Reveal>
          <SectionTitle
            description="Des loops video courts, propres et mobile-first pour renforcer la sensation de marque dynamique et appetite-driven."
            eyebrow="Brand motion"
            light
            title="L’energie INTIK en mouvement."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {brandVideos.slice(0, 4).map((video, index) => (
            <Reveal delay={index * 0.05} key={video.title}>
              <article className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
                <div className="relative aspect-[9/13] overflow-hidden">
                  <video
                    autoPlay
                    className="h-full w-full object-cover"
                    loop
                    muted
                    playsInline
                    src={video.src}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(10,10,10,0.7)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-intik-orange">
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
