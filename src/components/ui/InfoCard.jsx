import { motion } from 'framer-motion'

export default function InfoCard({ icon: Icon, title, description, dark = false }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 240, damping: 18 }}
      className={[
        'rounded-[28px] border p-6',
        dark
          ? 'border-white/10 bg-white/5 text-white backdrop-blur-sm'
          : 'border-black/10 bg-white text-intik-black shadow-[0_16px_55px_rgba(10,10,10,0.06)]',
      ].join(' ')}
    >
      <div
        className={[
          'mb-5 inline-flex rounded-2xl p-3',
          dark ? 'bg-intik-orange text-intik-black' : 'bg-intik-black text-intik-orange',
        ].join(' ')}
      >
        <Icon size={22} strokeWidth={2.2} />
      </div>
      <h3 className="mb-3 text-xl font-extrabold tracking-tight">{title}</h3>
      <p className={dark ? 'text-sm leading-7 text-white/68' : 'text-sm leading-7 text-black/62'}>
        {description}
      </p>
    </motion.article>
  )
}
