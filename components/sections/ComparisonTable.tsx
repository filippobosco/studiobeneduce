'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Button from '@/components/ui/Button'
import { trackCTAClick } from '@/lib/utils'

const comparisons = [
  {
    aspect: 'Approccio',
    others: 'Solo adempimenti e scadenze',
    studioBeneduce: 'Consulenza strategica per la crescita',
  },
  {
    aspect: 'Comunicazione',
    others: 'Risposte lente, linguaggio tecnico incomprensibile',
    studioBeneduce: 'Disponibilità rapida, spiegazioni chiare',
  },
  {
    aspect: 'Pianificazione',
    others: 'Scopri i problemi quando è troppo tardi',
    studioBeneduce: 'Prevenzione attiva, strategie anticipate',
  },
  {
    aspect: 'Costi',
    others: 'Parcelle poco chiare, sorprese a fine anno',
    studioBeneduce: 'Preventivi trasparenti, nessun costo nascosto',
  },
  {
    aspect: 'Specializzazione',
    others: 'Gestione generica, poca competenza digitale',
    studioBeneduce: 'Esperto e-commerce, dropshipping, forfettari',
  },
  {
    aspect: 'Disponibilità',
    others: 'Solo email, risposte dopo giorni',
    studioBeneduce: 'Contatto diretto, supporto continuativo',
  },
]

export default function ComparisonTable() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? comparisons.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === comparisons.length - 1 ? 0 : prev + 1))
  }

  const handleCTAClick = () => {
    trackCTAClick('comparison')
    const formSection = document.getElementById('lead-form')
    formSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-padding section-gap bg-white">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-h2-mobile md:text-h2-desktop font-heading text-black">
            Studio Beneduce vs Altri Commercialisti
          </h2>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden md:block overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-background-secondary">
                <th className="text-left p-4 font-semibold text-text-primary border border-gray-200">
                  Aspetto
                </th>
                <th className="text-center p-4 font-semibold text-text-primary border border-gray-200">
                  Altri Commercialisti
                </th>
                <th className="text-center p-4 font-semibold text-black border border-gray-200 bg-primary/10">
                  Studio Beneduce
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-background-secondary'}
                >
                  <td className="p-4 font-medium text-text-primary border border-gray-200">
                    {row.aspect}
                  </td>
                  <td className="p-4 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <X className="w-6 h-6 text-error flex-shrink-0 mt-1" strokeWidth={2} />
                      <span className="text-text-secondary">{row.others}</span>
                    </div>
                  </td>
                  <td className="p-4 border border-gray-200 bg-primary/5">
                    <div className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-success flex-shrink-0 mt-1" strokeWidth={2.5} />
                      <span className="text-text-primary font-medium">{row.studioBeneduce}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

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
                  className="bg-white rounded-xl border border-gray-200 p-5 shadow-card"
                >
                  <h3 className="font-semibold text-lg text-black mb-4">
                    {comparisons[currentIndex].aspect}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <X className="w-5 h-5 text-error" strokeWidth={2} />
                        <span className="text-sm font-medium text-text-secondary">
                          Altri Commercialisti
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary pl-7">
                        {comparisons[currentIndex].others}
                      </p>
                    </div>

                    <div className="bg-primary/5 -mx-5 -mb-5 p-5 rounded-b-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Check className="w-5 h-5 text-success" strokeWidth={2.5} />
                        <span className="text-sm font-semibold text-black">
                          Studio Beneduce
                        </span>
                      </div>
                      <p className="text-sm text-text-primary font-medium pl-7">
                        {comparisons[currentIndex].studioBeneduce}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
                aria-label="Scheda precedente"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {comparisons.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-primary' 
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Vai alla scheda ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
                aria-label="Scheda successiva"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </div>

            {/* Counter */}
            <p className="text-center text-sm text-text-secondary mt-4">
              {currentIndex + 1} di {comparisons.length}
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <div className="bg-white border border-gray-200 rounded-xl shadow-card p-6 md:p-8 max-w-md w-full">
            <div className="text-center">
              <p className="text-sm md:text-base text-text-primary font-medium mb-4">
                Pronto a trasformare la tua gestione fiscale?
              </p>
              <Button
                size="large"
                onClick={handleCTAClick}
                className="w-full"
              >
                Prenota la consulenza gratuita
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
