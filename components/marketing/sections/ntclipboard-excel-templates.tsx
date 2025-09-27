'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DownloadIcon, FileSpreadsheetIcon, InfoIcon } from 'lucide-react';

const excelApplications = [
    {
        id: 1,
        title: 'Spreadsheet Scheduler',
        description:
            'Comprehensive scheduling solution for manufacturing operations with visual timeline management and resource allocation.',
        features: [
            'Visual scheduling interface',
            'Resource capacity planning',
            'Production timeline management',
            'Job prioritization tools'
        ],
        singleUserPrice: '$39',
        fiveUserPrice: '$78',
        href: '/products/spreadsheet-scheduler',
        icon: <FileSpreadsheetIcon className="size-8" />
    },
    {
        id: 2,
        title: 'Spreadsheet QC',
        description:
            'Quality control management system for tracking inspections, defects, and compliance metrics.',
        features: [
            'Quality inspection tracking',
            'Defect analysis reporting',
            'Compliance monitoring',
            'Statistical process control'
        ],
        singleUserPrice: '$39',
        fiveUserPrice: '$78',
        href: '/products/spreadsheet-qc',
        icon: <FileSpreadsheetIcon className="size-8" />
    },
    {
        id: 3,
        title: 'Workcell Planner',
        description:
            'Optimize workcell layouts and workflow planning for maximum efficiency and productivity.',
        features: [
            'Workcell layout optimization',
            'Workflow analysis',
            'Capacity planning',
            'Efficiency metrics'
        ],
        singleUserPrice: '$39',
        fiveUserPrice: '$78',
        href: '/products/workcell-planner',
        icon: <FileSpreadsheetIcon className="size-8" />
    },
    {
        id: 4,
        title: 'Operations Manager',
        description:
            'Comprehensive operations management suite for manufacturing planning and execution.',
        features: [
            'Production planning',
            'Resource management',
            'Performance tracking',
            'Operational analytics'
        ],
        singleUserPrice: '$5-$39',
        fiveUserPrice: '$10-$78',
        href: '/products/operations-manager',
        icon: <FileSpreadsheetIcon className="size-8" />
    },
    {
        id: 5,
        title: 'Workcenter for Excel',
        description:
            'Excel-based workcenter scheduling and management solution for shop floor operations.',
        features: [
            'Workcenter scheduling',
            'Shop floor management',
            'Real-time updates',
            'Excel integration'
        ],
        singleUserPrice: '$5-$39',
        fiveUserPrice: '$10-$78',
        href: '/products/workcenter-excel',
        icon: <FileSpreadsheetIcon className="size-8" />
    },
    {
        id: 6,
        title: 'Resource Manager for Excel',
        description:
            'Advanced resource planning and scheduling with finite capacity and constraint management.',
        features: [
            'Finite capacity scheduling',
            'Resource optimization',
            'Constraint management',
            'MRP integration'
        ],
        singleUserPrice: '$5-$39',
        fiveUserPrice: '$10-$78',
        href: '/products/resource-manager-excel',
        icon: <FileSpreadsheetIcon className="size-8" />
    }
];

export function NTClipboardExcelTemplates(): React.JSX.Element {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 py-20 dark:from-blue-700 dark:to-blue-900">
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Excel Applications
                        </h1>
                        <p className="mx-auto mt-6 max-w-4xl text-xl text-blue-100">
                            Powerful Excel-based manufacturing solutions for scheduling,
                            quality control, and operations management. Choose the product
                            that best suits your company's needs.
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/product-downloads"
                                className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-3 text-lg font-semibold text-black transition-all hover:bg-yellow-300 hover:shadow-lg"
                            >
                                <DownloadIcon className="size-5" />
                                Free Trial & Samples
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Decorative background elements */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="size-96 rounded-full bg-white/5 blur-3xl" />
                </div>
            </section>

            {/* Applications Grid */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Manufacturing Excel Applications
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                            Streamline your manufacturing operations with our comprehensive
                            suite of Excel-based applications
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                        {excelApplications.map((app) => (
                            <div
                                key={app.id}
                                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-slate-800"
                            >
                                {/* Header */}
                                <div className="mb-6 flex items-start gap-4">
                                    <div className="shrink-0 rounded-lg bg-green-100 p-3 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                                        {app.icon}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {app.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                            {app.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                                        Key Features:
                                    </h4>
                                    <ul className="space-y-2">
                                        {app.features.map((feature, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                                            >
                                                <div className="mr-3 size-1.5 rounded-full bg-green-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Pricing */}
                                <div className="mb-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-700/50">
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Single User
                                        </span>
                                        <span className="text-lg font-bold text-green-600 dark:text-green-400">
                                            {app.singleUserPrice}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Five Users
                                        </span>
                                        <span className="text-lg font-bold text-green-600 dark:text-green-400">
                                            {app.fiveUserPrice}
                                        </span>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <Link
                                    href={app.href}
                                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                                >
                                    <InfoIcon className="size-4" />
                                    Info/Buy
                                </Link>

                                {/* Hover effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-600/5 to-emerald-600/5 opacity-0 transition-opacity group-hover:opacity-100" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-16 dark:from-slate-800 dark:to-slate-700">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Want to get your production in the groove?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-xl text-slate-300 dark:text-slate-200">
                            Watch our classic video and get your operations movin' and
                            groovin' today!
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
                            >
                                Get Started Today
                            </Link>
                            <Link
                                href="/product-downloads"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-slate-900"
                            >
                                <DownloadIcon className="size-5" />
                                Download Samples
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards Banner */}
            <section className="bg-background py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h3 className="mb-6 text-2xl font-bold text-foreground">
                            CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                        </h3>
                        <div className="flex justify-center">
                            <Image
                                src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                                alt="Collection of industry and business awards logos"
                                width={1024}
                                height={128}
                                className="h-auto max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
