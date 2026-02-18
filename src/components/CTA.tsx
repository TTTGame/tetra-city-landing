import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="animated-border">
            <div className="relative bg-dark-card rounded-2xl p-10 md:p-16 text-center overflow-hidden">
              {/* Background glow */}
              <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-city-orange/10 blur-[100px]" />
              <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-tetra-blue/10 blur-[100px]" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
                  Ready to Build?
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                  Join 15 million players building their cities and minting unique NFT buildings on the fastest Layer 2 in the TON ecosystem.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://t.me/CityHolder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-city-orange to-city-amber text-white font-bold text-lg hover:shadow-xl hover:shadow-city-orange/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Play CITY Holder
                  </a>

                  <a
                    href="https://tetrachain.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-2xl border border-tetra-blue/30 bg-tetra-blue/5 text-tetra-blue font-semibold text-lg hover:bg-tetra-blue/10 hover:border-tetra-blue/50 transition-all duration-300 flex items-center gap-2"
                  >
                    Explore TetraChain
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
