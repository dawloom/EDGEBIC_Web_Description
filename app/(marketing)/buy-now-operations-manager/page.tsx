import Link from 'next/link';
import { Check } from 'lucide-react';

import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card';

export default function BuyNowOperationsManagerPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 text-white dark:from-blue-800 dark:to-blue-900">
                <div className="container mx-auto px-4 text-center">
                    <div className="mx-auto max-w-7xl">
                        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                            Purchase Operations Manager
                        </h1>
                        <p className="mb-8 text-xl md:text-2xl">
                            The complete toolkit for operations excellence
                        </p>
                    </div>
                </div>
            </section>

            {/* Product Overview */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center text-3xl">
                                    Operations Manager
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="prose dark:prose-invert max-w-none">
                                <p className="text-center">
                                    Comprehensive operations management tools including
                                    forecasting, inventory control, quality management, and
                                    process analysis. Everything you need to optimize your
                                    operations.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-muted/50 pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center text-3xl">
                                    What's Included
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 size-5 shrink-0 text-green-600" />
                                        <span>Full software license</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 size-5 shrink-0 text-green-600" />
                                        <span>Source code included</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 size-5 shrink-0 text-green-600" />
                                        <span>Technical support</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 size-5 shrink-0 text-green-600" />
                                        <span>Free updates</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 size-5 shrink-0 text-green-600" />
                                        <span>Documentation and guides</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 size-5 shrink-0 text-green-600" />
                                        <span>Sample templates</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                            <CardContent className="p-8 text-center">
                                <h2 className="mb-6 text-3xl font-bold text-foreground">
                                    Ready to Purchase?
                                </h2>
                                <p className="mb-6 text-lg text-muted-foreground">
                                    View pricing options and complete your purchase
                                </p>
                                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                    <Link href="/pricing">
                                        <Button
                                            size="lg"
                                            className="bg-blue-600 text-white hover:bg-blue-700"
                                        >
                                            View Pricing
                                        </Button>
                                    </Link>
                                    <Link href="/contact-us">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                        >
                                            Contact Sales
                                        </Button>
                                    </Link>
                                    <Link href="/product-downloads">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                        >
                                            Try Free Demo
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
