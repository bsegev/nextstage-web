import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabase } from '@/lib/supabase'

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
        { status: 500 }
      )
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Note: Database fetching disabled since we're using the simplified system
    // We'll use a placeholder brief for email since the actual brief is generated in real-time
    const brief = {
      personalMessage: "Thank you for completing your strategic discovery session. I've analyzed your responses and I'm excited about your opportunity.",
      sections: [
        {
          title: "Executive Summary",
          content: "You've shared a compelling vision with clear strategic direction. Your approach shows strong market understanding and realistic execution planning.",
          reasoning: "Clear vision and strategic focus are the foundation of successful ventures."
        },
        {
          title: "Strategic Recommendations",
          content: "Focus on rapid customer validation, build minimum viable solution, and establish clear success metrics to maximize your chances of success.",
          reasoning: "Speed to market and customer feedback are critical success factors in today's environment."
        },
        {
          title: "Next Steps",
          content: "Let's schedule a strategy call to discuss how NextStage can help you execute this vision and accelerate your progress.",
          reasoning: "Personal guidance and strategic support can significantly improve your execution velocity."
        }
      ]
    }

    // Use a default name for personalization
    const userName = 'there'

    // Create HTML email content
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your NextStage Strategic Brief</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f8f9fa; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
    .header { background: #0A0A0A; color: #F5F4F1; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
    .content { padding: 30px; }
    .section { margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #eee; }
    .section:last-child { border-bottom: none; }
    .section h2 { color: #0A0A0A; font-size: 18px; font-weight: 600; margin-bottom: 15px; }
    .section p { margin-bottom: 15px; }
    .reasoning { background: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 15px; font-style: italic; font-size: 14px; color: #666; }
    .cta { background: #FFE0D7; padding: 25px; text-align: center; margin-top: 30px; border-radius: 8px; }
    .button { display: inline-block; background: #0A0A0A; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; margin: 10px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Your Strategic Brief</h1>
      <p>Crafted by NextStage Strategy Concierge</p>
    </div>
    
    <div class="content">
      <div class="section">
        <p><strong>Hi ${userName},</strong></p>
        <p>${brief.personalMessage}</p>
      </div>
      
      ${brief.sections.map((section: { title: string; content: string; reasoning: string }) => `
        <div class="section">
          <h2>${section.title}</h2>
          <p>${section.content}</p>
          <div class="reasoning">
            <strong>Strategic Insight:</strong> ${section.reasoning}
          </div>
        </div>
      `).join('')}
      
      <div class="cta">
        <h2>Ready to move forward?</h2>
        <p>Let's discuss how NextStage can help you execute this strategy.</p>
        <a href="${process.env.NEXT_PUBLIC_CALENDLY_URL}" class="button">Book a Strategy Call</a>
        <a href="${process.env.NEXT_PUBLIC_APP_URL}" class="button">Visit NextStage</a>
      </div>
    </div>
    
    <div class="footer">
      <p>© 2024 NextStage. Crafted with expertise and care.</p>
    </div>
  </div>
</body>
</html>
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'NextStage <hello@nextstage.com>',
      to: [email],
      subject: `Your Strategic Brief - ${userName}'s NextStage Analysis`,
      html: htmlContent,
    })

    if (error) {
      console.error('Error sending email:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Note: Analytics tracking disabled since we're using the simplified system
    console.log('Email sent successfully to:', email)

    return NextResponse.json({ success: true, emailId: data?.id })

  } catch (error) {
    console.error('Error in send-brief-email API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 