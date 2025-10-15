import type { Metadata } from 'next';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Uncategorized | User Solutions',
  description:
    'Explore articles and resources about manufacturing solutions and industry insights.',
  openGraph: {
    title: 'Uncategorized | User Solutions',
    description:
      'Explore articles and resources about manufacturing solutions and industry insights.',
    url: 'https://www.usersolutions.com/category/uncategorized'
  }
};

export default function UncategorizedCategoryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-6 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl text-center">
            <Badge
              variant="outline"
              className="mb-6 h-8 rounded-full border-purple-600/30 px-4 text-sm font-medium text-purple-700 shadow-sm dark:border-purple-400/30 dark:text-purple-300"
            >
              Articles & Insights
            </Badge>
            <h1 className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
              Uncategorized
            </h1>
            <p className="mb-4 text-xl text-gray-700 dark:text-gray-300">
              Explore various articles and resources about manufacturing
              solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-6">
        <div className="mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            {/* Articles Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Article 1: Li-ion Battery */}
              <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src="https://www.usersolutions.com/wp-content/uploads/2022/09/image04.png"
                    alt="Person reading a magazine with business diagrams"
                    className="size-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col p-6">
                  <h2 className="mb-3 text-xl font-bold text-gray-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-400">
                    <a href="/li-ion-battery-production-scheduling-software">
                      Li-ion Battery Production Scheduling Software
                    </a>
                  </h2>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    Resource Manager-DB V6 Transforms Li-ion Battery Production
                    Scheduling User Solutions, a leader in flexible production
                    scheduling and planning software, has released Resource
                    Manager-DB (RM-DB) V6. This upgrade was driven by customer
                    demand for more power and flexibility in manufacturing
                    scheduling. South Lyon, MI 6/9/2016 RM-DB V6 introduces
                    Bills-of-Resources that blend materials and workcenters in
                    any […]
                  </p>
                  <a
                    href="/li-ion-battery-production-scheduling-software"
                    className="text-sm font-semibold text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    Read More →
                  </a>
                </CardContent>
              </Card>

              {/* Article 2: Scheduling System */}
              <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src="https://www.usersolutions.com/wp-content/uploads/2022/09/image3.png"
                    alt="Laptop screen displaying code in development environment"
                    className="size-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col p-6">
                  <h2 className="mb-3 text-xl font-bold text-gray-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-400">
                    <a href="/scheduling-system-narrows-skills-gap-for-fire-rated-glass">
                      Scheduling System Narrows Skills Gap for Fire-Rated Glass
                    </a>
                  </h2>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    Scheduling System Narrows Skills Gap for Fire-Rated Glass
                    User Solutions&apos; Resource Manager-DB enables Technical
                    Glass Products to strategically cross-train their way to
                    optimization South Lyon, MI 8/31/2016 User Solutions, a
                    provider of production scheduling software solutions for
                    manufacturers and job shops, today announces that Technical
                    Glass Products, the recognized leader in the fire-rated
                    glass and […]
                  </p>
                  <a
                    href="/scheduling-system-narrows-skills-gap-for-fire-rated-glass"
                    className="text-sm font-semibold text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    Read More →
                  </a>
                </CardContent>
              </Card>

              {/* Article 3: Small Manufacturer */}
              <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src="https://www.usersolutions.com/wp-content/uploads/2022/09/image06-1.png"
                    alt="Business professionals analyzing financial charts and data"
                    className="size-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col p-6">
                  <h2 className="mb-3 text-xl font-bold text-gray-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-400">
                    <a href="/small-manufacturer-and-job-shop-uses-planning-scheduling-and-tracking-tools-from-user-solutions-inc-to-become-more-efficient-and-competitive">
                      Small Manufacturer and Job Shop Uses Planning, Scheduling,
                      and Tracking Tools
                    </a>
                  </h2>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    Small Manufacturer and Job Shop Uses Planning, Scheduling,
                    and Tracking Tools from User Solutions, Inc. to Become More
                    Efficient and Competitive Resource Manager for Excel and
                    Resource Manager-DB&apos;s new features improve scheduling
                    for small to medium sized operations to optimally manage
                    resources (Workcenters, Labor, Materials, Machines) to
                    deliver on time and on budget. South Lyon, […]
                  </p>
                  <a
                    href="/small-manufacturer-and-job-shop-uses-planning-scheduling-and-tracking-tools-from-user-solutions-inc-to-become-more-efficient-and-competitive"
                    className="text-sm font-semibold text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    Read More →
                  </a>
                </CardContent>
              </Card>

              {/* Article 4: User Solutions Named */}
              <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src="https://www.usersolutions.com/wp-content/uploads/2022/09/image05.png"
                    alt="Team meeting with laptops in modern office"
                    className="size-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col p-6">
                  <h2 className="mb-3 text-xl font-bold text-gray-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-400">
                    <a href="/user-solutions-inc-named-as-one-of-top-erp-solutions-transforming-business-2016-by-cio-applications-as-they-celebrate-25-years-in-business">
                      User Solutions Named Top ERP Solution by CIO Applications
                    </a>
                  </h2>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    User Solutions, Inc. named as one of top ERP Solutions
                    Transforming Business 2016 by CIO Applications, as they
                    celebrate 25 years in business. User Solutions receives
                    recognition by CIO Applications for the company&apos;s
                    success as ERP Add-On for Production Scheduling South Lyon,
                    MI 5/10/2016 "We are pleased to recognize User Solutions as
                    one among the […]
                  </p>
                  <a
                    href="/user-solutions-inc-named-as-one-of-top-erp-solutions-transforming-business-2016-by-cio-applications-as-they-celebrate-25-years-in-business"
                    className="text-sm font-semibold text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    Read More →
                  </a>
                </CardContent>
              </Card>

              {/* Article 5: Celebrating National Manufacturing Day */}
              <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src="https://www.usersolutions.com/wp-content/uploads/2022/07/celebrating.png"
                    alt="Team celebrating with holiday hats in office"
                    className="size-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col p-6">
                  <h2 className="mb-3 text-xl font-bold text-gray-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-400">
                    <a href="/random-events-and-covariance">
                      Celebrating National Manufacturing Day
                    </a>
                  </h2>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    Blame Random Events and Covariance Ever wonder why, after
                    picking what you thought was the shortest line, you&apos;re
                    the last to get through? Or, why traffic can come to an
                    absolute stand-still on the freeway with no apparent reason?
                    There are two mathematical principles at work here (and sad
                    to say, influencing your Plant, Shop, […]
                  </p>
                  <a
                    href="/random-events-and-covariance"
                    className="text-sm font-semibold text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    Read More →
                  </a>
                </CardContent>
              </Card>

              {/* Article 6: User Solutions Joins Fight */}
              <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src="https://www.usersolutions.com/wp-content/uploads/2022/07/image02.png"
                    alt="Person budgeting with calculator and documents on table"
                    className="size-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col p-6">
                  <h2 className="mb-3 text-xl font-bold text-gray-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-400">
                    <a href="/lets-make-manufacturing-great-again">
                      User Solutions Joins Fight Against Covid – Free Software
                    </a>
                  </h2>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    Let&apos;s Make Manufacturing Great Again© this National
                    Manufacturing Day 2017 This year&apos;s National
                    Manufacturing Day arrives at a most dynamic time with much
                    attention focused on: Initiatives for manufacturers to
                    achieve and sustain both local and global competitiveness
                    through operational efficiencies A lack of new students
                    entering manufacturing careers contributing to expanding
                    &apos;skills-gap&apos; challenge […]
                  </p>
                  <a
                    href="/lets-make-manufacturing-great-again"
                    className="text-sm font-semibold text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    Read More →
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Awards Banner */}
            <div>
              <Card className="mt-6 rounded-xl border bg-gradient-to-br from-blue-50 to-blue-100 text-card-foreground shadow dark:from-blue-900/20 dark:to-blue-800/20">
                <CardContent className="p-8 text-center">
                  <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                    CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                  </h2>
                  <img
                    src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                    alt="Collection of industry and business awards logos"
                    className="mx-auto h-auto max-w-full"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
