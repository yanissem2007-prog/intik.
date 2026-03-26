import { bestSellers } from '../../data/siteData'
import Reveal from '../shared/Reveal'
import MenuCard from '../ui/MenuCard'
import SectionTitle from '../ui/SectionTitle'

export default function BestSellers() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <Reveal>
          <SectionTitle
            align="center"
            description="Les hits de la maison. Ceux qui representent le mieux l’esprit INTIK: visuel fort, recettes genereuses et attitude bien marquee."
            eyebrow="Best sellers"
            title="Les produits qui font parler la marque."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {bestSellers.map((item, index) => (
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
    </section>
  )
}
