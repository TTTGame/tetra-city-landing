import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/80 backdrop-blur-xl border-b border-dark-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <CityLogo />
            <span className="text-dark-border mx-1">&times;</span>
            <TetraLogo />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#stats" className="hover:text-white transition-colors">Stats</a>
        </nav>

        <a
          href="https://t.me/CITY_Holder"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full bg-gradient-to-r from-city-orange to-tetra-blue text-white text-sm font-semibold hover:shadow-lg hover:shadow-city-orange/20 transition-all duration-300 hover:scale-105"
        >
          Play Now
        </a>
      </div>
    </motion.header>
  )
}

function CityLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-city-orange to-city-amber flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="10" width="5" height="12" rx="1" fill="white"/>
          <rect x="10" y="4" width="5" height="18" rx="1" fill="white"/>
          <rect x="17" y="7" width="5" height="15" rx="1" fill="white"/>
        </svg>
      </div>
      <span className="font-bold text-white text-sm">CITY Holder</span>
    </div>
  )
}

function TetraLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-tetra-blue to-tetra-cyan flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 22h20L12 2z" fill="white" opacity="0.9"/>
          <path d="M12 8L7 18h10L12 8z" fill="#0098ea"/>
        </svg>
      </div>
      <span className="font-bold text-white text-sm">TetraChain</span>
    </div>
  )
}
