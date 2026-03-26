import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Clock3, MapPin, Phone } from 'lucide-react'
import { heroData, siteMeta } from '../../data/siteData'
import Reveal from '../shared/Reveal'
import Button from '../ui/Button'

export default function HeroSection() {
  const { scrollY } = useScroll()
  const mediaY = useTransform(scrollY, [0, 600], [0, 80])
  const frameY = useTransform(scrollY, [0, 600], [0, 32])

  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <motion.div className="absolute inset-0" style={{ y: frameY }}>
        <video
          autoPlay
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
          src={heroData.video}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.38)_0%,rgba(10,10,10,0.68)_60%,rgba(10,10,10,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,0,0.25),transparent_30%)]" />
      </motion.div>

      <div className="page-shell relative flex min-h-screen items-end pb-14 pt-10 sm:pb-20">
        <div className="grid w-full gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <Reveal className="max-w-3xl">
            <div className="mb-6 flex flex-wrap gap-3">
              {heroData.badges.map((badge) => (
                <span
                  className="eyebrow border-white/10 bg-white/6 text-white/74 backdrop-blur-sm"
                  key={badge}
                >
                  {badge}
                </span>
              ))}
            </div>

            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.36em] text-intik-orange">
              {heroData.title}
            </p>
            <h1 className="balance font-display text-6xl leading-none text-white sm:text-7xl lg:text-8xl xl:text-[8.8rem]">
              Hungry?
              <span className="block text-intik-orange">We Got You.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/76 sm:text-xl">
              <span className="font-extrabold uppercase tracking-[0.25em] text-white">
                Burgers and fries
              </span>
              <span className="mx-3 hidden text-intik-orange sm:inline">/</span>
              <span className="balance">{heroData.kicker}</span>
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              {heroData.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" to="/nos-menus">
                Voir le menu
                <ArrowRight size={16} />
              </Button>
              <Button
                className="border-white/12 bg-white/8 text-white hover:bg-white/12"
                size="lg"
                to="/contact"
                variant="outline"
              >
                Nous contacter
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3 text-intik-orange">
                  <MapPin size={18} />
                  <span className="text-xs font-bold uppercase tracking-[0.22em]">Adresse</span>
                </div>
                <p className="text-lg font-bold text-white">{siteMeta.address}</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3 text-intik-orange">
                  <Phone size={18} />
                  <span className="text-xs font-bold uppercase tracking-[0.22em]">Telephone</span>
                </div>
                <a className="text-lg font-bold text-white transition hover:text-intik-orange" href={siteMeta.phoneHref}>
                  {siteMeta.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {heroData.highlights.map((item) => (
                <span
                  className="rounded-full border border-white/10 bg-intik-black/30 px-4 py-2 text-sm text-white/74 backdrop-blur-sm"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:justify-self-end" delay={0.15} from="left">
            <motion.div className="glass-panel max-w-xl overflow-hidden" style={{ y: mediaY }}>
              <div className="relative aspect-[4/4.6] overflow-hidden">
                <img
                  alt="Burger INTIK hero"
                  className="h-full w-full object-cover"
                  src={heroData.image}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_10%,rgba(10,10,10,0.72)_100%)]" />
                <div className="absolute left-5 top-5 rounded-full bg-intik-orange px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-intik-black">
                  Late-night food
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/62">INTIK signature frame</p>
                  <p className="mt-3 font-display text-4xl leading-none sm:text-5xl">Fast food, but make it iconic.</p>
                </div>
              </div>

              <div className="grid gap-4 p-6 sm:grid-cols-2">
                <div className="rounded-[24px] bg-intik-black p-5 text-white">
                  <div className="mb-2 flex items-center gap-3 text-intik-orange">
                    <Clock3 size={18} />
                    <span className="text-xs font-bold uppercase tracking-[0.22em]">Service vibe</span>
                  </div>
                  <p className="text-xl font-extrabold">Delivery / Takeaway / Dine-in</p>
                </div>
                <div className="rounded-[24px] bg-intik-orange p-5 text-intik-black">
                  <p className="text-xs font-black uppercase tracking-[0.24em]">Brand line</p>
                  <p className="mt-3 text-xl font-extrabold">{siteMeta.tagline}</p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
