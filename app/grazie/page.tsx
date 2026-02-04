'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Footer from '@/components/sections/Footer'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function GraziePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container-custom max-w-xl"
        >
          <div className="bg-success/10 border-2 border-success rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <div className="w-20 h-20 rounded-full bg-success flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" strokeWidth={3} />
            </div>
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              Grazie per la tua richiesta!
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Ho ricevuto la tua richiesta. Ti ricontatterò entro 24 ore per fissare la consulenza gratuita.
              Controlla anche la casella spam, per sicurezza.
            </p>
            <Link
              href="/"
              className={cn(
                'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300',
                'bg-primary text-black hover:bg-primary-dark shadow-cta hover:scale-105',
                'px-8 py-4 text-lg h-12 md:h-14 w-full md:w-auto'
              )}
            >
              Torna alla home
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
