import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-intik-orange text-intik-black shadow-[0_18px_50px_rgba(255,122,0,0.28)] hover:bg-intik-orange-accent',
  outline:
    'border border-black/12 bg-white/45 text-intik-black hover:border-intik-black/20 hover:bg-white',
  light: 'bg-white text-intik-black hover:bg-intik-paper',
  ghost: 'bg-transparent text-current hover:bg-black/5',
}

const sizes = {
  sm: 'px-4 py-2.5 text-[0.72rem] tracking-[0.22em]',
  md: 'px-5 py-3 text-[0.76rem] tracking-[0.24em]',
  lg: 'px-6 py-3.5 text-[0.78rem] tracking-[0.26em]',
}

function getClasses({ variant, size, fullWidth, className }) {
  return [
    'inline-flex items-center justify-center gap-2 rounded-full font-extrabold uppercase transition duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-intik-orange/15',
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
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
        {children}
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
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
