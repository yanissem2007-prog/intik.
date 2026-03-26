import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let isRegistered = false

export function setupGsap() {
  if (typeof window !== 'undefined' && !isRegistered) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.config({ nullTargetWarn: false })
    isRegistered = true
  }

  return { gsap, ScrollTrigger }
}

export { gsap, ScrollTrigger }
