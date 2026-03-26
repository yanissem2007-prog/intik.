import { motion } from 'framer-motion'

const offsets = {
  up: { y: 42, x: 0 },
  down: { y: -42, x: 0 },
  left: { x: 42, y: 0 },
  right: { x: -42, y: 0 },
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  from = 'up',
  once = true,
}) {
  const hidden = offsets[from] ?? offsets.up

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...hidden, filter: 'blur(8px)' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once, amount: 0.2 }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
    >
      {children}
    </motion.div>
  )
}
