import 'server-only';

import { unstable_cache as cache } from 'next/cache';
import { redirect } from 'next/navigation';

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  OrganizationCacheKey
} from '@/data/caching';
import { dedupedAuth } from '@/lib/auth';
import { getLoginRedirect } from '@/lib/auth/redirect';
import { checkSession } from '@/lib/auth/session';
import { prisma } from '@/lib/db/prisma';

export async function getYouTubeVideo(): Promise<string | null> {
  const session = await dedupedAuth();
  if (!checkSession(session)) {
    return redirect(getLoginRedirect());
  }

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
