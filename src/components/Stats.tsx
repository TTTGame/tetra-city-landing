import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

interface CounterProps {
  target: number
  suffix?: string
  prefix?: string
}

function AnimatedCounter({ target, suffix = '', prefix = '' }: CounterProps) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (v) => {
    if (target >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`
    if (target >= 1_000) return `${(v / 1_000).toFixed(0)}K`
    return `${v.toFixed(0)}`
  })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return
    const controls = animate(motionValue, target, {
      duration: 2,
      ease: 'easeOut',
    })
    return controls.stop
  }, [isInView, motionValue, target])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => setDisplay(v))
    return unsubscribe
  }, [rounded])

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  )
}

const stats = [
  {
    value: 15_450_000,
    suffix: '+',
    label: 'Active Players',
    description: 'Building cities worldwide',
  },
  {
    value: 1000,
    suffix: '+',
    label: 'TPS Capacity',
    description: 'TetraChain throughput',
  },
  {
    value: 400,
    suffix: 'ms',
    prefix: '<',
    label: 'Finality Time',
    description: 'Sub-second transactions',
  },
  {
    value: 100,
    suffix: '+',
    label: 'NFT Buildings',
    description: 'Unique custom designs',
  },
]

export function Stats() {
  return (
    <section id="stats" className="relative py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-city-orange/5 to-tetra-blue/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Numbers That Speak
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The scale of CITY Holder meets the speed of TetraChain.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 md:p-8 rounded-2xl border border-dark-border bg-dark-card/50 backdrop-blur-sm text-center glow-combined"
            >
              <div className="text-3xl md:text-5xl font-black gradient-text-combined mb-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
