'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { Check, ExternalLink } from 'lucide-react'

const benefits = [
  'Guida completa su IVA, OSS, IOSS per e-commerce',
  'Casi pratici e soluzioni concrete per ogni casistica',
  'Competenza riconosciuta nel settore del commercio digitale',
]

export default function AuthorityBuilder() {
  return (
    <section className="section-padding section-gap bg-primary/10">
      <div className="container-custom">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Book Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="relative aspect-[3/4] max-w-xs mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-5xl mb-4">📚</div>
                  <div className="text-xl font-bold mb-2">
                    Aspetti Fiscali del Commercio Elettronico
                  </div>
                  <div className="text-lg opacity-90">Edizione 2025</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <h3 className="text-h3-mobile md:text-h3-desktop font-heading text-black mb-4">
              Riconosciuto esperto di fiscalità per il commercio digitale
            </h3>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Non è solo esperienza sul campo: ho scritto e pubblicato su Amazon il manuale{' '}
              <span className="font-semibold text-text-primary">
                &quot;Aspetti Fiscali del Commercio Elettronico e Dropshipping - Edizione 2025&quot;
              </span>
              , la guida di riferimento per chi vende online in Italia.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <span className="text-text-primary">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="secondary"
              onClick={() => window.open('https://amazon.it', '_blank')}
              className="inline-flex items-center gap-2"
            >
              Scopri il libro su Amazon
              <ExternalLink className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
