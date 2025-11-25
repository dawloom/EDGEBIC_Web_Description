import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { fetchAllPages, transformPayloadPageToPost } from '@/lib/api/payload-cms';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/blog/posts
 * Fetches all blog posts from Payload CMS
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // If ID is provided, fetch single page
    if (id) {
      const PAYLOAD_API_URL = 'http://localhost:3000/api/pages';
      const response = await fetch(`${PAYLOAD_API_URL}/${id}`);

      if (!response.ok) {
        return NextResponse.json(
          { success: false, error: 'Page not found' },
          { status: 404 }
        );
      }

      const page = await response.json();
      const post = transformPayloadPageToPost(page);

      return NextResponse.json({
        success: true,
        data: post
      });
    }

    // Fetch all pages
    const pages = await fetchAllPages();
    const posts = pages.map(transformPayloadPageToPost);

    return NextResponse.json({
      success: true,
      data: posts,
      count: posts.length
    });
  } catch (error) {
    console.error('Error in blog posts API:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch blog posts'
      },
      { status: 500 }
    );
  }
}
