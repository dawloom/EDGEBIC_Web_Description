import * as React from 'react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Sked3aPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white dark:from-blue-800 dark:to-blue-900">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mb-6">
                            <Badge
                                variant="outline"
                                className="h-8 rounded-full border-white/20 bg-white/10 px-3 text-sm font-medium text-white shadow-sm"
                            >
                                OPERATIONS MANAGER
                            </Badge>
                        </div>
                        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                            Operations Manager: SKED3A
                        </h1>
                        <p className="mb-8 text-xl md:text-2xl">
                            Job Sequencing For 3 Work Stations in Series
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* SKED2A Overview */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle className="text-center text-3xl">Job Sequencing For 3 Work Stations in Series (SKED3A)</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    SKED3A are designed for flow shops of 3 work stations arranged in series. Each
                                    job receives exactly the same processing at each station. In such flow shops,
                                    there is no attempt to minimize lateness; instead, the objective is to minimize the
                                    total time needed to complete a batch of jobs.
                                </p>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    In both SKED2A and SKED3A, there
                                    may be several alternative optimal solutions. Depending on how the jobs are
                                    sequenced before running the Ctrl – Shift – J macro, the worksheet may generate
                                    different sequences with the same makespan.
                                </p>
                                
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    From flow shop scheduling to job shop optimization, SKED2A delivers optimal production schedules that minimize makespan, reduce idle time, and maximize throughput while maintaining quality standards and delivery commitments.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl text-center">Case Study: Automotive Parts Supplier</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-blue-600">The Challenge</h3>
                                    <p className="text-muted-foreground mb-4">
                                        AutoParts Manufacturing struggled with excessive inventory levels, long lead times, and frequent stockouts. Their push-based production system created waste through overproduction and excess inventory holding costs. They needed to transition to a lean, pull-based system to improve efficiency and reduce costs.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-green-600">The Solution</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Using Operations Manager's Kanban optimization tools, the company implemented a comprehensive pull-based production system. They calculated optimal kanban quantities, designed visual control systems, and established supplier kanban loops for just-in-time delivery.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-purple-600">Results Achieved</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                                <span className="text-sm">60% reduction in inventory levels</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                                <span className="text-sm">45% decrease in lead times</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                                <span className="text-sm">80% reduction in stockouts</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                                                <span className="text-sm">35% improvement in cash flow</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                                                <span className="text-sm">50% reduction in warehousing costs</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                                                <span className="text-sm">25% increase in productivity</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Kanban Types */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
                            Kanban System Types
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Production Kanban</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Controls internal production flow and work-in-process inventory levels
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Withdrawal Kanban</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Manages material movement between production stages and inventory points
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Supplier Kanban</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Coordinates external supplier deliveries for just-in-time procurement
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Signal Kanban</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Triggers production or replenishment when minimum inventory levels are reached
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Emergency Kanban</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Handles unexpected demand spikes or supply disruptions
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Express Kanban</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Expedites critical orders or high-priority customer requirements
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
                            Lean Manufacturing Benefits
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-blue-600">Inventory Optimization</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Reduced work-in-process inventory</li>
                                        <li>• Lower raw material holdings</li>
                                        <li>• Minimized finished goods stockpiling</li>
                                        <li>• Optimized safety stock levels</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-green-600">Production Flow</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Smooth production flow</li>
                                        <li>• Reduced lead times</li>
                                        <li>• Eliminated overproduction</li>
                                        <li>• Improved customer responsiveness</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-purple-600">Quality Control</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Faster defect detection</li>
                                        <li>• Reduced rework and scrap</li>
                                        <li>• Improved quality visibility</li>
                                        <li>• Continuous improvement culture</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-orange-600">Cost Reduction</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Lower inventory carrying costs</li>
                                        <li>• Reduced storage requirements</li>
                                        <li>• Minimized obsolescence risk</li>
                                        <li>• Improved cash flow</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation Steps */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
                            Kanban Implementation Process
                        </h2>
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-blue-600">1. Value Stream Mapping</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Analyze current state production flow to identify waste, bottlenecks, and improvement opportunities for kanban implementation.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-green-600">2. Kanban Calculation</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Calculate optimal number of kanban cards based on demand rates, lead times, safety factors, and container sizes.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-purple-600">3. Visual Management</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Design visual control systems including kanban boards, card designs, and signal mechanisms for effective communication.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-orange-600">4. Continuous Improvement</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Implement monitoring systems and regular reviews to optimize kanban quantities and improve system performance.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
                            Industry Applications
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-blue-600">Automotive Manufacturing</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Just-in-time parts delivery</li>
                                        <li>• Assembly line material flow</li>
                                        <li>• Supplier integration systems</li>
                                        <li>• Multi-variant production control</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-green-600">Electronics Manufacturing</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• PCB production flow</li>
                                        <li>• Component inventory management</li>
                                        <li>• Surface mount technology lines</li>
                                        <li>• Testing and quality control</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-purple-600">Pharmaceutical Manufacturing</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Batch production control</li>
                                        <li>• Raw material management</li>
                                        <li>• Packaging line optimization</li>
                                        <li>• Quality assurance workflows</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-orange-600">Food & Beverage</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Fresh ingredient management</li>
                                        <li>• Production scheduling optimization</li>
                                        <li>• Packaging material flow</li>
                                        <li>• Cold chain management</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                            <CardContent className="p-8 text-center">
                                <h2 className="mb-6 text-2xl font-bold text-foreground">
                                    CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                                </h2>
                                <div className="flex justify-center">
                                    <Image
                                        src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                                        alt="Collection of industry and business awards logos"
                                        width={1024}
                                        height={128}
                                        className="h-auto max-w-full rounded-lg shadow-md"
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