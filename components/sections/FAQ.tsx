'use client'

import { motion } from 'framer-motion'
import Accordion from '@/components/ui/Accordion'

const faqItems = [
  {
    question: 'La consulenza è davvero gratuita e senza impegno?',
    answer: 'Assolutamente sì. La prima consulenza di 45 minuti è completamente gratuita e senza alcun obbligo. È un\'occasione per conoscerci, analizzare la tua situazione e capire se posso esserti utile. Solo dopo, se decidi di proseguire, ti presenterò una proposta chiara e trasparente.',
  },
  {
    question: 'Quanto costa il servizio di consulenza fiscale continuativa?',
    answer: 'Dipende dalla complessità della tua attività e dai servizi di cui hai bisogno. Durante la consulenza gratuita analizzeremo la tua situazione e ti fornirò un preventivo personalizzato, chiaro e senza costi nascosti. In media, i miei clienti investono tra 1.500€ e 4.000€ all\'anno per una consulenza completa.',
  },
  {
    question: 'Come funziona il passaggio dal mio attuale commercialista?',
    answer: 'Il passaggio è più semplice di quanto pensi. Gestisco io tutte le pratiche necessarie, compreso il recupero della documentazione dal tuo commercialista precedente. Tu dovrai solo firmare alcune deleghe. Generalmente il tutto si completa in 2-3 settimane senza interruzioni nella tua operatività.',
  },
  {
    question: 'Seguite solo aziende nella zona di Caserta?',
    answer: 'No, seguo clienti in tutta Italia. Grazie agli strumenti digitali posso offrire un servizio completo anche a distanza, con videocall periodiche e supporto continuativo via email, WhatsApp o telefono. La maggior parte dei miei clienti, infatti, non sono della zona.',
  },
  {
    question: 'Cosa vi rende diversi dagli altri commercialisti?',
    answer: 'Tre cose principali: (1) Approccio strategico - non mi limito agli adempimenti ma ti affianco nelle decisioni di business; (2) Specializzazione comprovata - ho scritto il manuale di riferimento per e-commerce e dropshipping; (3) Pianificazione preventiva - prevedo i problemi invece di risolverli dopo. Il mio obiettivo è farti risparmiare e crescere, non solo tenerti in regola.',
  },
]

export default function FAQ() {
  return (
    <section className="section-padding section-gap">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-h2-mobile md:text-h2-desktop font-heading text-black">
            Domande frequenti
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  )
}
