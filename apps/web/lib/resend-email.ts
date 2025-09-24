import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

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
              <li><strong>Business Types:</strong> ${data.businessTypes.join(', ')}</li>
              <li><strong>Owner:</strong> ${data.ownerName}</li>
              <li><strong>Email:</strong> ${data.email}</li>
              <li><strong>Phone:</strong> ${data.phone}</li>
            </ul>
          </div>
          
          <div style="background: #dbeafe; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb;">
            <h4 style="margin-top: 0; color: #1e40af;">Next Steps:</h4>
            <ol style="margin-bottom: 0; line-height: 1.6;">
              <li>Our team will review your application within 2-3 business days</li>
              <li>We may contact you for additional information if needed</li>
              <li>Once approved, you'll receive login credentials and onboarding instructions</li>
              <li>You can then start listing your services on our platform</li>
            </ol>
          </div>
          
          <p style="margin-top: 30px;">If you have any questions, please contact us:</p>
          <ul style="line-height: 1.6;">
            <li>Email: partners@bazaari.com</li>
            <li>Phone: +66 2-xxx-xxxx</li>
            <li>Line: @bazaari-partners</li>
          </ul>
          
          <p>Thank you for choosing Bazaari!</p>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
            <p>This is an automated message. Please do not reply to this email.</p>
            <p>© 2024 Bazaari. All rights reserved.</p>
          </div>
        </div>
      </div>
    `,
  },
  
  partnerApproval: {
    subject: 'Partner Application Approved - Welcome to Bazaari!',
    html: (data: any) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #10b981; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">🎉 Welcome to Bazaari!</h1>
          <p style="margin: 5px 0 0 0;">Your Partner Application has been Approved</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937;">Congratulations, ${data.ownerName}!</h2>
          
          <p>We're excited to welcome <strong>${data.businessName}</strong> to the Bazaari partner network!</p>
          
          <div style="background: #d1fae5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
            <h3 style="color: #065f46; margin-top: 0;">Your Partner Credentials:</h3>
            <ul style="line-height: 1.6;">
              <li><strong>Partner ID:</strong> ${data.partnerId}</li>
              <li><strong>Login Email:</strong> ${data.email}</li>
              <li><strong>Temporary Password:</strong> ${data.tempPassword}</li>
              <li><strong>Partner Dashboard:</strong> <a href="${process.env.NEXT_PUBLIC_API_URL}/partner/dashboard">Login Here</a></li>
            </ul>
          </div>
          
          <p><strong>Welcome aboard and let's grow together! 🚀</strong></p>
        </div>
      </div>
    `,
  },

  // Customer-related emails
  customerBookingConfirmation: {
    subject: 'Booking Confirmation - Bazaari',
    html: (data: any) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Bazaari</h1>
          <p style="margin: 5px 0 0 0;">Booking Confirmation</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937;">Your booking is confirmed!</h2>
          
          <p>Dear ${data.customerName},</p>
          
          <p>Thank you for booking with <strong>${data.businessName}</strong> through Bazaari.</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2563eb; margin-top: 0;">Booking Details:</h3>
            <ul style="line-height: 1.6;">
              <li><strong>Booking ID:</strong> ${data.bookingId}</li>
              <li><strong>Service:</strong> ${data.serviceName}</li>
              <li><strong>Provider:</strong> ${data.businessName}</li>
              <li><strong>Date & Time:</strong> ${data.bookingDateTime}</li>
              <li><strong>Total Amount:</strong> ฿${data.totalAmount}</li>
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
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_API_URL}" 
               style="background: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
              Start Exploring
            </a>
          </div>
          
          <p>Thank you for joining our community!</p>
        </div>
      </div>
    `,
  },

  // Authentication emails
  passwordReset: {
    subject: 'Password Reset Request - Bazaari',
    html: (data: any) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Bazaari</h1>
          <p style="margin: 5px 0 0 0;">Password Reset Request</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937;">Reset Your Password</h2>
          
          <p>Hello ${data.name},</p>
          
          <p>We received a request to reset your password for your Bazaari account.</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${data.resetLink}" 
               style="background: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
              Reset Password
            </a>
          </div>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; color: #92400e;">
              <strong>Security Notice:</strong> This link will expire in 1 hour. 
              If you didn't request this reset, please ignore this email.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  emailVerification: {
    subject: 'Verify Your Email - Bazaari',
    html: (data: any) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Bazaari</h1>
          <p style="margin: 5px 0 0 0;">Email Verification</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937;">Verify Your Email Address</h2>
          
          <p>Hello ${data.name},</p>
          
          <p>Please verify your email address to complete your Bazaari account setup.</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${data.verificationLink}" 
               style="background: #10b981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
              Verify Email
            </a>
          </div>
          
          <p style="font-size: 14px; color: #6b7280;">
            This verification link will expire in 24 hours.
          </p>
        </div>
      </div>
    `,
  }
};

// Send email function using Resend
export async function sendEmail(to: string, template: keyof typeof emailTemplates, data: any) {
  try {
    const { subject, html } = emailTemplates[template];
    
    const result = await resend.emails.send({
      from: 'Bazaari <noreply@bazaari.com>',
      to: [to],
      subject,
      html: html(data),
    });

    console.log('Email sent successfully:', result.data?.id);
    return { success: true, messageId: result.data?.id };
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
      return resend.emails.send({
        from: 'Bazaari <noreply@bazaari.com>',
        to: [email],
        subject,
        html: html(data),
      });
    });

    const results = await Promise.allSettled(promises);
    const successful = results.filter(r => r.status === 'fulfilled').length;
    const failed = results.filter(r => r.status === 'rejected').length;

    console.log(`Bulk email sent: ${successful} successful, ${failed} failed`);
    return { success: true, sent: successful, failed };
  } catch (error) {
    console.error('Bulk email sending failed:', error);
    return { success: false, error: error.message };
  }
}

// Verify Resend API key
export async function verifyEmailConfig() {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }
    
    console.log('Email service is ready');
    return true;
  } catch (error) {
    console.error('Email service verification failed:', error);
    return false;
  }
}