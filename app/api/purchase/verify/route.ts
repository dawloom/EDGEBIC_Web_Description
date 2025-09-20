import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

import { prisma } from '@/lib/db/prisma';

const verifyPurchaseSchema = z.object({
  sessionId: z.string().min(1)
});

export async function POST(request: NextRequest) {
  console.log('=== Purchase Verify API Called ===');
  console.log('Request URL:', request.url);
  console.log('Request Method:', request.method);

  // Extract session_id from URL query params if present
  const url = new URL(request.url);
  const urlSessionId = url.searchParams.get('session_id');
  console.log('Session ID from URL query params:', urlSessionId);

  console.log(
    'Request Headers:',
    Object.fromEntries(request.headers.entries())
  );

  try {
    // Log request body parsing
    console.log('Parsing request body...');
    const body = await request.json();
    console.log('Request body:', JSON.stringify(body, null, 2));
    console.log('Raw body sessionId:', body.sessionId);
    console.log('SessionId length:', body.sessionId?.length);
    console.log(
      'SessionId character codes:',
      body.sessionId?.split('').map((c: string) => c.charCodeAt(0))
    );

    // Validate request data
    console.log('Validating request data...');
    const { sessionId } = verifyPurchaseSchema.parse(body);
    console.log('Parsed sessionId:', sessionId);

    // Find the purchase by session ID
    console.log('Searching for purchase with sessionId:', sessionId);
    console.log('Database connection test - checking total purchases...');

    // First, let's check if there are any purchases at all
    const totalPurchases = await prisma.purchase.count();
    console.log('Total purchases in database:', totalPurchases);

    // Get recent purchases to see what sessionIds exist
    const recentPurchases = await prisma.purchase.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        stripeSessionId: true,
        email: true,
        status: true,
        createdAt: true
      }
    });
    console.log('Recent purchases:', JSON.stringify(recentPurchases, null, 2));

    // Now try to find the specific purchase
    const purchase = await prisma.purchase.findUnique({
      where: {
        stripeSessionId: sessionId
      }
    });

    if (!purchase) {
      console.log('Purchase not found for sessionId:', sessionId);
      console.log(
        'Available sessionIds in recent purchases:',
        recentPurchases.map((p) => p.stripeSessionId).filter(Boolean)
      );

      // Try a broader search to see if sessionId exists with different format
      const similarPurchases = await prisma.purchase.findMany({
        where: {
          stripeSessionId: {
            contains: sessionId.substring(0, 10) // Search for partial match
          }
        },
        select: {
          id: true,
          stripeSessionId: true,
          email: true,
          status: true
        }
      });
      console.log(
        'Similar purchases found:',
        JSON.stringify(similarPurchases, null, 2)
      );

      return NextResponse.json(
        {
          error: 'Purchase not found',
          debug: {
            searchedSessionId: sessionId,
            totalPurchases,
            recentSessionIds: recentPurchases
              .map((p) => p.stripeSessionId)
              .filter(Boolean),
            similarPurchases
          }
        },
        { status: 404 }
      );
    }

    console.log('Found purchase:', {
      id: purchase.id,
      email: purchase.email,
      status: purchase.status,
      createdAt: purchase.createdAt
    });

    if (purchase.status !== 'completed') {
      console.log('Purchase not completed. Status:', purchase.status);
      return NextResponse.json(
        { error: 'Purchase not completed' },
        { status: 400 }
      );
    }

    // Check if download link has expired
    if (purchase.expiresAt && purchase.expiresAt < new Date()) {
      console.log('Download link has expired. ExpiresAt:', purchase.expiresAt);
      return NextResponse.json(
        { error: 'Download link has expired' },
        { status: 410 }
      );
    }

    console.log('Purchase verification successful');
    return NextResponse.json({
      success: true,
      purchase: {
        id: purchase.id,
        email: purchase.email,
        customerName: purchase.customerName,
        downloadToken: purchase.downloadToken,
        downloadCount: purchase.downloadCount,
        maxDownloads: purchase.maxDownloads,
        expiresAt: purchase.expiresAt,
        createdAt: purchase.createdAt
      }
    });
  } catch (error) {
    console.error('=== Purchase Verify API Error ===');
    console.error('Error type:', error?.constructor?.name);
    console.error('Error message:', error?.message);
    console.error('Full error:', error);

    if (error instanceof Error) {
      console.error('Error stack:', error.stack);
    }

    if (error instanceof z.ZodError) {
      console.error('Zod validation errors:', error.errors);
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    // Check for database connection errors
    if (error?.code === 'ECONNREFUSED' || error?.code === 'ENOTFOUND') {
      console.error('Database connection error:', error);
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to verify purchase' },
      { status: 500 }
    );
  }
}

// Add GET handler for debugging
export async function GET(request: NextRequest) {
  console.log('=== Purchase Verify GET Request ===');
  console.log('This endpoint only accepts POST requests');
  console.log('Request URL:', request.url);
  console.log('Request Method:', request.method);

  return NextResponse.json(
    {
      error: 'Method not allowed',
      message: 'This endpoint only accepts POST requests',
      allowedMethods: ['POST']
    },
    { status: 405 }
  );
}
