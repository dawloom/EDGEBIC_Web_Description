import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ThankYouPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                            Thank You for Your Interest
                        </h1>
                        <p className="mb-8 text-xl text-gray-700">
                            We appreciate you taking the time to learn about our solutions
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-16 pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle>What Happens Next?</CardTitle>
                            </CardHeader>
                            <CardContent className="prose max-w-none">
                                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                                    We will contact you to discuss your scheduling application in
                                    complete detail. You are welcome to send sample data at
                                    anytime to take advantage of our unique demoing approach –
                                    proving the solution.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    Send data or post questions anytime to{' '}
                                    <Link
                                        href="mailto:us@usersolutions.com"
                                        className="font-semibold text-blue-600 hover:text-blue-800"
                                    >
                                        us@usersolutions.com
                                    </Link>{' '}
                                    or call us at{' '}
                                    <Link
                                        href="tel:248.486.6365"
                                        className="font-semibold text-blue-600 hover:text-blue-800"
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
                                        <span className="mr-3 text-2xl text-green-600">1.</span>
                                        <div>
                                            <h3 className="mb-2 text-lg font-semibold">
                                                Send Your Data
                                            </h3>
                                            <p className="text-gray-700">
                                                Share your production data with us - we'll use it to
                                                create a customized demo
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="mr-3 text-2xl text-green-600">2.</span>
                                        <div>
                                            <h3 className="mb-2 text-lg font-semibold">
                                                Prove the Solution
                                            </h3>
                                            <p className="text-gray-700">
                                                We'll demonstrate how our software works with YOUR
                                                actual data and requirements
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="mr-3 text-2xl text-green-600">3.</span>
                                        <div>
                                            <h3 className="mb-2 text-lg font-semibold">
                                                Complete Discussion
                                            </h3>
                                            <p className="text-gray-700">
                                                We'll discuss your application in detail, answer all
                                                questions, and ensure the fit is right
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-8 border-blue-200 bg-blue-50">
                            <CardContent className="pt-6">
                                <div className="text-center">
                                    <p className="mb-4 text-2xl font-semibold text-gray-800">
                                        Kindest Regards,
                                    </p>
                                    <p className="mb-2 text-xl text-gray-700">
                                        User Solutions, Inc.
                                    </p>
                                    <p className="text-lg italic text-gray-600">
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
                                    <p className="mb-6 text-gray-700">
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
            <section className="bg-gray-50 pb-16 pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="mb-8 text-3xl font-bold">
                            Celebrating 25 Years of Award Winning Software!
                        </h2>
                        <div className="rounded-lg bg-white p-8 shadow-lg">
                            <p className="mb-4 text-gray-600">
                                Trusted by manufacturers worldwide for over 25 years
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-6 opacity-70">
                                <div className="text-sm font-semibold text-gray-500">
                                    Industry Awards
                                </div>
                                <div className="text-sm font-semibold text-gray-500">
                                    Excellence Recognition
                                </div>
                                <div className="text-sm font-semibold text-gray-500">
                                    Customer Choice
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
