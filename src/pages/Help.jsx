import FAQSection from '../components/help/FAQSection'
import HelpCards from '../components/help/HelpCards'
import Reveal from '../components/shared/Reveal'
import SectionTitle from '../components/ui/SectionTitle'

export default function Help() {
  return (
    <>
      <section className="bg-intik-paper pb-8 pt-32">
        <div className="page-shell">
          <Reveal>
            <SectionTitle
              description="FAQ, accessibilite, parking, paiements, pets, services et mode de commande. Tout est regroupe ici proprement."
              eyebrow="Besoin d’aide"
              title="Trouver l’info vite, sans friction."
            />
          </Reveal>
        </div>
      </section>
      <HelpCards />
      <FAQSection />
    </>
  )
}
