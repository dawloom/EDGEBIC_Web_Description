# HubSpot CRM Integration - Quick Reference

## 🚀 Quick Setup (5 Minutes)

### Step 1: Get HubSpot API Key
1. Go to [HubSpot Settings](https://app.hubspot.com/settings/) → **Integrations** → **Private Apps**
2. Click **Create a private app**
3. Enable scopes: `crm.objects.contacts.read` and `crm.objects.contacts.write`
4. Copy your **Access Token**

### Step 2: Configure Your App
```bash
# Add to .env file
HUBSPOT_API_KEY=your_hubspot_access_token_here
```

### Step 3: Test Connection
```bash
npm run test:hubspot
```

✅ **Done!** Your contacts will now automatically sync to HubSpot.

---

## 📁 Files Created

```
lib/
  hubspot/
    client.ts       # HubSpot API client
    sync.ts         # Sync functions
    index.ts        # Exports

app/
  api/
    contact/
      route.ts      # Public contact form API

components/
  marketing/
    hubspot-contact-form.tsx  # React contact form component

sync-contacts-to-hubspot.js   # Batch sync script
test-hubspot-connection.ts    # Connection test
HUBSPOT_INTEGRATION.md        # Full documentation
```

---

## 🔧 Available Commands

```bash
# Test HubSpot connection
npm run test:hubspot

# Sync all existing contacts to HubSpot
npm run sync:hubspot
```

---

## 💡 Usage Examples

### 1. Automatic Sync (Already Working!)

When you create or update contacts in your app, they automatically sync to HubSpot:

```typescript
// This now automatically syncs to HubSpot
await addContact({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  record: 'PERSON'
});
```

### 2. Public Contact Form API

Use in your marketing pages:

```javascript
// POST /api/contact
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Jane Doe',
    email: 'jane@example.com',
    message: 'Interested in your product'
  })
});
```

### 3. Manual Sync

```typescript
import { syncContactToHubSpot } from '@/lib/hubspot';

const result = await syncContactToHubSpot({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  record: 'PERSON'
});
```

### 4. React Contact Form

```tsx
import { HubSpotContactForm } from '@/components/marketing/hubspot-contact-form';

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <HubSpotContactForm />
    </div>
  );
}
```

---

## 🔍 What Gets Synced?

| Action | What Happens |
|--------|--------------|
| **Contact Created** | → New contact in HubSpot |
| **Contact Updated** | → Updates HubSpot contact |
| **Stage Changed** | → Updates lifecycle stage |
| **Form Submitted** | → Creates contact with message as note |

---

## 🎯 Field Mapping

```
Your App          →  HubSpot
─────────────────────────────────
name              →  firstname + lastname
email             →  email
phone             →  phone
address           →  address
record: COMPANY   →  company
message           →  Note (attached)
stage: LEAD       →  lifecyclestage: lead
stage: WON        →  lifecyclestage: customer
```

---

## ⚠️ Important Notes

1. **Email Required**: HubSpot needs an email for all contacts
2. **Non-Blocking**: Sync failures won't break your app
3. **Automatic**: No manual intervention needed
4. **Safe**: Failed syncs are logged but don't affect your database

---

## 🆘 Troubleshooting

### "HubSpot API key not configured"
→ Add `HUBSPOT_API_KEY` to `.env` and restart server

### "Email is required"
→ Ensure contacts have valid email addresses

### Test not passing?
→ Check API key has correct scopes in HubSpot

---

## 📚 Full Documentation

See [HUBSPOT_INTEGRATION.md](./HUBSPOT_INTEGRATION.md) for complete guide.

---

**🎉 That's it! Your contacts are now syncing to HubSpot automatically.**
