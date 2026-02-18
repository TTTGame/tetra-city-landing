import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
      {/* Radial gradients background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-city-orange/5 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-tetra-blue/5 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark-border bg-dark-card/50 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-400">Integration Live</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6"
        >
          <span className="gradient-text-city">CITY Holder</span>
          <br />
          <span className="text-white">&times;&nbsp;</span>
          <span className="gradient-text-tetra">TetraChain</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Mint NFT buildings, customize your city, powered by Layer 2.
          <br className="hidden md:block" />
          Faster transactions, seamless gameplay for{' '}
          <span className="text-white font-semibold">15M+ players</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://t.me/CityHolder"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-city-orange to-city-amber text-white font-bold text-lg hover:shadow-xl hover:shadow-city-orange/25 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <TelegramIcon />
              Open in Telegram
            </span>
          </a>

          <a
            href="#features"
            className="px-8 py-4 rounded-2xl border border-dark-border bg-dark-card/50 text-white font-semibold text-lg hover:border-tetra-blue/50 hover:bg-dark-surface transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>

        {/* Visual centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mx-auto max-w-2xl"
        >
          <div className="animated-border">
            <div className="relative bg-dark-card rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-center gap-6 md:gap-12">
                {/* City icon */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-city-orange/20 to-city-amber/10 border border-city-orange/20 flex items-center justify-center glow-orange">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="md:w-16 md:h-16">
                      <rect x="6" y="20" width="10" height="24" rx="2" fill="#ffac3e"/>
                      <rect x="19" y="8" width="10" height="36" rx="2" fill="#ff8c00"/>
                      <rect x="32" y="14" width="10" height="30" rx="2" fill="#ffac3e"/>
                      <circle cx="11" cy="26" r="1.5" fill="#0a0a0f"/>
                      <circle cx="24" cy="16" r="1.5" fill="#0a0a0f"/>
                      <circle cx="37" cy="22" r="1.5" fill="#0a0a0f"/>
                      <circle cx="11" cy="32" r="1.5" fill="#0a0a0f"/>
                      <circle cx="24" cy="24" r="1.5" fill="#0a0a0f"/>
                      <circle cx="37" cy="30" r="1.5" fill="#0a0a0f"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-400">CITY Holder</span>
                </motion.div>

                {/* Connection arrows */}
                <div className="flex flex-col items-center gap-2">
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex items-center gap-1"
                  >
                    <div className="w-8 md:w-16 h-0.5 bg-gradient-to-r from-city-orange to-tetra-blue rounded" />
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="#0098ea" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                  <span className="text-xs text-gray-500 font-medium">INTEGRATED</span>
                  <motion.div
                    animate={{ x: [0, -8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.75 }}
                    className="flex items-center gap-1"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 6H2M5 3L2 6l3 3" stroke="#ffac3e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="w-8 md:w-16 h-0.5 bg-gradient-to-r from-tetra-blue to-city-orange rounded" />
                  </motion.div>
                </div>

                {/* Tetra icon */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-tetra-blue/20 to-tetra-cyan/10 border border-tetra-blue/20 flex items-center justify-center glow-blue">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="md:w-16 md:h-16">
                      <path d="M24 4L4 44h40L24 4z" fill="#0098ea" opacity="0.3"/>
                      <path d="M24 14L12 38h24L24 14z" fill="#0098ea" opacity="0.6"/>
                      <path d="M24 22L18 34h12L24 22z" fill="#00d4ff"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-400">TetraChain</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-dark-border flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )
}
