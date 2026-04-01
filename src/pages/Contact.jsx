import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import Reveal from '../components/shared/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import { siteMeta } from '../data/siteData'

const contactSignals = ['Commande rapide', 'Adresse claire', 'Reponse directe']

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

            <div className="mt-8 flex flex-wrap gap-2">
              {contactSignals.map((signal) => (
                <span
                  className="rounded-full border border-black/8 bg-white/82 px-4 py-2 text-[0.66rem] font-extrabold uppercase tracking-[0.26em] text-black/58"
                  key={signal}
                >
                  {signal}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <div className="grid gap-8 xl:grid-cols-[0.78fr_1.22fr]">
            <ContactInfo />
            <ContactForm />
          </div>

          <Reveal>
            <div className="ink-panel mt-10 grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-intik-orange">
                  Localisation
                </p>
                <p className="mt-4 max-w-2xl text-3xl font-bold text-white sm:text-4xl">{siteMeta.address}</p>
                <p className="mt-4 max-w-xl text-base leading-8 text-white/66">
                  Passe au spot, commande a emporter, ou appelle directement si tu veux aller vite.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button href={siteMeta.mapsUrl} size="lg" variant="light">
                  Ouvrir la map
                </Button>
                <Button
                  className="border-white/10 bg-white/8 text-white hover:border-white/16 hover:bg-white/12"
                  href={siteMeta.phoneHref}
                  size="lg"
                  variant="outline"
                >
                  Appeler maintenant
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
