'use server';

import { revalidateTag } from 'next/cache';

import { authActionClient } from '@/actions/safe-action';
import { Caching, OrganizationCacheKey } from '@/data/caching';
import { prisma } from '@/lib/db/prisma';
import { NotFoundError } from '@/lib/validation/exceptions';
import { markContactAsReadSchema } from '@/schemas/contacts/mark-contact-as-read-schema';

export const markContactAsRead = authActionClient
  .metadata({ actionName: 'markContactAsRead' })
  .schema(markContactAsReadSchema)
  .action(async ({ parsedInput, ctx: { session } }) => {
    const contact = await prisma.contact.findFirst({
      where: {
        organizationId: session.user.organizationId,
        id: parsedInput.id
      },
      select: {
        id: true,
        isRead: true
      }
    });

    if (!contact) {
      throw new NotFoundError('Contact not found');
    }

    // Only update if not already read
    if (!contact.isRead) {
      await prisma.contact.update({
        where: { id: parsedInput.id },
        data: { isRead: true }
      });

      revalidateTag(
        Caching.createOrganizationTag(
          OrganizationCacheKey.Contacts,
          session.user.organizationId
        )
      );
      revalidateTag(
        Caching.createOrganizationTag(
          OrganizationCacheKey.Contact,
          session.user.organizationId,
          parsedInput.id
        )
      );
    }
  });
