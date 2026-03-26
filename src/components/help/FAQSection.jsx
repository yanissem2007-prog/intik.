import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { faqItems } from '../../data/faqData'
import Reveal from '../shared/Reveal'
import SectionTitle from '../ui/SectionTitle'

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="section-space bg-intik-black text-white">
      <div className="page-shell">
        <Reveal>
          <SectionTitle
            description="Une FAQ claire, sans surcharge, pour repondre vite aux questions les plus frequentes."
            eyebrow="FAQ"
            light
            title="Les reponses utiles, directes."
          />
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index

            return (
              <Reveal delay={index * 0.04} key={item.question}>
                <article className="overflow-hidden rounded-[28px] border border-white/8 bg-white/5">
                  <button
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                    onClick={() => setActiveIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span className="text-lg font-bold text-white">{item.question}</span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                      <ChevronDown className="text-intik-orange" size={20} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        initial={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                      >
                        <div className="border-t border-white/8 px-5 py-5 text-sm leading-8 text-white/70 sm:px-6">
                          {item.answer}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
