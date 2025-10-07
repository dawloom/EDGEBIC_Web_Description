'use client';

import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Routes } from '@/constants/routes';
import { createTitle } from '@/lib/utils';

export default function ProductDownloadsPage(): React.JSX.Element {
    return (
        <>
            <Head>
                <title>{createTitle('Product Downloads')}</title>
                <meta
                    name="description"
                    content="Download User Solutions production scheduling software including Job Scheduler Lite, Resource Manager DB, EDGEBI, and Excel applications. Free trials and samples available."
                />
            </Head>
            <div className="container mx-auto px-4 pt-6">
                {/* Product Downloads Badge */}
                <div className="mb-8 text-center">
                    <Badge
                        variant="outline"
                        className="h-8 rounded-full px-3 text-sm font-medium shadow-sm"
                    >
                        Product Downloads
                    </Badge>
                </div>

                {/* Header Section */}
                <div className="mb-16 text-center">
                    <h1 className="mb-6 text-4xl font-bold">
                        Production Scheduling Products
                    </h1>
                    <p className="mx-auto max-w-4xl text-lg text-muted-foreground">
                        Free Trial & Samples
                    </p>
                    <div className="mt-4">
                        <Link
                            href={Routes.ExcelTemplates}
                            className="font-medium text-blue-600 hover:text-blue-800"
                        >
                            Excel Products →
                        </Link>
                    </div>
                </div>

                {/* Download Instructions */}
                <div className="mb-12 rounded-lg bg-yellow-50 p-6 dark:bg-yellow-900/20">
                    <h3 className="mb-3 text-lg font-semibold text-yellow-800 dark:text-yellow-200">
                        NOTE ON DOWNLOADS:
                    </h3>
                    <p className="text-yellow-700 dark:text-yellow-300">
                        Every Download Now (.zip) gives you two options – save or open. We
                        recommend that you select open, then extract the setup file for WCXL
                        or RMX to the directory of your choice (or just downloads). Then run
                        the setup file for WCXL or RMX. Use desktop shortcut or simply run
                        Excel to open the files, enabling macros if prompted. The Sample
                        column provides working versions of the analysis techniques.
                    </p>
                </div>

                {/* Main Products Section */}
                <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Starter - Job Scheduler Lite */}
                    <div className="overflow-hidden rounded-lg border bg-white shadow-lg dark:bg-gray-800">
                        <div className="relative">
                            <Image
                                src="https://www.usersolutions.com/wp-content/uploads/2022/10/starter.png"
                                alt="Silver banner with $1000 text"
                                width={400}
                                height={100}
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <video
                                controls
                                className="mb-4 w-full rounded-lg"
                                preload="metadata"
                            >
                                <source
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/10/Welcome-to-Job-Scheduler-Lite-JSL.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="p-6">
                            <div className="mb-4 text-center">
                                <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                    Starter
                                </span>
                            </div>
                            <h3 className="mb-4 text-center text-xl font-bold">
                                Job Scheduler Lite (JSL)
                            </h3>
                            <div className="mb-6 text-center">
                                <span className="text-lg font-semibold text-green-600">
                                    60-Day Trial
                                </span>
                            </div>
                            <div className="space-y-3">
                                <Link
                                    href="/jsl-job-scheduler-lite-download"
                                    className="block w-full rounded bg-blue-600 px-4 py-2 text-center font-medium text-white hover:bg-blue-700"
                                >
                                    Download Now
                                </Link>
                                <Link
                                    href={Routes.Contact}
                                    className="block w-full rounded border border-blue-600 px-4 py-2 text-center font-medium text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                >
                                    Request Live Demo
                                </Link>
                                <Link
                                    href="/jsl-job-scheduler-lite"
                                    className="block w-full rounded border border-gray-300 px-4 py-2 text-center font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Advanced - Resource Manager DB */}
                    <div className="overflow-hidden rounded-lg border bg-white shadow-lg dark:bg-gray-800">
                        <div className="relative">
                            <Image
                                src="https://www.usersolutions.com/wp-content/uploads/2022/11/advanced-1.png"
                                alt="Blue banner indicating over $5000 savings or cost"
                                width={400}
                                height={100}
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <video
                                controls
                                className="mb-4 w-full rounded-lg"
                                preload="metadata"
                            >
                                <source
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/12/RMDB updated thumbnail.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="p-6">
                            <div className="mb-4 text-center">
                                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                                    Advanced
                                </span>
                            </div>
                            <h3 className="mb-4 text-center text-xl font-bold">
                                Resource Manager DB
                            </h3>
                            <div className="mb-6 text-center">
                                <span className="text-lg font-semibold text-green-600">
                                    30-Day Trial
                                </span>
                            </div>
                            <div className="space-y-3">
                                <Link
                                    href={Routes.Contact}
                                    className="block w-full rounded bg-blue-600 px-4 py-2 text-center font-medium text-white hover:bg-blue-700"
                                >
                                    Request Live Demo
                                </Link>
                                <div className="block w-full rounded border border-gray-300 px-4 py-2 text-center text-gray-500">
                                    Contact for Trial
                                </div>
                                <Link
                                    href="/resource-manager-db-2"
                                    className="block w-full rounded border border-gray-300 px-4 py-2 text-center font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Premium - EDGEBI */}
                    <div className="overflow-hidden rounded-lg border bg-white shadow-lg dark:bg-gray-800">
                        <div className="relative">
                            <Image
                                src="https://www.usersolutions.com/wp-content/uploads/2022/11/Premium-1.png"
                                alt="Yellow price tag banner, $2500+ offer"
                                width={400}
                                height={100}
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <video
                                controls
                                className="mb-4 w-full rounded-lg"
                                preload="metadata"
                            >
                                <source
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/12/EDGEBI updated thumbnail.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="p-6">
                            <div className="mb-4 text-center">
                                <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                                    Premium
                                </span>
                            </div>
                            <h3 className="mb-4 text-center text-xl font-bold">
                                EDGEBI (Bundled w/ RMDB)
                            </h3>
                            <div className="mb-6 text-center">
                                <span className="text-lg font-semibold text-green-600">
                                    30-Day Trial
                                </span>
                            </div>
                            <div className="space-y-3">
                                <Link
                                    href={Routes.Contact}
                                    className="block w-full rounded bg-blue-600 px-4 py-2 text-center font-medium text-white hover:bg-blue-700"
                                >
                                    Request Live Demo
                                </Link>
                                <div className="block w-full rounded border border-gray-300 px-4 py-2 text-center text-gray-500">
                                    Contact for Trial
                                </div>
                                <Link
                                    href="/edgebi"
                                    className="block w-full rounded border border-gray-300 px-4 py-2 text-center font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Excel Products Section */}
                <section className="mb-20">
                    <h2 className="mb-10 text-center text-3xl font-semibold">
                        Excel Products
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full rounded-lg border bg-white shadow-lg dark:bg-gray-800">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">
                                        Product
                                    </th>
                                    <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">
                                        30 Day Trials
                                    </th>
                                    <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">
                                        Sample
                                    </th>
                                    <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">
                                        Videos
                                    </th>
                                    <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">
                                        Buy Now
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                                <tr>
                                    <td className="px-6 py-4">
                                        <details className="group">
                                            <summary className="flex cursor-pointer items-center gap-2 font-medium text-gray-900 hover:text-blue-600 dark:text-white">
                                                <span className="text-sm transition-transform group-open:rotate-90">
                                                    ▶
                                                </span>
                                                <div className="flex-1">
                                                    <div className="font-medium">
                                                        Spreadsheet Scheduler
                                                    </div>
                                                    <div className="text-2xl font-bold text-green-600">
                                                        Free
                                                    </div>
                                                </div>
                                            </summary>
                                            <div className="mt-2 pl-6 text-sm text-gray-600 dark:text-gray-400">
                                                The Spreadsheet Scheduler contains ready-to-use,
                                                practical models for Project Management, Scheduling
                                                Customer Jobs and Employees, Generating Calendars and
                                                Gantt Charts.
                                            </div>
                                        </details>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <Link
                                            href={Routes.Contact}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            Contact Us
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-center">---------</td>
                                    <td className="px-6 py-4 text-center">-</td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="text-lg font-semibold">$39</div>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 dark:bg-gray-700">
                                    <td className="px-6 py-4">
                                        <details className="group">
                                            <summary className="flex cursor-pointer items-center gap-2 font-medium text-gray-900 hover:text-blue-600 dark:text-white">
                                                <span className="text-sm transition-transform group-open:rotate-90">
                                                    ▶
                                                </span>
                                                <div className="flex-1">
                                                    <div className="font-medium">Workcell Planner</div>
                                                    <div className="text-2xl font-bold text-green-600">
                                                        Free
                                                    </div>
                                                </div>
                                            </summary>
                                            <div className="mt-2 pl-6 text-sm text-gray-600 dark:text-gray-400">
                                                Single cell capacity planning for machine shops and
                                                fabricators. Allows easy what if analysis of the
                                                interaction of setup time, lot size, efficiency,
                                                operation yield, and work practices. Allows analysis of
                                                flow with multiple setups per part vs. batch and the
                                                payoff on throughput of set up reduction results.
                                            </div>
                                        </details>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <Link
                                            href={Routes.Contact}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            Contact us
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-center">---------</td>
                                    <td className="px-6 py-4 text-center">-</td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="text-lg font-semibold">$39</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4">
                                        <details className="group">
                                            <summary className="flex cursor-pointer items-center gap-2 font-medium text-gray-900 hover:text-blue-600 dark:text-white">
                                                <span className="text-sm transition-transform group-open:rotate-90">
                                                    ▶
                                                </span>
                                                <div className="flex-1">
                                                    <div className="font-medium">Operations Manager</div>
                                                    <div className="text-2xl font-bold text-green-600">
                                                        Free
                                                    </div>
                                                </div>
                                            </summary>
                                            <div className="mt-2 pl-6 text-sm text-gray-600 dark:text-gray-400">
                                                Dozens of templates for Forecasting, Inventory
                                                Management, MRP, Production Planning, Quality Control
                                                and many more.
                                            </div>
                                        </details>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <Link
                                            href="/operations-manager"
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            View Doc
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-center">---------</td>
                                    <td className="px-6 py-4 text-center">-</td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="text-lg font-semibold">$5</div>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 dark:bg-gray-700">
                                    <td className="px-6 py-4">
                                        <details className="group">
                                            <summary className="flex cursor-pointer items-center gap-2 font-medium text-gray-900 hover:text-blue-600 dark:text-white">
                                                <span className="text-sm transition-transform group-open:rotate-90">
                                                    ▶
                                                </span>
                                                <div className="flex-1">
                                                    <div className="font-medium">Spreadsheet QC</div>
                                                    <div className="text-2xl font-bold text-green-600">
                                                        Free
                                                    </div>
                                                </div>
                                            </summary>
                                            <div className="mt-2 pl-6 text-sm text-gray-600 dark:text-gray-400">
                                                Spreadsheet QC makes statistical process and quality
                                                control more accessible by automating the main
                                                techniques in a familiar form, the spreadsheet.
                                            </div>
                                        </details>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <Link
                                            href={Routes.Contact}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            Contact us
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-center">---------</td>
                                    <td className="px-6 py-4 text-center">-</td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="text-lg font-semibold">$39</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4">
                                        <details className="group">
                                            <summary className="flex cursor-pointer items-center gap-2 font-medium text-gray-900 hover:text-blue-600 dark:text-white">
                                                <span className="text-sm transition-transform group-open:rotate-90">
                                                    ▶
                                                </span>
                                                <div className="flex-1">
                                                    <div className="font-medium">
                                                        Workcenter Scheduler XL
                                                    </div>
                                                    <div className="text-2xl font-bold text-green-600">
                                                        Free
                                                    </div>
                                                </div>
                                            </summary>
                                            <div className="mt-2 pl-6 text-sm text-gray-600 dark:text-gray-400">
                                                Advanced scheduling solution for manufacturing
                                                operations with enhanced features for workcenter
                                                management and optimization.
                                            </div>
                                        </details>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <Link
                                            href={Routes.Contact}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            Contact Us
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <CheckCircle className="mx-auto size-5 text-green-500" />
                                    </td>
                                    <td className="px-6 py-4 text-center">-</td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="text-lg font-semibold">$500</div>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 dark:bg-gray-700">
                                    <td className="px-6 py-4">
                                        <details className="group">
                                            <summary className="flex cursor-pointer items-center gap-2 font-medium text-gray-900 hover:text-blue-600 dark:text-white">
                                                <span className="text-sm transition-transform group-open:rotate-90">
                                                    ▶
                                                </span>
                                                <div className="flex-1">
                                                    <div className="font-medium">
                                                        Resource Manager for Excel
                                                    </div>
                                                    <div className="text-2xl font-bold text-green-600">
                                                        Free
                                                    </div>
                                                </div>
                                            </summary>
                                            <div className="mt-2 pl-6 text-sm text-gray-600 dark:text-gray-400">
                                                Comprehensive resource management solution built for
                                                Excel, providing advanced planning and tracking
                                                capabilities for manufacturing operations.
                                            </div>
                                        </details>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <Link
                                            href={Routes.Contact}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            Contact Us
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <CheckCircle className="mx-auto size-5 text-green-500" />
                                    </td>
                                    <td className="px-6 py-4 text-center">-</td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="text-lg font-semibold">$1200</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 text-center">
                        <Link
                            href="/security-guide"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Note on Running Excel Downloads →
                        </Link>
                    </div>
                </section>

                {/* Awards Section */}
                <section className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 p-12 text-center dark:from-blue-900/20 dark:to-purple-900/20">
                    <h2 className="mb-6 text-3xl font-semibold">
                        CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                    </h2>
                    <div className="flex justify-center">
                        <Image
                            src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                            alt="Collection of industry and business awards logos"
                            width={1024}
                            height={128}
                            className="rounded-lg"
                        />
                    </div>
                </section>
            </div>
        </>
    );
}
