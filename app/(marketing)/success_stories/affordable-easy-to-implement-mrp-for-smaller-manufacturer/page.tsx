import type { Metadata } from 'next';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
    title:
        'Affordable, Easy to Implement MRP for Smaller Manufacturer | User Solutions',
    description:
        'Sleepmaster LTD successfully implemented an affordable, flexible MRP system for their Australian and Chinese operations.',
    openGraph: {
        title:
            'Affordable, Easy to Implement MRP for Smaller Manufacturer | User Solutions',
        description:
            'Sleepmaster LTD successfully implemented an affordable, flexible MRP system for their Australian and Chinese operations.',
        url: 'https://www.usersolutions.com/success-stories/affordable-easy-to-implement-mrp-for-smaller-manufacturer'
    }
};

export default function AffordableEasyMRPPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-6 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <Badge
                            variant="outline"
                            className="mb-6 h-8 rounded-full px-4 text-sm font-medium shadow-sm"
                        >
                            Success Story
                        </Badge>
                        <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
                            Affordable, Easy to Implement MRP for Smaller Manufacturer
                        </h1>
                        <p className="mx-auto mb-4 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
                            How Sleepmaster LTD Implemented a Flexible MRP System for
                            Australia and China
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
                                1. Our situation is that we are a relatively small organization
                                (AUD$50M of sales) and we have an outdated MRP system. The
                                current system in Australia has no effective scheduling ability
                                and is very cumbersome to use for product costings. We are also
                                in the process of starting up a new facility in China, which has
                                no MRP system at all, and the people there have little modern
                                manufacturing experience. We decided to use it to help get the
                                Chinese operation up and running quickly first.
                            </p>

                            <p className="text-gray-700 dark:text-gray-300">
                                The problems we wanted to solve were therefore:
                            </p>

                            <p className="text-gray-700 dark:text-gray-300">
                                • Provide a scheduling system that allows quick changes in a
                                very dynamic demand situation.
                                <br />
                                • Provide a quick and easy costing system for products.
                                <br />
                                • Provide a quick and easy system for materials requirements
                                planning.
                                <br />• Enable BOMs and routes to be quickly and easily built
                                "on the run"
                            </p>

                            <div className="my-6 flex justify-center">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/07/MRP-XLS-RPT.png"
                                    alt="MRP Excel reporting interface"
                                    width={600}
                                    height={400}
                                    className="h-auto rounded-lg shadow-md"
                                    unoptimized
                                />
                            </div>

                            <p className="text-gray-700 dark:text-gray-300">
                                2. Resource Manager was chosen because:
                            </p>

                            <p className="text-gray-700 dark:text-gray-300">
                                • It is very easy and intuitive to use
                                <br />
                                • It can be used in sections within days, without having the
                                whole system implementation required. ie. the materials planning
                                was done first, then the costings, then the scheduling
                                <br />
                                • It is low cost
                                <br />
                                • It is easily configurable/flexible
                                <br />• Good support is offered via Skype, phone and
                                GoToMeeting, with fast turnaround to resolve issues
                            </p>

                            <p className="text-gray-700 dark:text-gray-300">
                                The biggest benefit relative to other systems looked at is its
                                simplicity to operate and speed at which it can generate results
                                in whichever area you want to start on.
                            </p>

                            <p className="text-gray-700 dark:text-gray-300">
                                A whole system can be built up while it is generating value,
                                which is particularly valuable in a start up situation such as
                                our Chinese plant.
                            </p>

                            <p className="text-gray-700 dark:text-gray-300">
                                3. We considered a number of other systems both local and
                                global. Most are far more expensive and comprehensive (eg.
                                accounting capability) but all require much higher cost and are
                                much more resource hungry to set up. RMDB required one
                                individual very much part time (me) to set up on the critical
                                areas for China and is now being run by a young Chinese manager
                                who had no manufacturing experience, but has picked up the
                                concepts well. In that sense it is also a very good MRP training
                                tool also.
                            </p>

                            <p className="text-gray-700 dark:text-gray-300">
                                Jim Steel, Operations Manager for Sleepmaster, LTD
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
