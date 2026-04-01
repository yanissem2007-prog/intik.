import AboutPreview from '../components/home/AboutPreview'
import BestSellers from '../components/home/BestSellers'
import ExperienceSection from '../components/home/ExperienceSection'
import GallerySection from '../components/home/GallerySection'
import HeroSection from '../components/home/HeroSection'
import MenuPreviewSection from '../components/home/MenuPreviewSection'
import PracticalInfoSection from '../components/home/PracticalInfoSection'
import SocialSection from '../components/home/SocialSection'
import TrustSection from '../components/home/TrustSection'
import VideoSection from '../components/home/VideoSection'

export default function Home({ introComplete = true }) {
  return (
    <>
      <HeroSection introComplete={introComplete} />
      <BestSellers />
      <MenuPreviewSection />
      <AboutPreview />
      <ExperienceSection />
      <GallerySection />
      <TrustSection />
      <VideoSection />
      <PracticalInfoSection />
      <SocialSection />
    </>
  )
}
