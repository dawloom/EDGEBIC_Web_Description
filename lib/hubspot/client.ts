/**
 * HubSpot CRM API Client
 * 
 * This module provides a client for interacting with HubSpot's CRM API.
 * It handles authentication and provides methods for creating/updating contacts.
 */

const HUBSPOT_API_BASE_URL = 'https://api.hubapi.com';

interface HubSpotContactProperties {
  email: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  company?: string;
  website?: string;
  message?: string;
  lifecyclestage?: string;
  hs_lead_status?: string;
}

interface HubSpotContact {
  properties: HubSpotContactProperties;
}

interface HubSpotResponse {
  id: string;
  properties: Record<string, string>;
  createdAt: string;
  updatedAt: string;
  archived: boolean;
}

export class HubSpotClient {
  private apiKey: string;

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error('HubSpot API key is required');
    }
    this.apiKey = apiKey;
  }

  /**
   * Create a new contact in HubSpot CRM
   */
  async createContact(
    contactData: HubSpotContactProperties
  ): Promise<HubSpotResponse> {
    const url = `${HUBSPOT_API_BASE_URL}/crm/v3/objects/contacts`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        properties: contactData
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        `HubSpot API Error: ${error.message || response.statusText}`
      );
    }

    return response.json();
  }

  /**
   * Update an existing contact in HubSpot by email
   */
  async updateContactByEmail(
    email: string,
    contactData: Partial<HubSpotContactProperties>
  ): Promise<HubSpotResponse> {
    // First, search for the contact by email
    const contactId = await this.findContactByEmail(email);

    if (!contactId) {
      throw new Error(`Contact with email ${email} not found`);
    }

    const url = `${HUBSPOT_API_BASE_URL}/crm/v3/objects/contacts/${contactId}`;

    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        properties: contactData
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        `HubSpot API Error: ${error.message || response.statusText}`
      );
    }

    return response.json();
  }

  /**
   * Create or update a contact (upsert)
   */
  async upsertContact(
    contactData: HubSpotContactProperties
  ): Promise<HubSpotResponse> {
    try {
      // Try to find existing contact
      const existingContactId = await this.findContactByEmail(
        contactData.email
      );

      if (existingContactId) {
        // Update existing contact
        return await this.updateContactByEmail(contactData.email, contactData);
      } else {
        // Create new contact
        return await this.createContact(contactData);
      }
    } catch (error) {
      // If contact doesn't exist, create it
      return await this.createContact(contactData);
    }
  }

  /**
   * Find a contact by email address
   */
  async findContactByEmail(email: string): Promise<string | null> {
    const url = `${HUBSPOT_API_BASE_URL}/crm/v3/objects/contacts/search`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        filterGroups: [
          {
            filters: [
              {
                propertyName: 'email',
                operator: 'EQ',
                value: email
              }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (data.results && data.results.length > 0) {
      return data.results[0].id;
    }

    return null;
  }

  /**
   * Get contact by ID
   */
  async getContactById(contactId: string): Promise<HubSpotResponse> {
    const url = `${HUBSPOT_API_BASE_URL}/crm/v3/objects/contacts/${contactId}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.apiKey}`
      }
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        `HubSpot API Error: ${error.message || response.statusText}`
      );
    }

    return response.json();
  }

  /**
   * Delete a contact by ID
   */
  async deleteContact(contactId: string): Promise<void> {
    const url = `${HUBSPOT_API_BASE_URL}/crm/v3/objects/contacts/${contactId}`;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${this.apiKey}`
      }
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        `HubSpot API Error: ${error.message || response.statusText}`
      );
    }
  }

  /**
   * Add a note to a contact
   */
  async addNoteToContact(
    contactId: string,
    noteContent: string
  ): Promise<void> {
    const url = `${HUBSPOT_API_BASE_URL}/crm/v3/objects/notes`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        properties: {
          hs_note_body: noteContent,
          hs_timestamp: new Date().toISOString()
        },
        associations: [
          {
            to: {
              id: contactId
            },
            types: [
              {
                associationCategory: 'HUBSPOT_DEFINED',
                associationTypeId: 202 // Contact to Note association
              }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        `HubSpot API Error: ${error.message || response.statusText}`
      );
    }
  }
}

/**
 * Get HubSpot client instance
 */
export function getHubSpotClient(): HubSpotClient {
  const apiKey = process.env.HUBSPOT_API_KEY;

  if (!apiKey) {
    throw new Error(
      'HUBSPOT_API_KEY environment variable is not set. Please add it to your .env file.'
    );
  }

  return new HubSpotClient(apiKey);
}

/**
 * Helper function to parse full name into first and last name
 */
export function parseFullName(fullName: string): {
  firstname: string;
  lastname: string;
} {
  const parts = fullName.trim().split(' ');

  if (parts.length === 1) {
    return {
      firstname: parts[0],
      lastname: ''
    };
  }

  const firstname = parts[0];
  const lastname = parts.slice(1).join(' ');

  return { firstname, lastname };
}
