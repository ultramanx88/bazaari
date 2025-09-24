import nodemailer from 'nodemailer';

// Self-hosted mail server configuration
const emailConfig = {
  host: process.env.SMTP_HOST || 'mail.bazaari.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'noreply@bazaari.com',
    pass: process.env.SMTP_PASS || 'noreply_password_here',
  },
  tls: {
    rejectUnauthorized: process.env.NODE_ENV === 'production',
  },
};

// Create transporter for self-hosted mail server
const transporter = nodemailer.createTransporter(emailConfig);

// Send email function for self-hosted server
export async function sendSelfHostedEmail(
  to: string | string[], 
  subject: string,
  html: string,
  options?: {
    from?: string;
    cc?: string | string[];
    bcc?: string | string[];
  }
) {
  try {
    const mailOptions = {
      from: options?.from || `"Bazaari" <noreply@bazaari.com>`,
      to: Array.isArray(to) ? to.join(', ') : to,
      cc: options?.cc,
      bcc: options?.bcc,
      subject,
      html,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Self-hosted email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Self-hosted email sending failed:', error);
    return { success: false, error: error.message };
  }
}

// Verify self-hosted email configuration
export async function verifySelfHostedEmailConfig() {
  try {
    await transporter.verify();
    console.log('Self-hosted email server is ready');
    return { success: true, message: 'Email server connection verified' };
  } catch (error) {
    console.error('Self-hosted email server verification failed:', error);
    return { success: false, error: error.message };
  }
}