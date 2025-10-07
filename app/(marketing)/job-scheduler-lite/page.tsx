import * as React from 'react';

import { JSLDownloadForm } from '@/components/marketing/sections/jsl-download-form';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function JobSchedulerLitePage(): React.JSX.Element {
    return (
        <div className="min-h-screen">
            {/* Content */}
            <div className="container mx-auto px-4 pt-6">
                <div className="mx-auto max-w-6xl">
                    {/* Hero Section */}
                    <div className="mb-8 text-center">
                        <span className="inline-flex h-8 items-center rounded-full border px-3 py-0.5 text-sm font-medium text-foreground shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                            STARTER SOLUTION
                        </span>
                    </div>
                    <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                        Job Scheduler Lite (JSL)
                    </h1>
                    <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
                        Entry-level production scheduling solution designed for job shops
                        and small manufacturers
                    </p>
                    <div className="mb-4 flex flex-wrap justify-center gap-4">
                        <Button
                            size="lg"
                            asChild
                        >
                            <a
                                href="https://www.usersolutions.com/wp-content/uploads/2022/10/JSLsetup.zip"
                                download="JSLsetup.zip"
                            >
                                Download Free Trial
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Overview */}
                <Card className="mb-16">
                    <CardHeader>
                        <CardTitle className="text-3xl">Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid items-center gap-8 md:grid-cols-2">
                            <div>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Welcome to Job Scheduler Lite (JSL). Designed as an entry
                                    level production scheduling offering that allows users to
                                    quickly create a series of routing steps then schedule
                                    according to capacity limitations, direction (Forward or
                                    Reverse), and Priorities. It also offers a quick method to
                                    load data either directly or importing from an Excel sheet.
                                </p>
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/10/insight-1.png"
                                    alt="Job Scheduler Lite production scheduling software interface"
                                    className="h-auto w-full"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Software Demo Video Section */}
                <Card className="mb-16">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl">See JSL in Action</CardTitle>
                        <p className="text-muted-foreground">
                            Watch how Job Scheduler Lite simplifies production scheduling
                        </p>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                            {/* Video Section */}
                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <div className="relative aspect-video w-full">
                                    {/* Replace with actual video URL when available */}
                                    <iframe
                                        src="https://www.usersolutions.com/wp-content/uploads/2022/10/Welcome-to-Job-Scheduler-Lite-JSL.mp4"
                                        title="Job Scheduler Lite (JSL) Demo Video"
                                        className="absolute inset-0 size-full rounded-lg"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>

                            {/* Video Description */}
                            <div className="flex flex-col justify-center">
                                <h3 className="mb-4 text-2xl font-semibold">
                                    Complete JSL Walkthrough
                                </h3>
                                <p className="mb-4 text-muted-foreground">
                                    Watch this comprehensive demonstration of Job Scheduler Lite's
                                    key features:
                                </p>
                                <ul className="mb-6 space-y-2 text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <div className="size-2 rounded-full bg-blue-500" />
                                        Interactive menu navigation
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="size-2 rounded-full bg-blue-500" />
                                        Data import from Excel
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="size-2 rounded-full bg-blue-500" />
                                        Forward/Reverse scheduling
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="size-2 rounded-full bg-blue-500" />
                                        Capacity planning setup
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="size-2 rounded-full bg-blue-500" />
                                        InSights and reporting
                                    </li>
                                </ul>
                                <Button
                                    className="w-fit"
                                    asChild
                                >
                                    <a
                                        href="https://www.usersolutions.com/wp-content/uploads/2022/10/JSLsetup.zip"
                                        download="JSLsetup.zip"
                                    >
                                        Download Free Trial
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Additional Screenshots Row */}
                        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/10/mnn.jpeg"
                                    alt="JSL software menu options and interface"
                                    className="h-[200px] w-full object-cover"
                                />
                                <div className="p-3">
                                    <h4 className="text-sm font-semibold">Menu System</h4>
                                    <p className="text-xs text-muted-foreground">
                                        Intuitive navigation
                                    </p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/10/insight-1.png"
                                    alt="JSL InSights scheduling interface"
                                    className="h-[200px] w-full object-cover"
                                />
                                <div className="p-3">
                                    <h4 className="text-sm font-semibold">InSights View</h4>
                                    <p className="text-xs text-muted-foreground">
                                        Visual scheduling
                                    </p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-lg shadow-lg md:col-span-2 lg:col-span-1">
                                <img
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/10/schdle.png"
                                    alt="JSL scheduling interface"
                                    className="h-[200px] w-full object-cover"
                                />
                                <div className="p-3">
                                    <h4 className="text-sm font-semibold">Scheduling Engine</h4>
                                    <p className="text-xs text-muted-foreground">
                                        Capacity planning
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Key Features */}
                <div className="mb-16">
                    <h2 className="mb-8 text-center text-3xl font-bold">Key Features</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="transition-all hover:shadow-xl">
                            <CardContent className="p-6">
                                <h3 className="mb-3 text-xl font-semibold">
                                    Simple, Familiar Interface
                                </h3>
                                <p className="text-muted-foreground">
                                    One step menus, on-screen buttons, or sheet tabs make
                                    navigation a snap.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="transition-all hover:shadow-xl">
                            <CardContent className="p-6">
                                <h3 className="mb-3 text-xl font-semibold">
                                    Easy to Configure
                                </h3>
                                <p className="text-muted-foreground">
                                    Quick, intuitive layout and prompts allow you to focus on your
                                    business, instead of learning another software product.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="transition-all hover:shadow-xl">
                            <CardContent className="p-6">
                                <h3 className="mb-3 text-xl font-semibold">
                                    Finite Capacity Planning
                                </h3>
                                <p className="text-muted-foreground">
                                    Forward/Reverse scheduling with global and detailed workcenter
                                    configuration that can be applied instantly.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Core Modules */}
                <div className="mb-16">
                    <h2 className="mb-8 text-center text-3xl font-bold">
                        Core Modules with Screenshots
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-6">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold">Import Data</h3>
                                    <p className="mb-4 text-muted-foreground">
                                        Quick method to load data directly or import from Excel
                                        sheet.
                                    </p>
                                    <div className="overflow-hidden rounded-lg">
                                        <img
                                            src="https://www.usersolutions.com/wp-content/uploads/2022/10/import.png"
                                            alt="Data import software window with options and required columns"
                                            className="h-auto w-full"
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold">Daily Hours</h3>
                                    <p className="mb-4 text-muted-foreground">
                                        Set normal operating hours for your business.
                                    </p>
                                    <div className="overflow-hidden rounded-lg">
                                        <img
                                            src="https://www.usersolutions.com/wp-content/uploads/2022/10/dailyhours.png"
                                            alt="Daily Work Hours tracking software interface"
                                            className="h-auto w-full"
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold">Holidays</h3>
                                    <p className="mb-4 text-muted-foreground">
                                        Manage partial shutdowns, repeating holidays, or
                                        calendar-varying events.
                                    </p>
                                    <div className="overflow-hidden rounded-lg">
                                        <img
                                            src="https://www.usersolutions.com/wp-content/uploads/2022/10/holidays.png"
                                            alt="Holiday management software interface with dates and times"
                                            className="h-auto w-full"
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-900">
                                <h3 className="mb-3 text-xl font-semibold">Resources</h3>
                                <p className="mb-4 text-muted-foreground">
                                    Add workcenters with name, description, and capacity.
                                </p>
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src="https://www.usersolutions.com/wp-content/uploads/2022/10/resoursces.png"
                                        alt="Software resource management interface"
                                        className="h-auto w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-900">
                                <h3 className="mb-3 text-xl font-semibold">Orders</h3>
                                <p className="mb-4 text-muted-foreground">
                                    Enter orders with workcenters and timing in sequential order.
                                </p>
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src="https://www.usersolutions.com/wp-content/uploads/2022/10/orders-1024x459.png"
                                        alt="Software order management system"
                                        className="h-auto w-full"
                                    />
                                </div>
                            </div>

                            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-900">
                                <h3 className="mb-3 text-xl font-semibold">
                                    Finished Goods/Routing
                                </h3>
                                <p className="mb-4 text-muted-foreground">
                                    Define what will be scheduled with workcenters and timing.
                                </p>
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src="https://www.usersolutions.com/wp-content/uploads/2022/10/FG.png"
                                        alt="Inventory management application interface with lists and buttons"
                                        className="h-auto w-full"
                                    />
                                </div>
                            </div>

                            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-900">
                                <h3 className="mb-3 text-xl font-semibold">Schedule</h3>
                                <p className="mb-4 text-muted-foreground">
                                    Advanced scheduling engine with capacity planning and
                                    priority-based allocation.
                                </p>
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src="https://www.usersolutions.com/wp-content/uploads/2022/10/schdle.png"
                                        alt="Job scheduling software interface"
                                        className="h-auto w-full"
                                    />
                                </div>
                            </div>

                            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-900">
                                <h3 className="mb-3 text-xl font-semibold">InSights</h3>
                                <p className="mb-4 text-muted-foreground">
                                    Comprehensive Gantt charts, calendar views, efficiency
                                    tracking, and visual scheduling.
                                </p>
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src="https://www.usersolutions.com/wp-content/uploads/2022/10/insight.png"
                                        alt="Scheduling software with calendar and utilization graph"
                                        className="h-auto w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing */}
                <div className="mb-16 text-center">
                    <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">
                        <div className="mb-4">
                            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
                                STARTER PRICING
                            </span>
                        </div>
                        <h2 className="mb-4 text-3xl font-bold">Starting at $1,000+</h2>
                        <p className="mb-6 text-lg text-muted-foreground">
                            Perfect entry-level investment for job shops and small
                            manufacturers
                        </p>
                        <div className="space-y-2 text-muted-foreground">
                            <p>✓ Free trials available</p>
                            <p>✓ Quick implementation</p>
                            <p>✓ Excel data import capability</p>
                            <p>✓ 25 years of award-winning software heritage</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
                        <h3 className="mb-4 text-2xl font-bold">
                            Ready to Transform Your Production Scheduling?
                        </h3>
                        <p className="mb-6 text-lg opacity-90">
                            Join thousands of manufacturers who trust User Solutions for their
                            production planning needs
                        </p>
                        <div className="mb-4 flex flex-wrap justify-center gap-4">
                            <Button
                                className="bg-gray-100 text-black hover:bg-gray-100"
                                asChild
                            >
                                <a
                                    href="https://www.usersolutions.com/wp-content/uploads/2022/10/JSLsetup.zip"
                                    download="JSLsetup.zip"
                                >
                                    Download Free Trial
                                </a>
                            </Button>
                            <Button className="bg-gray-100 text-black hover:bg-gray-100">
                                Contact Sales: 248.486.6365
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Awards and Recognition */}
                <div className="mt-10">
                    <div className="text-center">
                        <h2 className="mb-3 text-2xl font-bold">
                            25 Years of Award-Winning Software
                        </h2>
                        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg">
                            <img
                                src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                                alt="Collection of industry and business awards logos"
                                className="h-auto w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
