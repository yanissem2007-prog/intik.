export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}) {
  const isCenter = align === 'center'

  return (
    <div
      className={[
        'flex max-w-3xl flex-col gap-5',
        isCenter ? 'mx-auto items-center text-center' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {eyebrow ? (
        <span className={`eyebrow ${light ? 'border-white/10 bg-white/6 text-white/72' : 'text-black/52'}`}>
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={[
          'balance font-display text-[3.6rem] leading-[0.9] sm:text-[4.6rem] lg:text-[5.8rem]',
          light ? 'text-white' : 'text-intik-black',
          titleClassName,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={[
            'max-w-2xl text-base leading-7 sm:text-lg sm:leading-8',
            light ? 'text-white/68' : 'text-black/62',
            descriptionClassName,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {description}
        </p>
      ) : null}
      <span
        className={`h-px w-20 rounded-full bg-gradient-to-r ${light ? 'from-intik-orange via-white/40 to-transparent' : 'from-intik-orange via-black/20 to-transparent'}`}
      />
    </div>
  )
}
