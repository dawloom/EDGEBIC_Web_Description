import { PrismaAdapter } from '@auth/prisma-adapter';

import { prisma } from '@/lib/db/prisma';

// Here we could modify the PrismaAdapter, i.e. overwrite the createUser() method.
// Suggestion is to keep the adapter as it is and try to work around it or else you might need to adjust with each update.

// Using type assertion to work around version mismatch between @auth/core versions
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const adapter = PrismaAdapter(prisma) as any;
