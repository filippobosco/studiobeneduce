import { z } from 'zod'

export const leadFormSchema = z.object({
  name: z.string()
    .min(2, 'Il nome deve contenere almeno 2 caratteri')
    .max(100, 'Il nome è troppo lungo'),
  
  email: z.string()
    .email('Inserisci un indirizzo email valido')
    .min(1, 'L\'email è obbligatoria'),
  
  phone: z.string()
    .min(8, 'Inserisci un numero di telefono valido')
    .max(20, 'Il numero di telefono è troppo lungo')
    .regex(/^[\d\s\+\-\(\)]+$/, 'Il numero di telefono contiene caratteri non validi'),
  
  businessType: z.enum([
    'pmi',
    'libero-professionista',
    'regime-forfettario',
    'ditta-individuale',
    'ecommerce-dropshipping',
    'altro'
  ], {
    required_error: 'Seleziona il tipo di attività',
  }),
  
  revenue: z.enum([
    'fino-30k',
    '30k-65k',
    '65k-100k',
    '100k-400k',
    'oltre-400k',
    'preferisco-non-indicarlo'
  ], {
    required_error: 'Seleziona il fatturato indicativo',
  }),
  
  message: z.string()
    .max(1000, 'Il messaggio è troppo lungo')
    .optional(),
  
  privacy: z.boolean()
    .refine(val => val === true, {
      message: 'Devi accettare la privacy policy per continuare',
    }),
})

export type LeadFormData = z.infer<typeof leadFormSchema>
