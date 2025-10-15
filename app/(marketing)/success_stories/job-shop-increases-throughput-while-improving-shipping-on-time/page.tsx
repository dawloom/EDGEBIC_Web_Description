import type { Metadata } from 'next';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
    title:
        'Job Shop Increases Throughput While Improving Shipping On-Time | User Solutions',
    description:
        'Learn how Technical Glass Products increased throughput and improved on-time shipping with advanced scheduling.',
    openGraph: {
        title:
            'Job Shop Increases Throughput While Improving Shipping On-Time | User Solutions',
        description:
            'Learn how Technical Glass Products increased throughput and improved on-time shipping with advanced scheduling.',
        url: 'https://www.usersolutions.com/success-stories/job-shop-increases-throughput-while-improving-shipping-on-time'
    }
};

export default function JobShopThroughputPage() {
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
                            Job Shop Increases Throughput While Improving Shipping On-Time
                        </h1>
                        <p className="mx-auto mb-4 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
                            Discover how Technical Glass Products achieved 4% capacity
                            increase while maintaining customer service standards.
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
                                Technical Glass Products in Snoqualmie, WA started out reviewing
                                the Resource Manager for Excel product line but quickly settled
                                on Resource Manager-DB for multi-user support, advanced
                                production scheduling options, and easy integration with
                                corporate ERP systems. As Technical Glass was implementing a
                                corporate wide upgrade to Microsoft SQL Server and Windows
                                Server, they found many advantages in upgrading to Resource
                                Manager-DB for SQL. These included: direct integration from SQL
                                Table to SQL Table, automatic back-ups, and enhanced security by
                                having all their core systems on SQL Server.
                            </p>

                            <p className="text-gray-700 dark:text-gray-300">
                                According to Scott McNeil, Master Production Scheduler for
                                Technical Glass, "It's very refreshing to work with a vendor
                                like User Solutions who seems to be able to easily adapt to
                                whatever unique and specific needs we run into. Some days it is
                                a simple new report request to better manage our production
                                resources. Other days, it is to blend the current systems into
                                our strategic corporate direction for Information technology
                                platforms. In all cases, they seem to always answer 'yes, we can
                                do that'. Resource Manager DB and User Solutions are great
                                assets in empowering Technical Glass to deliver world class
                                products, on time and under budget, over and over again. We
                                consider it one of our key competitive strengths in growing our
                                market share."
                            </p>

                            <p className="text-gray-700 dark:text-gray-300">
                                Technical Glass Products (TGP) has been using RMDB for years for
                                finite capacity production scheduling. They selected RMDB
                                because of how it could quickly adapt to their operational flow
                                as well as its ability to integrate with their in-house systems.
                                This facilitated a rapid implementation time along with all
                                users quickly embracing the system. Recently, TGP noticed that
                                their standards for task durations and resulting workcenter
                                skill balancing had changed over time. They reached out to User
                                Solutions to see how RMDB could be configured to include
                                blending in new time studies, new product profiles, along with
                                fluctuating workcenter capacities from a point in time moving
                                forward, all the while preserving the actual tracking of
                                schedule to date for historical analysis.
                            </p>

                            <div className="my-8 flex justify-center">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/07/TGP-1024x489.png"
                                    alt="Technical Glass Products production scheduling"
                                    width={1024}
                                    height={489}
                                    className="h-auto rounded-lg shadow-md"
                                    unoptimized
                                />
                            </div>

                            <p className="text-gray-700 dark:text-gray-300">
                                Leveraging RMDB's flexible configuration toolset, within only a
                                few days of remote support, User Solutions was able to guide TGP
                                through blending in new time studies with cross-trained skill
                                demands, add that to their current production schedule and then
                                run a variety of 'what-if' scenarios. This produced a realistic
                                master production plan 6 months out, from which TGP confirmed
                                their cross-training initiatives and rapidly redeployed current
                                resources. By shaving off two weeks in lead time for
                                deliverables, TGP was able to accommodate a 4% increase in
                                business with the current workforce, while maintaining their
                                customer service standard.
                            </p>

                            <div className="my-8 flex justify-center">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/07/TGPPie.jpg"
                                    alt="Technical Glass Products efficiency pie chart"
                                    width={600}
                                    height={400}
                                    className="h-auto rounded-lg shadow-md"
                                    unoptimized
                                />
                            </div>

                            <blockquote className="border-l-4 border-purple-600 pl-4 italic">
                                <p className="text-gray-700 dark:text-gray-300">
                                    "The Resource Manager-DB solution has once again exceeded our
                                    expectations regarding its adaptability. With only a couple of
                                    days of remote guidance from User Solutions, we greatly
                                    expanded RMDB's functionality to include defining
                                    cross-training initiatives and incorporate those results in a
                                    new production scheduling model that increased efficiencies.
                                    The result was our substantially increasing production
                                    capacity with existing resources. RMDB, along with our
                                    cross-trained workforce gives us a competitive advantage to
                                    quickly respond to new market conditions and business
                                    fluctuations without incurring additional expense."
                                </p>
                                <footer className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                                    - Scott McNeill, Production Scheduler, Technical Glass
                                    Products
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
