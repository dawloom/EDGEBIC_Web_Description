import * as React from 'react';
import {
  DollarSignIcon,
  DownloadIcon,
  TrendingUp,
  TrendingUpIcon,
  UsersIcon
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import type { PurchaseStats } from '@/data/purchases/get-purchases';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: React.ReactNode;
  iconColor: string;
}

interface StatsGridProps {
  purchaseStats: PurchaseStats;
}

function StatCard({
  title,
  value,
  change,
  changeType,
  icon,
  iconColor
}: StatCardProps) {
  return (
    <Card className="relative !mt-0 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-red-500" />
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            <p
              className={`mt-2 flex items-center gap-1 text-sm font-medium ${
                changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {changeType === 'positive' ? '↗' : '↘'} {change}
            </p>
          </div>
          <div className={`rounded-lg p-3 ${iconColor}`}>{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsGrid({
  purchaseStats
}: StatsGridProps): React.JSX.Element {
  const {
    totalRevenue,
    totalCustomers,
    totalDownloads,
    monthlyRevenue,
    previousMonthRevenue,
    newCustomersThisMonth,
    successfulDeliveryRate
  } = purchaseStats;

  // Calculate percentage changes
  const revenueChangePercent =
    previousMonthRevenue > 0
      ? ((monthlyRevenue - previousMonthRevenue) / previousMonthRevenue) * 100
      : 0;

  const stats = [
    {
      title: 'Total Revenue',
      value: `$${totalRevenue.toLocaleString()}`,
      change: `${revenueChangePercent >= 0 ? '+' : ''}${revenueChangePercent.toFixed(1)}% from last month`,
      changeType:
        revenueChangePercent >= 0
          ? ('positive' as const)
          : ('negative' as const),
      icon: <DollarSignIcon className="size-6 text-white" />,
      iconColor:
        'bg-gradient-to-br w-[40px] rounded-md h-[40px] items-center justify-center flex from-green-500 to-green-600'
    },
    {
      title: 'Total Customers',
      value: totalCustomers.toString(),
      change: `+${newCustomersThisMonth} new customers`,
      changeType: 'positive' as const,
      icon: <UsersIcon className="size-6 text-white" />,
      iconColor:
        'bg-gradient-to-br w-[40px] rounded-md h-[40px] items-center justify-center flex from-blue-500 to-blue-600'
    },
    {
      title: 'Installers Sent',
      value: totalDownloads.toString(),
      change: `${successfulDeliveryRate.toFixed(1)}% delivery rate`,
      changeType: 'positive' as const,
      icon: <DownloadIcon className="size-6 text-white" />,
      iconColor:
        'bg-gradient-to-br w-[40px] rounded-md h-[40px] items-center justify-center flex from-orange-500 to-orange-600'
    },
    {
      title: 'This Month',
      value: `$${monthlyRevenue.toLocaleString()}`,
      change: `${revenueChangePercent >= 0 ? '+' : ''}${revenueChangePercent.toFixed(0)}% vs last month`,
      changeType:
        revenueChangePercent >= 0
          ? ('positive' as const)
          : ('negative' as const),
      icon: <TrendingUpIcon className="size-6 text-white" />,
      iconColor:
        'bg-gradient-to-br w-[40px] rounded-md h-[40px] items-center justify-center flex from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="!mt-3 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* {stats.map((stat, index) => (
        <StatCard
          key={index}
          {...stat}
        />
      ))} */}
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="py-2">{stat.title}</CardHeader>
          <CardContent className="py-2">
            <div className="flex items-center justify-between">
              <h1 className=" text-2xl font-bold">{stat.value}</h1>
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
