import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Tracking helpers
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  // Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventData)
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, eventData)
  }

  // LinkedIn
  if (typeof window !== 'undefined' && (window as any)._linkedin_data_partner_ids) {
    // LinkedIn tracking logic
  }
}

export const trackCTAClick = (location: string) => {
  trackEvent('cta_click', { location })
}

export const trackFormSubmit = () => {
  // Solo GA: form_submit (Meta Lead viene inviato sulla thank you page)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submit', {})
  }

  // LinkedIn conversion
  if (typeof window !== 'undefined' && (window as any)._linkedin_data_partner_ids) {
    (window as any)._linkedin_data_partner_ids.push({
      conversionId: 'YOUR_CONVERSION_ID'
    })
  }
}

/** Evento Lead Meta quando l'utente vede la thank you page (una sola volta per visita) */
export const trackThankYouPageView = () => {
  if (typeof window === 'undefined') return
  let sent = false
  const sendLead = () => {
    if (sent) return
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Lead')
      sent = true
    }
  }
  sendLead()
  // Se il pixel non era ancora caricato, riprova una volta dopo 300ms
  setTimeout(sendLead, 300)
}
