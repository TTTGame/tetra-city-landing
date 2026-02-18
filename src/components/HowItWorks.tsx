import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Open CITY Holder',
    description: 'Launch the game via Telegram Mini App. Same experience, now powered by TetraChain infrastructure.',
    gradient: 'from-city-orange to-city-amber',
  },
  {
    number: '02',
    title: 'Build Your City',
    description: 'Construct buildings, attract residents, and climb the leaderboard. The same gameplay you love, now with TetraChain-powered NFT features.',
    gradient: 'from-city-amber to-tetra-blue',
  },
  {
    number: '03',
    title: 'Mint NFT Buildings',
    description: 'Mint exclusive NFTs on TetraChain to unlock custom buildings. Unique designs that make your city stand out from the crowd.',
    gradient: 'from-tetra-blue to-tetra-cyan',
  },
  {
    number: '04',
    title: 'Bridge & Trade',
    description: 'Use the trustless bridge between TON Mainnet and TetraChain. Move your assets freely with cryptographic Merkle proofs.',
    gradient: 'from-tetra-cyan to-city-orange',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-dark-card/20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Seamless integration that enhances gameplay without changing the experience you love.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-city-orange via-tetra-blue to-tetra-cyan opacity-30" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start gap-6 md:gap-12 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Number circle */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20'}`}>
                <div className="p-6 rounded-2xl border border-dark-border bg-dark-card/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
