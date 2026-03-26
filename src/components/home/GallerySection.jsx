import { galleryItems } from '../../data/siteData'
import Reveal from '../shared/Reveal'
import SectionTitle from '../ui/SectionTitle'

const layoutClasses = [
  'lg:col-span-7',
  'lg:col-span-5',
  'lg:col-span-5',
  'lg:col-span-7',
  'lg:col-span-12',
]

const toneClasses = [
  'border-white/8 bg-intik-black text-white',
  'border-black/8 bg-white/78 text-intik-black shadow-[0_24px_75px_rgba(10,10,10,0.08)]',
  'border-black/8 bg-white/78 text-intik-black shadow-[0_24px_75px_rgba(10,10,10,0.08)]',
  'border-white/8 bg-intik-black text-white',
  'border-black/8 bg-white/82 text-intik-black shadow-[0_24px_75px_rgba(10,10,10,0.08)]',
]

export default function GallerySection() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="grid gap-8 xl:grid-cols-[0.7fr_1.3fr] xl:items-end">
          <Reveal>
            <SectionTitle
              description="Chaque visuel a son propre role: hero produit, texture, vibe de marque ou signal de gourmandise. Rien n'est la pour meubler."
              eyebrow="Galerie visuelle"
              title="Des images qui racontent vraiment INTIK."
            />
          </Reveal>

          <Reveal delay={0.1} from="left">
            <p className="max-w-2xl text-base leading-8 text-black/58 xl:ml-auto xl:text-right xl:text-lg">
              Une composition plus editoriale, des cards plus sculptes, et une lecture plus premium pour
              rendre la galerie moins template et plus intentionnelle.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {galleryItems.map((item, index) => {
            const isDark = toneClasses[index].includes('bg-intik-black')

            return (
              <Reveal className={layoutClasses[index]} delay={index * 0.05} key={item.title}>
                <article
                  className={`group/card relative h-full overflow-hidden rounded-[34px] border ${toneClasses[index]}`}
                >
                  <div className="grid h-full gap-0 lg:grid-cols-[1.08fr_0.92fr]">
                    <div className="relative overflow-hidden">
                      <img
                        alt={item.title}
                        className="h-full min-h-[320px] w-full object-cover transition duration-700 group-hover/card:scale-105"
                        src={item.image}
                      />
                      <div
                        className={`absolute inset-0 ${isDark ? 'bg-[linear-gradient(180deg,rgba(8,8,8,0.08)_20%,rgba(8,8,8,0.7)_100%)]' : 'bg-[linear-gradient(180deg,rgba(8,8,8,0.02)_10%,rgba(8,8,8,0.2)_100%)]'}`}
                      />
                    </div>

                    <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
                      <div>
                        <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.3em] text-intik-orange">
                          {item.eyebrow}
                        </p>
                        <h3
                          className={`mt-4 font-display text-4xl leading-none sm:text-5xl ${isDark ? 'text-white' : 'text-intik-black'}`}
                        >
                          {item.title}
                        </h3>
                      </div>

                      <div className="grid gap-4">
                        <p className={`text-sm leading-7 sm:text-base ${isDark ? 'text-white/68' : 'text-black/62'}`}>
                          {item.description}
                        </p>
                        <span className={`text-[0.66rem] font-extrabold uppercase tracking-[0.28em] ${isDark ? 'text-white/42' : 'text-black/40'}`}>
                          Visual angle 0{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
