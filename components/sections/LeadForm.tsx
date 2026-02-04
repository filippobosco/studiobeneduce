'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Textarea from '@/components/ui/Textarea'
import { leadFormSchema, type LeadFormData } from '@/lib/validations'
import { trackFormSubmit } from '@/lib/utils'
import { Check, Shield, Clock, Lock } from 'lucide-react'

const businessTypeOptions = [
  { value: '', label: 'Seleziona tipo di attività' },
  { value: 'pmi', label: 'PMI (piccola/media impresa)' },
  { value: 'libero-professionista', label: 'Libero professionista' },
  { value: 'regime-forfettario', label: 'Regime forfettario' },
  { value: 'ditta-individuale', label: 'Ditta individuale' },
  { value: 'ecommerce-dropshipping', label: 'E-commerce / Dropshipping' },
  { value: 'altro', label: 'Altro' },
]

const revenueOptions = [
  { value: '', label: 'Seleziona fatturato annuo' },
  { value: 'fino-30k', label: 'Fino a 30.000€' },
  { value: '30k-65k', label: '30.000€ - 65.000€' },
  { value: '65k-100k', label: '65.000€ - 100.000€' },
  { value: '100k-400k', label: '100.000€ - 400.000€' },
  { value: 'oltre-400k', label: 'Oltre 400.000€' },
  { value: 'preferisco-non-indicarlo', label: 'Preferisco non indicarlo' },
]

const trustElements = [
  { icon: Check, text: 'Consulenza 100% gratuita' },
  { icon: Check, text: 'Nessun impegno richiesto' },
  { icon: Clock, text: 'Risposta garantita entro 24 ore' },
  { icon: Lock, text: 'Dati protetti e riservati' },
]

const benefits = [
  'Analisi della tua situazione fiscale attuale',
  'Identificazione di opportunità di risparmio concrete',
  'Risposte a tutti i tuoi dubbi fiscali e strategici',
  'Piano d\'azione personalizzato (se decidi di proseguire)',
]

export default function LeadForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  })

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)

    const source =
      typeof window !== 'undefined'
        ? (sessionStorage.getItem('utm_source') || '')
        : ''

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source }),
      })

      if (response.ok) {
        trackFormSubmit()
        router.push('/grazie')
        return
      } else {
        const errorData = await response.json()
        toast.error(errorData.message || 'Errore durante l\'invio. Riprova.')
      }
    } catch (error) {
      toast.error('Errore di connessione. Verifica la tua connessione e riprova.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="lead-form" className="section-padding pt-12 md:pt-20 bg-gradient-to-b from-primary/5 via-primary/3 to-white">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-h2-mobile md:text-h2-desktop font-heading text-black mb-4">
            Prenota la tua consulenza gratuita
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            45 minuti per capire insieme come ottimizzare la gestione fiscale della tua attività. Nessun impegno, nessun costo.
          </p>

          {/* Benefits Box */}
          <div className="bg-white rounded-xl border-2 border-success/20 p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-black mb-4">
              ✓ Cosa include la consulenza
            </h3>
            <div className="grid md:grid-cols-2 gap-3 text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-text-primary">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form + Trust Elements */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <Input
                  {...register('name')}
                  id="name"
                  label="Nome e Cognome *"
                  placeholder="Es. Mario Rossi"
                  error={errors.name?.message}
                />

                <Input
                  {...register('email')}
                  id="email"
                  type="email"
                  label="Email *"
                  placeholder="Es. mario.rossi@email.com"
                  error={errors.email?.message}
                />

                <Input
                  {...register('phone')}
                  id="phone"
                  type="tel"
                  label="Telefono *"
                  placeholder="Es. 333 1234567"
                  error={errors.phone?.message}
                />

                <Select
                  {...register('businessType')}
                  id="businessType"
                  label="Tipo di attività *"
                  options={businessTypeOptions}
                  error={errors.businessType?.message}
                />

                <Select
                  {...register('revenue')}
                  id="revenue"
                  label="Fatturato annuo indicativo *"
                  options={revenueOptions}
                  error={errors.revenue?.message}
                />

                <Textarea
                  {...register('message')}
                  id="message"
                  label="Messaggio (opzionale)"
                  placeholder="Raccontami brevemente la tua situazione o le tue esigenze..."
                />

                {/* Privacy Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    {...register('privacy')}
                    type="checkbox"
                    id="privacy"
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary/20"
                  />
                  <label htmlFor="privacy" className="text-sm text-text-secondary">
                    Acconsento al trattamento dei dati personali secondo la{' '}
                    <a href="#" className="text-primary underline hover:text-primary-dark">
                      Privacy Policy
                    </a>
                    *
                  </label>
                </div>
                {errors.privacy && (
                  <p className="text-sm text-error -mt-3">{errors.privacy.message}</p>
                )}

                <Button
                  type="submit"
                  size="large"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Invio in corso...' : 'Prenota la consulenza gratuita'}
                </Button>
              </form>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Trust Points */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-card">
              <h3 className="text-xl font-semibold text-black mb-4">
                Perché prenotare oggi
              </h3>
              <div className="space-y-4">
                {trustElements.map((element, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                      <element.icon className="w-5 h-5 text-success" strokeWidth={2.5} />
                    </div>
                    <span className="text-text-primary font-medium">{element.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-card">
              <h3 className="text-xl font-semibold text-black mb-4">
                Garanzia di qualità
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold text-black">20+ anni di esperienza</div>
                    <div className="text-sm text-text-secondary">Due decenni al servizio delle imprese</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold text-black">150+ clienti attivi</div>
                    <div className="text-sm text-text-secondary">Imprenditori che si fidano di noi</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold text-black">Iscritto Albo Commercialisti</div>
                    <div className="text-sm text-text-secondary">Professionalità certificata</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
