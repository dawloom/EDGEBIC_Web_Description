import type { Metadata } from 'next';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
    title:
        'Complements Traditional MRP for Job Shop Scheduling and Efficiency | User Solutions',
    description:
        'Explore how complementary scheduling solutions enhance traditional MRP systems in job shop environments.',
    openGraph: {
        title:
            'Complements Traditional MRP for Job Shop Scheduling and Efficiency | User Solutions',
        description:
            'Explore how complementary scheduling solutions enhance traditional MRP systems in job shop environments.',
        url: 'https://www.usersolutions.com/success-stories/complements-traditional-mrp-and-shop-control-systems'
    }
};

export default function ComplementsTraditionalMrpPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-emerald-50 via-white to-green-50 py-6 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <Badge
                            variant="outline"
                            className="mb-6 h-8 rounded-full px-4 text-sm font-medium shadow-sm"
                        >
                            Success Story
                        </Badge>
                        <h1 className="mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
                            Complements Traditional MRP for Job Shop Scheduling and Efficiency
                        </h1>
                        <p className="mx-auto mb-4 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
                            Learn how advanced scheduling solutions complement MRP systems to
                            boost job shop efficiency.
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
                                Arnold Quesenberry, Senior Consultant for A.G. Raymond & Co.
                                Inc. has been using Resource Manager in conjunction with
                                consulting projects. "We have found these products are a perfect
                                complement to traditional MRP and Shop Control systems. They
                                enable the user to quickly generate various 'what-if' plans for
                                feasible and efficient master scheduling, all without disrupting
                                the current system".
                            </p>

                            <div className="my-8 flex justify-center">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/07/RMX.png"
                                    alt="Resource Manager RMX"
                                    width={600}
                                    height={400}
                                    className="h-auto rounded-lg shadow-md"
                                    unoptimized
                                />
                            </div>

                            <p className="text-gray-700 dark:text-gray-300">
                                Mr. Quesenberry continues, "In addition to complementing
                                traditional systems, the Resource Manager is the perfect
                                beginning system for companies just getting started with
                                computerizing their operations, both here and abroad. It
                                provides a quick, easy, and flexible method to organize parts,
                                routings, operations, costs, Bills-Of-Materials, and perform
                                basic scheduling, inventory management, even purchasing.
                            </p>

                            <p className="text-gray-700 dark:text-gray-300">
                                Our customers love the fact that since the Resource Manager is
                                compatible with Excel, they are immediately comfortable with
                                running the system."
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
