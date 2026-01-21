'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { trackCTAClick } from '@/lib/utils'

export default function Hero() {
  const handleCTAClick = () => {
    trackCTAClick('hero')
    const formSection = document.getElementById('lead-form')
    formSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative pt-8 pb-16 md:min-h-[90vh] md:flex md:items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-white" />
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            {/* H1 - Più grande e con accent */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-6 md:mb-8 leading-tight">
              Stanco di un commercialista che{' '}
              <span className="text-primary">si limita a ricordarti le scadenze?</span>
            </h1>

            {/* H2 - Più leggero e distinto */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-body font-normal text-text-secondary mb-10 md:mb-12 leading-relaxed">
              Scopri l'affiancamento strategico che trasforma la burocrazia fiscale in{' '}
              <strong className="font-semibold text-text-primary">opportunità di crescita</strong> per la tua impresa.
            </h2>

            {/* CTA */}
            <div className="space-y-4">
              <Button
                size="large"
                onClick={handleCTAClick}
                className="w-full md:w-auto md:min-w-[320px] text-lg"
              >
                Prenota la consulenza gratuita
              </Button>
              <p className="text-base text-text-secondary max-w-md mx-auto md:mx-0">
                <strong className="text-text-primary">45 minuti con un esperto.</strong> Nessun impegno.<br />
                Scopri come ottimizzare la tua situazione fiscale.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/Hero-image-2.png"
                alt="Professionista esperto in consulenza fiscale - Studio Beneduce"
                className="w-full h-full object-cover"
                style={{ imageRendering: 'crisp-edges' }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
