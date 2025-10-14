import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
    title: 'usersol-admin-2 | User Solutions',
    description:
        'Articles by usersol-admin-2 covering manufacturing solutions, production scheduling, and supply chain management.'
};

export default function UsersolAdmin2AuthorPage() {
    const articles = [
        {
            title:
                'Enhancing Supply Chain Visibility through Advanced Scheduling Solutions',
            href: '/enhancing-supply-chain-visibility-through-advanced-scheduling-solutions',
            image:
                'https://www.usersolutions.com/wp-content/uploads/2022/09/usersolutionsimage-300x211.png',
            alt: 'Businessman working on computer in office setting',
            description:
                "Supply Chain Visibility Solutions for Modern Manufacturers Are your supply chain operations as transparent and efficient as they should be? In today's fast-paced market, full visibility is essential. Manufacturers must optimize operations and respond quickly to changes. At User Solutions, Inc., we deliver advanced scheduling solutions and ERP software that improve visibility across your supply […]"
        },
        {
            title:
                'The Role of Technology in Modern Production Planning and Scheduling',
            href: '/erp-solutions-for-production-planning',
            image:
                'https://www.usersolutions.com/wp-content/uploads/2022/07/AirCraftMaint.jpg',
            alt: 'Submarine crew in control room',
            description:
                'Have you ever wondered how technology can transform the traditional landscape of production planning and scheduling? In an era where efficiency dictates market leaders, the adoption of advanced technological tools has become indispensable. User Solutions, Inc. specializes in providing cutting-edge ERP solutions for manufacturers, which are pivotal in revolutionizing how production planning and scheduling tasks […]'
        },
        {
            title:
                'Implementing Lean Manufacturing Principles for Improved Production Efficiency',
            href: '/lean-manufacturing-solutions',
            image: 'https://www.usersolutions.com/wp-content/uploads/2024/02/sdf.jpg',
            alt: 'Illustration of a worker with construction tools icons.',
            description:
                "Is your manufacturing process as streamlined and cost-effective as it could be? In today's competitive landscape, companies are constantly seeking methods to enhance efficiency and reduce waste. Lean manufacturing principles have emerged as a cornerstone in achieving these goals. At User Solutions, Inc., we specialize in integrating these principles with advanced resource management solutions to […]"
        },
        {
            title: 'Li-ion Battery Production Scheduling Software',
            href: '/li-ion-battery-production-scheduling-software',
            image:
                'https://www.usersolutions.com/wp-content/uploads/2022/09/image04.png',
            alt: 'Person reading a magazine with business diagrams.',
            description:
                'Resource Manager-DB V6 Transforms Li-ion Battery Production Scheduling User Solutions, a leader in flexible production scheduling and planning software, has released Resource Manager-DB (RM-DB) V6. This upgrade was driven by customer demand for more power and flexibility in manufacturing scheduling. South Lyon, MI 6/9/2016 RM-DB V6 introduces Bills-of-Resources that blend materials and workcenters in any […]'
        },
        {
            title: 'Scheduling System Narrows Skills Gap for Fire-Rated Glass',
            href: '/scheduling-system-narrows-skills-gap-for-fire-rated-glass',
            image:
                'https://www.usersolutions.com/wp-content/uploads/2022/09/image3.png',
            alt: 'Laptop screen displaying code in development environment.',
            description:
                "Scheduling System Narrows Skills Gap for Fire-Rated Glass User Solutions' Resource Manager-DB enables Technical Glass Products to strategically cross-train their way to optimization South Lyon, MI 8/31/2016 User Solutions, a provider of production scheduling software solutions for manufacturers and job shops, today announces that Technical Glass Products, the recognized leader in the fire-rated glass and […]"
        },
        {
            title:
                'Small Manufacturer and Job Shop Uses Planning, Scheduling, and Tracking Tools from User Solutions, Inc. to Become More Efficient and Competitive',
            href: '/small-manufacturer-and-job-shop-uses-planning-scheduling-and-tracking-tools-from-user-solutions-inc-to-become-more-efficient-and-competitive',
            image:
                'https://www.usersolutions.com/wp-content/uploads/2022/09/image06-1.png',
            alt: 'Business professionals analyzing financial charts and data.',
            description:
                "Small Manufacturer and Job Shop Uses Planning, Scheduling, and Tracking Tools from User Solutions, Inc. to Become More Efficient and Competitive Resource Manager for Excel and Resource Manager-DB's new features improve scheduling for small to medium sized operations to optimally manage resources (Workcenters, Labor, Materials, Machines) to deliver on time and on budget. South Lyon, […]"
        },
        {
            title:
                'User Solutions, Inc. named as one of top ERP Solutions Transforming Business 2016 by CIO Applications, as they celebrate 25 years in business.',
            href: '/user-solutions-inc-named-as-one-of-top-erp-solutions-transforming-business-2016-by-cio-applications-as-they-celebrate-25-years-in-business',
            image:
                'https://www.usersolutions.com/wp-content/uploads/2022/09/image05.png',
            alt: 'Team meeting with laptops in modern office.',
            description:
                'User Solutions, Inc. named as one of top ERP Solutions Transforming Business 2016 by CIO Applications, as they celebrate 25 years in business. User Solutions receives recognition by CIO Applications for the company\'s success as ERP Add-On for Production Scheduling South Lyon, MI 5/10/2016 "We are pleased to recognize User Solutions as one among the […]'
        },
        {
            title: 'Celebrating National Manufacturing Day',
            href: '/random-events-and-covariance',
            image:
                'https://www.usersolutions.com/wp-content/uploads/2022/07/celebrating.png',
            alt: 'Team celebrating with holiday hats in office.',
            description:
                "Blame Random Events and Covariance Ever wonder why, after picking what you thought was the shortest line, you're the last to get through? Or, why traffic can come to an absolute stand-still on the freeway with no apparent reason? There are two mathematical principles at work here (and sad to say, influencing your Plant, Shop, […]"
        },
        {
            title:
                'User Solutions Joins Fight Against Covid – Free Production Scheduling Software',
            href: '/lets-make-manufacturing-great-again',
            image:
                'https://www.usersolutions.com/wp-content/uploads/2022/07/image02.png',
            alt: 'Person budgeting with calculator and documents on table.',
            description:
                "Let's Make Manufacturing Great Again© this National Manufacturing Day 2017 This year's National Manufacturing Day arrives at a most dynamic time with much attention focused on:   Initiatives for manufacturers to achieve and sustain both local and global competitiveness through operational efficiencies A lack of new students entering manufacturing careers contributing to expanding 'skills-gap' challenge […]"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <Badge
                            variant="outline"
                            className="mb-6 h-8 rounded-full border-blue-600/30 px-4 text-sm font-medium text-blue-700 shadow-sm dark:border-blue-400/30 dark:text-blue-300"
                        >
                            Author Profile
                        </Badge>
                        <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-400 dark:to-cyan-400 md:text-5xl">
                            usersol-admin-2
                        </h1>
                        <p className="text-xl text-gray-700 dark:text-gray-300">
                            Expert articles on manufacturing solutions, production scheduling,
                            and supply chain management.
                        </p>
                    </div>
                </div>
            </section>

            {/* Articles Section */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl space-y-6">
                        {articles.map((article, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                            >
                                <Link
                                    href={article.href}
                                    className="block transition-all duration-300"
                                >
                                    <div className="grid gap-6 md:grid-cols-[300px_1fr]">
                                        {/* Article Image */}
                                        <div className="relative h-64 w-full overflow-hidden md:h-full">
                                            <Image
                                                src={article.image}
                                                alt={article.alt}
                                                fill
                                                className="object-cover transition-transform duration-300 hover:scale-110"
                                                unoptimized
                                            />
                                        </div>

                                        {/* Article Content */}
                                        <CardContent className="flex flex-col justify-center p-6">
                                            <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                                                {article.title}
                                            </h2>
                                            <p className="text-sm text-muted-foreground">
                                                {article.description}
                                            </p>
                                        </CardContent>
                                    </div>
                                </Link>
                            </Card>
                        ))}

                        {/* Award Logo Card */}
                        <Card className="mt-6 rounded-xl border bg-gradient-to-br from-blue-50 to-blue-100 text-card-foreground shadow dark:from-blue-900/20 dark:to-blue-800/20">
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
