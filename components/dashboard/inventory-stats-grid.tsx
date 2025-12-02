import * as React from 'react';
import {
  CheckCircleIcon,
  KeyIcon,
  PackageIcon,
  ShieldAlertIcon,
  TrendingUpIcon,
  XCircleIcon
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import type { InventoryStats } from '@/data/inventory/get-inventory';

interface InventoryStatsGridProps {
  inventoryStats: InventoryStats;
}

export function InventoryStatsGrid({
  inventoryStats
}: InventoryStatsGridProps): React.JSX.Element {
  const {
    totalLicenses,
    activeLicenses,
    inactiveLicenses,
    revokedLicenses,
    activationRate,
    averageLicenseValue,
    licensesActivatedThisMonth,
    licensesActivatedLastMonth
  } = inventoryStats;

  // Calculate percentage change
  const activationChangePercent =
    licensesActivatedLastMonth > 0
      ? ((licensesActivatedThisMonth - licensesActivatedLastMonth) /
          licensesActivatedLastMonth) *
        100
      : 0;

  const stats = [
    {
      title: 'Total Licenses',
      value: totalLicenses.toString(),
      change: `${activationRate.toFixed(1)}% activation rate`,
      icon: <PackageIcon className="size-6 text-white" />,
      iconColor:
        'bg-gradient-to-br w-[40px] rounded-md h-[40px] items-center justify-center flex from-blue-500 to-blue-600'
    },
    {
      title: 'Active Licenses',
      value: activeLicenses.toString(),
      change: `${((activeLicenses / totalLicenses) * 100).toFixed(1)}% of total`,
      icon: <CheckCircleIcon className="size-6 text-white" />,
      iconColor:
        'bg-gradient-to-br w-[40px] rounded-md h-[40px] items-center justify-center flex from-green-500 to-green-600'
    },
    {
      title: 'Inactive Licenses',
      value: inactiveLicenses.toString(),
      change: `${((inactiveLicenses / totalLicenses) * 100).toFixed(1)}% unused`,
      icon: <KeyIcon className="size-6 text-white" />,
      iconColor:
        'bg-gradient-to-br w-[40px] rounded-md h-[40px] items-center justify-center flex from-orange-500 to-orange-600'
    },
    {
      title: 'Revoked Licenses',
      value: revokedLicenses.toString(),
      change: `${((revokedLicenses / totalLicenses) * 100).toFixed(1)}% revoked`,
      icon: <XCircleIcon className="size-6 text-white" />,
      iconColor:
        'bg-gradient-to-br w-[40px] rounded-md h-[40px] items-center justify-center flex from-red-500 to-red-600'
    },
    {
      title: 'Avg. License Value',
      value: `$${averageLicenseValue.toFixed(2)}`,
      change: 'Per license revenue',
      icon: <TrendingUpIcon className="size-6 text-white" />,
      iconColor:
        'bg-gradient-to-br w-[40px] rounded-md h-[40px] items-center justify-center flex from-purple-500 to-purple-600'
    },
    {
      title: 'This Month',
      value: `${licensesActivatedThisMonth}`,
      change: `${activationChangePercent >= 0 ? '+' : ''}${activationChangePercent.toFixed(0)}% vs last month`,
      icon: <ShieldAlertIcon className="size-6 text-white" />,
      iconColor:
        'bg-gradient-to-br w-[40px] rounded-md h-[40px] items-center justify-center flex from-teal-500 to-teal-600'
    }
  ];

  return (
    <div className="!mt-3 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="py-2">{stat.title}</CardHeader>
          <CardContent className="py-2">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">{stat.value}</h1>
              <p className={stat.iconColor}>{stat.icon}</p>
            </div>
          </CardContent>
          <CardFooter className="pb-3">
            <p
              className="flex"
              style={{ color: '#68a34a' }}
            >
              ↗ {stat.change}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
