import { useLayoutEffect, useRef } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { setupGsap } from '../../lib/animations/gsap'
import { siteMeta } from '../../data/siteData'

const sloganWords = ['Alger', 'Premium burger house', 'Delivery / Dine-in / Takeaway']

export default function IntroScreen({ onComplete }) {
  const rootRef = useRef(null)
  const logoRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const sweepRef = useRef(null)
  const glowRef = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (!rootRef.current) {
      return undefined
    }

    const { gsap } = setupGsap()

    if (prefersReducedMotion) {
      const timer = window.setTimeout(onComplete, 180)

      return () => window.clearTimeout(timer)
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        onComplete,
      })

      tl.set(rootRef.current, { autoAlpha: 1 })
        .fromTo(
          glowRef.current,
          { autoAlpha: 0, scale: 0.92 },
          { autoAlpha: 1, scale: 1, duration: 0.58, ease: 'sine.out' },
        )
        .fromTo(
          [logoRef.current, titleRef.current],
          { autoAlpha: 0, y: 16, scale: 0.985 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.48,
            stagger: 0.06,
          },
          0.08,
        )
        .fromTo(
          subtitleRef.current,
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.32 },
          0.28,
        )
        .fromTo(
          sweepRef.current,
          { xPercent: -120, autoAlpha: 0 },
          { xPercent: 135, autoAlpha: 0.72, duration: 0.45, ease: 'power1.inOut' },
          0.32,
        )
        .to(
          rootRef.current,
          {
            autoAlpha: 0,
            y: -10,
            scale: 1.01,
            duration: 0.38,
            ease: 'sine.inOut',
          },
          0.82,
        )
    }, rootRef)

    return () => ctx.revert()
  }, [onComplete, prefersReducedMotion])

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden bg-intik-black text-white" ref={rootRef}>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,#0d0b0a_100%)]" />
      <div
        className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-intik-orange/16 blur-[120px]"
        ref={glowRef}
      />
      <div className="relative flex h-full items-center justify-center px-6">
        <div className="relative flex max-w-3xl flex-col items-center text-center">
          <img
            alt="Logo INTIK"
            className="h-auto w-[94px] rounded-[22px] bg-white/96 p-2.5 shadow-[0_18px_45px_rgba(255,255,255,0.08)]"
            ref={logoRef}
            src={siteMeta.logo}
          />

          <div className="relative mt-5 overflow-hidden">
            <h1
              className="font-display text-[4.6rem] leading-none text-white sm:text-[6rem] lg:text-[7.2rem]"
              ref={titleRef}
            >
              {siteMeta.name}
            </h1>
            <span
              className="pointer-events-none absolute inset-y-0 left-[-20%] w-[24%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/60 to-transparent blur-xl"
              ref={sweepRef}
            />
          </div>

          <div
            className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.68rem] font-extrabold uppercase tracking-[0.3em] text-white/58 sm:text-[0.72rem]"
            ref={subtitleRef}
          >
            {sloganWords.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
