'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    title: 'Pianificazione Preventiva',
    description: 'Analizzo la tua situazione in anticipo e costruisco strategie fiscali che ti fanno risparmiare tempo e denaro. Non aspetto che arrivi la sanzione o che perdi un\'opportunità di risparmio.',
  },
  {
    title: (
      <>
        Consulenza<br />Su Misura
      </>
    ),
    description: 'Ogni impresa ha la sua storia, i suoi numeri, le sue sfide. Costruisco piani fiscali tagliati esattamente sulla tua realtà, non pacchetti standard che vanno bene per tutti.',
  },
  {
    title: 'Visione a Lungo Termine',
    description: 'Non mi limito alla prossima scadenza F24. Ragiono insieme a te su dove vuoi portare l\'azienda e costruisco il percorso fiscale più efficiente per arrivarci.',
  },
]

export default function UniqueApproach() {
  return (
    <section className="section-padding section-gap bg-background-secondary">
      <div className="container-custom max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-black mb-6 leading-tight">
            Un approccio diverso:<br />strategia, non solo adempimenti
          </h2>
          <div className="w-20 h-1 bg-primary" />
        </motion.div>

        {/* Pillars - Horizontal layout */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="border-l-4 border-primary/30 pl-6 group-hover:border-primary transition-colors duration-300">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
