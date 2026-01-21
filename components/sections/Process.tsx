'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Card from '@/components/ui/Card'
import { Calendar, MessageSquare, FileCheck, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const steps = [
  {
    icon: Calendar,
    title: 'Prenota la Consulenza Gratuita',
    description: 'Compila il form qui sotto. Ti ricontatterò entro 24 ore per fissare un appuntamento di 45 minuti, senza impegno.',
  },
  {
    icon: MessageSquare,
    title: 'Analizziamo la Tua Situazione',
    description: 'Durante la call valutiamo insieme la tua posizione fiscale attuale, i tuoi obiettivi e le opportunità concrete di ottimizzazione.',
  },
  {
    icon: FileCheck,
    title: 'Ricevi il Tuo Piano Personalizzato',
    description: 'Ti presento una proposta su misura con azioni concrete e benefici attesi. Decidi tu se procedere, con totale trasparenza sui costi.',
  },
]

export default function Process() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="section-padding bg-primary/[3%]">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-h2-mobile md:text-h2-desktop font-heading text-black">
            Come iniziare: 3 passi semplici
          </h2>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:block relative">
          {/* Desktop Arrow Connectors */}
          <div className="hidden lg:block">
            <div className="absolute top-1/4 left-1/4 right-1/4 h-0.5 bg-primary/30 -translate-y-1/2" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="h-full text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <step.icon className="w-8 h-8 text-primary" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-black mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            {/* Step Indicator Badge */}
            <div className="text-center mb-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                Passo {currentIndex + 1} di 3
              </span>
            </div>

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
                  <Card className="h-full text-center">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                      {(() => {
                        const Icon = steps[currentIndex].icon
                        return <Icon className="w-8 h-8 text-primary" strokeWidth={2} />
                      })()}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-black mb-4">
                      {steps[currentIndex].title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed">
                      {steps[currentIndex].description}
                    </p>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
                aria-label="Passo precedente"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
              </button>

              {/* Step Dots with Numbers */}
              <div className="flex items-center gap-3">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary text-white scale-110' 
                        : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
                    }`}
                    aria-label={`Vai al passo ${index + 1}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
                aria-label="Passo successivo"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
