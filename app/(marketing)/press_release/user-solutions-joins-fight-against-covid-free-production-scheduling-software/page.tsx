import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';

export default function CovidPressReleasePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-blue-600 py-16 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-center text-4xl font-bold">Press Release</h1>
                </div>
            </div>

            {/* Press Release Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="mx-auto max-w-7xl">
                    <article className="prose prose-lg max-w-none">
                        <header className="mb-12">
                            <h1 className="mb-4 text-4xl font-bold text-gray-900">
                                User Solutions Joins Fight Against Covid – Free Production
                                Scheduling Software
                            </h1>
                            <div className="mb-6 text-gray-600">
                                <time>4/7/2020</time>
                            </div>
                            <p className="text-lg font-semibold text-gray-700">
                                South Lyon, MI April 7, 2020
                            </p>
                        </header>

                        <div className="space-y-6 leading-relaxed text-gray-700">
                            <p>
                                User Solutions, a producer of production scheduling software
                                systems, announces it will offer Resource Manager for Excel
                                (RMX), a fully functional, standalone production scheduling and
                                inventory planning system, free of charge, to manufacturers
                                temporarily reconfiguring their operations in the fight against
                                the coronavirus pandemic. In addition, User Solutions will
                                provide free training and basic implementation to further hasten
                                the manufacture of COVID-19 related products.
                            </p>

                            <p>
                                RMX, being nimble and flexible, will not only enable
                                manufacturers to be fully prepared (within a few hours) to plan
                                and schedule the new COVID-19 related product lines, but also
                                provide accurate delivery dates and quantities to their
                                recipients. This eliminates the arduous task of reconfiguring
                                their ERP and production scheduling systems for this temporary
                                situation and then reverting it all back.
                            </p>

                            <blockquote className="my-8 border-l-4 border-blue-600 bg-blue-50 p-6">
                                <p className="mb-4 text-lg italic">
                                    "During our 30 plus years' of experience, we are used to
                                    helping{' '}
                                    <Link
                                        href="/success-stories"
                                        className="text-blue-600 hover:underline"
                                    >
                                        manufacturers
                                    </Link>{' '}
                                    in a pinch with this quick, band-aid solution. RMX has long
                                    been known for use where there is either no ERP, during ERP
                                    implementation or to rapidly address new product lines, such
                                    as the COVID-19 product demands. We would be thrilled to play
                                    an instrumental role in helping manufacturers that are
                                    changing gears to produce COVID-19 related products by saving
                                    them time, productivity and substantial costs through the use
                                    of our RMX."
                                </p>
                                <cite className="font-semibold text-gray-600">
                                    - Jim Convis, President of User Solutions
                                </cite>
                            </blockquote>

                            <p>
                                During COVID-19 product conversions, manufacturers can benefit
                                from RMX's Bill of Resources (BOR) – a revolutionary concept
                                that combines the labor and routings with the bills of material
                                so that they are scheduled concurrently. This enables RMX to
                                fulfill two desperately needed functions: bringing stability to
                                a manufacturer's supply chain by quoting accurate delivery of
                                both quantity and date, and establishing and optimizing a
                                realistic supply chain from their new vendors.
                            </p>

                            <p>
                                Since RMX can quickly configure a new product or demand to fight
                                against the coronavirus pandemic, manufacturers big and small
                                can quickly move to action whether the need is more masks,
                                ventilators, gowns, gloves – you name it. Material Requirements
                                Planning as well as Production Planning and Scheduling
                                considering Finite Capacity can all be managed with ease.
                            </p>

                            <p>
                                "It's amazing to see how America's businesses are coming
                                together to make a difference in any way that they can. For
                                instance, when we reached out to Ripple Effect Communications,
                                we were so thankful to have their talented digital PR and social
                                media team step up to manage our campaign free of charge so that
                                we could get the word out quickly and effectively. And it also
                                goes to show that businesses of all kinds can do their part."
                            </p>

                            <div className="my-8 rounded-lg bg-gray-50 p-6">
                                <h3 className="mb-4 text-xl font-bold text-gray-800">
                                    About User Solutions, Inc.
                                </h3>
                                <p>
                                    User Solutions, Inc. was founded in 1991 in response to the
                                    demand for lower cost, easy to learn and use software
                                    solutions for the manufacturing and operations management
                                    markets. As either an add-on solution to existing ERP
                                    solutions, or running stand alone, their affordable planning,
                                    scheduling, and tracking solutions are known for great
                                    flexibility, rapid implementation and increasing the knowledge
                                    and skill set of those involved with the production process.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 border-t border-gray-200 pt-8">
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    href="/resource-manager-for-excel-2"
                                    className="rounded-lg bg-gray-600 px-6 py-3 text-white transition-colors hover:bg-gray-700"
                                >
                                    Learn About RMX
                                </Link>
                                <Link
                                    href="/press_release"
                                    className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50"
                                >
                                    More Press Releases
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            {/* Awards Section */}
            <section className="py-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                            <CardContent className="p-8 text-center">
                                <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                                    CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                                </h3>
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

            {/* Contact Section */}
            <div className="bg-blue-600 py-12 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-4 text-2xl font-bold">ABOUT US</h2>
                    <p className="mb-2">us@usersolutions.com</p>
                    <p className="mb-6">248.486.6365</p>

                    <h3 className="mb-4 text-xl font-bold">PRODUCTS</h3>
                    <div className="space-y-2">
                        <Link
                            href="/jsl-job-scheduler-lite"
                            className="block hover:underline"
                        >
                            Job Scheduler Lite (JSL)
                        </Link>
                        <Link
                            href="/resource-manager-db-2"
                            className="block hover:underline"
                        >
                            Resource Manager DB
                        </Link>
                        <Link
                            href="/edgebi"
                            className="block hover:underline"
                        >
                            EDGEBI
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
