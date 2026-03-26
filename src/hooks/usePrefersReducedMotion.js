import { useEffect, useState } from 'react'

const mediaQuery = '(prefers-reduced-motion: reduce)'

export default function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const media = window.matchMedia(mediaQuery)
    const updatePreference = () => setPrefersReducedMotion(media.matches)

    updatePreference()

    if (media.addEventListener) {
      media.addEventListener('change', updatePreference)

      return () => media.removeEventListener('change', updatePreference)
    }

    media.addListener(updatePreference)

    return () => media.removeListener(updatePreference)
  }, [])

  return prefersReducedMotion
}
