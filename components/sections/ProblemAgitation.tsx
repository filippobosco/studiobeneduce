'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    number: '01',
    title: 'Scopri sempre i problemi troppo tardi',
    description: 'Il tuo commercialista ti avvisa delle scadenze, ma non ti aiuta a prevenire i problemi. Quando scopri che potevi risparmiare 5.000€, è già troppo tardi.',
  },
  {
    number: '02',
    title: 'Paghi tanto ma non ricevi vera consulenza',
    description: 'La parcella è alta, ma il servizio si limita a F24 e dichiarazioni. Nessuna strategia, nessuna pianificazione, nessun vero supporto alle tue decisioni.',
  },
  {
    number: '03',
    title: 'Hai paura di sbagliare e prendere sanzioni',
    description: 'Ogni scelta fiscale è un\'incognita. Forfettario o SRL? Quando conviene l\'OSS? Ti senti solo davanti a decisioni che potrebbero costarti care.',
  },
  {
    number: '04',
    title: 'Vuoi fare e-commerce ma la fiscalità ti blocca',
    description: 'IVA intracomunitaria, dropshipping, triangolazioni... La complessità fiscale del digitale ti frena dal cogliere opportunità di business.',
  },
]

export default function ProblemAgitation() {
  return (
    <section className="section-padding section-gap">
      <div className="container-custom max-w-5xl">
        {/* Heading - Simple and direct */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-black mb-6 leading-tight">
            Ti riconosci in una di<br />queste situazioni?
          </h2>
          <div className="w-20 h-1 bg-primary" />
        </motion.div>

        {/* Problems - Clean list layout */}
        <div className="space-y-12 md:space-y-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 md:gap-12 items-start group"
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <span className="text-6xl md:text-7xl font-heading font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300 leading-none">
                  {problem.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4 leading-tight">
                  {problem.title}
                </h3>
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
