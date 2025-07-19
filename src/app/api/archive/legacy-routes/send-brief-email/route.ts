import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { submissionId, email } = await request.json() as {
      submissionId: string
      email: string
    }

    if (!submissionId || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if Resend API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      )
    }

    // For now, just log the email request - actual sending is disabled
    console.log('Email brief request received:', { submissionId, email })

    // Simulate successful email sending
    return NextResponse.json({
      success: true,
      message: 'Brief email would be sent',
      submissionId,
      email
    })

  } catch (error) {
    console.error('Error in send-brief-email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 