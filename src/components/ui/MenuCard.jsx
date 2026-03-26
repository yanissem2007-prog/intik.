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
    <article
      className={[
        'group/card glass-panel relative flex h-full flex-col overflow-hidden transition duration-500 hover:-translate-y-2',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,125,26,0.12),transparent_52%)] opacity-0 transition duration-500 group-hover/card:opacity-100"
      />
      {image ? (
        <div className="relative aspect-[4/4.4] overflow-hidden">
          <img
            alt={title}
            className="h-full w-full object-cover transition duration-700 group-hover/card:scale-[1.08]"
            src={image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-intik-black/82 via-intik-black/16 to-transparent" />
          {badge ? (
            <div className="absolute left-5 top-5">
              <Badge tone="dark">{badge}</Badge>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="relative z-10 flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            {!image && badge ? <Badge>{badge}</Badge> : null}
            <h3 className="font-display text-3xl leading-none text-intik-black sm:text-4xl">{title}</h3>
          </div>
          <span className="shrink-0 rounded-full border border-black/8 bg-intik-black px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.22em] text-white">
            {price}
          </span>
        </div>

        <p className="text-sm leading-7 text-black/65 sm:text-[0.98rem]">{description}</p>
      </div>
    </article>
  )
}
