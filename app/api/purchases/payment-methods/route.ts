import { NextResponse } from 'next/server';

import { getPaymentMethodsData } from '@/data/purchases/get-purchases';

export async function GET() {
  try {
    const paymentMethods = await getPaymentMethodsData();

    return NextResponse.json(paymentMethods);
  } catch (error) {
    console.error('Error fetching payment methods data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch payment methods data' },
      { status: 500 }
    );
  }
}
