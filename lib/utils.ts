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

export const trackFormStart = () => {
  trackEvent('form_start', {})
}

export const trackFormSubmit = () => {
  trackEvent('form_submit', {})
  
  // LinkedIn conversion
  if (typeof window !== 'undefined' && (window as any)._linkedin_data_partner_ids) {
    (window as any)._linkedin_data_partner_ids.push({
      conversionId: 'YOUR_CONVERSION_ID'
    })
  }

  // Meta Lead event
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead')
  }
}

export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', { section: sectionName })
}
