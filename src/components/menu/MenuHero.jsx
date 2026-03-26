import { ArrowRight } from 'lucide-react'
import { bestSellers, brandVideos } from '../../data/siteData'
import Reveal from '../shared/Reveal'
import Button from '../ui/Button'

export default function MenuHero() {
  return (
    <section className="relative overflow-hidden bg-intik-black pb-16 pt-32 text-white sm:pb-20">
      <div className="absolute inset-0 opacity-35">
        <video autoPlay className="h-full w-full object-cover" loop muted playsInline src={brandVideos[4].src} />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.82)_0%,rgba(10,10,10,0.92)_100%)]" />

      <div className="page-shell relative">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <span className="eyebrow border-white/10 text-white/64">Nos Menus</span>
            <h1 className="balance mt-5 font-display text-6xl leading-none sm:text-7xl lg:text-[7rem]">
              Une carte courte, lisible et tres chargee.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              Burgers, loaded fries, pasta, extras et boissons. L'essentiel est la, avec une mise en page
              claire et des produits qui gardent une vraie personnalite.
            </p>
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

          <Reveal delay={0.1} from="left">
            <div className="glass-panel overflow-hidden">
              <img alt="Menu hero INTIK" className="aspect-[4/4.4] w-full object-cover" src={bestSellers[0].image} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
