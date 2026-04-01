import Reveal from '../shared/Reveal'
import SectionTitle from '../ui/SectionTitle'

const trustSignals = [
  {
    title: 'House personality',
    description: "Une signature qui melange gourmandise directe, image nette et vraie memorabilite.",
  },
  {
    title: 'Fast without feeling cheap',
    description: "Une execution rapide, mais avec plus de tenue qu'un fast-food generique.",
  },
  {
    title: 'Built for repeat orders',
    description: 'Le genre de carte et de marque qui donne envie de revenir, poster et recommander.',
  },
]

const qualityFacts = [
  'Premium street-food',
  'Alger centre',
  'Open late',
  'Delivery / Dine-in / Takeaway',
]

export default function TrustSection() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[0.68fr_1.32fr] xl:items-start">
          <Reveal>
            <SectionTitle
              description="Un bloc plus conversion-oriented pour dire clairement pourquoi INTIK merite l'attention et la commande."
              eyebrow="Brand trust"
              title="Pas juste appetissant. Credible aussi."
              titleClassName="max-w-[10ch]"
            />

            <div className="mt-8 flex flex-wrap gap-2">
              {qualityFacts.map((fact) => (
                <span
                  className="rounded-full border border-black/8 bg-white/78 px-4 py-2 text-[0.66rem] font-extrabold uppercase tracking-[0.26em] text-black/60"
                  key={fact}
                >
                  {fact}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {trustSignals.map((signal, index) => (
              <Reveal delay={index * 0.05} key={signal.title}>
                <article className="glass-panel h-full p-6">
                  <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.28em] text-intik-orange">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 font-display text-4xl leading-none text-intik-black">{signal.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-black/62">{signal.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
