'use server';

import Stripe from 'stripe';

import { authActionClient } from '@/actions/safe-action';
import { Routes } from '@/constants/routes';
import { BillingUnit } from '@/lib/billing/billing-unit';
import { stripeServer } from '@/lib/billing/stripe-server';
import {
  AUTOMATIC_TAX_CONFIG,
  getTaxRateForCheckout,
  TAX_ID_COLLECTION_CONFIG
} from '@/lib/billing/tax-utils';
import { prisma } from '@/lib/db/prisma';
import { getBaseUrl } from '@/lib/urls/get-base-url';
import { GatewayError, NotFoundError } from '@/lib/validation/exceptions';

export const createCheckoutSession = authActionClient
  .metadata({ actionName: 'createCheckoutSession' })
  .action(async ({ ctx: { session } }) => {
    const organization = await prisma.organization.findFirst({
      where: { id: session.user.organizationId },
      select: { stripeCustomerId: true, _count: { select: { users: true } } }
    });
    if (!organization) {
      throw new NotFoundError('Organization not found');
    }
    if (!organization.stripeCustomerId) {
      throw new NotFoundError('Stripe customer not found');
    }
    if (!process.env.PRO_PRODUCT_PRICE_ID) {
      throw new NotFoundError('No PRO_PRODUCT_PRICE_ID found');
    }

    let quantity = 1;
    if (process.env.BILLING_UNIT === BillingUnit.PerSeat) {
      quantity = organization._count.users;
    }
    if (process.env.BILLING_UNIT === BillingUnit.PerOrganization) {
      quantity = 1;
    }

    try {
      let checkoutSession: Stripe.Checkout.Session;

      const params: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ['card'],
        line_items: [
          {
            price: process.env.PRO_PRODUCT_PRICE_ID,
            quantity
            // No manual tax_rates - let Stripe calculate based on customer location
          }
        ],
        mode: 'subscription',
        customer: organization.stripeCustomerId,
        automatic_tax: AUTOMATIC_TAX_CONFIG, // Enable automatic tax based on location
        tax_id_collection: TAX_ID_COLLECTION_CONFIG,
        success_url: `${getBaseUrl()}${Routes.Billing}?status=success&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${getBaseUrl()}${Routes.Billing}?status=canceled`,
        customer_update: {
          name: 'auto',
          address: 'auto'
        }
      };

      checkoutSession = await stripeServer.checkout.sessions.create(params);

      return {
        session: {
          id: checkoutSession.id
        }
      };
    } catch (error) {
      if (error instanceof Stripe.errors.StripeError) {
        throw new GatewayError(
          `Failed to update billing address: ${error.message}`
        );
      }
      throw error;
    }
  });
