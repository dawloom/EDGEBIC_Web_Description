# Payload CMS Integration Guide

This guide explains how the Payload CMS integration works with the EDGEBIC blog.

## Overview

The blog page now fetches data from Payload CMS instead of using local MDX files. The integration is designed to be flexible and maintain the existing UI while pulling dynamic content from the CMS.

## API Endpoints

### Payload CMS Endpoints

- **All Pages**: `http://localhost:3000/api/pages`
- **Single Page**: `http://localhost:3000/api/pages/{id}`
- **Query by Slug**: `http://localhost:3000/api/pages?where[slug][equals]={slug}`

### Internal API Routes

- **All Posts**: `GET /api/blog/posts`
- **Single Post**: `GET /api/blog/posts?id={id}`

## File Structure

```
├── lib/api/
│   └── payload-cms.ts           # Utility functions for Payload CMS
├── app/api/blog/posts/
│   └── route.ts                 # API route for blog posts
├── components/marketing/sections/
│   └── blog-posts.tsx           # Updated to fetch from Payload CMS
└── scripts/
    └── test-payload-api.js      # Test script for API integration
```

## Data Structure

### Payload CMS Response Format

```json
{
  "docs": [
    {
      "id": "string",
      "title": "string",
      "slug": "string",
      "description": "string",
      "category": "string",
      "publishedDate": "ISO 8601 date string",
      "hero": {
        "type": "string",
        "heading": "string",
        "description": "string",
        "image": {
          "url": "string",
          "alt": "string"
        }
      },
      "links": [
        {
          "label": "string",
          "url": "string",
          "type": "string"
        }
      ],
      "author": {
        "name": "string",
        "avatar": "string"
      },
      "createdAt": "ISO 8601 date string",
      "updatedAt": "ISO 8601 date string"
    }
  ],
  "totalDocs": 0,
  "limit": 10,
  "totalPages": 1,
  "page": 1
}
```

### Transformed Post Format

The `transformPayloadPageToPost()` function converts Payload data to match the existing blog post structure:

```typescript
{
  id: string;
  slug: string;              // Prefixed with /blog/
  title: string;
  description: string;
  published: string;         // ISO 8601 date
  category: string;
  author: {
    name: string;
    avatar?: string;
  };
  hero?: object;
  links?: array;
}
```

## Key Functions

### `lib/api/payload-cms.ts`

- **`fetchAllPages()`** - Fetches all pages from Payload CMS
- **`fetchPageById(id)`** - Fetches a single page by ID
- **`fetchPageBySlug(slug)`** - Fetches a single page by slug
- **`transformPayloadPageToPost(page)`** - Transforms Payload data to blog post format

### Caching

All fetch requests use Next.js revalidation with a 60-second cache:

```typescript
fetch(url, {
  next: { revalidate: 60 }
});
```

## Usage

### Display All Posts

The blog page at `/blog` automatically fetches and displays all posts from Payload CMS.

```typescript
// components/marketing/sections/blog-posts.tsx
const pages = await fetchAllPages();
const posts = pages.map(transformPayloadPageToPost);
```

### Fetch Single Post

```typescript
import { fetchPageById } from '@/lib/api/payload-cms';

const page = await fetchPageById('page-id');
const post = transformPayloadPageToPost(page);
```

### Using the API Route

```bash
# Fetch all posts
curl http://localhost:3001/api/blog/posts

# Fetch single post
curl http://localhost:3001/api/blog/posts?id=page-id
```

## Testing

Run the test script to verify Payload CMS connectivity:

```bash
node scripts/test-payload-api.js
```

This will:

1. Fetch all pages from Payload CMS
2. Display the response structure
3. Show a sample page data
4. Test fetching a single page by ID
5. Provide troubleshooting tips if errors occur

## Error Handling

The integration includes robust error handling:

- **Connection Errors**: Returns empty array, displays "No posts found" message
- **Missing Data**: Provides sensible defaults (e.g., "Unknown Author", "General" category)
- **Invalid Responses**: Logs errors to console and gracefully degrades

## Customization

### Change API URL

Update the constant in `lib/api/payload-cms.ts`:

```typescript
const PAYLOAD_API_URL = 'https://your-production-cms.com/api/pages';
```

### Modify Data Mapping

Edit the `transformPayloadPageToPost()` function to match your Payload CMS schema:

```typescript
export function transformPayloadPageToPost(page: PayloadPage) {
  return {
    // Customize field mapping here
    title: page.customTitle || page.title
    // ...
  };
}
```

### Adjust Cache Duration

Modify the revalidate time in fetch calls:

```typescript
fetch(url, {
  next: { revalidate: 3600 } // Cache for 1 hour
});
```

## Payload CMS Fields Mapping

| Payload Field                       | Blog Post Field | Fallback                 |
| ----------------------------------- | --------------- | ------------------------ |
| `id`                                | `id`            | -                        |
| `title`                             | `title`         | "Untitled"               |
| `slug`                              | `slug`          | -                        |
| `description` or `hero.description` | `description`   | ""                       |
| `publishedDate` or `createdAt`      | `published`     | Current date             |
| `category`                          | `category`      | "General"                |
| `author`                            | `author`        | {name: "Unknown Author"} |
| `hero`                              | `hero`          | -                        |
| `links`                             | `links`         | -                        |

## Troubleshooting

### No posts appearing on blog page

1. Verify Payload CMS is running: `http://localhost:3000`
2. Check API endpoint: `http://localhost:3000/api/pages`
3. Run test script: `node scripts/test-payload-api.js`
4. Check browser console for errors

### CORS errors

If you see CORS errors, ensure Payload CMS allows requests from your Next.js app domain.

### Slow page loads

- Adjust cache duration in fetch calls
- Consider implementing pagination
- Use Next.js static generation for better performance

## Production Deployment

Before deploying:

1. Update `PAYLOAD_API_URL` to production URL
2. Add authentication if needed
3. Configure environment variables
4. Test with production Payload CMS instance
5. Verify caching strategy meets your needs

## Next Steps

- Add pagination support
- Implement search functionality
- Add filtering by category
- Create individual post detail pages
- Add image optimization for hero images
- Implement draft preview functionality
