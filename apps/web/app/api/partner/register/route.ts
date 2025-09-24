import { NextRequest, NextResponse } from 'next/server';
import { sendSelfHostedEmail } from '../../../../lib/self-hosted-email';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validate required fields
    const requiredFields = ['businessName', 'ownerName', 'email', 'phone', 'businessTypes', 'businessAddress', 'bankName', 'bankAccount'];
    const missingFields = requiredFields.filter(field => !formData[field] || (Array.isArray(formData[field]) && formData[field].length === 0));

    if (missingFields.length > 0) {
      return NextResponse.json(
        { success: false, error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Here you would typically save to database
    console.log('Partner registration data:', formData);

    // Send confirmation email to partner
    const partnerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Bazaari</h1>
          <p style="margin: 5px 0 0 0;">Partner Registration Confirmation</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937;">Thank you for your interest in becoming a Bazaari partner!</h2>
          
          <p>Dear ${formData.ownerName},</p>
          
          <p>We have received your partner registration application for <strong>${formData.businessName}</strong>.</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2563eb; margin-top: 0;">Application Details:</h3>
            <ul style="line-height: 1.6;">
              <li><strong>Business Name:</strong> ${formData.businessName}</li>
              <li><strong>Business Types:</strong> ${formData.businessTypes.join(', ')}</li>
              <li><strong>Owner:</strong> ${formData.ownerName}</li>
              <li><strong>Email:</strong> ${formData.email}</li>
              <li><strong>Phone:</strong> ${formData.phone}</li>
              <li><strong>Address:</strong> ${formData.businessAddress}</li>
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
    `;

    // Send email to partner
    const partnerEmailResult = await sendSelfHostedEmail(
      formData.email,
      'Partner Registration Received - Bazaari',
      partnerEmailHtml,
      { from: 'Bazaari Partners <partners@bazaari.com>' }
    );

    // Send notification email to admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #059669; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">🎯 New Partner Application</h1>
          <p style="margin: 5px 0 0 0;">Bazaari Admin Notification</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937;">New Partner Registration Received</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #059669; margin-top: 0;">Application Details:</h3>
            <ul style="line-height: 1.6;">
              <li><strong>Business Name:</strong> ${formData.businessName}</li>
              <li><strong>Business Types:</strong> ${formData.businessTypes.join(', ')}</li>
              <li><strong>Owner:</strong> ${formData.ownerName}</li>
              <li><strong>Email:</strong> ${formData.email}</li>
              <li><strong>Phone:</strong> ${formData.phone}</li>
              <li><strong>Address:</strong> ${formData.businessAddress}</li>
              <li><strong>Bank:</strong> ${formData.bankName} - ${formData.bankAccount}</li>
              ${formData.businessLicense ? `<li><strong>License:</strong> ${formData.businessLicense}</li>` : ''}
              ${formData.taxId ? `<li><strong>Tax ID:</strong> ${formData.taxId}</li>` : ''}
            </ul>
            
            ${formData.description ? `
              <div style="margin-top: 15px;">
                <strong>Business Description:</strong>
                <p style="margin: 5px 0; padding: 10px; background: #f3f4f6; border-radius: 4px;">${formData.description}</p>
              </div>
            ` : ''}
          </div>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <h4 style="margin-top: 0; color: #92400e;">Action Required:</h4>
            <p style="margin-bottom: 0;">Please review this application and contact the applicant within 2-3 business days.</p>
          </div>
          
          <div style="margin-top: 30px; text-align: center;">
            <p style="color: #6b7280; font-size: 14px;">
              Application submitted at: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    `;

    // Send notification to admin
    const adminEmailResult = await sendSelfHostedEmail(
      'admin@bazaari.com',
      `New Partner Application: ${formData.businessName}`,
      adminEmailHtml,
      { 
        from: 'Bazaari System <noreply@bazaari.com>',
        cc: 'partners@bazaari.com'
      }
    );

    // Log results
    console.log('Partner email result:', partnerEmailResult);
    console.log('Admin email result:', adminEmailResult);

    return NextResponse.json({
      success: true,
      message: 'Partner registration submitted successfully',
      emailSent: partnerEmailResult.success
    });

  } catch (error) {
    console.error('Partner registration error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process registration' },
      { status: 500 }
    );
  }
}