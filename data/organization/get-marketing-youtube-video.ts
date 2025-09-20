import 'server-only';

import { unstable_cache as cache } from 'next/cache';

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  OrganizationCacheKey
} from '@/data/caching';
import { dedupedAuth } from '@/lib/auth';
import { checkSession } from '@/lib/auth/session';
import { prisma } from '@/lib/db/prisma';

export async function getMarketingYouTubeVideo(): Promise<string | null> {
  // First try to get from the current user's organization if logged in
  try {
    const session = await dedupedAuth();
    if (checkSession(session)) {
      return cache(
        async () => {
          const organization = await prisma.organization.findFirst({
            where: { id: session.user.organizationId },
            select: {
              youTubeChannel: true
            }
          });

          return organization?.youTubeChannel || null;
        },
        Caching.createOrganizationKeyParts(
          OrganizationCacheKey.SocialMedia,
          session.user.organizationId
        ),
        {
          revalidate: defaultRevalidateTimeInSeconds,
          tags: [
            Caching.createOrganizationTag(
              OrganizationCacheKey.SocialMedia,
              session.user.organizationId
            )
          ]
        }
      )();
    }
  } catch (error) {
    // User not logged in or no session, continue to fallback
  }

  // Fallback: Get the first organization's YouTube video or return default
  return cache(
    async () => {
      const organization = await prisma.organization.findFirst({
        where: {
          youTubeChannel: {
            not: null
          }
        },
        select: {
          youTubeChannel: true
        }
      });

      return organization?.youTubeChannel || null;
    },
    ['marketing-youtube-video'],
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: ['marketing-youtube-video']
    }
  )();
}
