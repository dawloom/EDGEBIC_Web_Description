import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  console.log('=== Purchase Debug GET Called ===');
  return NextResponse.json({
    success: true,
    message: 'Purchase API routing is working',
    timestamp: new Date().toISOString()
  });
}

export async function POST(request: NextRequest) {
  console.log('=== Purchase Debug POST Called ===');

  try {
    const body = await request.json();
    console.log('Request body received:', body);

    return NextResponse.json({
      success: true,
      message: 'Purchase API POST is working',
      receivedData: body,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in debug endpoint:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to parse request body',
      timestamp: new Date().toISOString()
    });
  }
}
