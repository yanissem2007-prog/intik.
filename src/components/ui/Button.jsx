import { Link } from 'react-router-dom'

const variants = {
  primary:
    'border-intik-orange/80 bg-intik-orange text-intik-black shadow-[0_24px_65px_rgba(255,125,26,0.3)] hover:border-intik-orange-accent hover:bg-intik-orange-accent',
  outline:
    'border border-black/10 bg-white/55 text-intik-black shadow-[0_16px_45px_rgba(10,10,10,0.06)] hover:border-black/20 hover:bg-white',
  light:
    'border border-white/12 bg-white text-intik-black shadow-[0_20px_50px_rgba(255,255,255,0.16)] hover:border-intik-orange/40 hover:bg-[#fff1df]',
  ghost: 'border border-transparent bg-transparent text-current hover:bg-black/5',
}

const sizes = {
  sm: 'min-h-[2.9rem] px-4 py-2.5 text-[0.68rem] tracking-[0.26em]',
  md: 'min-h-[3.25rem] px-5 py-3 text-[0.72rem] tracking-[0.28em]',
  lg: 'min-h-[3.55rem] px-6 py-3.5 text-[0.74rem] tracking-[0.3em]',
}

function getClasses({ variant, size, fullWidth, className }) {
  return [
    'group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full font-extrabold uppercase transition duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-intik-orange/20',
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
}

function ButtonContent({ children }) {
  return (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.36),transparent_60%)] opacity-60"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[-38%] top-0 h-full w-[42%] -skew-x-12 bg-white/45 opacity-0 blur-xl transition-all duration-700 group-hover/btn:left-[120%] group-hover/btn:opacity-70"
      />
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </>
  )
}

export default function Button({
  children,
  to,
  href,
  external = false,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) {
  const classes = getClasses({ variant, size, fullWidth, className })

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        <ButtonContent>{children}</ButtonContent>
      </Link>
    )
  }

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        rel={external ? 'noreferrer' : undefined}
        target={external ? '_blank' : undefined}
        {...props}
      >
        <ButtonContent>{children}</ButtonContent>
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      <ButtonContent>{children}</ButtonContent>
    </button>
  )
}
