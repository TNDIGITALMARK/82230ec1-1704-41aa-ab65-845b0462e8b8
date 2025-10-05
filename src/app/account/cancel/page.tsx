"use client";

import { AccountCancellation } from '@/components/account-cancellation';

export default function CancelAccountPage() {
  // In a real implementation, you would get the userId from:
  // - Authentication context
  // - Session data
  // - URL parameters
  // - Server-side props
  const userId = "user-123-demo"; // Demo user ID

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <AccountCancellation
        userId={userId}
        onCancellationComplete={() => {
          console.log('Account cancellation completed');
        }}
      />
    </div>
  );
}