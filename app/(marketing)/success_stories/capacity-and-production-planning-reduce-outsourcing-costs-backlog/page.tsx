import type { Metadata } from 'next';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
    title:
        'Capacity and Production Planning Reduce Outsourcing Costs, Backlog | User Solutions',
    description:
        'Discover how effective capacity and production planning strategies reduced outsourcing costs and eliminated backlog.',
    openGraph: {
        title:
            'Capacity and Production Planning Reduce Outsourcing Costs, Backlog | User Solutions',
        description:
            'Discover how effective capacity and production planning strategies reduced outsourcing costs and eliminated backlog.',
        url: 'https://www.usersolutions.com/success-stories/capacity-and-production-planning-reduce-outsourcing-costs-backlog'
    }
};

export default function CapacityProductionPlanningPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-violet-50 via-white to-purple-50 py-6 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <Badge
                            variant="outline"
                            className="mb-6 h-8 rounded-full px-4 text-sm font-medium shadow-sm"
                        >
                            Success Story
                        </Badge>
                        <h1 className="mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
                            Capacity and Production Planning Reduce Outsourcing Costs, Backlog
                        </h1>
                        <p className="mx-auto mb-4 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
                            See how strategic capacity planning eliminated costly outsourcing
                            and production backlogs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <div className="prose prose-lg dark:prose-invert mx-auto">
                            <p className="text-center text-gray-600 dark:text-gray-400">
                                Content coming soon...
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
