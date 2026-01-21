'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Card from '@/components/ui/Card'
import { LineChart, Briefcase, ShoppingCart, BarChart3, FileText, Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    icon: LineChart,
    title: 'Pianificazione Fiscale Strategica',
    description: 'Costruisco piani fiscali su misura per ottimizzare il tuo carico fiscale e proteggere il tuo business nel lungo termine.',
  },
  {
    icon: Briefcase,
    title: 'Gestione Regime Forfettario',
    description: 'Supporto completo per chi opera in forfettario: rispetto limiti, ottimizzazione, gestione passaggio ad altri regimi.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & Dropshipping',
    description: 'Consulenza specializzata per vendite online: IVA nazionale/estera, OSS, IOSS, triangolazioni. Autore del manuale settore.',
  },
  {
    icon: BarChart3,
    title: 'Controllo di Gestione',
    description: 'Analisi dei numeri della tua impresa per decisioni informate. Trasformo i dati in strategie concrete di crescita.',
  },
  {
    icon: FileText,
    title: 'Contabilità & Adempimenti',
    description: 'Gestione completa di contabilità, bilanci, dichiarazioni e scadenze. Un partner stabile al fianco della tua azienda.',
  },
  {
    icon: Search,
    title: 'Check-up Fiscale',
    description: 'Analisi approfondita della tua posizione per individuare agevolazioni non sfruttate e opportunità di risparmio.',
  },
]

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="section-padding section-gap bg-primary/[2%]">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-h2-mobile md:text-h2-desktop font-heading text-black">
            Come posso aiutarti concretamente
          </h2>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card hover className="h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        {(() => {
                          const Icon = services[currentIndex].icon
                          return <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                        })()}
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-3">
                        {services[currentIndex].title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {services[currentIndex].description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
                aria-label="Servizio precedente"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-primary' 
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Vai al servizio ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
                aria-label="Servizio successivo"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </div>

            {/* Counter */}
            <p className="text-center text-sm text-text-secondary mt-4">
              {currentIndex + 1} di {services.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
