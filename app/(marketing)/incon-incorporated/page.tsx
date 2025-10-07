import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowLeft,
    CheckCircle,
    Clock,
    Database,
    Factory,
    Target,
    Users
} from 'lucide-react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { SiteHeading } from '@/components/marketing/fragments/site-heading';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';

export default function InconIncorporatedPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            {/* Hero Section */}
            <GridSection hideVerticalGridLines>
                <div className="container pt-6">
                    <div className="mx-auto max-w-4xl">
                        {/* Company Logo */}

                        {/* Hero Header */}
                        <div className="mb-16 text-center">
                            <SiteHeading
                                badge="Case Study"
                                title="INCON Incorporated"
                                description="Hi-tech Connector Manufacturer Accurately Schedules Labor with MRP Add-On"
                            />
                            <p className="mt-6 text-lg text-muted-foreground">
                                How a hi-tech connector manufacturer integrated Resource
                                Manager-DB for better scheduling and labor planning
                            </p>
                        </div>
                        <div className="mb-8 text-center">
                            <Image
                                src="https://www.usersolutions.com/wp-content/uploads/2022/10/logo003-58c6bad38b32e.jpg"
                                alt="INCON Incorporated Logo"
                                width={200}
                                height={120}
                                className="mx-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </GridSection>

            {/* Case Study Content */}
            <section className="py-16">
                <div className="container mx-auto max-w-4xl px-4">
                    {/* Challenge */}
                    <Card className="mb-12">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Target className="size-6 text-orange-600" />
                                The Challenge
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-slate-700 dark:text-slate-300">
                                "For awhile, we had been seeking better scheduling information
                                out of our system."
                            </p>
                            <div className="mt-6 grid gap-4 md:grid-cols-2">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="mt-1 size-5 shrink-0 text-orange-600" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Need for better scheduling visibility
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="mt-1 size-5 shrink-0 text-orange-600" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Improve labor planning accuracy
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="mt-1 size-5 shrink-0 text-orange-600" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Better customer promise dates
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="mt-1 size-5 shrink-0 text-orange-600" />
                                    <span className="text-slate-600 dark:text-slate-400">
                                        More efficient plant staffing
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Solution */}
                    <Card className="mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                                <Database className="size-6" />
                                The Solution: Resource Manager-DB
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-6 text-slate-700 dark:text-slate-300">
                                Exact Software recommended Resource Manager-DB from User
                                Solutions as the ideal solution for INCON's scheduling and labor
                                planning needs.
                            </p>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-4">
                                    <h4 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                                        <Factory className="size-5 text-blue-600" />
                                        ERP Integration
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Quick integration with existing Macola ERP system, providing
                                        seamless data flow and unified operations.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                                        <Users className="size-5 text-blue-600" />
                                        Labor Tracking
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Easy integration with custom labor tracking system,
                                        enhancing existing workflows without disruption.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Key Benefits */}
                    <Card className="mb-12">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CheckCircle className="size-6 text-green-600" />
                                Key Benefits Achieved
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="mt-1 size-5 shrink-0 text-green-600" />
                                        <div>
                                            <h4 className="font-semibold text-slate-900 dark:text-white">
                                                Quick Integration
                                            </h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                Fast and seamless integration with Macola ERP system
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="mt-1 size-5 shrink-0 text-green-600" />
                                        <div>
                                            <h4 className="font-semibold text-slate-900 dark:text-white">
                                                Enhanced Visibility
                                            </h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                Clear visibility into scheduling and labor planning
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="mt-1 size-5 shrink-0 text-green-600" />
                                        <div>
                                            <h4 className="font-semibold text-slate-900 dark:text-white">
                                                Accurate Planning
                                            </h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                More accurate labor planning and plant staffing
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="mt-1 size-5 shrink-0 text-green-600" />
                                        <div>
                                            <h4 className="font-semibold text-slate-900 dark:text-white">
                                                Customer Satisfaction
                                            </h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                                Realistic and accurate customer promise dates
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Results */}
                    <Card className="mb-12 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                        <CardHeader>
                            <CardTitle className="text-green-700 dark:text-green-300">
                                Measurable Results
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <blockquote className="mb-6 text-lg italic text-slate-700 dark:text-slate-300">
                                "Finally, we can see in advance how to staff the plant for most
                                efficient scheduling and respond accurately to our customers
                                with realistic promise dates."
                            </blockquote>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
                                    <Clock className="mx-auto mb-2 size-8 text-green-600" />
                                    <div className="font-semibold text-slate-900 dark:text-white">
                                        Efficient Scheduling
                                    </div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">
                                        Advanced visibility for optimal plant staffing
                                    </div>
                                </div>
                                <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
                                    <Users className="mx-auto mb-2 size-8 text-green-600" />
                                    <div className="font-semibold text-slate-900 dark:text-white">
                                        Accurate Promises
                                    </div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">
                                        Realistic delivery dates for customers
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Industry Focus */}
                    <Card className="mb-12">
                        <CardHeader>
                            <CardTitle>Hi-Tech Connector Manufacturing</CardTitle>
                            <CardDescription>
                                Specialized manufacturing requires precision in scheduling and
                                resource planning
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6 md:grid-cols-3">
                                <div className="p-4 text-center">
                                    <Factory className="mx-auto mb-3 size-12 text-blue-600" />
                                    <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">
                                        Precision Manufacturing
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Hi-tech connector production requires precise scheduling and
                                        quality control
                                    </p>
                                </div>
                                <div className="p-4 text-center">
                                    <Database className="mx-auto mb-3 size-12 text-blue-600" />
                                    <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">
                                        ERP Integration
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Seamless integration with existing Macola system and custom
                                        applications
                                    </p>
                                </div>
                                <div className="p-4 text-center">
                                    <Users className="mx-auto mb-3 size-12 text-blue-600" />
                                    <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">
                                        Labor Optimization
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Efficient labor scheduling and resource allocation for
                                        maximum productivity
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Testimonial */}
                    <Card className="mb-12 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20">
                        <CardContent className="p-8 text-center">
                            <blockquote className="mb-4 text-xl text-slate-700 dark:text-slate-300">
                                "Easy ERP add-on for manufacturing resource planning"
                            </blockquote>
                            <cite className="text-lg font-medium text-slate-900 dark:text-white">
                                — Ted Schultz
                                <br />
                                INCON Incorporated
                            </cite>
                        </CardContent>
                    </Card>

                    {/* 25 Years Anniversary with Real Award Logos */}
                    <div className="mb-12 text-center">
                        <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                            CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                        </h3>
                        <div className="flex justify-center">
                            <img 
                                src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                                alt="Collection of industry and business awards logos"
                                className="max-w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                            Ready to Improve Your Manufacturing Scheduling?
                        </h3>
                        <p className="mb-6 text-slate-600 dark:text-slate-400">
                            See how Resource Manager-DB can integrate with your ERP system
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Button
                                asChild
                                size="lg"
                            >
                                <Link href="/contact">Contact Us Today</Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                            >
                                <Link href="/resource-manager-db">
                                    Learn About Resource Manager-DB
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
