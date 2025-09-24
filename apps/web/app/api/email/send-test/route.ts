import { NextRequest, NextResponse } from 'next/server';
import { sendSelfHostedEmail } from '../../../../lib/self-hosted-email';

export async function POST(request: NextRequest) {
  try {
    const { to, subject, message } = await request.json();

    if (!to || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create simple HTML email
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Bazaari Mail Server</h1>
          <p style="margin: 5px 0 0 0;">Test Email</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937;">Test Email from Bazaari</h2>
          <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
            <p>This is a test email from Bazaari mail server.</p>
            <p>Sent at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    `;

    const result = await sendSelfHostedEmail(to, subject, html, {
      from: 'Bazaari Admin <admin@bazaari.com>'
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send test email' },
      { status: 500 }
    );
  }
}