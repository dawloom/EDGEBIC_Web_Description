import * as React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { SiteHeading } from '@/components/marketing/fragments/site-heading';
import { Card, CardContent } from '@/components/ui/card';
import { createTitle } from '@/lib/utils';

export const metadata: Metadata = {
    title: createTitle('News'),
    description:
        "View User Solutions' press announcements and media coverage to stay up-to-date on our innovative production planning and scheduling solutions and how they can help manufacturers become more competitive and profitable through efficient resource management."
};

export default function NewsPage(): React.JSX.Element {
    return (
        <div className="container mx-auto max-w-7xl px-4 pt-6">
            {/* Header Section */}
            <div className="mb-6 text-center">
                <SiteHeading
                    badge="Latest News"
                    title="News"
                    description="View User Solutions' press announcements and media coverage to stay up-to-date on our innovative production planning and scheduling solutions and how they can help manufacturers become more competitive and profitable through efficient resource management."
                />
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Sample Media Coverage Section */}
                <section className="mb-6">
                    <h2 className="mb-10 text-3xl font-semibold">
                        Sample Media Coverage
                    </h2>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Manufacturing KPIs Article */}
                        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
                            <div className="relative aspect-video">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2024/02/sdf.jpg"
                                    alt="Illustration of a worker with construction tools icons"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-3 text-lg font-semibold">
                                    Top 10 Manufacturing KPIs in 2024
                                </h3>
                                <p className="mb-4 text-sm text-muted-foreground">
                                    What is a manufacturing KPI?
                                </p>
                                <Link
                                    href="/top-10-manufacturing-kpis-in-2024"
                                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>

                        {/* COVID Fight Article */}
                        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
                            <div className="relative aspect-video">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/09/2020.png"
                                    alt="Laptop with code, digital cybersecurity concept"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-3 text-lg font-semibold">
                                    User Solutions Joins COVID Fight with Production Scheduling
                                    Software
                                </h3>
                                <div className="mb-4 space-y-2">
                                    <Link
                                        href="https://www.todaysmedicaldevelopments.com/product/user-solutions-covid-free-rmx-software-quoting/"
                                        className="block text-sm text-blue-600 hover:text-blue-800"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Today's Medical Developments
                                    </Link>
                                    <Link
                                        href="https://www.processingmagazine.com/covid-19/article/21134726/user-solutions-joins-fight-against-covid19-offers-free-production-scheduling-software"
                                        className="block text-sm text-blue-600 hover:text-blue-800"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Processing Magazine
                                    </Link>
                                    <Link
                                        href="https://www.ien.com/software/news/21129098/user-solutions-joins-covid-fight-with-production-scheduling-software"
                                        className="block text-sm text-blue-600 hover:text-blue-800"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        IEN
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Amish Woodshop Article */}
                        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
                            <div className="relative aspect-video">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2023/01/amish.png"
                                    alt="Horse pulling Amish buggy on rural road"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-3 text-lg font-semibold">
                                    Production Scheduling System for Amish Woodshop Cuts Lead
                                    Time, Inefficiency
                                </h3>
                                <p className="mb-4 text-sm text-muted-foreground">
                                    Woodworking Network
                                </p>
                            </div>
                        </div>

                        {/* CIO Applications Award */}
                        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
                            <div className="relative aspect-video">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/09/2016.png"
                                    alt="Crowd at event with cameras and smartphones"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-3 text-lg font-semibold">
                                    User Solutions, Inc. named as one of top ERP Solutions
                                    Transforming Business 2016 by CIO Applications
                                </h3>
                                <Link
                                    href="https://www.cioapplications.com/magazines/May/ERP2016/"
                                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    CIO Applications →
                                </Link>
                            </div>
                        </div>

                        {/* OR/MS Today Article */}
                        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
                            <div className="relative aspect-video">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/09/2018.png"
                                    alt="Businessman working at computer in modern office"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-3 text-lg font-semibold">
                                    Quick and easy Excel-based MRP software for small and large
                                    manufacturing
                                </h3>
                                <Link
                                    href="http://www.orms-today.org/"
                                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    OR/MS Today →
                                </Link>
                            </div>
                        </div>

                        {/* APICS Article */}
                        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
                            <div className="relative aspect-video">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/09/2015.png"
                                    alt="Team hands together for unity in aerial view"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-3 text-lg font-semibold">
                                    APICS Profiles in Manufacturing
                                </h3>
                                <p className="text-sm text-muted-foreground">APICS</p>
                            </div>
                        </div>

                        {/* Software Maintenance Article */}
                        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
                            <div className="relative aspect-video">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/09/2014.png"
                                    alt="Professionals analyzing data on computer in office setting"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-3 text-lg font-semibold">
                                    Software Schedules Maintenance With Military Precision
                                </h3>
                                <Link
                                    href="http://www.impomag.com/"
                                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    IMPO - Industrial Maintenance & Plant Operations →
                                </Link>
                            </div>
                        </div>

                        {/* Small Manufacturers Article */}
                        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
                            <div className="relative aspect-video">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/09/image06.png"
                                    alt="Businesspeople analyzing financial graphs on table with calculator"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-3 text-lg font-semibold">
                                    Small Manufacturers Seek Best ERP Fit
                                </h3>
                                <Link
                                    href="https://www.sme.org/"
                                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    SME - Manufacturing Engineering →
                                </Link>
                            </div>
                        </div>

                        {/* Fireproof Planning Article */}
                        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
                            <div className="relative aspect-video">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/09/2011.png"
                                    alt="Professionals networking over global business backdrop"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-3 text-lg font-semibold">
                                    Fireproof Planning – One Manufacturer Finds a Cool Scheduling
                                    Solution
                                </h3>
                                <p className="text-sm text-muted-foreground">APICS</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Press Releases Section */}
                <section className="mb-6">
                    <h2 className="mb-10 text-3xl font-semibold">Press Releases</h2>

                    {/* Featured Webinar */}
                    <div className="mb-6 rounded-lg bg-blue-50 p-8 dark:bg-blue-900/20">
                        <div className="flex flex-col items-center gap-6 lg:flex-row">
                            <div className="flex-1">
                                <h3 className="mb-4 text-2xl font-semibold">
                                    FREE Webinar Hosted by Purdue MEP to Improve Production
                                    Scheduling
                                </h3>
                                <Link
                                    href="https://www.prnewswire.com/news-releases/free-webinar-hosted-by-purdue-mep-and-user-solutions-to-improve-production-scheduling-301874765.html?tc=eml_cleartime"
                                    className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Read More →
                                </Link>
                            </div>
                            <div className="w-full lg:w-auto">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2023/07/MEP_H-Full-CMYK_1-crop-1-1024x164.jpg"
                                    alt="Purdue University logo with Manufacturing Extension Partnership text"
                                    width={400}
                                    height={200}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Press Release Grid */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {/* Revolutionary Method Announcement */}
                        <div className="rounded-lg border p-6">
                            <h4 className="mb-3 text-lg font-semibold">
                                User Solutions, Inc. announces revolutionary method for
                                Production Planning and Scheduling evaluations
                            </h4>
                            <p className="mb-3 text-sm text-muted-foreground">
                                Oct, 29, 2023
                            </p>
                            <Link
                                href="https://www.prnewswire.com/news-releases/user-solutions-inc-announces-revolutionary-method-for-production-planning-and-scheduling-evaluations-301970812.html"
                                className="text-sm font-medium text-blue-600 hover:text-blue-800"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read More →
                            </Link>
                        </div>

                        {/* Forging Ahead Article */}
                        <div className="rounded-lg border p-6">
                            <h4 className="mb-3 text-lg font-semibold">
                                Forging Ahead Leveraging ERP Data for Enhanced Planning and
                                Scheduling
                            </h4>
                            <p className="mb-3 text-sm text-muted-foreground">
                                Oct, 28, 2023
                            </p>
                            <Link
                                href="https://www.prnewswire.com/news-releases/forging-ahead-leveraging-erp-data-for-enhanced-planning-and-scheduling-301970725.html"
                                className="text-sm font-medium text-blue-600 hover:text-blue-800"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read More →
                            </Link>
                        </div>

                        {/* University Partnerships */}
                        <div className="rounded-lg border p-6">
                            <h4 className="mb-3 text-lg font-semibold">
                                User Solutions continues partnerships with multiple University's
                                for real-life experience on launching a Production Scheduling
                                Offering
                            </h4>
                            <p className="mb-3 text-sm text-muted-foreground">
                                Oct, 28, 2023
                            </p>
                            <Link
                                href="https://www.prnewswire.com/news-releases/user-solutions-continues-partnerships-with-multiple-universitys-for-real-life-experience-on-launching-a-production-scheduling-offering-301970708.html"
                                className="text-sm font-medium text-blue-600 hover:text-blue-800"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read More →
                            </Link>
                        </div>

                        {/* Revolutionary Manufacturing Software */}
                        <div className="rounded-lg border p-6">
                            <h4 className="mb-3 text-lg font-semibold">
                                User Solution Unveils Revolutionary Manufacturing Software:
                                Customized Solutions for Enhanced Scheduling and Planning
                            </h4>
                            <p className="mb-3 text-sm text-muted-foreground">
                                Oct, 04, 2023
                            </p>
                            <Link
                                href="https://www.prnewswire.com/news-releases/user-solution-unveils-revolutionary-manufacturing-software-customized-solutions-for-enhanced-scheduling-and-planning-301946707.html"
                                className="text-sm font-medium text-blue-600 hover:text-blue-800"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read More →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Recent Articles Section */}
                <section className="mb-6">
                    <h2 className="mb-10 text-3xl font-semibold">Recent Articles</h2>

                    <div className="space-y-8">
                        <article className="flex flex-col gap-6 border-b pb-8 md:flex-row">
                            <div className="md:w-1/3">
                                <Image
                                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Businessman working on computer in office setting"
                                    width={400}
                                    height={240}
                                    className="w-full rounded-lg"
                                />
                            </div>
                            <div className="md:w-2/3">
                                <h3 className="mb-3 text-xl font-semibold">
                                    <Link
                                        href="/enhancing-supply-chain-visibility-through-advanced-scheduling-solutions"
                                        className="hover:text-blue-600"
                                    >
                                        Enhancing Supply Chain Visibility through Advanced
                                        Scheduling Solutions
                                    </Link>
                                </h3>
                                <p className="mb-3 text-muted-foreground">May 26, 2024</p>
                                <Link
                                    href="/enhancing-supply-chain-visibility-through-advanced-scheduling-solutions"
                                    className="font-medium text-blue-600 hover:text-blue-800"
                                >
                                    Read more →
                                </Link>
                            </div>
                        </article>

                        <article className="flex flex-col gap-6 border-b pb-8 md:flex-row">
                            <div className="md:w-1/3">
                                <Image
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Submarine crew in control room"
                                    width={400}
                                    height={240}
                                    className="w-full rounded-lg"
                                />
                            </div>
                            <div className="md:w-2/3">
                                <h3 className="mb-3 text-xl font-semibold">
                                    <Link
                                        href="/erp-solutions-for-production-planning"
                                        className="hover:text-blue-600"
                                    >
                                        The Role of Technology in Modern Production Planning and
                                        Scheduling
                                    </Link>
                                </h3>
                                <p className="mb-3 text-muted-foreground">May 16, 2024</p>
                                <Link
                                    href="/erp-solutions-for-production-planning"
                                    className="font-medium text-blue-600 hover:text-blue-800"
                                >
                                    Read more →
                                </Link>
                            </div>
                        </article>

                        <article className="flex flex-col gap-6 border-b pb-8 md:flex-row">
                            <div className="md:w-1/3">
                                <Image
                                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Illustration of a worker with construction tools icons"
                                    width={400}
                                    height={240}
                                    className="w-full rounded-lg"
                                />
                            </div>
                            <div className="md:w-2/3">
                                <h3 className="mb-3 text-xl font-semibold">
                                    <Link
                                        href="/lean-manufacturing-solutions"
                                        className="hover:text-blue-600"
                                    >
                                        Implementing Lean Manufacturing Principles for Improved
                                        Production Efficiency
                                    </Link>
                                </h3>
                                <p className="mb-3 text-muted-foreground">May 6, 2024</p>
                                <Link
                                    href="/lean-manufacturing-solutions"
                                    className="font-medium text-blue-600 hover:text-blue-800"
                                >
                                    Read more →
                                </Link>
                            </div>
                        </article>

                        <article className="flex flex-col gap-6 border-b pb-8 md:flex-row">
                            <div className="md:w-1/3">
                                <Image
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Person reading a magazine with business diagrams"
                                    width={400}
                                    height={240}
                                    className="w-full rounded-lg"
                                />
                            </div>
                            <div className="md:w-2/3">
                                <h3 className="mb-3 text-xl font-semibold">
                                    <Link
                                        href="/li-ion-battery-production-scheduling-software"
                                        className="hover:text-blue-600"
                                    >
                                        Li-ion Battery Production Scheduling Software
                                    </Link>
                                </h3>
                                <p className="mb-3 text-muted-foreground">September 8, 2022</p>
                                <Link
                                    href="/li-ion-battery-production-scheduling-software"
                                    className="font-medium text-blue-600 hover:text-blue-800"
                                >
                                    Read more →
                                </Link>
                            </div>
                        </article>

                        <article className="flex flex-col gap-6 border-b pb-8 md:flex-row">
                            <div className="md:w-1/3">
                                <Image
                                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Laptop screen displaying code in development environment"
                                    width={400}
                                    height={240}
                                    className="w-full rounded-lg"
                                />
                            </div>
                            <div className="md:w-2/3">
                                <h3 className="mb-3 text-xl font-semibold">
                                    <Link
                                        href="/scheduling-system-narrows-skills-gap-for-fire-rated-glass"
                                        className="hover:text-blue-600"
                                    >
                                        Scheduling System Narrows Skills Gap for Fire-Rated Glass
                                    </Link>
                                </h3>
                                <p className="mb-3 text-muted-foreground">September 8, 2022</p>
                                <Link
                                    href="/scheduling-system-narrows-skills-gap-for-fire-rated-glass"
                                    className="font-medium text-blue-600 hover:text-blue-800"
                                >
                                    Read more →
                                </Link>
                            </div>
                        </article>

                        <article className="flex flex-col gap-6 border-b pb-8 md:flex-row">
                            <div className="md:w-1/3">
                                <Image
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Business professionals analyzing financial charts and data"
                                    width={400}
                                    height={240}
                                    className="w-full rounded-lg"
                                />
                            </div>
                            <div className="md:w-2/3">
                                <h3 className="mb-3 text-xl font-semibold">
                                    <Link
                                        href="/small-manufacturer-and-job-shop-uses-planning-scheduling-and-tracking-tools-from-user-solutions-inc-to-become-more-efficient-and-competitive"
                                        className="hover:text-blue-600"
                                    >
                                        Small Manufacturer and Job Shop Uses Planning, Scheduling,
                                        and Tracking Tools from User Solutions, Inc. to Become More
                                        Efficient and Competitive
                                    </Link>
                                </h3>
                                <p className="mb-3 text-muted-foreground">September 8, 2022</p>
                                <Link
                                    href="/small-manufacturer-and-job-shop-uses-planning-scheduling-and-tracking-tools-from-user-solutions-inc-to-become-more-efficient-and-competitive"
                                    className="font-medium text-blue-600 hover:text-blue-800"
                                >
                                    Read more →
                                </Link>
                            </div>
                        </article>

                        <article className="flex flex-col gap-6 border-b pb-8 md:flex-row">
                            <div className="md:w-1/3">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Team meeting with laptops in modern office"
                                    width={400}
                                    height={240}
                                    className="w-full rounded-lg"
                                />
                            </div>
                            <div className="md:w-2/3">
                                <h3 className="mb-3 text-xl font-semibold">
                                    <Link
                                        href="/user-solutions-inc-named-as-one-of-top-erp-solutions-transforming-business-2016-by-cio-applications-as-they-celebrate-25-years-in-business"
                                        className="hover:text-blue-600"
                                    >
                                        User Solutions, Inc. named as one of top ERP Solutions
                                        Transforming Business 2016 by CIO Applications, as they
                                        celebrate 25 years in business
                                    </Link>
                                </h3>
                                <p className="mb-3 text-muted-foreground">September 8, 2022</p>
                                <Link
                                    href="/user-solutions-inc-named-as-one-of-top-erp-solutions-transforming-business-2016-by-cio-applications-as-they-celebrate-25-years-in-business"
                                    className="font-medium text-blue-600 hover:text-blue-800"
                                >
                                    Read more →
                                </Link>
                            </div>
                        </article>

                        <article className="flex flex-col gap-6 md:flex-row">
                            <div className="md:w-1/3">
                                <Image
                                    src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Team celebrating with holiday hats in office"
                                    width={400}
                                    height={240}
                                    className="w-full rounded-lg"
                                />
                            </div>
                            <div className="md:w-2/3">
                                <h3 className="mb-3 text-xl font-semibold">
                                    <Link
                                        href="/random-events-and-covariance"
                                        className="hover:text-blue-600"
                                    >
                                        Celebrating National Manufacturing Day
                                    </Link>
                                </h3>
                                <p className="mb-3 text-muted-foreground">July 18, 2022</p>
                                <Link
                                    href="/random-events-and-covariance"
                                    className="font-medium text-blue-600 hover:text-blue-800"
                                >
                                    Read more →
                                </Link>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Awards Section */}
                <section className="pb-6">
                    <div className="mx-auto max-w-7xl">
                        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                            <CardContent className="p-8 text-center">
                                <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                                    CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                                </h2>
                                <img
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                                    alt="Collection of industry and business awards logos"
                                    className="mx-auto h-auto max-w-full"
                                />
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    );
}
