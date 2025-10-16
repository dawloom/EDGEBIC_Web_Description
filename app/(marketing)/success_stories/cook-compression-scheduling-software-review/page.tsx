import type { Metadata } from 'next';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
    title: 'Cook Compression Scheduling Software Review | User Solutions',
    description:
        'Cook Compression shares their exceptional experience with User Solutions world-class support and service.',
    openGraph: {
        title: 'Cook Compression Scheduling Software Review | User Solutions',
        description:
            'Cook Compression shares their exceptional experience with User Solutions world-class support and service.',
        url: 'https://www.usersolutions.com/success-stories/cook-compression-scheduling-software-review'
    }
};

export default function CookCompressionReviewPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-amber-50 via-white to-yellow-50 py-6 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <Badge
                            variant="outline"
                            className="mb-6 h-8 rounded-full px-4 text-sm font-medium shadow-sm"
                        >
                            Customer Review
                        </Badge>
                        <h1 className="mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
                            Cook Compression Scheduling Software Review
                        </h1>
                        <p className="mx-auto mb-4 max-w-3xl text-xl text-gray-700 dark:text-gray-300">
                            A Testimonial on World-Class Support and Service Excellence
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <div className="prose prose-lg dark:prose-invert mx-auto">
                            {/* Featured Image */}
                            <div className="mb-8 flex justify-center">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/07/cook.jpg"
                                    alt="Cook Compression"
                                    width={300}
                                    height={200}
                                    className="h-auto rounded-lg shadow-md"
                                    unoptimized
                                />
                            </div>

                            <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
                                Cook Compression
                            </h2>

                            <div className="my-6 rounded-lg bg-amber-50 p-8 dark:bg-gray-700">
                                <p className="text-lg text-gray-700 dark:text-gray-300">
                                    I feel thankful. For cause, I am dubious when dealing with
                                    enterprises and guarantees by long distance; more so when
                                    considering the promises made by others for software
                                    solutions, sight unseen.
                                </p>

                                <p className="text-lg text-gray-700 dark:text-gray-300">
                                    My experience with User Solutions, Inc. has set a higher
                                    standard for my internet business dealings and software vendor
                                    expertise. Your premier product is in support and service.
                                    Your software reflects this.
                                </p>

                                <blockquote className="my-6 border-l-4 border-amber-500 pl-6 text-xl italic text-gray-700 dark:text-gray-300">
                                    "Your premier product is in support and service. Your software
                                    reflects this."
                                </blockquote>

                                <p className="text-lg text-gray-700 dark:text-gray-300">
                                    The Product and Sales personnel at{' '}
                                    <span className="font-semibold">User Solutions, Inc.</span>{' '}
                                    are world class in response, knowledge, and support of your
                                    product line in meeting my company's need.
                                </p>

                                <p className="text-lg text-gray-700 dark:text-gray-300">
                                    Your Company's faithfulness has been high in fidelity and your
                                    follow through timely. I will whole heartedly recommend User
                                    Solutions as I see need in my business community.
                                </p>
                            </div>

                            <div className="mt-8 rounded-lg border-2 border-amber-300 bg-gradient-to-r from-amber-100 to-yellow-100 p-6 dark:border-amber-600 dark:from-gray-700 dark:to-gray-600">
                                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                                    What Sets User Solutions Apart
                                </h3>
                                <ul className="list-disc space-y-3 pl-6 text-gray-700 dark:text-gray-300">
                                    <li className="text-lg">
                                        <span className="font-semibold">
                                            World-Class Personnel:
                                        </span>{' '}
                                        Product and Sales teams excel in response time, knowledge,
                                        and support
                                    </li>
                                    <li className="text-lg">
                                        <span className="font-semibold">
                                            Premier Support & Service:
                                        </span>{' '}
                                        The true product that makes the software exceptional
                                    </li>
                                    <li className="text-lg">
                                        <span className="font-semibold">High Fidelity:</span>{' '}
                                        Company faithfulness and reliability in every interaction
                                    </li>
                                    <li className="text-lg">
                                        <span className="font-semibold">
                                            Timely Follow Through:
                                        </span>{' '}
                                        Consistent, dependable service delivery
                                    </li>
                                    <li className="text-lg">
                                        <span className="font-semibold">
                                            Trust in Remote Business:
                                        </span>{' '}
                                        Setting higher standards for long-distance software dealings
                                    </li>
                                    <li className="text-lg">
                                        <span className="font-semibold">
                                            Wholehearted Recommendation:
                                        </span>{' '}
                                        Customer confidence to recommend to their entire business
                                        community
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8 rounded-lg bg-amber-50 p-6 text-center dark:bg-gray-700">
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                    Cook Compression
                                </p>
                                <p className="mt-2 italic text-gray-600 dark:text-gray-400">
                                    "I will whole heartedly recommend User Solutions as I see need
                                    in my business community."
                                </p>
                            </div>
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
