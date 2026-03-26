export default function InfoCard({ icon: Icon, title, description, dark = false, className = '' }) {
  return (
    <article
      className={[
        'group/card relative overflow-hidden rounded-[30px] border p-6 transition duration-500 hover:-translate-y-2',
        dark
          ? 'border-white/10 bg-white/6 text-white backdrop-blur-xl hover:border-white/16 hover:bg-white/8'
          : 'border-black/8 bg-white/78 text-intik-black shadow-[0_22px_70px_rgba(10,10,10,0.08)] hover:border-black/12 hover:bg-white',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div
        aria-hidden="true"
        className={[
          'pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover/card:opacity-100',
          dark
            ? 'bg-[radial-gradient(circle_at_top,rgba(255,125,26,0.16),transparent_50%)]'
            : 'bg-[radial-gradient(circle_at_top,rgba(255,125,26,0.12),transparent_50%)]',
        ].join(' ')}
      />
      <div
        className={[
          'relative z-10 mb-5 inline-flex rounded-[20px] p-3.5',
          dark ? 'bg-intik-orange text-intik-black' : 'bg-intik-black text-intik-orange',
        ].join(' ')}
      >
        <Icon size={22} strokeWidth={2.2} />
      </div>
      <h3 className="relative z-10 mb-3 text-xl font-extrabold tracking-tight">{title}</h3>
      <p className={dark ? 'relative z-10 text-sm leading-7 text-white/68' : 'relative z-10 text-sm leading-7 text-black/62'}>
        {description}
      </p>
    </article>
  )
}
