import Reveal from '../shared/Reveal'
import MenuCard from '../ui/MenuCard'
import SectionTitle from '../ui/SectionTitle'

export default function CategorySection({ category }) {
  return (
    <section className="section-space scroll-mt-32 border-t border-black/8 first:border-t-0" id={category.id}>
      <div className="page-shell">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle description={category.intro} eyebrow={category.title} title={category.title} />
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-black/8 bg-white/82 px-4 py-2 text-[0.64rem] font-extrabold uppercase tracking-[0.24em] text-black/56">
                {category.items.length} items
              </span>
              <span className="rounded-full border border-black/8 bg-white/82 px-4 py-2 text-[0.64rem] font-extrabold uppercase tracking-[0.24em] text-black/56">
                Fresh favorites
              </span>
            </div>
          </div>
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
