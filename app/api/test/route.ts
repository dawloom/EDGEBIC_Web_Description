import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  console.log('=== Test API Endpoint Called ===');
  console.log('Request URL:', request.url);
  console.log('Request Method:', request.method);
  console.log('Timestamp:', new Date().toISOString());

  return NextResponse.json({
    success: true,
    message: 'API routing is working correctly',
    timestamp: new Date().toISOString(),
    url: request.url,
    method: request.method
  });
}

export async function POST(request: NextRequest) {
  console.log('=== Test API POST Endpoint Called ===');
  console.log('Request URL:', request.url);
  console.log('Request Method:', request.method);

  try {
    const body = await request.json();
    console.log('Request body:', JSON.stringify(body, null, 2));

    return NextResponse.json({
      success: true,
      message: 'POST request received successfully',
      receivedData: body,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error parsing request body:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to parse request body',
        timestamp: new Date().toISOString()
      },
      { status: 400 }
    );
  }
}
