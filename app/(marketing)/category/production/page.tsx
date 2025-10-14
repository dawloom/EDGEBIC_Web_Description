import type { Metadata } from 'next';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
    title: 'Production | User Solutions',
    description:
        'Explore production planning and scheduling solutions for modern manufacturers.',
    openGraph: {
        title: 'Production | User Solutions',
        description:
            'Explore production planning and scheduling solutions for modern manufacturers.',
        url: 'https://www.usersolutions.com/category/production'
    }
};

export default function ProductionCategoryPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-6 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <Badge
                            variant="outline"
                            className="mb-6 h-8 rounded-full border-blue-600/30 px-4 text-sm font-medium text-blue-700 shadow-sm dark:border-blue-400/30 dark:text-blue-300"
                        >
                            Production Category
                        </Badge>
                        <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
                            Production
                        </h1>
                        <p className="mb-4 text-xl text-gray-700 dark:text-gray-300">
                            Discover articles and resources about production planning and
                            scheduling
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pt-6">
                <div className="mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        {/* Articles Grid */}
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Article 1: The Role of Technology */}
                            <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src="https://www.usersolutions.com/wp-content/uploads/2024/07/pexels-cottonbro-4065906-scaled.jpg"
                                        alt="Submarine crew in control room"
                                        fill
                                        className="object-cover transition-transform hover:scale-105"
                                        unoptimized
                                    />
                                </div>
                                <CardContent className="flex flex-1 flex-col p-6">
                                    <h2 className="mb-4 text-2xl font-bold text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                                        <a href="/erp-solutions-for-production-planning">
                                            The Role of Technology in Modern Production Planning and
                                            Scheduling
                                        </a>
                                    </h2>
                                    <p className="mb-4 flex-1 leading-relaxed text-gray-700 dark:text-gray-300">
                                        Have you ever wondered how technology can transform the
                                        traditional landscape of production planning and scheduling?
                                        In an era where efficiency dictates market leaders, the
                                        adoption of advanced technological tools has become
                                        indispensable. User Solutions, Inc. specializes in providing
                                        cutting-edge ERP solutions for manufacturers, which are
                                        pivotal in revolutionizing how production planning and
                                        scheduling tasks […]
                                    </p>
                                    <a
                                        href="/erp-solutions-for-production-planning"
                                        className="font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                    >
                                        Read More →
                                    </a>
                                </CardContent>
                            </Card>

                            {/* Article 2: Implementing Lean Manufacturing */}
                            <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src="https://www.usersolutions.com/wp-content/uploads/2024/07/pexels-freestockpro-867452-scaled.jpg"
                                        alt="Illustration of a worker with construction tools icons"
                                        fill
                                        className="object-cover transition-transform hover:scale-105"
                                        unoptimized
                                    />
                                </div>
                                <CardContent className="flex flex-1 flex-col p-6">
                                    <h2 className="mb-4 text-2xl font-bold text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                                        <a href="/lean-manufacturing-solutions">
                                            Implementing Lean Manufacturing Principles for Improved
                                            Production Efficiency
                                        </a>
                                    </h2>
                                    <p className="mb-4 flex-1 leading-relaxed text-gray-700 dark:text-gray-300">
                                        Is your manufacturing process as streamlined and
                                        cost-effective as it could be? In today&apos;s competitive
                                        landscape, companies are constantly seeking methods to
                                        enhance efficiency and reduce waste. Lean manufacturing
                                        principles have emerged as a cornerstone in achieving these
                                        goals. At User Solutions, Inc., we specialize in integrating
                                        these principles with advanced resource management solutions
                                        to […]
                                    </p>
                                    <a
                                        href="/lean-manufacturing-solutions"
                                        className="font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                    >
                                        Read More →
                                    </a>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Awards Banner */}
                        <div>
                            <Card className="mt-6 rounded-xl border bg-gradient-to-br from-blue-50 to-blue-100 text-card-foreground shadow dark:from-blue-900/20 dark:to-blue-800/20">
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
