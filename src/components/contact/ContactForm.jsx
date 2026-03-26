import { useState } from 'react'
import Button from '../ui/Button'

const initialState = {
  name: '',
  phone: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialState)
  }

  return (
    <div className="glass-panel p-6 sm:p-8">
      <div className="mb-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.26em] text-intik-orange">Formulaire</p>
        <h2 className="mt-4 font-display text-5xl leading-none text-intik-black">On te repond vite.</h2>
        <p className="mt-4 text-sm leading-7 text-black/64">
          Laisse ton nom, ton numero et ton message. Pour commander rapidement, le plus direct reste
          toujours l’appel.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-black/60">Nom</span>
          <input
            className="input-field"
            name="name"
            onChange={handleChange}
            placeholder="Ton nom"
            required
            type="text"
            value={form.name}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-black/60">Telephone</span>
          <input
            className="input-field"
            name="phone"
            onChange={handleChange}
            placeholder="0793331700"
            required
            type="tel"
            value={form.phone}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-black/60">Message</span>
          <textarea
            className="input-field min-h-[160px] resize-y"
            name="message"
            onChange={handleChange}
            placeholder="Dis-nous ce qu’il te faut."
            required
            value={form.message}
          />
        </label>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button size="lg" type="submit">
            Envoyer
          </Button>
          <Button href="tel:0793331700" size="lg" variant="outline">
            Commander maintenant
          </Button>
        </div>

        {submitted ? (
          <p className="rounded-2xl bg-intik-orange/12 px-4 py-3 text-sm text-intik-black">
            Message pret. Pour une commande immediate, appelle directement INTIK au 0793331700.
          </p>
        ) : null}
      </form>
    </div>
  )
}
