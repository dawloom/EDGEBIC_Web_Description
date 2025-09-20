import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/db/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const license = await prisma.purchase.findUnique({
      where: { id },
      include: {
        activations: {
          orderBy: { createdAt: 'desc' },
          take: 50 // Get more activation history for details view
        }
      }
    });

    if (!license) {
      return NextResponse.json({ error: 'License not found' }, { status: 404 });
    }

    // Calculate some additional stats
    const activationStats = {
      totalAttempts: license.activations.length,
      successfulAttempts: license.activations.filter(
        (a) => a.status === 'success'
      ).length,
      failedAttempts: license.activations.filter((a) => a.status === 'failed')
        .length,
      blockedAttempts: license.activations.filter((a) => a.status === 'blocked')
        .length,
      uniqueIPs: [...new Set(license.activations.map((a) => a.ipAddress))]
        .length,
      lastAttempt: license.activations[0]?.createdAt || null
    };

    return NextResponse.json({
      license,
      activationStats
    });
  } catch (error) {
    console.error('Error fetching license details:', error);
    return NextResponse.json(
      { error: 'Failed to fetch license details' },
      { status: 500 }
    );
  }
}

// Update license status (admin function)
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { licenseStatus, notes } = body;

    // Validate status
    if (!['inactive', 'active', 'revoked'].includes(licenseStatus)) {
      return NextResponse.json(
        { error: 'Invalid license status' },
        { status: 400 }
      );
    }

    const updatedLicense = await prisma.purchase.update({
      where: { id },
      data: {
        licenseStatus,
        updatedAt: new Date()
      }
    });

    // Log the admin action
    await prisma.licenseActivation.create({
      data: {
        purchaseId: id,
        email: 'admin@system',
        systemFingerprint: 'admin-action',
        status: 'admin-update',
        errorMessage: `Status changed to ${licenseStatus}. Notes: ${notes || 'None'}`
      }
    });

    return NextResponse.json({
      success: true,
      license: updatedLicense
    });
  } catch (error) {
    console.error('Error updating license:', error);
    return NextResponse.json(
      { error: 'Failed to update license' },
      { status: 500 }
    );
  }
}
