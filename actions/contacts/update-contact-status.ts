'use server';

import { revalidateTag } from 'next/cache';

import { authActionClient } from '@/actions/safe-action';
import { Caching, OrganizationCacheKey } from '@/data/caching';
import { updateContactAndCaptureEvent } from '@/lib/db/contact-event-capture';
import { prisma } from '@/lib/db/prisma';
import { syncContactStageToHubSpot } from '@/lib/hubspot';
import { NotFoundError } from '@/lib/validation/exceptions';
import { updateContactStageSchema } from '@/schemas/contacts/update-contact-stage-schema';

export const updateContactStage = authActionClient
  .metadata({ actionName: 'updateContactStage' })
  .schema(updateContactStageSchema)
  .action(async ({ parsedInput, ctx: { session } }) => {
    const contact = await prisma.contact.findFirst({
      where: {
        organizationId: session.user.organizationId,
        id: parsedInput.id
      },
      select: {
        email: true
      }
    });

    if (!contact) {
      throw new NotFoundError('Contact not found');
    }

    await updateContactAndCaptureEvent(
      parsedInput.id,
      { stage: parsedInput.stage },
      session.user.id
    );

    // Sync stage update to HubSpot (non-blocking)
    if (contact.email) {
      syncContactStageToHubSpot(contact.email, parsedInput.stage).catch(
        (error) => {
          console.error('Failed to sync contact stage to HubSpot:', error);
        }
      );
    }

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
  });
