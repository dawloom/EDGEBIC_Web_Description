import type { Metadata } from 'next';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
    title:
        'Scheduling Labor Out Several Months Increases Customer Satisfaction | User Solutions',
    description:
        'Learn how Cummins Engine improved customer satisfaction by scheduling labor and resources several months in advance.',
    openGraph: {
        title:
            'Scheduling Labor Out Several Months Increases Customer Satisfaction | User Solutions',
        description:
            'Learn how Cummins Engine improved customer satisfaction by scheduling labor and resources several months in advance.',
        url: 'https://www.usersolutions.com/success-stories/scheduling-labor-out-several-months-increases-customer-satisfaction'
    }
};

export default function SchedulingLaborPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50 py-6 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <Badge
                            variant="outline"
                            className="mb-6 h-8 rounded-full px-4 text-sm font-medium shadow-sm"
                        >
                            Success Story
                        </Badge>
                        <h1 className="mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
                            Scheduling Labor Out Several Months Increases Customer
                            Satisfaction
                        </h1>
                        <p className="mx-auto mb-4 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
                            See how Cummins Engine uses Resource Manager to schedule labor and
                            machines months in advance.
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
                                Joe Van Wagner, Production Manager for Cummins Engine, selected
                                a Resource Manager to assist in scheduling labor and machine
                                resources. "We are in the midst of changing our corporate system
                                and neither (old or new) system will handle job shop management
                                the way we run our shops." We need a flexible tool for planning
                                and scheduling labor over several months. In addition, we need
                                to schedule day-to-day machine operations per the master
                                schedule. Resource Manager for Excel is the perfect fit for a
                                stop-gap solution for these areas."
                            </p>

                            <div className="my-6 flex justify-center">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/07/main-banner-300x193-1.jpg"
                                    alt="Cummins Engine facility"
                                    width={300}
                                    height={193}
                                    className="h-auto rounded-lg shadow-md"
                                    unoptimized
                                />
                            </div>

                            <p className="text-gray-700 dark:text-gray-300">
                                Cummins Engine has 33 locations around the U.S. and accessorizes
                                engines for custom applications. According to Mr. Van Wagner,
                                "We like the fact that Resource Manager for Excel has a
                                Bill-Of-Resource that can include the tool, labor, and machine
                                requirements for scheduling the shop. With our old legacy system
                                from Xerox, we had only basic parts and engine model information
                                for scheduling; now we have detailed man-hours and routings
                                available. We like the ability, with Resource Manager for Excel,
                                to define load and select a realistic promise date for our
                                customers — we have already seen an increase in customer
                                satisfaction."
                            </p>

                            <p className="text-gray-700 dark:text-gray-300">
                                Joe continues, "The flexibility of the product is pretty
                                fantastic. We are able to download our Bills-Of-Materials from
                                the AS400 directly into Resource Manager for Excel, add labor
                                and routings, and immediately generate master schedules. In
                                addition to master scheduling, we make parts for engines and
                                distribution and can use Resource Manager to schedule production
                                in this make-to-stock application. The neat graphing capability
                                gives us an excellent visual on what is happening, or needs to
                                happen."
                            </p>

                            <div className="my-6 flex justify-center">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/07/SkillsBarWeek-300x169-2.png"
                                    alt="Skills Bar Week scheduling chart"
                                    width={300}
                                    height={169}
                                    className="h-auto rounded-lg shadow-md"
                                    unoptimized
                                />
                            </div>

                            <p className="text-gray-700 dark:text-gray-300">
                                Cummins Engine is a global power leader that designs,
                                manufactures, sells and services diesel engines and related
                                technology around the world. Cummins Engine serves its customers
                                through its network of 600 company-owned and independent
                                distributor facilities and more than 7,200 dealer locations in
                                over 190 countries and territories.
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
