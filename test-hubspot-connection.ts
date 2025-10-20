/**
 * HubSpot Integration Test
 * 
 * Simple test to verify HubSpot API connection
 * 
 * Usage:
 *   npx tsx test-hubspot-connection.ts
 */

import 'dotenv/config';

import { getHubSpotClient } from './lib/hubspot/client';

async function testHubSpotConnection() {
  console.log('🧪 Testing HubSpot Integration...\n');

  try {
    // Check if API key is configured
    if (!process.env.HUBSPOT_API_KEY) {
      console.error('❌ HUBSPOT_API_KEY not found in .env file');
      console.log(
        '\n💡 Add your HubSpot API key to .env:\nHUBSPOT_API_KEY=your_key_here'
      );
      process.exit(1);
    }

    console.log('✅ HubSpot API key found');

    // Initialize client
    const hubspot = getHubSpotClient();
    console.log('✅ HubSpot client initialized');

    // Test: Create a test contact
    console.log('\n📝 Creating test contact...');

    const testContact = {
      email: `test-${Date.now()}@example.com`,
      firstname: 'Test',
      lastname: 'Contact',
      phone: '+1234567890',
      company: 'Test Company',
      lifecyclestage: 'lead'
    };

    const result = await hubspot.createContact(testContact);

    console.log('✅ Test contact created successfully!');
    console.log('   Contact ID:', result.id);
    console.log('   Email:', result.properties.email);

    // Clean up: Delete the test contact
    console.log('\n🧹 Cleaning up test contact...');
    await hubspot.deleteContact(result.id);
    console.log('✅ Test contact deleted');

    console.log('\n🎉 HubSpot integration test passed!');
    console.log(
      '\n✨ Your integration is working correctly. You can now:'
    );
    console.log('   1. Create contacts in your app (they will sync to HubSpot)');
    console.log('   2. Use the public API at /api/contact');
    console.log('   3. Run batch sync: npm run sync:hubspot');
  } catch (error: any) {
    console.error('\n❌ HubSpot integration test failed!');
    console.error('Error:', error.message);

    if (error.message.includes('401') || error.message.includes('Unauthorized')) {
      console.log(
        '\n💡 Your API key may be invalid. Please verify:'
      );
      console.log('   1. The API key is correct');
      console.log('   2. The private app has the required scopes:');
      console.log('      - crm.objects.contacts.read');
      console.log('      - crm.objects.contacts.write');
    } else if (error.message.includes('403') || error.message.includes('Forbidden')) {
      console.log(
        '\n💡 Permission denied. Make sure your private app has these scopes:'
      );
      console.log('   - crm.objects.contacts.read');
      console.log('   - crm.objects.contacts.write');
    }

    process.exit(1);
  }
}

testHubSpotConnection();
