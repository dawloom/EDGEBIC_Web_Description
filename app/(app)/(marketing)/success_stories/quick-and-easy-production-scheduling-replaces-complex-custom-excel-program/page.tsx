import type { Metadata } from 'next';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title:
    'Quick and Easy Production Scheduling Replaces Complex Custom Excel Program | User Solutions',
  description:
    'Kyocera Industrial Ceramics replaced a complex custom Excel program with User Solutions scheduling software.',
  openGraph: {
    title:
      'Quick and Easy Production Scheduling Replaces Complex Custom Excel Program | User Solutions',
    description:
      'Kyocera Industrial Ceramics replaced a complex custom Excel program with User Solutions scheduling software.',
    url: 'https://www.usersolutions.com/success-stories/quick-and-easy-production-scheduling-replaces-complex-custom-excel-program'
  }
};

export default function QuickSchedulingExcelReplacementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-6 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl text-center">
            <Badge
              variant="outline"
              className="mb-6 h-8 rounded-full px-4 text-sm font-medium shadow-sm dark:border-white/30 dark:bg-white/10 dark:text-white"
            >
              Success Story
            </Badge>
            <h1 className="mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
              Quick and Easy Production Scheduling Replaces Complex Custom Excel
              Program
            </h1>
            <p className="mx-auto mb-4 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
              How Kyocera and Other Manufacturers Streamlined Their Scheduling
              Processes
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-gray-700 dark:text-gray-300">
                We were looking for a way to schedule three in-line departments
                and various machines. Scheduling was being completed by the
                respective department supervisors with no commonality between
                them. My major concern was being able to preprogram alternate
                routes for certain part numbers to achieve the most flexibility
                throughout all departments. With the guidance of User Solutions,
                we were able to solve that problem easily as well as create one
                common computerized production schedule that could be understood
                by all departments involved. All this was done using data that
                was already in an Excel format, which made implementation a
                snap.
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                Tijuana, Mex. Fiber Optic Jumper Assembly Operation
              </p>

              <div className="my-6 flex justify-center">
                <Image
                  src="https://www.usersolutions.com/wp-content/uploads/2022/07/EdgeSS-1024x544.png"
                  alt="Production scheduling software interface"
                  width={1024}
                  height={544}
                  className="h-auto rounded-lg shadow-md"
                  unoptimized
                />
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                "We used the same software in a traditional MRP / Scheduling
                sense to track raw material usage and final product output. This
                replaced a complex employee written Excel program that was
                becoming very time consuming and difficult to maintain. We were
                also able to use previously entered data from an Access Database
                to bring the system online quickly. We found immediate
                improvement in both predicting output and tracking raw material
                usage in process".
              </p>

              <p className="text-gray-700 dark:text-gray-300">Brian Kendall</p>

              <p className="text-gray-700 dark:text-gray-300">
                Industrial Engineer for Kyocera Industrial Ceramics.
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                North Carolina Ceramics Production Facility
              </p>
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
