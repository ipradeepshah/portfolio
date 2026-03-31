import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Email service not configured.' },
      { status: 500 }
    )
  }

  // Initialize Resend lazily inside the handler — not at module level
  const resend = new Resend(apiKey)
  try {
    const { name, email, subject, message } = await req.json()

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // free tier sender
      to: 'ipradeepshah@gmail.com',
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <div style="background: #0a0e1a; padding: 24px; border-radius: 6px 6px 0 0; text-align: center;">
            <h1 style="color: #c9a84c; font-size: 22px; margin: 0; letter-spacing: 2px;">NEW MESSAGE</h1>
            <p style="color: #8a97b0; font-size: 13px; margin: 6px 0 0;">Via pradeepshah.com.np contact form</p>
          </div>
          <div style="background: #ffffff; padding: 28px; border-radius: 0 0 6px 6px; border: 1px solid #e0e0e0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; width: 100px;">
                  <strong style="color: #555; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Name</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222; font-size: 15px;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="color: #555; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #c9a84c; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="color: #555; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Subject</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222; font-size: 15px;">
                  ${subject}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; vertical-align: top;">
                  <strong style="color: #555; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Message</strong>
                </td>
                <td style="padding: 10px 0; color: #222; font-size: 15px; line-height: 1.7;">
                  ${message.replace(/\n/g, '<br/>')}
                </td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 14px; background: #f8f6f0; border-left: 3px solid #c9a84c; border-radius: 2px;">
              <p style="margin: 0; color: #666; font-size: 13px;">
                💡 Hit <strong>Reply</strong> to respond directly to ${name} at ${email}
              </p>
            </div>
          </div>
          <p style="text-align: center; color: #aaa; font-size: 12px; margin-top: 16px;">
            Pradeep Shah · pradeepshah.com.np
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
