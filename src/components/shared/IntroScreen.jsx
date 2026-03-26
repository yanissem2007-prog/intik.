import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { siteMeta } from '../../data/siteData'

const sloganWords = siteMeta.slogan.split(' ')

export default function IntroScreen({ onComplete }) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 3200)

    return () => window.clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] overflow-hidden bg-intik-black"
      exit={{ opacity: 0, scale: 1.03, filter: 'blur(8px)' }}
      initial={{ opacity: 0 }}
    >
      <motion.div
        animate={{ scale: 1.08, opacity: 1 }}
        className="absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#0a0a0a_30%,#121212_65%,#050505_100%)]"
        initial={{ scale: 1.03, opacity: 0.85 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        animate={{ scale: [0.92, 1.08, 1.02], x: ['-8%', '3%', '0%'], y: ['-5%', '4%', '0%'] }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,0,0.24),transparent_34%)]"
        transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        animate={{ opacity: [0.12, 0.28, 0.14], scale: [0.9, 1.18, 1.04] }}
        className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-intik-orange blur-3xl"
        initial={{ opacity: 0, scale: 0.7 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        animate={{ y: ['-110%', '110%'] }}
        className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-intik-orange/80 to-transparent opacity-70 blur-[1px]"
        initial={{ y: '-110%' }}
        transition={{ duration: 1.2, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        animate={{ x: '-100%' }}
        className="absolute inset-y-0 left-0 w-1/2 bg-intik-black"
        initial={{ x: 0 }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        animate={{ x: '100%' }}
        className="absolute inset-y-0 right-0 w-1/2 bg-intik-black"
        initial={{ x: 0 }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
      />

      <div className="relative flex h-full items-center justify-center px-6">
        <div className="flex max-w-2xl flex-col items-center text-center">
          <motion.span
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow mb-6 border-white/10 text-white/60"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.55, delay: 0.45 }}
          >
            brand reveal
          </motion.span>

          <motion.div
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0, filter: 'blur(0px)' }}
            className="relative overflow-hidden rounded-[34px] border border-white/8 bg-white/5 p-6 backdrop-blur-xl orange-glow"
            initial={{ opacity: 0, scale: 0.88, rotateX: 18, y: 20, filter: 'blur(18px)' }}
            transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformPerspective: 1400 }}
          >
            <motion.div
              animate={{ x: ['-130%', '140%'] }}
              className="absolute inset-y-0 left-0 w-1/3 skew-x-[-24deg] bg-gradient-to-r from-transparent via-white/35 to-transparent blur-xl"
              initial={{ x: '-150%' }}
              transition={{ duration: 1.15, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.img
              alt="Logo INTIK"
              animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
              className="h-auto w-[260px] sm:w-[360px]"
              initial={{ opacity: 0, scale: 0.94 }}
              src={siteMeta.logo}
              transition={{
                duration: 1.1,
                delay: 0.78,
                ease: [0.16, 1, 0.3, 1],
                y: {
                  delay: 1.5,
                  duration: 1.1,
                  repeat: 1,
                  ease: 'easeInOut',
                },
              }}
            />
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {sloganWords.map((word, index) => (
              <motion.span
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                className="text-sm font-extrabold uppercase tracking-[0.32em] text-white/68 sm:text-base"
                initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
                key={word}
                transition={{ duration: 0.55, delay: 1.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.div
            animate={{ scaleX: 1, opacity: 1 }}
            className="mt-8 h-px w-28 origin-center rounded-full bg-gradient-to-r from-transparent via-intik-orange to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.7, delay: 1.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      <motion.div
        animate={{ scaleX: [0, 1, 1], opacity: [0.4, 1, 0.85] }}
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-intik-orange"
        initial={{ scaleX: 0, opacity: 0 }}
        transition={{ duration: 2.7, delay: 0.35, ease: 'linear' }}
      />
    </motion.div>
  )
}
