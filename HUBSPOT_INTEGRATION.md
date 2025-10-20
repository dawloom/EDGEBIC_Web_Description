# HubSpot CRM Integration Guide

This guide explains how to integrate your application with HubSpot CRM to automatically sync contact data.

## 🚀 Quick Start

### 1. Get Your HubSpot API Key

1. Log in to your [HubSpot account](https://app.hubspot.com/)
2. Click on **Settings** (gear icon) in the top navigation
3. Navigate to **Integrations** → **Private Apps**
4. Click **Create a private app**
5. Give your app a name (e.g., "NTClipboard Integration")
6. Go to the **Scopes** tab and enable these permissions:
   - `crm.objects.contacts.read`
   - `crm.objects.contacts.write`
   - `crm.schemas.contacts.read`
   - `crm.schemas.contacts.write`
   - `crm.objects.notes.read` (optional, for adding notes)
   - `crm.objects.notes.write` (optional, for adding notes)
7. Click **Create app**
8. Copy the **Access Token** (this is your API key)

### 2. Configure Your Environment

Add your HubSpot API key to your `.env` file:

```bash
HUBSPOT_API_KEY=your_hubspot_private_app_access_token
```

### 3. Test the Integration

Start your development server:

```bash
npm run dev
```

Create a new contact in your application - it will automatically sync to HubSpot!

## 📋 Features

### Automatic Synchronization

The integration automatically syncs contact data to HubSpot when:

1. **New Contact Created** - Syncs immediately when a contact is added
2. **Contact Updated** - Syncs when contact properties are modified
3. **Stage Changed** - Updates the lifecycle stage in HubSpot

### Supported Fields

The following fields are synced to HubSpot:

| Your App Field | HubSpot Field | Description |
|----------------|---------------|-------------|
| `name` | `firstname` + `lastname` | Automatically split into first/last name |
| `email` | `email` | Required for HubSpot sync |
| `phone` | `phone` | Optional phone number |
| `address` | `address` | Optional address |
| `record` (COMPANY) | `company` | Company name if record type is company |
| `message` | Note | Added as a note attached to the contact |

### Stage Mapping

Your contact stages are mapped to HubSpot lifecycle stages:

| Your Stage | HubSpot Lifecycle Stage |
|------------|-------------------------|
| LEAD | lead |
| QUALIFIED | marketingqualifiedlead |
| OPPORTUNITY | opportunity |
| PROPOSAL | opportunity |
| IN_NEGOTIATION | opportunity |
| WON | customer |
| LOST | other |

## 🔧 Usage Examples

### Manual Sync Functions

You can manually sync contacts using the provided functions:

```typescript
import { syncContactToHubSpot } from '@/lib/hubspot';

// Sync a single contact
const result = await syncContactToHubSpot({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  record: 'PERSON',
  message: 'Interested in our product'
});

if (result.success) {
  console.log('Synced to HubSpot with ID:', result.hubspotId);
}
```

### Update a Contact

```typescript
import { syncContactUpdateToHubSpot } from '@/lib/hubspot';

await syncContactUpdateToHubSpot('john@example.com', {
  name: 'John Smith',
  phone: '+0987654321'
});
```

### Update Contact Stage

```typescript
import { syncContactStageToHubSpot } from '@/lib/hubspot';

await syncContactStageToHubSpot('john@example.com', 'WON');
```

### Batch Sync Existing Contacts

To sync all existing contacts to HubSpot, run:

```bash
node sync-contacts-to-hubspot.js
```

This script will:
- Fetch all contacts from your database
- Sync them to HubSpot in batches
- Show a progress report with success/failure counts

## 🌐 Public Contact Form API

Use the public API endpoint to submit contacts from your marketing pages:

### Endpoint

```
POST /api/contact
```

### Request Body

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+1234567890",
  "company": "Acme Inc",
  "message": "I'm interested in learning more about your product"
}
```

### Example Usage

```javascript
// Frontend form submission
async function submitContactForm(formData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message
    })
  });

  const result = await response.json();
  
  if (result.success) {
    console.log('Contact submitted successfully!');
  }
}
```

### Response

```json
{
  "success": true,
  "message": "Contact submitted successfully",
  "hubspotId": "12345678"
}
```

## 🛠️ Advanced Configuration

### Custom Field Mapping

To add custom fields, edit `lib/hubspot/sync.ts`:

```typescript
// Add your custom fields
hubspotProperties.custom_field = contactData.customField;
```

### Error Handling

The integration is designed to be non-blocking. If HubSpot sync fails:

1. The error is logged to the console
2. Contact creation/update in your database still succeeds
3. You can retry syncing later using the batch sync script

### Rate Limiting

HubSpot has API rate limits:
- **Free & Starter**: 100 requests per 10 seconds
- **Professional & Enterprise**: Higher limits

The batch sync script includes a 100ms delay between requests to avoid hitting rate limits.

## 🔍 Troubleshooting

### "HubSpot API key not configured"

Make sure you've added `HUBSPOT_API_KEY` to your `.env` file and restarted your server.

### "Email is required"

HubSpot requires an email address for all contacts. Ensure your contacts have valid email addresses.

### "Contact not found"

When updating a contact, if it doesn't exist in HubSpot, the sync will attempt to create it instead.

### Checking HubSpot Logs

1. Go to your HubSpot account
2. Navigate to **Settings** → **Integrations** → **Private Apps**
3. Click on your app
4. View the **Recent API calls** tab to see request logs

## 📊 Monitoring

Monitor sync operations in your application logs:

```bash
# Look for these log messages:
✅ Successfully synced contact to HubSpot: [ID]
✅ Successfully updated contact in HubSpot: [email]
❌ Error syncing contact to HubSpot: [error message]
```

## 🔐 Security Best Practices

1. **Never commit your API key** - Keep it in `.env` file only
2. **Use environment variables** - Different keys for dev/staging/production
3. **Rotate keys regularly** - Generate new keys periodically in HubSpot
4. **Monitor API usage** - Check HubSpot dashboard for unusual activity

## 📚 Additional Resources

- [HubSpot CRM API Documentation](https://developers.hubspot.com/docs/api/crm/contacts)
- [HubSpot Private Apps Guide](https://developers.hubspot.com/docs/api/private-apps)
- [HubSpot API Rate Limits](https://developers.hubspot.com/docs/api/usage-details)

## 🆘 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review your HubSpot API logs
3. Check your application console logs
4. Verify your API key has the correct permissions

## 🎯 Next Steps

1. **Set up HubSpot Workflows** - Create automated workflows in HubSpot based on contact properties
2. **Add Custom Properties** - Define custom contact properties in HubSpot and map them
3. **Set up Email Campaigns** - Use HubSpot's marketing tools with your synced contacts
4. **Create Reports** - Build custom reports in HubSpot using your contact data

---

**Happy Syncing! 🚀**
