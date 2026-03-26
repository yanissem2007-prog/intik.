import { ArrowUpRight } from 'lucide-react'
import { brandVideos, siteMeta, socialLinks } from '../../data/siteData'
import Reveal from '../shared/Reveal'
import Button from '../ui/Button'

const socialNotes = ['Tag INTIK', 'We repost the vibe', 'Social-first brand']

export default function SocialSection() {
  return (
    <section className="section-space bg-intik-black text-white">
      <div className="page-shell">
        <div className="ink-panel noise-overlay overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
            <Reveal>
              <div className="max-w-3xl">
                <span className="eyebrow border-white/10 bg-white/6 text-white/68">Communaute / social</span>
                <h2 className="mt-6 font-display text-[4.7rem] leading-[0.86] sm:text-[6rem] lg:text-[7.4rem]">
                  {siteMeta.socialBlurb}
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                  INTIK is built to travel from the spot to the phone. Share the product, the mood, and
                  the frame. The brand reposts, the loop stays alive, and the story keeps moving.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {socialLinks.map((link) => (
                    <Button external href={link.href} key={link.label} size="lg" variant="light">
                      {link.label}
                      <ArrowUpRight size={16} />
                    </Button>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {socialNotes.map((note) => (
                    <div
                      className="rounded-[22px] border border-white/8 bg-white/5 px-4 py-4 text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-white/58"
                      key={note}
                    >
                      {note}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} from="left">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/6">
                  <video
                    autoPlay
                    className="aspect-[4/4.8] w-full object-cover"
                    loop
                    muted
                    playsInline
                    src={brandVideos[5].src}
                  />
                </div>

                <div className="rounded-[28px] border border-white/8 bg-white/6 p-5">
                  <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.28em] text-white/46">
                    Social-first brand
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    Clean, sharp, easy to repost, and designed to keep the INTIK visual language feeling
                    premium even inside fast social formats.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
