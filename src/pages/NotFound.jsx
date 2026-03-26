import { ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center bg-intik-black px-4 pb-20 pt-32 text-white">
      <div className="page-shell">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.36em] text-intik-orange">Erreur 404</p>
          <h1 className="mt-6 font-display text-7xl leading-none sm:text-8xl lg:text-[10rem]">Wrong turn.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            La page que tu cherches n’est pas la. Reviens sur l’accueil, check le menu, puis repars sur
            quelque chose de plus charge.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" to="/">
              Retour a l’accueil
              <ArrowRight size={16} />
            </Button>
            <Button
              className="border-white/10 bg-white/8 text-white hover:bg-white/12"
              size="lg"
              to="/nos-menus"
              variant="outline"
            >
              Voir le menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
