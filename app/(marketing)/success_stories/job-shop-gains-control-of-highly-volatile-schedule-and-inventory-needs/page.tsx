import type { Metadata } from 'next';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title:
    'Job Shop Gains Control of Highly Volatile Schedule and Inventory Needs | User Solutions',
  description:
    'See how a job shop manufacturing company gained control over volatile scheduling and complex inventory management.',
  openGraph: {
    title:
      'Job Shop Gains Control of Highly Volatile Schedule and Inventory Needs | User Solutions',
    description:
      'See how a job shop manufacturing company gained control over volatile scheduling and complex inventory management.',
    url: 'https://www.usersolutions.com/success-stories/job-shop-gains-control-of-highly-volatile-schedule-and-inventory-needs'
  }
};

export default function JobShopGainsControlPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-6 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl text-center">
            <Badge
              variant="outline"
              className="mb-6 h-8 rounded-full px-4 text-sm font-medium shadow-sm"
            >
              Success Story
            </Badge>
            <h1 className="mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
              Job Shop Gains Control of Highly Volatile Schedule and Inventory
              Needs
            </h1>
            <p className="mx-auto mb-4 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
              Learn how advanced scheduling solutions helped a job shop master
              complex production challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            {/* Featured Image */}
            <div className="mb-6 flex justify-center">
              <Image
                src="https://www.usersolutions.com/wp-content/uploads/2022/07/image003-150x112-2.jpg"
                alt="Corporate building with trees and address sign"
                width={300}
                height={250}
                className="h-auto"
                unoptimized
              />
            </div>

            <div className="prose prose-lg dark:prose-invert mx-auto">
              <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-700 dark:text-gray-300">
                <p>
                  "Our products are constantly changing and, for only a few
                  hours per month, the Resource Manager provides the ideal
                  format to configure new Bills-Of-Material, prepare production
                  schedules, and manage our inventory. Since we are already
                  familiar with Excel, there wasn't even a learning curve."
                </p>
                <footer className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                  -Jim Muraski, Production Control Manager of Assembled Products
                  Group
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Banner */}
      <section className="pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <Card className="rounded-xl border bg-gradient-to-br from-blue-50 to-blue-100 text-card-foreground shadow dark:from-blue-900/20 dark:to-blue-800/20">
              <CardContent className="p-8 text-center">
                <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                  CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                </h2>
                <div className="relative mx-auto h-auto w-full max-w-4xl">
                  <Image
                    src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                    alt="Collection of industry and business awards logos"
                    width={1024}
                    height={128}
                    className="mx-auto h-auto max-w-full"
                    unoptimized
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
