import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProductionSchedulingProductsVideosPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 py-6 text-white">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <Badge
                            variant="outline"
                            className="mb-6 h-8 rounded-full border-white/30 bg-white/10 px-3 text-sm font-medium text-white shadow-sm"
                        >
                            📹 VIDEO LIBRARY
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                            Product Videos
                        </h1>
                        <p className="mb-8 text-xl text-blue-100">
                            Production Scheduling Products | Excel Applications | Resource
                            Manager for Excel (RMX) Videos
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        {/* Welcome */}
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle className="text-2xl">Welcome</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                    <iframe
                                        src="https://www.youtube.com/embed/y-TMN1e-xlc"
                                        title="Welcome Video"
                                        className="size-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                                <p className="text-muted-foreground">
                                    Welcome to User Solutions product video gallery. Explore our
                                    comprehensive manufacturing software solutions.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Video Grid - 2 columns */}
                        <div className="mb-8 grid gap-6 md:grid-cols-2">
                            {/* Resource Manager DB */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl">Resource Manager DB</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                        <iframe
                                            src="https://www.youtube.com/embed/kn92TIHhbm8"
                                            title="Resource Manager DB Video"
                                            className="size-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                    <p className="mb-4 text-sm text-muted-foreground">
                                        Summary of Resource Manager DB database-driven production
                                        scheduling solution
                                    </p>
                                    <Link href="/resource-manager-db-2">
                                        <Button
                                            size="sm"
                                            className="w-full"
                                        >
                                            Learn More
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>

                            {/* Workcenter Scheduler XL */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl">
                                        Workcenter Scheduler XL
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                        <iframe
                                            src="https://www.youtube.com/embed/L4wDboRFU6k"
                                            title="Workcenter Scheduler XL Video"
                                            className="size-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                    <p className="mb-4 text-sm text-muted-foreground">
                                        Complete overview of WorkCenter Scheduler XL for production
                                        scheduling
                                    </p>
                                    <Link href="/workcenter-schedulerxl">
                                        <Button
                                            size="sm"
                                            className="w-full"
                                        >
                                            Learn More
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>

                            {/* Resource Manager For Excel */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl">
                                        Resource Manager For Excel
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                        <iframe
                                            src="https://www.youtube.com/embed/DRWDNVq31l4"
                                            title="Resource Manager For Excel Video"
                                            className="size-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                    <p className="mb-4 text-sm text-muted-foreground">
                                        Summary of Resource Manager for Excel integrated scheduling
                                        solution
                                    </p>
                                    <Link href="/resource-manager-for-excel-2">
                                        <Button
                                            size="sm"
                                            className="w-full"
                                        >
                                            Learn More
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>

                            {/* Job Scheduler Lite */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl">
                                        Job Scheduler Lite (JSL)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                        <iframe
                                            src="https://www.youtube.com/embed/snltXMHeojU"
                                            title="Job Scheduler Lite Video"
                                            className="size-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                    <p className="mb-4 text-sm text-muted-foreground">
                                        Introduction to Job Scheduler Lite for simplified production
                                        scheduling
                                    </p>
                                    <Link href="/jsl-job-scheduler-lite">
                                        <Button
                                            size="sm"
                                            className="w-full"
                                        >
                                            Learn More
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Training Videos Section */}
                        <Card className="mb-8 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    Resource Manager Training Videos (RMX)
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-6 text-muted-foreground">
                                    Complete training video series covering all aspects of
                                    Resource Manager for Excel
                                </p>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                                            RMX Initialization — Building Bills of Resource
                                        </h3>
                                        <div className="mb-3 aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                            <iframe
                                                src="https://www.youtube.com/embed/Br2b8h-drfY"
                                                title="RMX Initialization Training"
                                                className="size-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Learn how to build Bills of Resource in Resource Manager
                                            for Excel
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                                            RMX Initialization — Production Operations List
                                        </h3>
                                        <div className="mb-3 aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                            <iframe
                                                src="https://www.youtube.com/embed/Fg9WZcSCKoA"
                                                title="RMX Production Operations Training"
                                                className="size-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Setting up Production Operations List in Resource Manager
                                            for Excel
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                                            RMX Scheduling — Forecast Calendar
                                        </h3>
                                        <div className="mb-3 aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                            <iframe
                                                src="https://www.youtube.com/embed/bmCEFVJlkr4"
                                                title="RMX Forecast Calendar Training"
                                                className="size-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Using Forecast Calendar for production planning in
                                            Resource Manager for Excel
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                                            RMX — Master Scheduling
                                        </h3>
                                        <div className="mb-3 aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                            <iframe
                                                src="https://www.youtube.com/embed/Fc-zM31PrrQ"
                                                title="RMX Master Scheduling Training"
                                                className="size-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Master scheduling techniques and best practices with
                                            Resource Manager for Excel
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                                            RMX — Summary Report
                                        </h3>
                                        <div className="mb-3 aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                            <iframe
                                                src="https://www.youtube.com/embed/tOy099sVThQ"
                                                title="RMX Reporting Training"
                                                className="size-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Generating and analyzing Summary Reports in Resource
                                            Manager for Excel
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                                            Resource Manager for Excel — Intro Part 1
                                        </h3>
                                        <div className="mb-3 aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                            <iframe
                                                src="https://www.youtube.com/embed/74uO2H-eevc"
                                                title="RMX Introduction Part 1"
                                                className="size-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            First part introduction to Resource Manager for Excel
                                            features and setup
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-50 pb-8 pt-6 dark:bg-slate-900/50">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center text-2xl">
                                    Ready to See More?
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-6 text-center text-muted-foreground">
                                    Schedule a live demo to see our solutions in action with your
                                    actual data
                                </p>
                                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                    <Link href="/contact-us">
                                        <Button
                                            size="lg"
                                            className="text-lg"
                                        >
                                            Schedule Demo
                                        </Button>
                                    </Link>
                                    <Link href="/videos">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="text-lg"
                                        >
                                            All Videos
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
                                    alt="Collection of industry and business awards logos"
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
