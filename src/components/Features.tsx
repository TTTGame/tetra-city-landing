import { motion } from 'framer-motion'

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L4 28h24L16 4z" stroke="#0098ea" strokeWidth="2" fill="none"/>
        <path d="M16 12l-6 12h12l-6-12z" fill="#0098ea" opacity="0.3"/>
        <circle cx="16" cy="18" r="2" fill="#00d4ff"/>
      </svg>
    ),
    title: 'TetraChain L2',
    description: 'Built on TVM-based execution layer with DAG mempool for parallel block production. Thousands of TPS with sub-second finality.',
    cardClass: 'hover:border-tetra-blue/30',
    iconBgClass: 'bg-tetra-blue/10',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 12h6v16H6zM13 6h6v22h-6zM20 9h6v19h-6z" fill="#ffac3e" opacity="0.3"/>
        <path d="M6 12h6v16H6zM13 6h6v22h-6zM20 9h6v19h-6z" stroke="#ffac3e" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: 'Build-to-Earn',
    description: 'Construct and upgrade buildings, attract residents, climb global leaderboards. Every action earns $CITY token rewards.',
    cardClass: 'hover:border-city-orange/30',
    iconBgClass: 'bg-city-orange/10',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#00d4ff" strokeWidth="1.5" fill="none"/>
        <path d="M10 16l4 4 8-8" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Zero Gas Fees',
    description: 'Gameplay transactions are gasless for players. TetraChain\'s efficient architecture subsidizes micro-transactions seamlessly.',
    cardClass: 'hover:border-tetra-blue/30',
    iconBgClass: 'bg-tetra-blue/10',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="#ffac3e" strokeWidth="1.5" fill="none"/>
        <path d="M12 12h8v8h-8z" fill="#ffac3e" opacity="0.3"/>
        <path d="M8 8h4v4H8zM20 8h4v4h-4zM8 20h4v4H8zM20 20h4v4h-4z" fill="#ff8c00" opacity="0.5"/>
      </svg>
    ),
    title: 'Cross-Chain Bridge',
    description: 'Trustless decentralized bridge between TON Mainnet and TetraChain. Move assets freely with cryptographic Merkle proofs.',
    cardClass: 'hover:border-city-orange/30',
    iconBgClass: 'bg-city-orange/10',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4v24M4 16h24" stroke="#0098ea" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="4" fill="#0098ea" opacity="0.3"/>
        <circle cx="16" cy="4" r="2" fill="#00d4ff"/>
        <circle cx="16" cy="28" r="2" fill="#00d4ff"/>
        <circle cx="4" cy="16" r="2" fill="#00d4ff"/>
        <circle cx="28" cy="16" r="2" fill="#00d4ff"/>
      </svg>
    ),
    title: 'Mesh Network',
    description: 'TetraChain mesh architecture ensures no single point of failure. Designed for the Telegram AppChain ecosystem at scale.',
    cardClass: 'hover:border-tetra-blue/30',
    iconBgClass: 'bg-tetra-blue/10',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 6l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" stroke="#ffac3e" strokeWidth="1.5" fill="#ffac3e" opacity="0.2"/>
        <circle cx="16" cy="16" r="4" fill="#ff8c00"/>
      </svg>
    ),
    title: '$CITY Rewards',
    description: 'Earn $CITY tokens through gameplay achievements. Token drops, league competitions, and building milestones — all on-chain.',
    cardClass: 'hover:border-city-orange/30',
    iconBgClass: 'bg-city-orange/10',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">Why </span>
            <span className="gradient-text-combined">This Integration</span>
            <span className="text-white"> Matters</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combining the world's largest Build-to-Earn game with cutting-edge L2 technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`group relative p-6 rounded-2xl border border-dark-border bg-dark-card/50 backdrop-blur-sm ${feature.cardClass} transition-all duration-300 hover:bg-dark-surface`}
            >
              <div className={`w-14 h-14 rounded-xl ${feature.iconBgClass} flex items-center justify-center mb-5`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
