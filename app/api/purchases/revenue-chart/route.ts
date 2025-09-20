import { NextResponse } from 'next/server';

import { getRevenueChartData } from '@/data/purchases/get-purchases';

export async function GET() {
  try {
    const chartData = await getRevenueChartData();

    return NextResponse.json(chartData);
  } catch (error) {
    console.error('Error fetching revenue chart data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch revenue chart data' },
      { status: 500 }
    );
  }
}
