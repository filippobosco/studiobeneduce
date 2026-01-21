import { NextRequest, NextResponse } from 'next/server'
import { leadFormSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate data
    const validatedData = leadFormSchema.parse(body)

    // TODO: Send to Google Sheets or your preferred destination
    // For now, just log it
    console.log('Form submission:', validatedData)

    // In production, you would send this to:
    // - Google Sheets via Apps Script
    // - A CRM
    // - Email notification service (Resend, SendGrid, etc.)
    
    // Example: Send to Google Apps Script
    // const response = await fetch(process.env.NEXT_PUBLIC_FORM_ENDPOINT!, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(validatedData),
    // })

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
