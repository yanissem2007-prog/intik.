import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import IntroScreen from './components/shared/IntroScreen'
import PageTransition from './components/shared/PageTransition'
import ScrollToTopButton from './components/ui/ScrollToTopButton'
import About from './pages/About'
import Contact from './pages/Contact'
import Help from './pages/Help'
import Home from './pages/Home'
import Menu from './pages/Menu'
import NotFound from './pages/NotFound'
import { siteMeta } from './data/siteData'

const routeTitles = {
  '/': 'INTIK | Hungry? We Got You',
  '/nos-menus': 'Nos Menus | INTIK',
  '/a-propos': 'A propos | INTIK',
  '/besoin-aide': "Besoin d'aide | INTIK",
  '/contact': 'Contact | INTIK',
}

function AppShell() {
  const location = useLocation()
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    document.title = routeTitles[location.pathname] ?? 'INTIK'
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-intik-paper text-intik-black">
      <AnimatePresence>{showIntro ? <IntroScreen onComplete={() => setShowIntro(false)} /> : null}</AnimatePresence>

      <Navbar />

      <main className="overflow-hidden">
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route
              element={
                <PageTransition>
                  <Home introComplete={!showIntro} />
                </PageTransition>
              }
              path="/"
            />
            <Route
              element={
                <PageTransition>
                  <Menu />
                </PageTransition>
              }
              path="/nos-menus"
            />
            <Route
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
              path="/a-propos"
            />
            <Route
              element={
                <PageTransition>
                  <Help />
                </PageTransition>
              }
              path="/besoin-aide"
            />
            <Route
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
              path="/contact"
            />
            <Route
              element={
                <PageTransition>
                  <NotFound />
                </PageTransition>
              }
              path="*"
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-start px-4 sm:px-6"
        initial={{ opacity: 0, y: 24 }}
        transition={{ delay: 2.2, duration: 0.45 }}
      >
        <a
          className="pointer-events-auto inline-flex items-center gap-3 rounded-full bg-intik-black px-5 py-3 text-sm font-extrabold uppercase tracking-[0.24em] text-white shadow-[0_20px_50px_rgba(10,10,10,0.2)] transition-transform duration-300 hover:-translate-y-1 hover:bg-intik-orange hover:text-intik-black"
          href={siteMeta.phoneHref}
        >
          <ShoppingBag size={16} />
          Commander
        </a>
      </motion.div>

      <ScrollToTopButton />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
