/**
 * Payload CMS API utility functions
 */

const PAYLOAD_API_URL = 'http://localhost:3000/api/pages';

export interface PayloadPage {
  id: string | number;
  title: string;
  slug: string;
  hero?: {
    type?: string;
    richText?: any;
    links?: Array<{
      link?: {
        type?: string;
        url?: string;
        label?: string;
        newTab?: boolean;
      };
    }>;
    media?: any;
  };
  layout?: any[];
  meta?: {
    title?: string;
    description?: string;
    image?: any;
  };
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  _status?: string;
  category?: string;
  description?: string;
  author?: {
    name?: string;
    avatar?: string;
  };
}

export interface PayloadResponse {
  docs: PayloadPage[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

/**
 * Fetch all pages from Payload CMS
 */
export async function fetchAllPages(): Promise<PayloadPage[]> {
  try {
    const response = await fetch(PAYLOAD_API_URL, {
      next: { revalidate: 60 } // Cache for 60 seconds
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch pages: ${response.statusText}`);
    }

    const data: PayloadResponse = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error('Error fetching pages from Payload CMS:', error);
    return [];
  }
}

/**
 * Fetch a single page by ID from Payload CMS
 */
export async function fetchPageById(id: string): Promise<PayloadPage | null> {
  try {
    const response = await fetch(`${PAYLOAD_API_URL}/${id}`, {
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch page ${id}: ${response.statusText}`);
    }

    const data: PayloadPage = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching page ${id} from Payload CMS:`, error);
    return null;
  }
}

/**
 * Fetch a single page by slug from Payload CMS
 */
export async function fetchPageBySlug(slug: string): Promise<PayloadPage | null> {
  try {
    const response = await fetch(`${PAYLOAD_API_URL}?where[slug][equals]=${slug}&limit=1`, {
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch page with slug ${slug}: ${response.statusText}`);
    }

    const data: PayloadResponse = await response.json();
    return data.docs[0] || null;
  } catch (error) {
    console.error(`Error fetching page with slug ${slug} from Payload CMS:`, error);
    return null;
  }
}

/**
 * Transform Payload page to blog post format
 */
export function transformPayloadPageToPost(page: PayloadPage) {
  return {
    id: page.id,
    slug: `/blog/${page.slug}`,
    title: page.title || 'Untitled',
    description: page.description || page.meta?.description || '',
    published: page.publishedAt || page.createdAt || new Date().toISOString(),
    category: page.category || 'General',
    author: page.author || {
      name: 'Unknown Author',
      avatar: undefined
    },
    hero: page.hero,
    links: page.hero?.links || []
  };
}
