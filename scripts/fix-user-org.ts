import { prisma } from '../lib/db/prisma';

async function fixUserOrganization() {
  const user = await prisma.user.findFirst({
    where: { email: 'mudasirnadeem7979@gmail.com' }
  });

  if (!user) {
    console.log('User not found');
    return;
  }

  if (user.organizationId) {
    console.log('User already has an organization');
    return;
  }

  // Create organization
  const organization = await prisma.organization.create({
    data: {
      name: `${user.name}'s Organization`,
      stripeCustomerId: `cus_dummy_${Date.now()}`,
      completedOnboarding: true
    }
  });

  // Link user to organization
  await prisma.user.update({
    where: { id: user.id },
    data: { organizationId: organization.id }
  });

  console.log('Organization created and linked to user!');
  console.log('Organization ID:', organization.id);
}

fixUserOrganization()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
