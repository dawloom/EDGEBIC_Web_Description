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

export function PaymentMethodsChart(): React.JSX.Element {
  const [data, setData] = React.useState<
    { name: string; value: number; color: string }[]
  >([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function fetchPaymentMethodsData() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/purchases/payment-methods');
        if (!response.ok) {
          throw new Error('Failed to fetch payment methods data');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching payment methods data:', error);
        setError(
          'Failed to load payment methods data. Please check your database connection.'
        );
      } finally {
        setLoading(false);
      }
    }

    fetchPaymentMethodsData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>Distribution of payment types</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex h-[200px] items-center justify-center">
            <div className="text-muted-foreground">Loading chart data...</div>
          </div>
        ) : error ? (
          <div className="flex h-[200px] items-center justify-center">
            <div className="text-center text-muted-foreground">
              <p>{error}</p>
            </div>
          </div>
        ) : (
          <>
            <ResponsiveContainer
              width="100%"
              height={235}
            >
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="text-2xl font-bold">{item.value}%</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
