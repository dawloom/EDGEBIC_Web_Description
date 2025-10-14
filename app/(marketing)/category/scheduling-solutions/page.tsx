import type { Metadata } from 'next';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
    title: 'Scheduling Solutions | User Solutions',
    description:
        'Explore advanced scheduling solutions for supply chain and manufacturing optimization.',
    openGraph: {
        title: 'Scheduling Solutions | User Solutions',
        description:
            'Explore advanced scheduling solutions for supply chain and manufacturing optimization.',
        url: 'https://www.usersolutions.com/category/scheduling-solutions'
    }
};

export default function SchedulingSolutionsCategoryPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-6 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <Badge
                            variant="outline"
                            className="mb-6 h-8 rounded-full border-green-600/30 px-4 text-sm font-medium text-green-700 shadow-sm dark:border-green-400/30 dark:text-green-300"
                        >
                            Scheduling Solutions Category
                        </Badge>
                        <h1 className="mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
                            Scheduling Solutions
                        </h1>
                        <p className="mb-4 text-xl text-gray-700 dark:text-gray-300">
                            Discover articles and resources about advanced scheduling
                            solutions
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pt-6">
                <div className="mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        {/* Article */}
                        <Card className="mb-6 overflow-hidden transition-shadow hover:shadow-lg">
                            <div className="relative h-96 w-full overflow-hidden">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/09/usersolutionsimage-1024x719.png"
                                    alt="Businessman working on computer in office setting"
                                    fill
                                    className="object-cover transition-transform hover:scale-105"
                                    unoptimized
                                />
                            </div>
                            <CardContent className="p-8">
                                <h2 className="mb-4 text-3xl font-bold text-gray-900 hover:text-green-600 dark:text-white dark:hover:text-green-400">
                                    <a href="/enhancing-supply-chain-visibility-through-advanced-scheduling-solutions">
                                        Enhancing Supply Chain Visibility through Advanced
                                        Scheduling Solutions
                                    </a>
                                </h2>
                                <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                    Supply Chain Visibility Solutions for Modern Manufacturers Are
                                    your supply chain operations as transparent and efficient as
                                    they should be? In today&apos;s fast-paced market, full
                                    visibility is essential. Manufacturers must optimize
                                    operations and respond quickly to changes. At User Solutions,
                                    Inc., we deliver advanced scheduling solutions and ERP
                                    software that improve visibility across your supply […]
                                </p>
                                <a
                                    href="/enhancing-supply-chain-visibility-through-advanced-scheduling-solutions"
                                    className="font-semibold text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
                                >
                                    Read More →
                                </a>
                            </CardContent>
                        </Card>

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
