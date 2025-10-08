import * as React from 'react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OperationsManagerAssemblyPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white dark:from-blue-800 dark:to-blue-900">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mb-6">
                            <Badge
                                variant="outline"
                                className="h-8 rounded-full px-3 text-sm font-medium text-white border-white/20 bg-white/10 shadow-sm"
                            >
                                OPERATIONS MANAGER
                            </Badge>
                        </div>
                        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                            Operations Manager: Assembly
                        </h1>
                        <p className="mb-8 text-xl md:text-2xl">
                            Advanced assembly line optimization and production balancing solutions
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Assembly Line Overview */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle className="text-3xl text-center">Assembly Line Optimization</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Assembly line balancing is a critical manufacturing optimization technique that distributes work tasks across workstations to maximize efficiency, minimize cycle time, and eliminate bottlenecks. Our Operations Manager Assembly module provides comprehensive tools for designing, analyzing, and optimizing assembly line configurations.
                                </p>
                                
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    From automotive manufacturing to electronics assembly, our solution helps manufacturers achieve optimal production flow, reduce work-in-process inventory, and maximize throughput while maintaining quality standards.
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
                                <CardTitle className="text-2xl text-center">Case Study: Precision Electronics Manufacturing</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-blue-600">The Challenge</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Precision Electronics faced significant production inefficiencies in their smartphone assembly line. Unbalanced workstations created bottlenecks, leading to excessive work-in-process inventory, missed delivery deadlines, and increased labor costs. The company needed to redesign their assembly line to meet growing demand while improving efficiency.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-green-600">The Solution</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Using Operations Manager's Assembly optimization tools, the engineering team analyzed task precedence relationships, cycle times, and resource constraints. They implemented line balancing algorithms to redistribute tasks across workstations and optimize production flow.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-purple-600">Results Achieved</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                                <span className="text-sm">35% increase in production throughput</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                                <span className="text-sm">40% reduction in work-in-process inventory</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                                <span className="text-sm">25% improvement in line efficiency</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                                                <span className="text-sm">50% reduction in bottleneck instances</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                                                <span className="text-sm">20% decrease in labor costs</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                                                <span className="text-sm">15% improvement in on-time delivery</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Balancing Methods */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
                            Line Balancing Methods
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Ranked Positional Weight</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Prioritizes tasks based on cumulative downstream work content for optimal sequencing
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Longest Task Time</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Assigns longest duration tasks first to minimize idle time and balance workloads
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Genetic Algorithm</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Advanced optimization using evolutionary algorithms for complex balancing problems
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">COMSOAL</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Computer Method of Sequencing Operations for Assembly Lines
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Branch and Bound</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Systematic optimization approach for finding optimal solutions
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Tabu Search</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Meta-heuristic method for exploring solution space efficiently
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Metrics */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
                            Performance Metrics & Analysis
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-blue-600">Efficiency Metrics</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Line efficiency percentage</li>
                                        <li>• Cycle time optimization</li>
                                        <li>• Throughput rate analysis</li>
                                        <li>• Takt time compliance</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-green-600">Balance Metrics</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Smoothness index calculation</li>
                                        <li>• Workstation idle time</li>
                                        <li>• Load balancing factors</li>
                                        <li>• Task assignment optimization</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-purple-600">Bottleneck Analysis</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Bottleneck identification</li>
                                        <li>• Capacity constraint analysis</li>
                                        <li>• Resource utilization rates</li>
                                        <li>• Queue length monitoring</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-orange-600">Cost Analysis</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Labor cost optimization</li>
                                        <li>• Work-in-process costs</li>
                                        <li>• Setup and changeover costs</li>
                                        <li>• Total production cost analysis</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-16">
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
                                        <li>• Vehicle assembly line optimization</li>
                                        <li>• Engine and transmission assembly</li>
                                        <li>• Paint shop line balancing</li>
                                        <li>• Final assembly optimization</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-green-600">Electronics & Technology</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• PCB assembly lines</li>
                                        <li>• Smartphone manufacturing</li>
                                        <li>• Computer assembly optimization</li>
                                        <li>• Consumer electronics production</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-purple-600">Appliance Manufacturing</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• White goods assembly</li>
                                        <li>• HVAC system production</li>
                                        <li>• Kitchen appliance lines</li>
                                        <li>• Small appliance manufacturing</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-orange-600">Aerospace & Defense</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Aircraft assembly optimization</li>
                                        <li>• Defense equipment production</li>
                                        <li>• Satellite manufacturing</li>
                                        <li>• Precision component assembly</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
                            Advanced Features
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-blue-600">Precedence Diagram Method</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Visual representation of task dependencies and precedence relationships for optimal sequencing and constraint management.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-green-600">Multi-Objective Optimization</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Simultaneous optimization of multiple objectives including efficiency, cost, quality, and ergonomic factors.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-purple-600">Stochastic Balancing</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Handles variability in task times and processing requirements for robust line design under uncertainty.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-orange-600">Mixed-Model Lines</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Optimization for assembly lines producing multiple product variants with different task requirements.
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
                            <h2 className="text-3xl font-bold mb-8">
                                CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                            </h2>
                            <div className="flex justify-center">
                                <Image
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                                    alt="Collection of industry and business awards logos"
                                    width={1024}
                                    height={128}
                                    className="max-w-full h-auto"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}