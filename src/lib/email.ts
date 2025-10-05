interface EmailData {
  to: string;
  subject: string;
  html: string;
  text: string;
}

interface EmailResponse {
  success: boolean;
  messageId?: string;
  error?: string;
}

export class EmailService {
  private static instance: EmailService;

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  async sendEmail(emailData: EmailData): Promise<EmailResponse> {
    try {
      // For production, you would configure with actual email service:
      // const transporter = nodemailer.createTransporter({
      //   service: 'gmail', // or your SMTP service
      //   auth: {
      //     user: process.env.EMAIL_USER,
      //     pass: process.env.EMAIL_PASS,
      //   },
      // });

      // const result = await transporter.sendMail({
      //   from: process.env.EMAIL_FROM || 'noreply@yourapp.com',
      //   to: emailData.to,
      //   subject: emailData.subject,
      //   html: emailData.html,
      //   text: emailData.text,
      // });

      // For demo purposes, log the email that would be sent
      console.log('Email would be sent to:', emailData.to);
      console.log('Subject:', emailData.subject);
      console.log('Content preview:', emailData.text.substring(0, 100) + '...');

      // Simulate email service delay
      await new Promise(resolve => setTimeout(resolve, 200));

      return {
        success: true,
        messageId: `mock-message-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      };
    } catch (error) {
      console.error('Email sending failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown email error'
      };
    }
  }

  generateCancellationEmail(userId: string, cancelledAt: string): { html: string; text: string } {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #333; font-size: 24px; margin: 0;">Account Cancellation Confirmation</h1>
        </div>

        <div style="background-color: #f8f9fa; border-left: 4px solid #28a745; padding: 20px; margin: 20px 0;">
          <h2 style="color: #28a745; margin-top: 0;">Cancellation Completed</h2>
          <p style="margin: 0; color: #333;">Your account cancellation request has been successfully processed.</p>
        </div>

        <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">Cancellation Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">User ID:</td>
              <td style="padding: 8px 0; color: #333;">${userId}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Cancellation Date:</td>
              <td style="padding: 8px 0; color: #333;">${new Date(cancelledAt).toLocaleDateString()}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Cancellation Time:</td>
              <td style="padding: 8px 0; color: #333;">${new Date(cancelledAt).toLocaleTimeString()}</td>
            </tr>
          </table>
        </div>

        <div style="margin: 30px 0;">
          <h3 style="color: #333;">What Happens Next?</h3>
          <ul style="color: #666; line-height: 1.6;">
            <li>Your account has been immediately deactivated</li>
            <li>All personal data will be processed according to our data retention policies</li>
            <li>Any active subscriptions have been cancelled</li>
            <li>You will not be charged any further fees</li>
          </ul>
        </div>

        <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 0; color: #856404;">
            <strong>Note:</strong> If you believe this cancellation was made in error, please contact our support team immediately.
          </p>
        </div>

        <hr style="margin: 40px 0; border: none; border-top: 1px solid #ddd;">

        <div style="text-align: center;">
          <p style="font-size: 12px; color: #666; margin: 0;">
            This is an automated confirmation email. Please do not reply to this message.
          </p>
          <p style="font-size: 12px; color: #666; margin: 5px 0 0 0;">
            Sent to: Bruce management@yahoo.com
          </p>
        </div>
      </div>
    `;

    const text = `
Account Cancellation Confirmation
================================

Your account cancellation request has been successfully processed.

Cancellation Details:
- User ID: ${userId}
- Cancellation Date: ${new Date(cancelledAt).toLocaleDateString()}
- Cancellation Time: ${new Date(cancelledAt).toLocaleTimeString()}

What Happens Next?
- Your account has been immediately deactivated
- All personal data will be processed according to our data retention policies
- Any active subscriptions have been cancelled
- You will not be charged any further fees

Note: If you believe this cancellation was made in error, please contact our support team immediately.

This is an automated confirmation email. Please do not reply to this message.
Sent to: Bruce management@yahoo.com
    `;

    return { html, text };
  }
}

export const emailService = EmailService.getInstance();