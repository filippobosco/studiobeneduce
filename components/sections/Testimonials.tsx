'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Card from '@/components/ui/Card'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Button from '@/components/ui/Button'
import { trackCTAClick } from '@/lib/utils'

const testimonials = [
  {
    quote: 'Dopo anni con un commercialista che si limitava a mandarmi scadenze via email, ho scoperto cosa significa avere un vero consulente strategico. Grazie alla pianificazione fiscale ho ottimizzato la mia posizione e risparmio circa 4.000€ l\'anno. La differenza è incredibile.',
    name: 'Laura Martini',
    role: 'Consulente Marketing',
    company: 'Libera Professionista (Regime Forfettario)',
  },
  {
    quote: 'Aprire un e-commerce mi spaventava per la complessità fiscale. Il Dott. Beneduce mi ha guidato passo dopo passo: IVA, OSS, tutto chiaro. Oggi gestisco le vendite in Europa con serenità. Finalmente un commercialista che non ti lascia solo davanti ai problemi.',
    name: 'Marco Ferri',
    role: 'Founder',
    company: 'Ferri Home Design (E-commerce arredamento)',
  },
  {
    quote: 'Stavo valutando investimenti importanti per espandere l\'attività ma non sapevo come muovermi a livello fiscale. Il supporto che ho ricevuto è andato oltre le aspettative: analisi, strategia, affiancamento concreto. Non è solo un commercialista, è parte del team aziendale.',
    name: 'Giuseppe Marchetti',
    role: 'Titolare',
    company: 'Marchetti Costruzioni Srl (8 dipendenti)',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const handleCTAClick = () => {
    trackCTAClick('testimonials')
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
            Cosa dicono i miei clienti
          </h2>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full flex flex-col">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/30 mb-4" fill="currentColor" />

                {/* Quote */}
                <p className="text-text-secondary leading-relaxed mb-6 flex-grow italic">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-warning"
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Author */}
                <div>
                  <div className="font-semibold text-black text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {testimonial.company}
                  </div>
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
                  <Card className="h-full flex flex-col">
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-primary/30 mb-4" fill="currentColor" />

                    {/* Quote */}
                    <p className="text-text-secondary leading-relaxed mb-6 flex-grow italic">
                      &quot;{testimonials[currentIndex].quote}&quot;
                    </p>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-warning"
                          fill="currentColor"
                        />
                      ))}
                    </div>

                    {/* Author */}
                    <div>
                      <div className="font-semibold text-black text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {testimonials[currentIndex].company}
                      </div>
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
                aria-label="Testimonianza precedente"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-primary' 
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Vai alla testimonianza ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
                aria-label="Testimonianza successiva"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </div>

            {/* Counter */}
            <p className="text-center text-sm text-text-secondary mt-4">
              {currentIndex + 1} di {testimonials.length}
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
                Unisciti ai clienti soddisfatti
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
