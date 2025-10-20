/**
 * HubSpot Sync Service
 * 
 * This module handles syncing contact data from your application to HubSpot CRM.
 * It provides functions to automatically send user data when contacts are created or updated.
 */

import { ContactRecord } from '@prisma/client';

import { getHubSpotClient, parseFullName } from './client';

interface SyncContactData {
  name: string;
  email?: string | null;
  phone?: string | null;
  record: ContactRecord;
  address?: string | null;
  message?: string;
}

/**
 * Sync a contact to HubSpot CRM
 * This function is called when a new contact is created in your system
 */
export async function syncContactToHubSpot(
  contactData: SyncContactData
): Promise<{ success: boolean; hubspotId?: string; error?: string }> {
  try {
    // Check if HubSpot integration is enabled
    if (!process.env.HUBSPOT_API_KEY) {
      console.warn('HubSpot API key not configured. Skipping sync.');
      return { success: false, error: 'HubSpot not configured' };
    }

    // Validate email (required by HubSpot)
    if (!contactData.email) {
      console.warn('Email is required for HubSpot sync. Skipping.');
      return { success: false, error: 'Email is required' };
    }

    const hubspot = getHubSpotClient();
    const { firstname, lastname } = parseFullName(contactData.name);

    // Prepare HubSpot contact properties
    const hubspotProperties: any = {
      email: contactData.email,
      firstname: firstname,
      lastname: lastname
    };

    // Add optional fields
    if (contactData.phone) {
      hubspotProperties.phone = contactData.phone;
    }

    if (contactData.address) {
      hubspotProperties.address = contactData.address;
    }

    // Add company name if it's a company record
    if (contactData.record === 'COMPANY') {
      hubspotProperties.company = contactData.name;
    }

    // Add message as a note if provided
    if (contactData.message) {
      hubspotProperties.message = contactData.message;
    }

    // Set lifecycle stage to 'lead' by default
    hubspotProperties.lifecyclestage = 'lead';
    hubspotProperties.hs_lead_status = 'NEW';

    // Create or update contact in HubSpot
    const result = await hubspot.upsertContact(hubspotProperties);

    // If there's a message, add it as a note
    if (contactData.message && result.id) {
      await hubspot.addNoteToContact(
        result.id,
        `Message from contact form: ${contactData.message}`
      );
    }

    console.log(`✅ Successfully synced contact to HubSpot: ${result.id}`);

    return {
      success: true,
      hubspotId: result.id
    };
  } catch (error) {
    console.error('❌ Error syncing contact to HubSpot:', error);

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Sync contact update to HubSpot
 */
export async function syncContactUpdateToHubSpot(
  email: string,
  updates: Partial<SyncContactData>
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!process.env.HUBSPOT_API_KEY) {
      console.warn('HubSpot API key not configured. Skipping sync.');
      return { success: false, error: 'HubSpot not configured' };
    }

    const hubspot = getHubSpotClient();

    const hubspotUpdates: any = {};

    if (updates.name) {
      const { firstname, lastname } = parseFullName(updates.name);
      hubspotUpdates.firstname = firstname;
      hubspotUpdates.lastname = lastname;
    }

    if (updates.phone) {
      hubspotUpdates.phone = updates.phone;
    }

    if (updates.address) {
      hubspotUpdates.address = updates.address;
    }

    await hubspot.updateContactByEmail(email, hubspotUpdates);

    console.log(`✅ Successfully updated contact in HubSpot: ${email}`);

    return { success: true };
  } catch (error) {
    console.error('❌ Error updating contact in HubSpot:', error);

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Sync contact stage changes to HubSpot
 */
export async function syncContactStageToHubSpot(
  email: string,
  stage: string
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!process.env.HUBSPOT_API_KEY) {
      return { success: false, error: 'HubSpot not configured' };
    }

    const hubspot = getHubSpotClient();

    // Map your stages to HubSpot lifecycle stages
    const stageMapping: Record<string, string> = {
      LEAD: 'lead',
      QUALIFIED: 'marketingqualifiedlead',
      OPPORTUNITY: 'opportunity',
      PROPOSAL: 'opportunity',
      IN_NEGOTIATION: 'opportunity',
      WON: 'customer',
      LOST: 'other'
    };

    const hubspotStage = stageMapping[stage] || 'lead';

    await hubspot.updateContactByEmail(email, {
      lifecyclestage: hubspotStage,
      hs_lead_status: stage
    });

    console.log(
      `✅ Successfully updated contact stage in HubSpot: ${email} -> ${stage}`
    );

    return { success: true };
  } catch (error) {
    console.error('❌ Error updating contact stage in HubSpot:', error);

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Batch sync multiple contacts to HubSpot
 */
export async function batchSyncContactsToHubSpot(
  contacts: SyncContactData[]
): Promise<{
  success: number;
  failed: number;
  results: Array<{ email: string; success: boolean; error?: string }>;
}> {
  const results = [];
  let successCount = 0;
  let failedCount = 0;

  for (const contact of contacts) {
    const result = await syncContactToHubSpot(contact);

    results.push({
      email: contact.email || 'no-email',
      success: result.success,
      error: result.error
    });

    if (result.success) {
      successCount++;
    } else {
      failedCount++;
    }

    // Add a small delay to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  return {
    success: successCount,
    failed: failedCount,
    results
  };
}
