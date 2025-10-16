import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ThankYouPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-6 text-white">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <Badge
                            variant="outline"
                            className="mb-6 h-8 rounded-full border-white/30 bg-white/10 px-3 text-sm font-medium text-white shadow-sm"
                        >
                            THANK YOU
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                            Thank You for Your Interest
                        </h1>
                        <p className="text-xl text-white/90">
                            We appreciate you taking the time to learn about our solutions
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle>What Happens Next?</CardTitle>
                            </CardHeader>
                            <CardContent className="prose max-w-none">
                                <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                                    We will contact you to discuss your scheduling application in
                                    complete detail. You are welcome to send sample data at
                                    anytime to take advantage of our unique demoing approach –
                                    proving the solution.
                                </p>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Send data or post questions anytime to{' '}
                                    <Link
                                        href="mailto:us@usersolutions.com"
                                        className="font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400"
                                    >
                                        us@usersolutions.com
                                    </Link>{' '}
                                    or call us at{' '}
                                    <Link
                                        href="tel:248.486.6365"
                                        className="font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400"
                                    >
                                        248.486.6365
                                    </Link>
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle>Our Unique Demoing Approach</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <span className="mr-3 text-2xl text-green-600 dark:text-green-400">
                                            1.
                                        </span>
                                        <div>
                                            <h3 className="mb-2 text-lg font-semibold">
                                                Send Your Data
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Share your production data with us - we'll use it to
                                                create a customized demo
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="mr-3 text-2xl text-green-600 dark:text-green-400">
                                            2.
                                        </span>
                                        <div>
                                            <h3 className="mb-2 text-lg font-semibold">
                                                Prove the Solution
                                            </h3>
                                            <p className="text-muted-foreground">
                                                We'll demonstrate how our software works with YOUR
                                                actual data and requirements
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="mr-3 text-2xl text-green-600 dark:text-green-400">
                                            3.
                                        </span>
                                        <div>
                                            <h3 className="mb-2 text-lg font-semibold">
                                                Complete Discussion
                                            </h3>
                                            <p className="text-muted-foreground">
                                                We'll discuss your application in detail, answer all
                                                questions, and ensure the fit is right
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-8 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
                            <CardContent className="pt-6">
                                <div className="text-center">
                                    <p className="mb-4 text-2xl font-semibold">
                                        Kindest Regards,
                                    </p>
                                    <p className="mb-2 text-xl text-muted-foreground">
                                        User Solutions, Inc.
                                    </p>
                                    <p className="text-lg italic text-muted-foreground">
                                        Since 1991 – Manufacturing Software made easy!
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Ready to Get Started?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4 text-center">
                                    <p className="mb-6 text-muted-foreground">
                                        Explore our solutions or get back to our home page
                                    </p>
                                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                        <Link href="/">
                                            <Button
                                                size="lg"
                                                className="text-lg"
                                            >
                                                Back to Home
                                            </Button>
                                        </Link>
                                        <Link href="/excel-applications">
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className="text-lg"
                                            >
                                                View Products
                                            </Button>
                                        </Link>
                                        <Link href="mailto:us@usersolutions.com">
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className="text-lg"
                                            >
                                                Contact Us
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
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
                                <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                                    CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                                </h3>
                                <p className="mb-6 text-lg text-muted-foreground">
                                    Trusted by manufacturers worldwide for over 25 years
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-6 opacity-70">
                                    <div className="text-sm font-semibold text-muted-foreground">
                                        Industry Awards
                                    </div>
                                    <div className="text-sm font-semibold text-muted-foreground">
                                        Excellence Recognition
                                    </div>
                                    <div className="text-sm font-semibold text-muted-foreground">
                                        Customer Choice
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
