import { ArrowUpRight } from 'lucide-react'
import { menuCategories } from '../../data/menuData'
import Reveal from '../shared/Reveal'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'

const featuredCategories = menuCategories.slice(0, 4)

export default function MenuPreviewSection() {
  return (
    <section className="section-space bg-intik-black text-white">
      <div className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[0.74fr_1.26fr] xl:items-end">
          <Reveal>
            <SectionTitle
              description="Une lecture plus rapide des categories fortes pour aider les visiteurs a comprendre ce qu'INTIK sert avant meme d'ouvrir toute la carte."
              eyebrow="Menu preview"
              light
              title="La carte en avant-gout premium."
              titleClassName="max-w-[11ch]"
            />

            <div className="mt-8">
              <Button size="lg" to="/nos-menus">
                Explorer tout le menu
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {featuredCategories.map((category, index) => (
              <Reveal delay={index * 0.05} key={category.id}>
                <article className="rounded-[32px] border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.3em] text-intik-orange">
                      {category.title}
                    </p>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.24em] text-white/54">
                      {category.items.length} items
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-white/66">{category.intro}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.items.slice(0, 4).map((item) => (
                      <span
                        className="rounded-full border border-white/10 bg-black/24 px-3 py-2 text-[0.64rem] font-extrabold uppercase tracking-[0.24em] text-white/64"
                        key={item.name}
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
