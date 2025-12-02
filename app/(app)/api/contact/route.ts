/**
 * Public Contact Form API Route
 *
 * This route handles contact form submissions from your marketing pages
 * and automatically syncs them to HubSpot CRM.
 *
 * POST /api/contact
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

import { syncContactToHubSpot } from '@/lib/hubspot';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255),
  email: z.string().email('Valid email is required'),
  phone: z.string().max(32).optional(),
  company: z.string().max(255).optional(),
  message: z.string().max(5000).optional()
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate input
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid input',
          details: validationResult.error.errors
        },
        { status: 400 }
      );
    }

    const { name, email, phone, company, message } = validationResult.data;

    // Sync to HubSpot CRM
    const hubspotResult = await syncContactToHubSpot({
      name,
      email,
      phone: phone || null,
      record: company ? 'COMPANY' : 'PERSON',
      message
    });

    if (hubspotResult.success) {
      return NextResponse.json(
        {
          success: true,
          message: 'Contact submitted successfully',
          hubspotId: hubspotResult.hubspotId
        },
        { status: 200 }
      );
    } else {
      // Log the error but return success to the user
      console.error('HubSpot sync failed:', hubspotResult.error);

      return NextResponse.json(
        {
          success: true,
          message: 'Contact submitted successfully',
          warning: 'CRM sync pending'
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error'
      },
      { status: 500 }
    );
  }
}

// Optional: Add rate limiting
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
