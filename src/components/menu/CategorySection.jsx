import Reveal from '../shared/Reveal'
import MenuCard from '../ui/MenuCard'
import SectionTitle from '../ui/SectionTitle'

export default function CategorySection({ category }) {
  return (
    <section className="section-space border-t border-black/8 first:border-t-0">
      <div className="page-shell">
        <Reveal>
          <SectionTitle
            description={category.intro}
            eyebrow={category.title}
            title={category.title}
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {category.items.map((item, index) => (
            <Reveal delay={index * 0.04} key={item.name}>
              <MenuCard
                badge={item.badge}
                description={item.description}
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
