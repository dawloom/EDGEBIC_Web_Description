import type { Metadata } from 'next';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
    title:
        'Small Manufacturer and Job Shop Uses Planning, Scheduling and Tracking Tools to Become More Efficient | User Solutions',
    description:
        'Success story: How Lue Manufacturing used Resource Manager tools from User Solutions to improve scheduling efficiency and competitiveness in custom cabinetry.',
    openGraph: {
        title: 'Small Manufacturer Success Story - User Solutions',
        description:
            'Planning, scheduling and tracking tools drive efficiency and competitiveness',
        url: 'https://www.usersolutions.com/small-manufacturer-and-job-shop-uses-planning-scheduling-and-tracking-tools-from-user-solutions-inc-to-become-more-efficient-and-competitive'
    }
};

export default function SmallManufacturerSuccessStoryPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-6 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <Badge
                            variant="outline"
                            className="mb-6 h-8 rounded-full border-green-600/30 px-4 text-sm font-medium text-green-700 shadow-sm dark:border-green-400/30 dark:text-green-300"
                        >
                            Customer Success Story
                        </Badge>
                        <h1 className="mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
                            Small Manufacturer and Job Shop Uses Planning, Scheduling, and
                            Tracking Tools to Become More Efficient
                        </h1>
                        <p className="mb-4 text-xl text-gray-700 dark:text-gray-300">
                            Resource Manager for Excel and Resource Manager-DB improve
                            scheduling for small to medium sized operations
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pt-6">
                <div className="mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        {/* Date and Location */}
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                South Lyon, MI - October 30, 2014
                            </h3>
                        </div>

                        {/* Company Introduction */}
                        <div className="mb-6">
                            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                Lue Manufacturing, based in Goshen, IN has been producing fine
                                custom made countertops, cabinetry and case work for 40 years.
                                User Solution&apos;s affordable production planning tools have
                                been providing immediate returns for job shops serving the
                                construction industry.
                            </p>
                        </div>

                        {/* President Quote 1 */}
                        <Card className="mb-6 border-l-4 border-green-600">
                            <CardContent className="pt-6">
                                <blockquote className="mb-4 text-lg italic leading-relaxed text-gray-700 dark:text-gray-300">
                                    &quot;In the past, with steady demand, we have been able to
                                    manually manage how to staff workcenters and deliver Jobs on
                                    time. However, that model has been significantly changing. We
                                    are seeing increased demand, plus customization and dynamic
                                    changes to our schedule from our customers who expect us to
                                    accommodate their requests immediately! We just didn&apos;t
                                    have the tools to accurately plan a viable schedule for
                                    meeting these new requests and the last thing we needed was to
                                    adapt a complex ERP-type system to try to run the entire
                                    business. We found User Solutions after looking for a
                                    stand-alone affordable planning tool and decided to get
                                    started with their Excel Add-On, Resource Manager for
                                    Excel.&quot;
                                </blockquote>
                                <p className="font-semibold text-gray-900 dark:text-white">
                                    – Steve Gronger, President, Lue Manufacturing
                                </p>
                            </CardContent>
                        </Card>

                        {/* President Quote 2 */}
                        <Card className="mb-6 border-l-4 border-blue-600">
                            <CardContent className="pt-6">
                                <blockquote className="mb-4 text-lg italic leading-relaxed text-gray-700 dark:text-gray-300">
                                    &quot;It was an easy decision. We were already familiar with
                                    Excel and the product had the finite capacity planning,
                                    scheduling, and Gantt Charts reporting to address our
                                    immediate challenges. Within a few days, we were able to
                                    validate and clean up our estimated data as well as find and
                                    react to workcenter bottlenecks before Jobs were in danger of
                                    being late. In addition, when we asked about how we currently
                                    drove hourly estimates from a Job value in dollars, User
                                    Solutions instantly showed us how we could keep that same
                                    formula to create new Jobs for planning and scheduling
                                    directly in the Excel based Scheduling Tool. They adapted
                                    perfectly to our environment.&quot;
                                </blockquote>
                                <p className="font-semibold text-gray-900 dark:text-white">
                                    – Steve Gronger, President
                                </p>
                            </CardContent>
                        </Card>

                        {/* Deeper Benefits Section */}
                        <div className="mb-6">
                            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                                Deeper Benefits with Resource Manager-DB
                            </h2>
                            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                Based on the quick and easy return on investment with Resource
                                Manager for Excel, and the promise of additional benefits of
                                being able to track actual production and reschedule on demand,
                                Lue Manufacturing upgraded to Resource Manager-DB.
                            </p>
                            <Card className="mb-6 border-l-4 border-purple-600">
                                <CardContent className="pt-6">
                                    <blockquote className="mb-4 text-lg italic leading-relaxed text-gray-700 dark:text-gray-300">
                                        &quot;As soon as we started to get a handle on our
                                        bottlenecks and efficient resource allocation for planned
                                        Jobs, we wanted to dig deeper and start tracking actual
                                        production in order to have a more real-time schedule that
                                        reflects reality. For the first time, it&apos;s a snap for
                                        us to track planned schedule vs actuals progress and make
                                        adjustments (for example, working a Saturday, or working
                                        overtime, or adding manpower) before we have a crisis.&quot;
                                    </blockquote>
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        – Mr. Gronger
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-green-600">
                                <CardContent className="pt-6">
                                    <blockquote className="text-lg italic leading-relaxed text-gray-700 dark:text-gray-300">
                                        &quot;As a small manufacturer (Job Shop serving the
                                        construction industry), these tools are a perfect fit for
                                        us. We were not looking for the fanciest graphics or
                                        complicated configurations or a long and difficult
                                        implementation process. I have been able to basically do all
                                        I was hoping for with a minimal learning and implementation
                                        curve. Furthermore, these tools will provide us a
                                        competitive edge by being able to prove we can deliver on
                                        time and accommodate changes mid-stream without disrupting
                                        our schedule.&quot;
                                    </blockquote>
                                    <p className="mt-4 font-semibold text-gray-900 dark:text-white">
                                        – Steve Gronger
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* New Features Section */}
                        <div className="mb-6">
                            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                                New Features
                            </h2>
                            <div className="space-y-4">
                                <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-6 dark:bg-blue-900/20">
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        New: Critical Path and Theory of Constraints
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Scheduling algorithm now reduces complex scheduling
                                        environments to a simple structure that is easy to configure
                                        and maintain.
                                    </p>
                                </div>
                                <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-6 dark:bg-green-900/20">
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        Enhanced Crew and Skill Level Scheduling
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Supports the dynamic nature of crew/work center based
                                        resources with various skills and efficiency ratings per
                                        skill.
                                    </p>
                                </div>
                                <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-6 dark:bg-purple-900/20">
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        New: Advanced Reporting
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Includes Visual Scheduling Gantt Charts by hour, day, week,
                                        and even month. Drill down and drag-and-drop to reflect
                                        actual start or end dates for any workcenter.
                                    </p>
                                </div>
                            </div>
                            <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                These new features will enable operations of any size to plan,
                                schedule, and track resources more efficiently, resulting in
                                improved customer service and profitability.
                            </p>
                        </div>

                        {/* Affordable and Compatible Section */}
                        <div className="mb-6">
                            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                                Affordable and Compatible
                            </h2>
                            <div className="mb-6 grid gap-6 md:grid-cols-2">
                                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30">
                                    <CardContent className="p-6">
                                        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                            Resource Manager for Excel
                                        </h3>
                                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                                            $1,200 - $1,800
                                        </p>
                                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                            Single user version
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30">
                                    <CardContent className="p-6">
                                        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                            Resource Manager-DB
                                        </h3>
                                        <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                                            $5,000 - $10,000
                                        </p>
                                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                            Single user version
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                            <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                Resource Manager is the first tool that can be scaled for SMBs
                                (Small and Medium Sized Businesses) with no formal systems in
                                place, as well as by larger companies to augment existing ERP
                                systems.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                For more information, call toll free (800) 321-8737.
                            </p>
                        </div>

                        {/* Awards Banner */}
                        <div>
                            <Card className="bg-gradient-to-br from-green-50 to-blue-100 dark:from-green-900/20 dark:to-blue-800/20">
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
