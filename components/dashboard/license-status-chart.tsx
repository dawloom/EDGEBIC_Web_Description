'use client';

import * as React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

interface LicenseStatusChartProps {
  data: {
    name: string;
    value: number;
    percentage: number;
  }[];
}

const COLORS: Record<string, string> = {
  Active: '#10b981',
  Inactive: '#f97316',
  Revoked: '#ef4444'
};

export function LicenseStatusChart({
  data
}: LicenseStatusChartProps): React.JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle>License Status Distribution</CardTitle>
        <CardDescription>
          Breakdown of license statuses across all products
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            {data.map((entry, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
              >
                <div
                  className="size-4 rounded"
                  style={{ backgroundColor: COLORS[entry.name] || '#6b7280' }}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{entry.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {entry.value} ({entry.percentage.toFixed(1)}%)
                  </span>
                </div>
              </div>
            ))}
          </div>
          <ResponsiveContainer
            width="60%"
            height={250}
          >
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[entry.name] || '#6b7280'}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px'
                }}
                formatter={(value: number) => [`${value} licenses`, 'Count']}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
