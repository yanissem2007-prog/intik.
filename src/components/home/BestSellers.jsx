import { ArrowUpRight } from 'lucide-react'
import { bestSellers } from '../../data/siteData'
import Reveal from '../shared/Reveal'
import Button from '../ui/Button'
import MenuCard from '../ui/MenuCard'
import SectionTitle from '../ui/SectionTitle'

export default function BestSellers() {
  const [featuredItem, ...secondaryItems] = bestSellers

  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[0.62fr_1.38fr] xl:items-start">
          <Reveal>
            <SectionTitle
              description="Les produits qui posent la signature INTIK: image forte, recettes genereuses, et vraie attitude de marque."
              eyebrow="Best sellers"
              title="Les produits qui installent la signature."
              titleClassName="max-w-[11ch]"
            />

            <div className="mt-8">
              <Button size="lg" to="/nos-menus">
                Tout le menu
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-[0.52fr_0.48fr]">
            <Reveal className="h-full">
              <MenuCard
                badge={featuredItem.badge}
                className="h-full"
                description={featuredItem.description}
                image={featuredItem.image}
                price={featuredItem.price}
                title={featuredItem.name}
              />
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {secondaryItems.map((item, index) => (
                <Reveal delay={index * 0.05} key={item.name}>
                  <MenuCard
                    badge={item.badge}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                    title={item.name}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
