import { headers } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';
import type Stripe from 'stripe';

import { stripeServer } from '@/lib/billing/stripe-server';
import { updateOrganizationSubscriptionPlan } from '@/lib/billing/update-organization-subscription-plan';
import { prisma } from '@/lib/db/prisma';
import { LicenseKeyGenerator } from '@/lib/license/license-key-generator';

function extractCustomerId(
  customer: string | Stripe.Customer | Stripe.DeletedCustomer | null
): string | null {
  if (!customer) {
    return null;
  }
  if (typeof customer === 'string') {
    return customer;
  }
  if (customer && typeof customer === 'object' && 'id' in customer) {
    return customer.id;
  }

  return null;
}

function subscriptionIdNotFound(): NextResponse {
  return NextResponse.json(
    { error: 'Subscription ID not found' },
    {
      status: 400,
      headers: { 'Cache-Control': 'no-store' }
    }
  );
}

function customerIdNotFound(): NextResponse {
  return NextResponse.json(
    { error: 'Customer ID not found' },
    {
      status: 400,
      headers: { 'Cache-Control': 'no-store' }
    }
  );
}

function webhookError(): NextResponse {
  return NextResponse.json(
    { error: 'Webhook error: "Webhook handler failed. View logs."' },
    {
      status: 500,
      headers: { 'Cache-Control': 'no-store' }
    }
  );
}

function webhookSuccess(): NextResponse {
  return NextResponse.json({
    received: true,
    message: 'Webhook received.',
    status: 200,
    headers: { 'Cache-Control': 'no-store' }
  });
}

const relevantEvents = new Set([
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted',
  'checkout.session.completed'
]);

export async function POST(req: NextRequest): Promise<Response> {
  const headersList = await headers();
  const sig = headersList.get('stripe-signature');
  if (!sig) {
    console.error('Missing stripe-signature');
    return webhookError();
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error('Missing stripe webhook secret');
    return webhookError();
  }

  let event: Stripe.Event;

  try {
    const rawBody = await req.text();
    event = stripeServer.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error(err);
    return webhookError();
  }

  if (!event || !event.type) {
    console.error('Failed to construct event');
    return webhookError();
  }

  if (relevantEvents.has(event.type)) {
    try {
      switch (event.type) {
        case 'customer.subscription.created':
        case 'customer.subscription.updated':
        case 'customer.subscription.deleted': {
          const subscription = event.data.object;
          if (!subscription.id) {
            return subscriptionIdNotFound();
          }

          const stripeCustomerId = extractCustomerId(subscription.customer);
          if (!stripeCustomerId) {
            return customerIdNotFound();
          }

          await updateOrganizationSubscriptionPlan(stripeCustomerId);

          break;
        }
        case 'checkout.session.completed': {
          const checkoutSession = event.data.object;

          if (checkoutSession.mode === 'payment') {
            // Handle one-time payment for NTClipboard
            try {
              const customerEmail = checkoutSession.customer_email;
              const customerName = checkoutSession.metadata?.customerName;
              const sessionId = checkoutSession.id;
              const paymentIntentId = checkoutSession.payment_intent as string;

              if (!customerEmail || !customerName) {
                console.error(
                  'Missing customer information in checkout session'
                );
                break;
              }

              // Get the actual amount from the checkout session
              const lineItems = checkoutSession.line_items?.data || [];
              const totalAmount = checkoutSession.amount_total || 0;
              const subtotalAmount = checkoutSession.amount_subtotal || 0;
              const taxAmount = totalAmount - subtotalAmount;
              const currency = checkoutSession.currency || 'usd';

              console.log(
                `Payment processed - Total: ${totalAmount}, Subtotal: ${subtotalAmount}, Tax: ${taxAmount}`
              );

              // Generate license key
              const tempPurchaseId = `temp_${Date.now()}`;
              const licenseKey = LicenseKeyGenerator.generateLicenseKey(
                tempPurchaseId,
                customerEmail
              );
              const licenseKeyHash =
                LicenseKeyGenerator.hashLicenseKey(licenseKey);

              // Create purchase record with license key
              const purchase = await prisma.purchase.create({
                data: {
                  email: customerEmail,
                  customerName: customerName,
                  stripeSessionId: sessionId,
                  stripePaymentId: paymentIntentId,
                  amount: totalAmount,
                  currency: currency,
                  status: 'completed',
                  licenseKey: licenseKey,
                  licenseKeyHash: licenseKeyHash,
                  licenseStatus: 'inactive',
                  expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
                }
              });

              // Update license key with actual purchase ID
              const finalLicenseKey = LicenseKeyGenerator.generateLicenseKey(
                purchase.id,
                customerEmail
              );
              const finalLicenseKeyHash =
                LicenseKeyGenerator.hashLicenseKey(finalLicenseKey);

              await prisma.purchase.update({
                where: { id: purchase.id },
                data: {
                  licenseKey: finalLicenseKey,
                  licenseKeyHash: finalLicenseKeyHash
                }
              });

              console.log(
                `Purchase completed for ${customerEmail} with license key generated`
              );
            } catch (error) {
              console.error('Error creating purchase record:', error);
            }
          } else if (checkoutSession.mode === 'subscription') {
            // Handle subscription payments (existing logic)
            if (!checkoutSession.subscription) {
              return subscriptionIdNotFound();
            }

            const subscriptionId = Array.isArray(checkoutSession.subscription)
              ? checkoutSession.subscription[0]
              : checkoutSession.subscription;
            if (!subscriptionId) {
              return subscriptionIdNotFound();
            }

            const stripeCustomerId = extractCustomerId(
              checkoutSession.customer
            );
            if (!stripeCustomerId) {
              return customerIdNotFound();
            }

            await updateOrganizationSubscriptionPlan(stripeCustomerId);
          }
          break;
        }
        default: {
          console.warn(`Unhandled event type ${event.type}`);
        }
      }
    } catch (err) {
      console.error(err);
      return webhookError();
    }
  }

  return webhookSuccess();
}
