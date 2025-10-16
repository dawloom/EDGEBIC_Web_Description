import * as React from 'react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LimitPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 text-white dark:from-blue-800 dark:to-blue-900">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <div className="mb-6">
                            <Badge
                                variant="outline"
                                className="h-8 rounded-full border-white/20 bg-white/10 px-3 text-sm font-medium text-white shadow-sm"
                            >
                                OPERATIONS MANAGER
                            </Badge>
                        </div>
                        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                            Operations Manager: Facility Layout
                        </h1>
                        <p className="mb-8 text-xl md:text-2xl">
                            Facility planning and layout optimization for maximum efficiency
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-gray-100"
                            >
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facility Layout Overview */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle className="text-center text-3xl">
                                    Facility Layout Design & Optimization
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Facility layout design is the strategic arrangement of
                                    physical resources within a facility to optimize material
                                    flow, minimize handling costs, and maximize operational
                                    efficiency. Our Operations Manager Facility Layout module
                                    provides comprehensive tools for designing, analyzing, and
                                    optimizing facility layouts across all industries.
                                </p>

                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    From manufacturing plants to warehouses and offices, our
                                    solution helps organizations create efficient spatial
                                    arrangements that reduce costs, improve safety, and enhance
                                    productivity.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="bg-muted/50 pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center text-2xl">
                                    Case Study: Distribution Center Redesign
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        The Challenge
                                    </h3>
                                    <p className="mb-4 text-muted-foreground">
                                        MegaLogistics faced significant inefficiencies in their
                                        500,000 sq ft distribution center. Poor layout design
                                        resulted in excessive travel distances, cross-docking
                                        issues, and material handling bottlenecks. Order fulfillment
                                        times were increasing while productivity declined, impacting
                                        customer satisfaction and operational costs.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="mb-3 text-xl font-semibold text-green-600">
                                        The Solution
                                    </h3>
                                    <p className="mb-4 text-muted-foreground">
                                        Using Operations Manager's Facility Layout optimization
                                        tools, the engineering team analyzed material flow patterns,
                                        storage requirements, and picking frequencies. They
                                        redesigned the layout using systematic layout planning (SLP)
                                        methodology and optimized storage allocation based on ABC
                                        analysis.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="mb-3 text-xl font-semibold text-purple-600">
                                        Results Achieved
                                    </h3>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-green-500" />
                                                <span className="text-sm">
                                                    40% reduction in travel distance
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-blue-500" />
                                                <span className="text-sm">
                                                    35% improvement in picking efficiency
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-purple-500" />
                                                <span className="text-sm">
                                                    25% increase in storage capacity
                                                </span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-orange-500" />
                                                <span className="text-sm">
                                                    50% reduction in order cycle time
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-red-500" />
                                                <span className="text-sm">
                                                    30% decrease in material handling costs
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-teal-500" />
                                                <span className="text-sm">
                                                    20% improvement in safety metrics
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Layout Types */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                            Facility Layout Types
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Product Layout</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Sequential arrangement for continuous flow production
                                        systems
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Process Layout</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Grouping similar processes together for flexible
                                        manufacturing
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">
                                        Fixed Position Layout
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Resources arranged around stationary product or project
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Cellular Layout</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Group technology cells for product family manufacturing
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Hybrid Layout</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Combination of layout types for complex operations
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">
                                        Warehouse Layout
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Optimized storage and material handling arrangements
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Objectives */}
            <section className="bg-muted/50 pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                            Layout Design Objectives
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-blue-600">
                                        Material Flow Optimization
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Minimize material handling distance</li>
                                        <li>• Reduce transportation costs</li>
                                        <li>• Eliminate backtracking and crossovers</li>
                                        <li>• Optimize flow patterns</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-green-600">
                                        Space Utilization
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Maximize effective use of space</li>
                                        <li>• Optimize storage density</li>
                                        <li>• Balance accessibility and capacity</li>
                                        <li>• Plan for future expansion</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-purple-600">
                                        Safety & Ergonomics
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Ensure safe working conditions</li>
                                        <li>• Reduce workplace injuries</li>
                                        <li>• Optimize ergonomic design</li>
                                        <li>• Meet safety regulations</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-orange-600">
                                        Flexibility & Efficiency
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Adapt to changing requirements</li>
                                        <li>• Minimize idle time and delays</li>
                                        <li>• Optimize equipment utilization</li>
                                        <li>• Facilitate communication</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Methods */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                            Layout Design Methods
                        </h2>
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-blue-600">
                                        Systematic Layout Planning (SLP)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Structured methodology using relationship diagrams, space
                                        requirements, and practical limitations to develop optimal
                                        layouts.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-green-600">
                                        CRAFT Algorithm
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Computerized Relative Allocation of Facilities Technique for
                                        improving layouts through pairwise department exchanges.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-purple-600">
                                        Activity Relationship Chart
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Matrix showing the importance of proximity between different
                                        activities or departments in the facility.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-orange-600">
                                        Flow Analysis
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Quantitative analysis of material movement patterns to
                                        optimize department placement and minimize handling costs.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                        <CardContent className="py-12 text-center">
                            <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
                                CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                            </h2>
                            <div className="flex justify-center">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                                    alt="Collection of industry and business awards logos"
                                    width={1024}
                                    height={128}
                                    className="h-auto max-w-full"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
