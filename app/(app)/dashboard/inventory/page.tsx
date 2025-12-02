import type { Metadata } from 'next';

import { InventoryOverview } from '@/components/dashboard/inventory-overview';
import {
  getAllLicenses,
  getInventoryStats,
  getLicenseStatusDistribution,
  getMonthlyActivationTrend
} from '@/data/inventory/get-inventory';
import { createTitle } from '@/lib/utils';

export const metadata: Metadata = {
  title: createTitle('Inventory Overview - Dashboard')
};

export default async function InventoryPage(): Promise<React.JSX.Element> {
  const [inventoryStats, allLicenses, activationTrendData, licenseStatusData] =
    await Promise.all([
      getInventoryStats(),
      getAllLicenses(),
      getMonthlyActivationTrend(),
      getLicenseStatusDistribution()
    ]);

  return (
    <InventoryOverview
      inventoryStats={inventoryStats}
      allLicenses={allLicenses}
      activationTrendData={activationTrendData}
      licenseStatusData={licenseStatusData}
    />
  );
}
