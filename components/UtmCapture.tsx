'use client'

import { useEffect } from 'react'

/**
 * Salva i parametri UTM (utm_source, utm_medium, utm_campaign) in sessionStorage
 * al primo caricamento, così il form può inviare la SORGENTE a Google Sheets.
 */
export default function UtmCapture() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const utmSource = params.get('utm_source')
    const utmMedium = params.get('utm_medium')
    const utmCampaign = params.get('utm_campaign')
    if (utmSource) sessionStorage.setItem('utm_source', utmSource)
    if (utmMedium) sessionStorage.setItem('utm_medium', utmMedium)
    if (utmCampaign) sessionStorage.setItem('utm_campaign', utmCampaign)
  }, [])
  return null
}
