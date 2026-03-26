import { ArrowUpRight } from 'lucide-react'
import { brandVideos, siteMeta, socialLinks } from '../../data/siteData'
import Reveal from '../shared/Reveal'
import Button from '../ui/Button'

export default function SocialSection() {
  return (
    <section className="section-space bg-intik-black text-white">
      <div className="page-shell">
        <div className="ink-panel noise-overlay overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="max-w-2xl">
                <span className="eyebrow border-white/10 text-white/62">Communaute / social</span>
                <h2 className="balance mt-5 font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
                  {siteMeta.socialBlurb}
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
                  INTIK est pense pour exister autant dans la vraie vie que dans les stories. Partage le
                  spot, le produit, la vibe. La marque te reposte, et la boucle continue.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {socialLinks.map((link) => (
                    <Button href={link.href} key={link.label} size="lg" variant="light">
                      {link.label}
                      <ArrowUpRight size={16} />
                    </Button>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} from="left">
              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5">
                <video
                  autoPlay
                  className="aspect-[4/4.8] w-full object-cover"
                  loop
                  muted
                  playsInline
                  src={brandVideos[5].src}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
