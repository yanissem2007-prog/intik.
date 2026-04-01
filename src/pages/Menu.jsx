import CategorySection from '../components/menu/CategorySection'
import DeliveryZones from '../components/menu/DeliveryZones'
import MenuHero from '../components/menu/MenuHero'
import Reveal from '../components/shared/Reveal'
import { menuCategories } from '../data/menuData'

export default function Menu() {
  return (
    <>
      <MenuHero />

      <section className="sticky top-[5.4rem] z-40 border-y border-black/8 bg-[rgba(246,239,231,0.86)] backdrop-blur-xl">
        <div className="page-shell">
          <Reveal>
            <div className="hide-scrollbar flex gap-3 overflow-x-auto py-4">
              {menuCategories.map((category) => (
                <a
                  className="rounded-full border border-black/8 bg-white/82 px-4 py-3 text-[0.66rem] font-extrabold uppercase tracking-[0.26em] text-black/60 transition hover:border-intik-orange hover:bg-intik-orange hover:text-intik-black"
                  href={`#${category.id}`}
                  key={category.id}
                >
                  {category.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {menuCategories.map((category) => (
        <CategorySection category={category} key={category.id} />
      ))}
      <DeliveryZones />
    </>
  )
}
