import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import '@/app/(app)/mdx.css';

import { BlogPost } from '@/components/marketing/sections/blog-post';
import {
  fetchAllPosts,
  fetchPostBySlug,
  transformPayloadPostToPost
} from '@/lib/api/payload-cms';
import { getBaseUrl } from '@/lib/urls/get-base-url';
import type { NextPageProps } from '@/types/next-page-props';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const dynamicParams = true;

async function getBlogPostFromParams(props: NextPageProps) {
  const params = await props.params;
  if (!params) {
    console.log('[Blog Post] No params found');
    return null;
  }
  const slug =
    (Array.isArray(params.slug) ? params.slug?.join('/') : params.slug) || '';

  console.log('[Blog Post] Attempting to fetch slug:', slug);

  // Try fetching from Posts collection first
  const payloadPost = await fetchPostBySlug(slug);

  if (!payloadPost) {
    console.log(
      '[Blog Post] Post not found in Posts collection, trying Pages...'
    );
    // Try fetching from Pages collection
    try {
      const PAYLOAD_URL =
        process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3001';
      const url = `${PAYLOAD_URL}/api/pages?where[slug][equals]=${slug}&limit=1`;
      console.log('[Blog Post] Fetching from:', url);

      const response = await fetch(url, {
        next: { revalidate: 60 }
      });

      if (response.ok) {
        const data = await response.json();
        console.log(
          '[Blog Post] Pages response:',
          data.totalDocs,
          'docs found'
        );

        if (data.docs && data.docs.length > 0) {
          console.log('[Blog Post] Found page:', data.docs[0].title);
          return transformPayloadPostToPost(data.docs[0]);
        }
      } else {
        console.error(
          '[Blog Post] Pages fetch failed:',
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error('[Blog Post] Error fetching page:', error);
    }

    console.log('[Blog Post] No post found for slug:', slug);
    return null;
  }

  console.log('[Blog Post] Found post:', payloadPost.title);
  return transformPayloadPostToPost(payloadPost);
}

export async function generateMetadata(
  props: NextPageProps
): Promise<Metadata> {
  const post = await getBlogPostFromParams(props);
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `${getBaseUrl()}${post.slug}`
    }
  };
}

export async function generateStaticParams() {
  try {
    const posts = await fetchAllPosts();
    return posts.map((post) => ({
      slug: post.slug.replace('/blog/', '').split('/')
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function BlogPostPage(props: NextPageProps) {
  const post = await getBlogPostFromParams(props);
  if (!post) {
    return notFound();
  }
  return <BlogPost post={post} />;
}
