import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db/prisma';
import { LicenseKeyGenerator } from '@/lib/license/license-key-generator';

const validateLicenseSchema = z.object({
  licenseKey: z.string().min(1),
  systemFingerprint: z.string().min(1),
  processorId: z.string().min(1)
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { licenseKey, systemFingerprint, processorId } = validateLicenseSchema.parse(body);

    // Hash the license key for lookup
    const licenseKeyHash = LicenseKeyGenerator.hashLicenseKey(licenseKey);

    // Find purchase by license key hash
    const purchase = await prisma.purchase.findUnique({
      where: { licenseKeyHash }
    });

    if (!purchase) {
      return NextResponse.json(
        { valid: false, error: 'License not found' },
        { status: 404 }
      );
    }

    // Check if license is active
    if (purchase.licenseStatus !== 'active') {
      return NextResponse.json(
        { valid: false, error: 'License is not active' },
        { status: 400 }
      );
    }

    // Verify system fingerprint and processor ID
    if (purchase.systemFingerprint !== systemFingerprint || purchase.processorId !== processorId) {
      return NextResponse.json(
        { valid: false, error: 'System validation failed' },
        { status: 403 }
      );
    }

    return NextResponse.json({
      valid: true,
      purchaseId: purchase.id,
      activatedAt: purchase.activatedAt,
      customerName: purchase.customerName
    });

  } catch (error) {
    console.error('License validation error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to validate license' },
      { status: 500 }
    );
  }
}
