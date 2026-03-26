const tones = {
  accent: 'bg-intik-orange/12 text-intik-orange',
  dark: 'bg-intik-black text-white',
  light: 'bg-white text-intik-black border border-black/8',
}

export default function Badge({ children, tone = 'accent', className = '' }) {
  return (
    <span
      className={[
        'inline-flex w-fit items-center rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.24em]',
        tones[tone],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}
