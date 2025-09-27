import nodemailer from 'nodemailer';

// Initialize nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Email templates for the entire Bazaari platform
export const emailTemplates = {
  // Partner-related emails
  partnerRegistration: {
    subject: 'Partner Registration Received - Bazaari',
    html: (data: any) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Bazaari</h1>
          <p style="margin: 5px 0 0 0;">Partner Registration Confirmation</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937;">Thank you for your interest in becoming a Bazaari partner!</h2>
          
          <p>Dear ${data.ownerName},</p>
          
          <p>We have received your partner registration application for <strong>${data.businessName}</strong>.</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2563eb; margin-top: 0;">Application Details:</h3>
            <ul style="line-height: 1.6;">
              <li><strong>Business Name:</strong> ${data.businessName}</li>
              <li><strong>Business Types:</strong> ${data.businessTypes?.join(', ') || 'N/A'}</li>
              <li><strong>Owner:</strong> ${data.ownerName}</li>
              <li><strong>Email:</strong> ${data.email}</li>
              <li><strong>Phone:</strong> ${data.phone}</li>
            </ul>
          </div>
          
          <p>Thank you for choosing Bazaari!</p>
        </div>
      </div>
    `,
  },
  
  customerWelcome: {
    subject: 'Welcome to Bazaari - Your Super Service Platform!',
    html: (data: any) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">🎉 Welcome to Bazaari!</h1>
          <p style="margin: 5px 0 0 0;">Your Super Service Platform in Thailand</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937;">Hello ${data.name}!</h2>
          
          <p>Welcome to Bazaari - Thailand's premier platform for Indian services and more!</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2563eb; margin-top: 0;">What you can do on Bazaari:</h3>
            <ul style="line-height: 1.6;">
              <li>🍛 Order delicious Indian food delivery</li>
              <li>🏨 Book hotels and accommodations</li>
              <li>💆 Schedule spa and massage services</li>
              <li>🏥 Access healthcare services</li>
              <li>🏠 Find real estate opportunities</li>
              <li>📋 Get visa and documentation help</li>
              <li>🛍️ Shop from Indian stores</li>
            </ul>
          </div>
          
          <p>Thank you for joining our community!</p>
        </div>
      </div>
    `,
  },
};

// Verify Email Configuration
export async function verifyEmailConfig() {
  try {
    if (!process.env.SMTP_USER) {
      throw new Error('SMTP_USER is not configured');
    }
    
    await transporter.verify();
    console.log('Email service is ready');
    return { success: true };
  } catch (error) {
    console.error('Email verification failed:', error);
    return { success: false, error: error.message };
  }
}

// Send single email function using nodemailer
export async function sendEmail(to: string, template: keyof typeof emailTemplates, data: any) {
  try {
    const { subject, html } = emailTemplates[template];
    const result = await transporter.sendMail({
      from: process.env.SMTP_FROM || 'Bazaari <noreply@bazaari.com>',
      to,
      subject,
      html: html(data),
    });

    console.log('Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.message };
  }
}

// Send bulk emails (for newsletters, promotions)
export async function sendBulkEmail(recipients: string[], template: keyof typeof emailTemplates, data: any) {
  try {
    const { subject, html } = emailTemplates[template];
    const promises = recipients.map(async (email) => {
      return transporter.sendMail({
        from: process.env.SMTP_FROM || 'Bazaari <noreply@bazaari.com>',
        to: email,
        subject,
        html: html(data),
      });
    });

    const results = await Promise.allSettled(promises);
    const successful = results.filter(r => r.status == 'fulfilled').length;
    const failed = results.filter(r => r.status == 'rejected').length;

    console.log(`Bulk email sent: ${successful} successful, ${failed} failed`);
    return { success: true, successful, failed };
  } catch (error) {
    console.error('Bulk email sending failed:', error);
    return { success: false, error: error.message };
  }
}