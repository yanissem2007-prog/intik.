import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import Reveal from '../components/shared/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import { siteMeta } from '../data/siteData'

export default function Contact() {
  return (
    <>
      <section className="bg-intik-paper pb-10 pt-32">
        <div className="page-shell">
          <Reveal>
            <SectionTitle
              description="Telephone cliquable, adresse, map et formulaire simple. Si tu veux commander maintenant, le plus rapide reste l'appel."
              eyebrow="Contact"
              title="Parle-nous, passe nous voir, ou commande direct."
            />
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <ContactInfo />
            <ContactForm />
          </div>

          <div className="mt-10 rounded-[32px] border border-black/8 bg-intik-black p-6 text-white sm:p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.26em] text-intik-orange">Localisation</p>
            <p className="mt-4 text-lg text-white/78">{siteMeta.address}</p>
            <a
              className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-[0.24em] text-intik-black transition hover:bg-intik-orange"
              href={siteMeta.mapsUrl}
              rel="noreferrer"
              target="_blank"
            >
              Ouvrir la map
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
