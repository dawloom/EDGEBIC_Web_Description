import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
    title: 'Advanced Scheduling Solutions | User Solutions',
    description:
        'Explore articles about advanced scheduling solutions for modern manufacturing and supply chain management.'
};

export default function AdvancedSchedulingSolutionsTagPage() {
    return (
        <div className="container mx-auto max-w-7xl px-4 py-6">
            {/* Hero Section */}
            <div className="mb-12 text-center">
                <Badge
                    className="mb-4 h-8 rounded-full px-4 text-sm"
                    variant="outline"
                >
                    Advanced Scheduling Solutions Tag
                </Badge>
                <h1 className="mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-4xl font-bold text-transparent dark:from-green-400 dark:to-emerald-400 md:text-5xl">
                    Advanced Scheduling Solutions
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                    Explore articles about advanced scheduling solutions for modern
                    manufacturing and supply chain management.
                </p>
            </div>

            {/* Articles Grid */}
            <div className="mb-12">
                <Card className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <Link
                        href="/enhancing-supply-chain-visibility-through-advanced-scheduling-solutions"
                        className="block transition-all duration-300"
                    >
                        <div className="relative h-96 w-full overflow-hidden">
                            <Image
                                src="https://www.usersolutions.com/wp-content/uploads/2022/09/usersolutionsimage-300x211.png"
                                alt="Businessman working on computer in office setting"
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-110"
                                unoptimized
                            />
                        </div>
                        <CardContent className="p-6">
                            <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                                Enhancing Supply Chain Visibility through Advanced Scheduling
                                Solutions
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                Supply Chain Visibility Solutions for Modern Manufacturers Are
                                your supply chain operations as transparent and efficient as
                                they should be? In today's fast-paced market, full visibility is
                                essential. Manufacturers must optimize operations and respond
                                quickly to changes. At User Solutions, Inc., we deliver advanced
                                scheduling solutions and ERP software that improve visibility
                                across your supply […]
                            </p>
                        </CardContent>
                    </Link>
                </Card>
            </div>

            {/* Award Logo Card */}
            <Card className="mt-6 rounded-xl border bg-gradient-to-br from-blue-50 to-blue-100 text-card-foreground shadow dark:from-blue-900/20 dark:to-blue-800/20">
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
    );
}
