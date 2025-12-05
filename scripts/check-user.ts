import { prisma } from '../lib/db/prisma';

async function checkUser() {
  const user = await prisma.user.findFirst({
    where: { email: 'mudasirnadeem7979@gmail.com' },
    select: {
      id: true,
      completedOnboarding: true,
      organizationId: true,
      organization: {
        select: {
          completedOnboarding: true
        }
      }
    }
  });
  console.log(JSON.stringify(user, null, 2));
  await prisma.$disconnect();
}

checkUser();
