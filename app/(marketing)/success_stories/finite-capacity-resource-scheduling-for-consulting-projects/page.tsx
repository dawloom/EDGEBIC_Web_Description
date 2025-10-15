import type { Metadata } from 'next';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title:
    'Finite Capacity Resource Scheduling for Consulting Projects | User Solutions',
  description:
    'GEMS Healthcare Solutions uses Workcenter Scheduler XL to manage multiple consulting projects with shared resources.',
  openGraph: {
    title:
      'Finite Capacity Resource Scheduling for Consulting Projects | User Solutions',
    description:
      'GEMS Healthcare Solutions uses Workcenter Scheduler XL to manage multiple consulting projects with shared resources.',
    url: 'https://www.usersolutions.com/success-stories/finite-capacity-resource-scheduling-for-consulting-projects'
  }
};

export default function ConsultingProjectsSchedulingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-6 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl text-center">
            <Badge
              variant="outline"
              className="mb-6 h-8 rounded-full px-4 text-sm font-medium shadow-sm"
            >
              Success Story
            </Badge>
            <h1 className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
              Finite Capacity Resource Scheduling for Consulting Projects
            </h1>
            <p className="mx-auto mb-4 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
              How GEMS Healthcare Solutions Manages Shared Resources Across
              Multiple Consulting Projects
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                About GEMS Healthcare Solutions
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                GEMS Healthcare Solutions a wholly-owned subsidiary of GE Medical
                Systems headquartered in San Ramon, California, provides integrated
                data mining, Internet-based benchmarking and consulting solutions to
                healthcare providers who seek new strategies to reduce costs and
                improve quality of health care services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                The Challenge: Sharing Resources Across Multiple Projects
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                According to Shavonna Portue, Director, Product Operations
                "Delivering accurate information to our customers in a timely manner
                is the core of our business. Each financial analyst on our staff
                handles multiple accounts, and our biggest challenge was finding a
                resource scheduling system which would allow us to share the same
                resources across multiple projects. User Solutions' Workcenter
                Scheduler XL provided that solution".
              </p>

              <blockquote className="my-6 border-l-4 border-purple-500 pl-4 italic text-gray-700 dark:text-gray-300">
                "Our biggest challenge was finding a resource scheduling system
                which would allow us to share the same resources across multiple
                projects. User Solutions' Workcenter Scheduler XL provided that
                solution."
              </blockquote>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Why Other Solutions Failed
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Shavonna continues "We tried several options before Workcenter
                Scheduler XL, including Microsoft Project. We found the others to be
                difficult to maintain in our environment, or simply undependable.
                Consequently, we were unable to adequately predict delivery times
                and our customers were suffering. After viewing the Noah 2000 system
                and speaking with the representative from User Solutions, I found
                them to be very responsive. The application filled almost all my
                needs, and User Solutions was happy to provide customization to
                tailor the product for our company. They proved to be avid problem
                solvers and a great example of what a customer solution provider
                should be".
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Key Benefits Achieved
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Shavonna reports on key benefits from using Workcenter Scheduler XL
                "Setting accurate customer expectations has been the greatest
                benefit. We are able to track problem areas and get good feedback on
                potential bottlenecks before they happen. No more unknown statuses,
                and it makes adjusting schedules easy! We now know exactly what
                staffing requirements are and can flex our workforce to fit the
                changing needs of our customers".
              </p>

              <blockquote className="my-6 border-l-4 border-purple-500 pl-4 italic text-gray-700 dark:text-gray-300">
                "Setting accurate customer expectations has been the greatest
                benefit. No more unknown statuses, and it makes adjusting schedules
                easy! We now know exactly what staffing requirements are."
              </blockquote>

              <div className="mt-8 rounded-lg bg-purple-50 p-6 dark:bg-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  Results Delivered
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                  <li>
                    Ability to share resources across multiple consulting projects
                  </li>
                  <li>
                    Setting accurate customer expectations - the greatest benefit
                  </li>
                  <li>
                    Track problem areas and get feedback on potential bottlenecks
                    before they happen
                  </li>
                  <li>Eliminated unknown statuses</li>
                  <li>Easy schedule adjustments</li>
                  <li>Exact knowledge of staffing requirements</li>
                  <li>Ability to flex workforce to fit changing customer needs</li>
                  <li>
                    Replaced Microsoft Project and other undependable solutions
                  </li>
                  <li>Responsive vendor with customization capabilities</li>
                </ul>
              </div>

              <p className="mt-6 font-semibold text-gray-700 dark:text-gray-300">
                Shavonna Portue, Director, Product Operations
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                GEMS Healthcare Solutions, GE Medical Systems
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
