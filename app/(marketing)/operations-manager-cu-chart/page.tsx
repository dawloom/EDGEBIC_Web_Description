import * as React from 'react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OperationsManagerCuChartPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 text-white dark:from-blue-800 dark:to-blue-900">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <div className="mb-6">
                            <Badge
                                variant="outline"
                                className="h-8 rounded-full border-white/20 bg-white/10 px-3 text-sm font-medium text-white shadow-sm"
                            >
                                OPERATIONS MANAGER
                            </Badge>
                        </div>
                        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                            Operations Manager: CU Chart
                        </h1>
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

            {/* CU Chart Content */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center text-3xl">
                                    CU Sum Chart (Cumulative Sum)
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    The CU chart (cumulative sum chart) is used to monitor process mean shifts. It is particularly effective at detecting small sustained shifts in the process mean. The chart plots the cumulative sum of deviations from a target value, making trends more visible than traditional control charts.
                                </p>

                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    CU charts are more sensitive to small process shifts compared to Shewhart control charts (like X-bar and R charts). They are especially useful in situations where you need to detect gradual drift or small changes in process performance over time.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                            <CardContent className="p-8 text-center">
                                <h2 className="mb-6 text-2xl font-bold text-foreground">
                                    CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                                </h2>
                                <div className="flex justify-center">
                                    <Image
                                        src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                                        alt="Collection of industry and business awards logos"
                                        width={1024}
                                        height={128}
                                        className="h-auto max-w-full rounded-lg shadow-md"
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
