import { ArrowRight } from 'lucide-react'
import { bestSellers, brandVideos } from '../../data/siteData'
import { menuCategories } from '../../data/menuData'
import Reveal from '../shared/Reveal'
import Button from '../ui/Button'

const menuFacts = [
  `${menuCategories.length} categories`,
  `${menuCategories.reduce((total, category) => total + category.items.length, 0)} selections`,
  'Delivery / Dine-in / Takeaway',
]

export default function MenuHero() {
  return (
    <section className="relative overflow-hidden bg-intik-black pb-18 pt-32 text-white sm:pb-22">
      <div className="absolute inset-0 opacity-35">
        <video autoPlay className="h-full w-full object-cover" loop muted playsInline src={brandVideos[4].src} />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.68)_0%,rgba(10,10,10,0.92)_100%)]" />
      <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-intik-orange/18 blur-[140px]" />

      <div className="page-shell relative">
        <div className="grid gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-end">
          <Reveal>
            <span className="eyebrow border-white/10 bg-white/6 text-white/66">Nos Menus</span>
            <h1 className="mt-6 max-w-[12ch] font-display text-[4.8rem] leading-[0.86] sm:text-[6.2rem] lg:text-[7.6rem]">
              Une carte premium, claire et ultra appetissante.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              Burgers, loaded fries, pasta, extras et boissons. Une lecture plus nette, de meilleures
              hierarchies, et une presentation faite pour donner faim rapidement.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {menuFacts.map((fact) => (
                <span
                  className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[0.66rem] font-extrabold uppercase tracking-[0.28em] text-white/64"
                  key={fact}
                >
                  {fact}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="tel:0793331700" size="lg">
                Commander maintenant
                <ArrowRight size={16} />
              </Button>
              <Button
                className="border-white/10 bg-white/8 text-white hover:bg-white/12"
                size="lg"
                to="/contact"
                variant="outline"
              >
                Besoin d'aide
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12} from="left">
            <div className="glass-panel overflow-hidden p-3">
              <div className="relative overflow-hidden rounded-[28px]">
                <img alt="Menu hero INTIK" className="aspect-[4/4.7] w-full object-cover" src={bestSellers[0].image} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.08)_10%,rgba(8,8,8,0.76)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.28em] text-white/54">
                    Signature product
                  </p>
                  <p className="mt-3 font-display text-5xl leading-none">{bestSellers[0].name}</p>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/72">{bestSellers[0].description}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
