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

export default function GallerySection() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <Reveal>
          <SectionTitle
            description="Chaque visuel a son propre role: produit hero, texture, vibe de marque ou signal de gourmandise. Rien n’est la pour meubler."
            eyebrow="Galerie visuelle"
            title="Des images qui racontent vraiment INTIK."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {galleryItems.map((item, index) => (
            <Reveal className={layoutClasses[index]} delay={index * 0.04} key={item.title}>
              <article className="glass-panel h-full overflow-hidden">
                <div className="grid h-full gap-0 md:grid-cols-[1.1fr_0.9fr] lg:grid-cols-1 xl:grid-cols-[1.15fr_0.85fr]">
                  <img alt={item.title} className="h-full min-h-[300px] w-full object-cover" src={item.image} />
                  <div className="flex flex-col justify-between gap-5 p-6 sm:p-7">
                    <div>
                      <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-intik-orange">
                        {item.eyebrow}
                      </p>
                      <h3 className="mt-4 font-display text-4xl leading-none text-intik-black sm:text-5xl">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-7 text-black/65 sm:text-base">{item.description}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
