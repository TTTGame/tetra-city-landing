import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Partners } from './components/Partners'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Stats } from './components/Stats'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { ParticleField } from './components/ParticleField'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <ParticleField />
      <Header />
      <main>
        <Hero />
        <Partners />
        <Features />
        <HowItWorks />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
