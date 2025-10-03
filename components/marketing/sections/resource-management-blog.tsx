'use client';

import Link from 'next/link';
import { ArrowUpRightIcon, CalendarIcon, UserIcon } from 'lucide-react';

import { SiteHeading } from '@/components/marketing/fragments/site-heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';

const blogPosts = [
    {
        title:
            'Enhancing Supply Chain Visibility through Advanced Scheduling Solutions',
        description:
            "Supply Chain Visibility Solutions for Modern Manufacturers. Are your supply chain operations as transparent and efficient as they should be? In today's fast-paced market, full visibility into your supply chain is crucial for maintaining competitive advantage.",
        date: 'May 26, 2024',
        readTime: '5 min read',
        category: 'Supply Chain',
        image:
            'https://www.usersolutions.com/wp-content/uploads/2022/09/usersolutionsimage-300x211.png',
        href: 'https://www.usersolutions.com/enhancing-supply-chain-visibility-through-advanced-scheduling-solutions/'
    },
    {
        title:
            'The Role of Technology in Modern Production Planning and Scheduling',
        description:
            'Have you ever wondered how technology can transform the traditional landscape of production planning and scheduling? In an era where efficiency dictates market leaders, the integration of advanced technology solutions is no longer optional.',
        date: 'May 16, 2024',
        readTime: '6 min read',
        category: 'Technology',
        image:
            'https://www.usersolutions.com/wp-content/uploads/2022/07/AirCraftMaint.jpg',
        href: 'https://www.usersolutions.com/erp-solutions-for-production-planning/'
    },
    {
        title:
            'Implementing Lean Manufacturing Principles for Improved Production Efficiency',
        description:
            "Is your manufacturing process as streamlined and cost-effective as it could be? In today's competitive landscape, companies are constantly seeking methods to enhance efficiency and reduce waste through lean manufacturing principles.",
        date: 'May 6, 2024',
        readTime: '7 min read',
        category: 'Manufacturing',
        image: 'https://www.usersolutions.com/wp-content/uploads/2024/02/sdf.jpg',
        href: 'https://www.usersolutions.com/lean-manufacturing-solutions/'
    },
    {
        title: 'Li-ion Battery Production Scheduling Software',
        description:
            'Resource Manager-DB V6 Transforms Li-ion Battery Production Scheduling. User Solutions, a leader in flexible production scheduling and planning software, has released Resource Manager-DB (RM-DB) V6 with enhanced capabilities for battery manufacturing.',
        date: 'September 8, 2022',
        readTime: '4 min read',
        category: 'Software',
        image:
            'https://www.usersolutions.com/wp-content/uploads/2022/09/image04-300x163.png',
        href: 'https://www.usersolutions.com/li-ion-battery-production-scheduling-software/'
    },
    {
        title: 'Scheduling System Narrows Skills Gap for Fire-Rated Glass',
        description:
            "User Solutions' Resource Manager-DB enables Technical Glass Products to strategically cross-train their way to optimization. Learn how advanced scheduling systems can help bridge critical skills gaps in specialized manufacturing.",
        date: 'September 8, 2022',
        readTime: '5 min read',
        category: 'Case Study',
        image:
            'https://www.usersolutions.com/wp-content/uploads/2022/09/image3-300x163.png',
        href: 'https://www.usersolutions.com/scheduling-system-narrows-skills-gap-for-fire-rated-glass/'
    },
    {
        title:
            'Small Manufacturer Success: Planning, Scheduling, and Tracking Tools',
        description:
            'Small Manufacturer and Job Shop Uses Planning, Scheduling, and Tracking Tools from User Solutions to Become More Efficient and Competitive. Resource Manager for Excel transforms operations for growing businesses.',
        date: 'September 8, 2022',
        readTime: '6 min read',
        category: 'Success Story',
        image:
            'https://www.usersolutions.com/wp-content/uploads/2022/09/image06-1-300x163.png',
        href: 'https://www.usersolutions.com/small-manufacturer-and-job-shop-uses-planning-scheduling-and-tracking-tools-from-user-solutions-inc-to-become-more-efficient-and-competitive/'
    }
];

const categories = [
    'All',
    'Supply Chain',
    'Technology',
    'Manufacturing',
    'Software',
    'Case Study',
    'Success Story'
];

