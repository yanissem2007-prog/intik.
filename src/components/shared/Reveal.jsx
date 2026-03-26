import { useLayoutEffect, useRef } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { setupGsap } from '../../lib/animations/gsap'

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
  const elementRef = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const hidden = offsets[from] ?? offsets.up

  useLayoutEffect(() => {
    if (!elementRef.current) {
      return undefined
    }

    const { gsap } = setupGsap()
    const element = elementRef.current

    if (prefersReducedMotion) {
      gsap.set(element, { clearProps: 'all', opacity: 1, x: 0, y: 0, filter: 'blur(0px)' })

      return undefined
    }

    const ctx = gsap.context(() => {
      gsap.set(element, {
        opacity: 0,
        x: hidden.x,
        y: hidden.y,
        filter: 'blur(14px)',
        willChange: 'opacity, transform, filter',
      })

      gsap.to(element, {
        opacity: 1,
        x: 0,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.9,
        delay,
        ease: 'power3.out',
        clearProps: 'willChange',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=14%',
          once,
          toggleActions: once ? 'play none none none' : 'play none none reverse',
        },
      })
    }, element)

    return () => ctx.revert()
  }, [delay, hidden.x, hidden.y, once, prefersReducedMotion])

  return (
    <div className={className} ref={elementRef}>
      {children}
    </div>
  )
}
