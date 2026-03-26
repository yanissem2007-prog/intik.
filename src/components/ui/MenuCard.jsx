import { motion } from 'framer-motion'
import Badge from './Badge'

export default function MenuCard({
  title,
  description,
  price,
  badge,
  image,
  className = '',
}) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className={[
        'group glass-panel flex h-full flex-col overflow-hidden',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {image ? (
        <div className="relative aspect-[4/4.4] overflow-hidden">
          <img
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            src={image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-intik-black/70 via-intik-black/10 to-transparent" />
          {badge ? (
            <div className="absolute left-5 top-5">
              <Badge tone="dark">{badge}</Badge>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            {!image && badge ? <Badge>{badge}</Badge> : null}
            <h3 className="font-display text-3xl leading-none text-intik-black sm:text-4xl">{title}</h3>
          </div>
          <span className="shrink-0 rounded-full bg-intik-black px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.22em] text-white">
            {price}
          </span>
        </div>

        <p className="text-sm leading-7 text-black/65 sm:text-[0.98rem]">{description}</p>
      </div>
    </motion.article>
  )
}
