import Reveal from '../components/shared/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import FAQSection from '../components/help/FAQSection'
import HelpCards from '../components/help/HelpCards'
import Button from '../components/ui/Button'

const helpQuickLinks = [
  { label: 'Commander', href: 'tel:0793331700' },
  { label: 'Voir le menu', to: '/nos-menus' },
  { label: 'Contact direct', to: '/contact' },
]

export default function Help() {
  return (
    <>
      <section className="bg-intik-paper pb-8 pt-32">
        <div className="page-shell">
          <Reveal>
            <SectionTitle
              description="FAQ, accessibilite, parking, paiements, pets, services et mode de commande. Tout est regroupe ici proprement."
              eyebrow="Besoin d'aide"
              title="Trouver l'info vite, sans friction."
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {helpQuickLinks.map((item) =>
                item.href ? (
                  <Button href={item.href} key={item.label} size="lg">
                    {item.label}
                  </Button>
                ) : (
                  <Button key={item.label} size="lg" to={item.to} variant="outline">
                    {item.label}
                  </Button>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </section>
      <HelpCards />
      <FAQSection />
    </>
  )
}
