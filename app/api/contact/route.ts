import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // For MVP: Send email using a service
    // Option 1: Use Resend (recommended - free tier available)
    // Option 2: Use SendGrid, Mailgun, or similar
    // Option 3: Use Formspree (no backend needed)
    
    // For now, we'll use a simple approach with fetch to an email service
    // You can configure this with your preferred email service
    
    const emailData = {
      to: 'santhakumardevan@gmail.com',
      from: 'noreply@sanvionacademy.com',
      subject: `New Enquiry from Sanvion Academy Website - ${name}`,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

---
Sent from Sanvion Academy Contact Form
      `.trim(),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent from Sanvion Academy Contact Form</em></p>
      `
    }

    // TODO: Replace with your email service API
    // Example with Resend (you'll need to install: npm install resend)
    // Example with Formspree: POST to https://formspree.io/f/YOUR_FORM_ID
    
    // For MVP, we'll use Formspree (free, no backend setup needed)
    // Sign up at https://formspree.io and get your form endpoint
    // Then replace the URL below with your Formspree endpoint
    
    const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || ''
    
    if (FORMSPREE_ENDPOINT) {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          _subject: `New Enquiry from Sanvion Academy - ${name}`,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }
    } else {
      // Fallback: Log to console (for development)
      console.log('Contact Form Submission:', emailData)
      // In production, you should set up an email service
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact us directly.' },
      { status: 500 }
    )
  }
}
