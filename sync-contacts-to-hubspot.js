/**
 * Batch Sync Contacts to HubSpot
 *
 * This script syncs all existing contacts from your database to HubSpot CRM.
 * Useful for initial migration or re-syncing contacts.
 *
 * Usage:
 *   node sync-contacts-to-hubspot.js
 */

const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function syncContactsToHubSpot() {
  try {
    console.log('🚀 Starting HubSpot contact sync...\n');

    // Check if HubSpot API key is configured
    if (!process.env.HUBSPOT_API_KEY) {
      console.error('❌ HUBSPOT_API_KEY not found in environment variables');
      process.exit(1);
    }

    // Import the sync function (using dynamic import for ESM)
    const { batchSyncContactsToHubSpot } = await import(
      './lib/hubspot/sync.ts'
    );

    // Fetch all contacts with email addresses
    const contacts = await prisma.contact.findMany({
      where: {
        email: {
          not: null,
          not: ''
        }
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        address: true,
        record: true
      }
    });

    console.log(`📊 Found ${contacts.length} contacts to sync\n`);

    if (contacts.length === 0) {
      console.log('✅ No contacts to sync');
      return;
    }

    // Batch sync contacts
    const result = await batchSyncContactsToHubSpot(contacts);

    console.log('\n📈 Sync Results:');
    console.log(`✅ Success: ${result.success}`);
    console.log(`❌ Failed: ${result.failed}`);

    // Show failed contacts
    if (result.failed > 0) {
      console.log('\n⚠️  Failed Contacts:');
      result.results
        .filter((r) => !r.success)
        .forEach((r) => {
          console.log(`   - ${r.email}: ${r.error}`);
        });
    }

    console.log('\n✨ Sync complete!');
  } catch (error) {
    console.error('❌ Error during sync:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

syncContactsToHubSpot();
