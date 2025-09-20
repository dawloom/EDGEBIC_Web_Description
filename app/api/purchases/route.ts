import { NextRequest, NextResponse } from 'next/server';

import { getPurchases } from '@/data/purchases/get-purchases';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const searchTerm = searchParams.get('search') || '';

    const purchases = await getPurchases(searchTerm);

    return NextResponse.json(purchases);
  } catch (error) {
    console.error('Error fetching purchases:', error);
    return NextResponse.json(
      { error: 'Failed to fetch purchases' },
      { status: 500 }
    );
  }
}
