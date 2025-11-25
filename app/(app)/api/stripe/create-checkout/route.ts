import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

import { stripeServer } from '@/lib/billing/stripe-server';
import { getTaxRateForCheckout, AUTOMATIC_TAX_CONFIG, TAX_ID_COLLECTION_CONFIG } from '@/lib/billing/tax-utils';

const createCheckoutSchema = z.object({
  email: z.string().email(),
  customerName: z.string().min(1)
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, customerName } = createCheckoutSchema.parse(body);

    // Check if NTCLIPBOARD_PRODUCT_PRICE_ID is configured
    if (!process.env.NTCLIPBOARD_PRODUCT_PRICE_ID) {
      return NextResponse.json(
        { error: 'Product pricing not configured' },
        { status: 500 }
      );
    }

    // Create Stripe checkout session
    let session;
    
    try {
      session = await stripeServer.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: process.env.NTCLIPBOARD_PRODUCT_PRICE_ID,
            quantity: 1
            // No manual tax_rates - let Stripe calculate based on customer location
          }
        ],
        mode: 'payment',
        customer_email: email,
        billing_address_collection: 'required', // Required for automatic tax calculation
        metadata: {
          customerName,
          productType: 'ntclipboard'
        },
        automatic_tax: AUTOMATIC_TAX_CONFIG, // Enable automatic tax based on location
        tax_id_collection: TAX_ID_COLLECTION_CONFIG,
        success_url: `${process.env.NEXT_PUBLIC_APP_URL}/purchase/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/purchase/cancelled`,
        expires_at: Math.floor(Date.now() / 1000) + 30 * 60 // 30 minutes
      });
    } catch (error) {
      console.error('Error creating checkout session with automatic tax:', error);
      throw error;
    }

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
