import { NextResponse } from 'next/server';

import { getPurchaseStats } from '@/data/purchases/get-purchases';

export async function GET() {
  try {
    const stats = await getPurchaseStats();

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching purchase stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch purchase stats' },
      { status: 500 }
    );
  }
}
