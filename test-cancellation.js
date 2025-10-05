// Simple test script for the account cancellation API
// Run with: node test-cancellation.js

const testCancellation = async () => {
  const testUrl = 'http://localhost:3000/api/account/cancel';

  const testData = {
    userId: 'test-user-123',
    reason: 'Testing the cancellation functionality',
    confirmationEmail: 'management@yahoo.com'
  };

  try {
    console.log('Testing account cancellation API...');
    console.log('Request data:', JSON.stringify(testData, null, 2));

    const response = await fetch(testUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    console.log('\n--- Response ---');
    console.log('Status:', response.status);
    console.log('Success:', result.success);
    console.log('Message:', result.message);
    if (result.cancelledAt) {
      console.log('Cancelled At:', result.cancelledAt);
    }

    if (response.ok) {
      console.log('\n✅ Account cancellation test PASSED');
    } else {
      console.log('\n❌ Account cancellation test FAILED');
    }

  } catch (error) {
    console.error('\n❌ Test failed with error:', error.message);
    console.log('Make sure the Next.js development server is running on port 3000');
  }
};

// Only run if this file is executed directly
if (require.main === module) {
  testCancellation();
}

module.exports = { testCancellation };