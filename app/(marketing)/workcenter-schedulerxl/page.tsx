import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function WorkcenterSchedulerXLPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 text-white dark:from-blue-800 dark:to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Workcenter Scheduler XL
            </h1>
            <p className="mb-8 text-xl md:text-2xl">
              Excel-Based Finite Capacity Scheduling for Job Shops
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/product-downloads">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Free Trial
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-3xl">Overview</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  Workcenter Scheduler XL (WCXL) is an Excel based simple
                  scheduler for getting visibility on workcenter loading to ship
                  on time. Check out the videos for a quick overview, then
                  download the fully functional trial or — better yet, simply
                  schedule a live demo, customized with your sample data, and
                  let us review your application needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-3xl">
                  Workcenter Scheduler XL: Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p>
                  Workcenter Scheduler XL (WCXL) an Excel Add-On, offers a
                  finite capacity scheduler for job shops, fabricators,
                  service/repair shops, that have a simple, linear sequence of
                  work that can be scheduled forward from a start date. (NOTE:
                  For more robust planning, scheduling, tracking, and
                  integration options please review Resource Manager-DB).
                </p>
                <p>WCXL provides an easy method for:</p>
                <ul>
                  <li>Step 1: Entering resource definitions.</li>
                  <li>
                    Step 2: Building jobs, with labor and workcenter routing
                    details.
                  </li>
                  <li>
                    Step 3: Performing 'what-ifs' with different plans,
                    resulting in feasible and effective production schedules.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-muted/50 pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <Card>
              <CardContent className="p-8">
                <blockquote className="text-center">
                  <p className="mb-4 text-lg italic text-muted-foreground">
                    "With Workcenter Scheduler XL, we knew: Daily schedules for
                    Workcenters, Capacity requirements including Bottlenecks and
                    Backlog, Strategic management information for optimizing
                    on-time performance"
                  </p>
                  <footer className="text-sm font-semibold text-foreground">
                    — Dan Barich, GE Railcar Services
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
              Features
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-blue-600">
                    Excel Add-On
                  </h3>
                  <p className="text-muted-foreground">
                    Works directly within Microsoft Excel
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-blue-600">
                    Forward Scheduling
                  </h3>
                  <p className="text-muted-foreground">
                    Schedule from start date forward
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-blue-600">
                    KPI Reporting
                  </h3>
                  <p className="text-muted-foreground">
                    Key performance indicators for management
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-blue-600">
                    Routings and Job Scheduling
                  </h3>
                  <p className="text-muted-foreground">
                    Define work sequences and schedules
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-blue-600">
                    Linear Routings
                  </h3>
                  <p className="text-muted-foreground">
                    Simple sequential workflow support
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-blue-600">
                    Protected and Secure
                  </h3>
                  <p className="text-muted-foreground">
                    Secure data with access controls
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-blue-600">
                    Finite Capacity Scheduling
                  </h3>
                  <p className="text-muted-foreground">
                    Realistic schedules based on capacity limits
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-blue-600">
                    Rescheduling on demand
                  </h3>
                  <p className="text-muted-foreground">
                    Instantly adjust schedules as needed
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-blue-600">
                    Gantt Chart Schedule
                  </h3>
                  <p className="text-muted-foreground">
                    Visual timeline of all jobs and workcenters
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="pt-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
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
      </section>
    </div>
  );
}
