import * as React from 'react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OperationsManagerProcessFlowPage(): React.JSX.Element {
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
                            Operations Manager: Process Flow
                        </h1>
                        <p className="mb-8 text-xl md:text-2xl">
                            Process analysis and workflow optimization for maximum efficiency
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

            {/* Process Flow Overview */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle className="text-center text-3xl">
                                    Process Flow Analysis & Optimization
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Process flow analysis is the systematic examination of how
                                    work moves through an organization, identifying
                                    inefficiencies, bottlenecks, and improvement opportunities.
                                    Our Operations Manager Process Flow module provides
                                    comprehensive tools for mapping, analyzing, and optimizing
                                    business processes across all industries.
                                </p>

                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    From value stream mapping to workflow automation, our solution
                                    helps organizations streamline operations, reduce cycle times,
                                    and eliminate waste for sustainable competitive advantage.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="bg-muted/50 py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center text-2xl">
                                    Case Study: Financial Services Processing
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        The Challenge
                                    </h3>
                                    <p className="mb-4 text-muted-foreground">
                                        Global Financial Services struggled with lengthy loan
                                        approval processes that frustrated customers and created
                                        competitive disadvantages. Their multi-department workflow
                                        involved numerous handoffs, redundant checks, and unclear
                                        approval criteria, resulting in inconsistent processing
                                        times and poor customer satisfaction.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="mb-3 text-xl font-semibold text-green-600">
                                        The Solution
                                    </h3>
                                    <p className="mb-4 text-muted-foreground">
                                        Using Operations Manager's Process Flow analysis tools, the
                                        company mapped their entire loan approval process,
                                        identified bottlenecks and non-value-added activities, and
                                        redesigned the workflow to eliminate redundancies and
                                        streamline decision-making.
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
                                                    65% reduction in processing time
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-blue-500" />
                                                <span className="text-sm">
                                                    85% improvement in customer satisfaction
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-purple-500" />
                                                <span className="text-sm">
                                                    40% reduction in processing costs
                                                </span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-orange-500" />
                                                <span className="text-sm">
                                                    50% decrease in handoffs
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-red-500" />
                                                <span className="text-sm">
                                                    30% increase in approval rate
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-teal-500" />
                                                <span className="text-sm">
                                                    90% automation of routine tasks
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

            {/* Process Analysis Tools */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                            Process Analysis Tools
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">
                                        Value Stream Mapping
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Visual representation of material and information flow
                                        through processes
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Process Mapping</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Detailed flowcharts showing activities, decisions, and
                                        process flow
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">
                                        Swim Lane Diagrams
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Cross-functional process visualization showing
                                        responsibilities
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">SIPOC Analysis</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Suppliers, Inputs, Process, Outputs, Customers framework
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">
                                        Root Cause Analysis
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Systematic problem identification and solution development
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Time Studies</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Detailed timing analysis of process steps and cycle times
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                        <CardContent className="py-12 text-center">
                            <h2 className="mb-8 text-3xl font-bold">
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
