export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) {
  const isCenter = align === 'center'

  return (
    <div
      className={[
        'flex max-w-3xl flex-col gap-4',
        isCenter ? 'mx-auto items-center text-center' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {eyebrow ? (
        <span className={`eyebrow ${light ? 'text-white/75' : 'text-black/55'}`}>{eyebrow}</span>
      ) : null}
      <h2
        className={`balance font-display text-5xl leading-none sm:text-6xl lg:text-7xl ${light ? 'text-white' : 'text-intik-black'}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`max-w-2xl text-base leading-7 sm:text-lg ${light ? 'text-white/70' : 'text-black/65'}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
