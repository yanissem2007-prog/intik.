import { useLayoutEffect, useRef } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { setupGsap } from '../../lib/animations/gsap'
import { siteMeta } from '../../data/siteData'

const sloganWords = ['Alger', 'Late-night', 'Brand experience']
const brandLetters = siteMeta.name.split('')

export default function IntroScreen({ onComplete }) {
  const rootRef = useRef(null)
  const panelRef = useRef(null)
  const glowRef = useRef(null)
  const eyebrowRef = useRef(null)
  const logoRef = useRef(null)
  const meterRef = useRef(null)
  const brandRefs = useRef([])
  const sloganRefs = useRef([])
  const prefersReducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (!rootRef.current) {
      return undefined
    }

    const { gsap } = setupGsap()

    if (prefersReducedMotion) {
      const timer = window.setTimeout(onComplete, 500)

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
          { autoAlpha: 0, scale: 0.9 },
          { autoAlpha: 1, scale: 1.02, duration: 1.6, ease: 'sine.out' },
        )
        .fromTo(
          panelRef.current,
          { autoAlpha: 0, y: 28, scale: 0.965, rotateX: 12, filter: 'blur(12px)' },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: 'blur(0px)',
            duration: 1.3,
            ease: 'expo.out',
          },
          0.08,
        )
        .fromTo(
          eyebrowRef.current,
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          0.3,
        )
        .fromTo(
          brandRefs.current,
          { autoAlpha: 0, yPercent: 88, rotateX: -50, filter: 'blur(14px)' },
          {
            autoAlpha: 1,
            yPercent: 0,
            rotateX: 0,
            filter: 'blur(0px)',
            duration: 1,
            stagger: 0.06,
          },
          0.38,
        )
        .fromTo(
          logoRef.current,
          { autoAlpha: 0, scale: 0.92, y: 16, rotate: -4 },
          { autoAlpha: 1, scale: 1, y: 0, rotate: 0, duration: 1 },
          0.58,
        )
        .fromTo(
          sloganRefs.current,
          { autoAlpha: 0, y: 12, filter: 'blur(8px)' },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.72,
            stagger: 0.06,
          },
          0.82,
        )
        .fromTo(
          meterRef.current,
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 2.55, ease: 'none' },
          0.16,
        )
        .to(
          panelRef.current,
          {
            y: -4,
            scale: 1.008,
            duration: 1.15,
            ease: 'sine.inOut',
          },
          1.65,
        )
        .to(
          rootRef.current,
          {
            autoAlpha: 0,
            scale: 1.015,
            filter: 'blur(6px)',
            duration: 0.9,
            ease: 'sine.inOut',
          },
          2.48,
        )
    }, rootRef)

    return () => ctx.revert()
  }, [onComplete, prefersReducedMotion])

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden bg-intik-black text-white" ref={rootRef}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#030303_0%,#0b0b0c_36%,#151211_100%)]" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,125,26,0.2),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)]"
        ref={glowRef}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)] opacity-60" />
      <div className="relative flex h-full items-center justify-center px-6">
        <div
          className="orange-glow w-full max-w-4xl rounded-[38px] border border-white/10 bg-white/6 p-6 text-center backdrop-blur-[28px] sm:p-10 lg:p-12"
          ref={panelRef}
          style={{ transformPerspective: 1600 }}
        >
          <span className="eyebrow border-white/10 bg-white/8 text-white/68" ref={eyebrowRef}>
            brand reveal
          </span>

          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="overflow-hidden text-left">
              <div className="flex flex-wrap justify-center gap-2 text-[4.25rem] leading-[0.84] sm:text-[6rem] lg:justify-start lg:text-[8rem] xl:text-[9.25rem]">
                {brandLetters.map((letter, index) => (
                  <span
                    className="font-display text-white"
                    key={`${letter}-${index}`}
                    ref={(node) => {
                      brandRefs.current[index] = node
                    }}
                    style={{ transformOrigin: '50% 100%' }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-3 text-[0.72rem] font-extrabold uppercase tracking-[0.34em] text-white/62 lg:justify-start">
                {sloganWords.map((word, index) => (
                  <span
                    key={word}
                    ref={(node) => {
                      sloganRefs.current[index] = node
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>

            <img
              alt="Logo INTIK"
              className="mx-auto h-auto w-[170px] rounded-[28px] bg-white/96 p-3 sm:w-[220px] lg:mx-0"
              ref={logoRef}
              src={siteMeta.logo}
            />
          </div>

          <div className="mt-8 grid gap-4 text-left text-sm leading-7 text-white/66 sm:grid-cols-2 lg:text-base">
            <p>
              A more cinematic first impression for a burger brand that wants to feel sharp, fast, and
              remembered.
            </p>
            <p>
              Premium motion, clean hierarchy, and a richer brand reveal before the site opens into the
              main story.
            </p>
          </div>

          <div
            className="mt-8 h-px w-full origin-left rounded-full bg-gradient-to-r from-intik-orange via-white/45 to-transparent"
            ref={meterRef}
          />
        </div>
      </div>
    </div>
  )
}
