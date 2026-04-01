import { ArrowRight } from 'lucide-react'
import { useLayoutEffect, useRef } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { setupGsap } from '../../lib/animations/gsap'
import { heroData } from '../../data/siteData'
import Button from '../ui/Button'

export default function HeroSection({ introComplete = true }) {
  const sectionRef = useRef(null)
  const backdropRef = useRef(null)
  const stageRef = useRef(null)
  const mediaFrameRef = useRef(null)
  const productRef = useRef(null)
  const overlineRef = useRef(null)
  const taglineRef = useRef(null)
  const descriptionRef = useRef(null)
  const ctaRef = useRef(null)
  const railRef = useRef(null)
  const glowRef = useRef(null)
  const chipRefs = useRef([])
  const headingRefs = useRef([])
  const prefersReducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (!sectionRef.current || !introComplete) {
      return undefined
    }

    const { gsap } = setupGsap()

    if (prefersReducedMotion) {
      gsap.set(
        [
          overlineRef.current,
          ...headingRefs.current,
          taglineRef.current,
          descriptionRef.current,
          ctaRef.current,
          mediaFrameRef.current,
          ...chipRefs.current,
        ],
        {
          clearProps: 'all',
          autoAlpha: 1,
          x: 0,
          y: 0,
          filter: 'blur(0px)',
        },
      )

      return undefined
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: 'power2.out' },
        delay: 0.18,
      })

      timeline
        .fromTo(
          glowRef.current,
          { autoAlpha: 0, scale: 0.9 },
          { autoAlpha: 1, scale: 1, duration: 1.75, ease: 'sine.out' },
        )
        .fromTo(
          overlineRef.current,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.72 },
          0.22,
        )
        .fromTo(
          headingRefs.current,
          { autoAlpha: 0, yPercent: 84, filter: 'blur(10px)' },
          {
            autoAlpha: 1,
            yPercent: 0,
            filter: 'blur(0px)',
            duration: 1.15,
            stagger: 0.1,
          },
          0.28,
        )
        .fromTo(
          taglineRef.current,
          { autoAlpha: 0, y: 14, letterSpacing: '0.36em' },
          { autoAlpha: 1, y: 0, letterSpacing: '0.32em', duration: 0.8 },
          0.52,
        )
        .fromTo(
          descriptionRef.current,
          { autoAlpha: 0, y: 18, filter: 'blur(8px)' },
          { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.82 },
          0.62,
        )
        .fromTo(
          ctaRef.current,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          0.74,
        )
        .fromTo(
          mediaFrameRef.current,
          { autoAlpha: 0, y: 54, scale: 0.96, rotateX: 8, filter: 'blur(14px)' },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: 'blur(0px)',
            duration: 1.25,
            ease: 'expo.out',
          },
          0.34,
        )
        .fromTo(
          chipRefs.current,
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.56, stagger: 0.05 },
          1.08,
        )

      gsap.to(backdropRef.current, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.1,
        },
      })

      gsap.to(stageRef.current, {
        yPercent: -4,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.25,
        },
      })

      gsap.to(productRef.current, {
        yPercent: 6,
        scale: 1.05,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.4,
        },
      })

      gsap.to(railRef.current, {
        xPercent: -4,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.3,
        },
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [introComplete, prefersReducedMotion])

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 text-white" ref={sectionRef}>
      <div className="absolute inset-0" ref={backdropRef}>
        <video
          autoPlay
          className="h-full w-full scale-[1.08] object-cover"
          loop
          muted
          playsInline
          src={heroData.video}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.24)_0%,rgba(8,8,8,0.56)_42%,rgba(8,8,8,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,125,26,0.26),transparent_28%),radial-gradient(circle_at_90%_14%,rgba(255,255,255,0.08),transparent_18%)]" />
      </div>

      <div
        className="absolute left-1/2 top-[8%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-intik-orange/24 blur-[150px]"
        ref={glowRef}
      />
      <div className="pointer-events-none absolute inset-x-[8%] top-28 hidden h-px bg-gradient-to-r from-transparent via-white/22 to-transparent lg:block" />
      <div className="pointer-events-none absolute bottom-16 left-0 hidden font-display text-[13rem] leading-none tracking-[0.08em] text-white/[0.04] xl:block">
        INTIK
      </div>

      <div className="page-shell relative flex min-h-screen items-end pb-10 pt-10 sm:pb-16">
        <div className="grid w-full gap-12 xl:grid-cols-[1.02fr_0.98fr] xl:items-end">
          <div className="relative max-w-4xl">
            <span className="eyebrow border-white/10 bg-white/8 text-white/72" ref={overlineRef}>
              Alger / premium burger house
            </span>

            <div className="mt-7 space-y-2">
              <div className="overflow-hidden">
                <span
                  className="block font-display text-[5.75rem] leading-[0.84] text-white sm:text-[7.5rem] lg:text-[9rem] xl:text-[11rem]"
                  ref={(node) => {
                    headingRefs.current[0] = node
                  }}
                >
                  INTIK
                </span>
              </div>
              <div className="overflow-hidden">
                <span
                  className="block max-w-[12ch] text-[1.15rem] font-medium uppercase tracking-[0.24em] text-white/74 sm:text-[1.4rem] lg:text-[1.75rem]"
                  ref={(node) => {
                    headingRefs.current[1] = node
                  }}
                >
                  Burgers that hit different.
                </span>
              </div>
            </div>

            <p
              className="mt-6 text-sm font-extrabold uppercase tracking-[0.32em] text-intik-orange sm:text-base"
              ref={taglineRef}
            >
              Hungry? We Got You.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg" ref={descriptionRef}>
              INTIK blends late-night hunger, premium product styling, and a tighter editorial rhythm
              into a burger experience built to feel fast, sharp, and unforgettable.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row" ref={ctaRef}>
              <Button size="lg" to="/nos-menus">
                Voir le menu
                <ArrowRight size={16} />
              </Button>
              <Button
                className="border-white/12 bg-white/8 text-white hover:border-white/18 hover:bg-white/12"
                size="lg"
                to="/contact"
                variant="outline"
              >
                Nous contacter
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {heroData.highlights.map((item, index) => (
                <span
                  className="rounded-full border border-white/10 bg-intik-black/28 px-4 py-2 text-sm text-white/72 backdrop-blur-xl"
                  key={item}
                  ref={(node) => {
                    chipRefs.current[index] = node
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative xl:justify-self-end" ref={stageRef}>
            <div
              className="glass-panel orange-glow relative max-w-[36rem] overflow-hidden rounded-[38px] border border-white/14 bg-white/8 p-3"
              ref={mediaFrameRef}
              style={{ transformPerspective: 1600 }}
            >
              <div className="relative overflow-hidden rounded-[30px] border border-white/10">
                <img
                  alt="Burger Intik signature"
                  className="aspect-[4/5.1] w-full scale-[1.02] object-cover"
                  decoding="async"
                  fetchPriority="high"
                  ref={productRef}
                  src={heroData.image}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.02)_8%,rgba(8,8,8,0.18)_36%,rgba(8,8,8,0.84)_100%)]" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-4 p-5">
                  <span className="eyebrow border-white/10 bg-black/26 text-white/70">signature frame</span>
                  <span className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.3em] text-white/72">
                    {heroData.badges[0]}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/58">Editorial burger stage</p>
                  <p className="mt-3 font-display text-4xl leading-none sm:text-5xl lg:text-6xl">
                    Fast food, but make it iconic.
                  </p>
                  <p className="mt-4 max-w-md text-sm leading-7 text-white/70 sm:text-base">
                    Cleaner product framing, layered depth, and stronger promotional presence right from
                    the first screen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 hidden border-t border-white/10 bg-black/24 backdrop-blur-xl md:block">
          <div
            className="marquee-track flex items-center gap-8 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.32em] text-white/62"
            ref={railRef}
          >
            {[...heroData.highlights, ...heroData.highlights].map((item, index) => (
              <span className="inline-flex items-center gap-3" key={`${item}-${index}`}>
                <span className="h-2 w-2 rounded-full bg-intik-orange/70" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
