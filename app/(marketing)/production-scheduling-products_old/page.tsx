import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProductionSchedulingProductsOldPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-6 dark:from-blue-950/20 dark:via-slate-900 dark:to-green-950/20">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <div className="mb-6 rounded-lg border-2 border-yellow-400 bg-yellow-100 p-4 dark:border-yellow-600 dark:bg-yellow-900/30">
                            <p className="font-semibold text-yellow-800 dark:text-yellow-200">
                                📢 This is an archived version. View our{' '}
                                <Link
                                    href="/excel-applications"
                                    className="text-yellow-900 underline dark:text-yellow-100"
                                >
                                    latest products page
                                </Link>
                            </p>
                        </div>
                        <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                            Production Planning and Scheduling Solutions
                        </h1>
                        <p className="mb-6 text-xl text-muted-foreground">
                            From simple Excel based job shop scheduling to advanced planning
                            and scheduling software (APS)
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Link href="/contact-us">
                                <Button
                                    size="lg"
                                    className="text-lg"
                                >
                                    Schedule a Live Demo Today!
                                </Button>
                            </Link>
                            <Link href="/product-downloads">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg"
                                >
                                    Free Trials & Samples
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="pb-8 pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <Card>
                            <CardContent className="pt-6">
                                <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                                    Contact US to discuss which product is the best fit for your
                                    application and budget. From a simple Excel based job shop
                                    scheduling application to advanced planning and scheduling
                                    software (APS) that works either standalone or integrates with
                                    your ERP, we look forward to resolving your manufacturing
                                    scheduling challenges.
                                </p>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Choose the product that best suits your company's needs by
                                    using our product matrix.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="pb-8 pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <h2 className="mb-6 text-center text-3xl font-bold">
                            Our Product Solutions
                        </h2>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {/* Job Scheduler Lite */}
                            <Card>
                                <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
                                    <CardTitle>Job Scheduler Lite (JSL)</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <p className="mb-4 text-muted-foreground">
                                        Comprehensive job scheduling solution for manufacturing
                                        operations
                                    </p>
                                    <Link href="/jsl-job-scheduler-lite">
                                        <Button className="w-full">Learn More</Button>
                                    </Link>
                                </CardContent>
                            </Card>

                            {/* Resource Manager DB */}
                            <Card>
                                <CardHeader className="bg-purple-50 dark:bg-purple-900/20">
                                    <CardTitle>Resource Manager DB</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <p className="mb-4 text-muted-foreground">
                                        Database-driven APS for complex scheduling with ERP
                                        integration
                                    </p>
                                    <Link href="/resource-manager-db-2">
                                        <Button className="w-full">Learn More</Button>
                                    </Link>
                                </CardContent>
                            </Card>

                            {/* EDGEBI */}
                            <Card>
                                <CardHeader className="bg-green-50 dark:bg-green-900/20">
                                    <CardTitle>EDGEBI</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <p className="mb-4 text-muted-foreground">
                                        Business intelligence and analytics for manufacturing
                                    </p>
                                    <Link href="/edgebi">
                                        <Button className="w-full">Learn More</Button>
                                    </Link>
                                </CardContent>
                            </Card>

                            {/* Workcenter Scheduler XL */}
                            <Card>
                                <CardHeader className="bg-indigo-50 dark:bg-indigo-900/20">
                                    <CardTitle>Workcenter Scheduler XL</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <p className="mb-4 text-muted-foreground">
                                        Excel-based scheduling for workcenter operations
                                    </p>
                                    <Link href="/workcenter-schedulerxl">
                                        <Button className="w-full">Learn More</Button>
                                    </Link>
                                </CardContent>
                            </Card>

                            {/* Resource Manager for Excel */}
                            <Card>
                                <CardHeader className="bg-teal-50 dark:bg-teal-900/20">
                                    <CardTitle>Resource Manager for Excel</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <p className="mb-4 text-muted-foreground">
                                        MRP and shop scheduling on flexible Excel platform
                                    </p>
                                    <Link href="/resource-manager-for-excel-2">
                                        <Button className="w-full">Learn More</Button>
                                    </Link>
                                </CardContent>
                            </Card>

                            {/* Operations Manager */}
                            <Card>
                                <CardHeader className="bg-orange-50 dark:bg-orange-900/20">
                                    <CardTitle>Operations Manager</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <p className="mb-4 text-muted-foreground">
                                        Comprehensive tools for operations management
                                    </p>
                                    <Link href="/operations-manager">
                                        <Button className="w-full">Learn More</Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="mt-8 text-center">
                            <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
                                <CardContent className="pt-6">
                                    <h3 className="mb-4 text-xl font-semibold">
                                        Other Excel Template Solutions
                                    </h3>
                                    <p className="mb-4 text-muted-foreground">
                                        Product license cost estimates available. Customized
                                        training, implementation and other support services
                                        available upon request.
                                    </p>
                                    <Link href="/excel-applications">
                                        <Button size="lg">View All Excel Applications</Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-gray-50 py-6 dark:bg-slate-900/50">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-6 md:grid-cols-3">
                            <Card>
                                <CardContent className="pt-6">
                                    <p className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                                        "Best choice for MRP and project management software"
                                    </p>
                                    <p className="text-muted-foreground">– Sleepmaster Ltd</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6">
                                    <p className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                                        "Manufacturing scheduling software with fantastic support"
                                    </p>
                                    <p className="text-muted-foreground">– Cook Compression</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6">
                                    <p className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                                        "Easy ERP add-on for manufacturing resource planning"
                                    </p>
                                    <p className="text-muted-foreground">– Incon Incorporated</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="pb-8 pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <Card>
                            <CardContent className="pt-8">
                                <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
                                    Want to get your production in the groove?
                                </h2>
                                <p className="mb-6 text-xl text-muted-foreground">
                                    Watch this classic video and get your operations movin' and
                                    groovin' today!
                                </p>
                                <div className="mb-6 aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                    <iframe
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                        title="Production Scheduling Software Video"
                                        className="size-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
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
                                <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                                    CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                                </h3>
                                <img
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                                    alt="Industry Awards and Recognition Logos"
                                    className="mx-auto h-auto max-w-full"
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
