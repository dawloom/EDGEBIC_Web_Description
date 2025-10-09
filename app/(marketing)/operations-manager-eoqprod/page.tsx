import * as React from 'react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EoqprodPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white dark:from-blue-800 dark:to-blue-900">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mb-6">
                            <Badge
                                variant="outline"
                                className="h-8 rounded-full border-white/20 bg-white/10 px-3 text-sm font-medium text-white shadow-sm"
                            >
                                OPERATIONS MANAGER
                            </Badge>
                        </div>
                        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                            Operations Manager: EOQPROD
                        </h1>
                        <p className="mb-8 text-xl md:text-2xl">
                            EOQ for Production Lot Sizes - Optimizing manufacturing batch
                            quantities
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-gray-100"
                            >
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="mb-8 text-center text-3xl font-bold">
                            EOQ for Production Lot Sizes (EOQPROD)
                        </h2>

                        <div className="prose prose-lg mb-12 max-w-none">
                            <div className="mb-8 rounded-lg bg-blue-50 p-6">
                                <h3 className="mb-4 text-2xl font-semibold text-blue-800">
                                    Case Study: Alvin Air Systems
                                </h3>
                                <p className="mb-4 text-blue-700">
                                    Alvin Air Systems in Alvin, Texas, produces repair and
                                    maintenance items for commercial air conditioning systems.
                                    Alvin cannot use the standard EOQ for determining production
                                    lot sizes.
                                </p>
                            </div>

                            <h3 className="mb-4 text-2xl font-semibold">
                                Problems with Standard EOQ for Production
                            </h3>

                            <div className="mb-8 rounded-lg bg-red-50 p-6">
                                <h4 className="mb-3 text-xl font-semibold text-red-800">
                                    Key Challenges:
                                </h4>
                                <ul className="list-disc space-y-3 pl-6 text-red-700">
                                    <li>
                                        <strong>Gradual Production:</strong> The standard EOQ
                                        assumes that an order quantity or lot of material is
                                        received all at once. At Alvin, most production lots take
                                        some time to complete and parts are placed in stock on a
                                        daily basis until the run is over.
                                    </li>
                                    <li>
                                        <strong>Ongoing Sales:</strong> A related problem is that
                                        substantial sales usually occur before the run is over.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-8 rounded-lg bg-green-50 p-6">
                                <h3 className="mb-4 text-2xl font-semibold text-green-800">
                                    The Solution: Modified EOQ for Production
                                </h3>
                                <p className="mb-4 text-green-700">
                                    To solve these problems, Alvin uses the modified EOQ model for
                                    production lot sizes.
                                </p>
                                <div className="rounded border-l-4 border-green-500 bg-green-100 p-4">
                                    <p className="font-semibold text-green-800">
                                        Why? The EOQ must be larger than maximum investment to
                                        account for sales made during the production run
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8 rounded-lg bg-gray-50 p-6">
                                <h3 className="mb-3 text-xl font-semibold">
                                    Key Differences from Standard EOQ
                                </h3>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <h4 className="mb-2 font-semibold text-red-600">
                                            Standard EOQ
                                        </h4>
                                        <ul className="list-disc space-y-1 pl-4 text-sm">
                                            <li>Assumes instantaneous receipt</li>
                                            <li>No production time consideration</li>
                                            <li>Simple inventory buildup</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="mb-2 font-semibold text-green-600">
                                            EOQPROD
                                        </h4>
                                        <ul className="list-disc space-y-1 pl-4 text-sm">
                                            <li>Accounts for gradual production</li>
                                            <li>Considers sales during production</li>
                                            <li>Optimizes for manufacturing batches</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8 rounded-lg bg-blue-50 p-6">
                                <h3 className="mb-3 text-xl font-semibold text-blue-800">
                                    Benefits of EOQPROD
                                </h3>
                                <ul className="list-disc space-y-2 pl-6 text-blue-700">
                                    <li>
                                        Optimizes production lot sizes for manufacturing
                                        environments
                                    </li>
                                    <li>
                                        Accounts for gradual inventory buildup during production
                                    </li>
                                    <li>Considers ongoing sales during production runs</li>
                                    <li>Minimizes total production and holding costs</li>
                                    <li>Improves cash flow management</li>
                                    <li>Reduces inventory investment requirements</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="mb-8 text-3xl font-bold">
                            CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                        </h2>
                        <div className="flex justify-center">
                            <Image
                                src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                                alt="Collection of industry and business awards logos"
                                width={1024}
                                height={128}
                                className="h-auto max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
