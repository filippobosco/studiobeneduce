import { NextRequest, NextResponse } from 'next/server'
import { leadFormSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate data
    const validatedData = leadFormSchema.parse(body)

    // Invia a Google Sheets se è configurato l'endpoint (Google Apps Script)
    const formEndpoint = process.env.FORM_ENDPOINT
    if (formEndpoint) {
      try {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(validatedData),
        })
        if (!response.ok) {
          console.error('Google Sheets endpoint error:', response.status, await response.text())
          return NextResponse.json(
            { success: false, message: 'Errore durante il salvataggio. Riprova.' },
            { status: 502 }
          )
        }
      } catch (err) {
        console.error('Form endpoint fetch error:', err)
        return NextResponse.json(
          { success: false, message: 'Errore di connessione. Riprova.' },
          { status: 502 }
        )
      }
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Form submission error:', error)
    
    if (error.errors) {
      // Zod validation error
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