export function ResourceManagementBlog() {
    return (
        <div className="relative min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-6">
                <div className="container relative">
                    <div className="mx-auto max-w-4xl text-center">
                        <SiteHeading
                            badge="Resource Management Insights"
                            title={
                                <>
                                    Resource Management
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        {' '}
                                        Blog
                                    </span>
                                </>
                            }
                            description="Discover insights, tips, and best practices for resource management in manufacturing, production planning, and scheduling solutions."
                        />
                    </div>
                </div>
            </section>

            {/* Blog Posts Section */}
            <section className="py-8">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold">Latest Insights</h2>
                        <p className="mx-auto max-w-2xl text-muted-foreground">
                            Stay updated with the latest trends, technologies, and best
                            practices in resource management
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="mb-12 flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={category === 'All' ? 'default' : 'outline'}
                                size="sm"
                                className="rounded-full"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post, index) => (
                            <Card
                                key={index}
                                className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="aspect-video overflow-hidden bg-muted">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <CardHeader className="pb-4">
                                    <div className="mb-2 flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <CalendarIcon className="size-4" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <UserIcon className="size-4" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <Badge
                                        variant="secondary"
                                        className="mb-3 w-fit"
                                    >
                                        {post.category}
                                    </Badge>
                                    <CardTitle className="line-clamp-2 transition-colors group-hover:text-blue-600">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <CardDescription className="mb-4 line-clamp-3">
                                        {post.description}
                                    </CardDescription>
                                    <Link
                                        href={post.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-auto p-0 font-medium text-blue-600 hover:text-blue-700"
                                        >
                                            Read more
                                            <ArrowUpRightIcon className="ml-1 size-4" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-muted/30 py-8">
                <div className="container">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold">About User Solutions</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    For over 25 years, User Solutions has been at the forefront of
                                    manufacturing software innovation, providing award-winning
                                    solutions for production planning, scheduling, and resource
                                    management.
                                </p>
                                <p>
                                    Our expertise spans across various industries, helping
                                    manufacturers optimize their operations through advanced
                                    scheduling solutions, lean manufacturing principles, and
                                    cutting-edge technology integration.
                                </p>
                                <div className="flex items-center gap-4 pt-4">
                                    <Button asChild>
                                        <Link href="/contact">Contact Us</Link>
                                    </Button>
                                    <div className="text-sm">
                                        <div className="font-medium">us@usersolutions.com</div>
                                        <div>248.486.6365</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Card className="p-6 text-center">
                                <div className="mb-2 text-2xl font-bold text-blue-600">25+</div>
                                <div className="text-sm text-muted-foreground">
                                    Years of Excellence
                                </div>
                            </Card>
                            <Card className="p-6 text-center">
                                <div className="mb-2 text-2xl font-bold text-purple-600">
                                    1000+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Satisfied Customers
                                </div>
                            </Card>
                            <Card className="p-6 text-center">
                                <div className="mb-2 text-2xl font-bold text-green-600">
                                    50+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Industry Awards
                                </div>
                            </Card>
                            <Card className="p-6 text-center">
                                <div className="mb-2 text-2xl font-bold text-orange-600">
                                    99%
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Customer Satisfaction
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-16">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold">Our Products</h2>
                        <p className="mx-auto max-w-2xl text-muted-foreground">
                            Discover our comprehensive suite of resource management and
                            scheduling solutions
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        <Card className="p-6 transition-shadow hover:shadow-lg">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-xl">
                                    Job Scheduler Lite (JSL)
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="mb-4">
                                    Lightweight scheduling solution perfect for small to
                                    medium-sized operations
                                </CardDescription>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                >
                                    <Link
                                        href="/products/jsl"
                                        target="_blank"
                                    >
                                        Learn More
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="p-6 transition-shadow hover:shadow-lg">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-xl">Resource Manager DB</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="mb-4">
                                    Comprehensive database-driven solution for complex
                                    manufacturing environments
                                </CardDescription>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                >
                                    <Link
                                        href="/products/resource-manager"
                                        target="_blank"
                                    >
                                        Learn More
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="p-6 transition-shadow hover:shadow-lg">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-xl">EDGEBI</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="mb-4">
                                    Advanced business intelligence and analytics platform for
                                    data-driven decisions
                                </CardDescription>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                >
                                    <Link
                                        href="/products/edgebi"
                                        target="_blank"
                                    >
                                        Learn More
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Awards Banner */}
            <section className="border-t pt-6">
                <div className="container">
                    <div className="text-center">
                        <h3 className="mb-6 text-2xl font-bold">
                            CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                        </h3>
                        <div className="mb-6">
                            <img
                                src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                                alt="Collection of industry and business awards logos"
                                className="mx-auto h-auto max-w-full"
                            />
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Trusted by manufacturers worldwide for production planning and
                            scheduling solutions
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
