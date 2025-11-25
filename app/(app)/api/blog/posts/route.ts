import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { fetchAllPosts, fetchPostById, transformPayloadPostToPost } from '@/lib/api/payload-cms';

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

    // If ID is provided, fetch single post
    if (id) {
      const post = await fetchPostById(id);

      if (!post) {
        return NextResponse.json(
          { success: false, error: 'Post not found' },
          { status: 404 }
        );
      }

      const transformedPost = transformPayloadPostToPost(post);

      return NextResponse.json({
        success: true,
        data: transformedPost
      });
    }

    // Fetch all posts
    const posts = await fetchAllPosts();
    const transformedPosts = posts.map(transformPayloadPostToPost);

    return NextResponse.json({
      success: true,
      data: transformedPosts,
      count: transformedPosts.length
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
