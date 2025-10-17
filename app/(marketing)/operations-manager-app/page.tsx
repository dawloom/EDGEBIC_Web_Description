import * as React from 'react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OperationsManagerAppPage(): React.JSX.Element {
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
                            Operations Manager: APP
                        </h1>
                        <p className="mb-8 text-xl md:text-2xl">
                            Aggregate Production Planning
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

            {/* Content Section */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center text-3xl">
                                    Aggregate production planning (APP)
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Aggregate production planning is the process of determining
                                    (1) the timing and quantity of production, (2) the level of
                                    inventories, (3) the number of workers employed, and (4) the
                                    amount of overtime used for up to 12 months ahead. Production
                                    and inventories are stated in overall or aggregate quantities,
                                    such as number of automobiles without regard to model or color
                                    or number of pairs of shoes without regard to style or size.
                                    Cost minimization is rarely the only goal in aggregate
                                    planning. Other considerations, such as stability of the
                                    workforce and maintenance of adequate inventory levels, are
                                    usually just as important.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Award Section */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <Card className="overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                            <CardHeader>
                                <CardTitle className="text-center text-2xl text-blue-900 dark:text-white">
                                    CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex justify-center p-6">
                                <div className="w-full max-w-4xl">
                                    <Image
                                        alt="Collection of industry and business awards logos"
                                        className="h-auto w-full"
                                        height={128}
                                        src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                                        width={1024}
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
