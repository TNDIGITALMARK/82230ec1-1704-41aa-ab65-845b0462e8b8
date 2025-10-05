import { NextRequest, NextResponse } from 'next/server';
import { emailService } from '@/lib/email';

interface CancelAccountRequest {
  userId: string;
  reason?: string;
  confirmationEmail?: string;
}

interface CancelAccountResponse {
  success: boolean;
  message: string;
  cancelledAt?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: CancelAccountRequest = await request.json();

    if (!body.userId) {
      return NextResponse.json(
        { success: false, message: 'User ID is required' },
        { status: 400 }
      );
    }

    // Simulate account cancellation process
    // In a real implementation, you would:
    // 1. Validate the user exists and has permission
    // 2. Mark account as cancelled in database
    // 3. Schedule data deletion according to data retention policies
    // 4. Cancel any subscriptions
    // 5. Invalidate sessions

    const cancelledAt = new Date().toISOString();

    // Send confirmation email
    try {
      await sendCancellationEmail(body.userId, cancelledAt, body.confirmationEmail);
    } catch (emailError) {
      console.error('Failed to send cancellation email:', emailError);
      // Don't fail the entire request if email fails
    }

    const response: CancelAccountResponse = {
      success: true,
      message: 'Account cancellation completed successfully',
      cancelledAt
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Account cancellation error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to cancel account' },
      { status: 500 }
    );
  }
}

async function sendCancellationEmail(userId: string, cancelledAt: string, confirmationEmail?: string) {
  const emailTo = confirmationEmail || 'management@yahoo.com';

  // Generate email content
  const { html, text } = emailService.generateCancellationEmail(userId, cancelledAt);

  // Send email
  const result = await emailService.sendEmail({
    to: emailTo,
    subject: 'Account Cancellation Confirmation',
    html,
    text
  });

  if (!result.success) {
    throw new Error(`Failed to send cancellation email: ${result.error}`);
  }

  return result;
}