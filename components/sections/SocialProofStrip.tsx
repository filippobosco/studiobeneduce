'use client'

import { motion } from 'framer-motion'
import { Award, Users, BookOpen, Clock } from 'lucide-react'

const stats = [
  {
    icon: Award,
    number: '20+',
    label: 'Anni di Esperienza',
    description: 'Due decenni al servizio di PMI e professionisti',
  },
  {
    icon: Users,
    number: '150+',
    label: 'Clienti Attivi',
    description: 'Imprese che crescono con noi ogni giorno',
  },
  {
    icon: BookOpen,
    number: 'Autore',
    label: 'Pubblicato',
    description: 'Libro su Amazon: E-commerce e Dropshipping',
  },
  {
    icon: Clock,
    number: '<24h',
    label: 'Risposta',
    description: 'Supporto rapido quando ne hai bisogno',
  },
]

export default function SocialProofStrip() {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 mb-4">
                <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" strokeWidth={2} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-black mb-1">
                {stat.number}
              </div>
              <div className="text-base md:text-lg font-semibold text-text-primary mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-text-secondary">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
