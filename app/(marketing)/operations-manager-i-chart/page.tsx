import * as React from 'react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function IChartPage(): React.JSX.Element {
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
                            Operations Manager: Simulation
                        </h1>
                        <p className="mb-8 text-xl md:text-2xl">
                            Discrete event simulation for complex system analysis and optimization
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simulation Overview */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle className="text-3xl text-center">Discrete Event Simulation</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Discrete event simulation models complex systems by representing the system as a sequence of events in time. Our Operations Manager Simulation module provides powerful tools for modeling, analyzing, and optimizing dynamic systems where analytical solutions are difficult or impossible to obtain.
                                </p>

                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    From manufacturing processes to service operations, simulation enables risk-free experimentation, "what-if" analysis, and optimization of system performance before implementation.
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
                                <CardTitle className="text-2xl text-center">Case Study: Container Port Terminal</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-blue-600">The Challenge</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Pacific Port Authority needed to evaluate the impact of increasing container ship sizes and traffic volume on their terminal operations. Traditional analysis methods couldn't capture the complex interactions between ship arrivals, crane operations, truck movements, and storage yard management.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-green-600">The Solution</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Using Operations Manager's Simulation capabilities, the port authority built a comprehensive discrete event model of their terminal operations. They simulated various scenarios including different crane configurations, yard layouts, and traffic patterns to optimize resource allocation and capacity planning.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-purple-600">Results Achieved</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                                <span className="text-sm">30% increase in container throughput</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                                <span className="text-sm">45% reduction in ship waiting time</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                                <span className="text-sm">25% improvement in crane utilization</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                                                <span className="text-sm">$5M investment savings</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                                                <span className="text-sm">35% reduction in truck congestion</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                                                <span className="text-sm">Optimal expansion plan developed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Simulation Types */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
                            Simulation Modeling Approaches
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Process Simulation</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Models entities flowing through processes with activities and delays
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Agent-Based Modeling</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Individual agents with autonomous behavior and interactions
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">System Dynamics</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        High-level feedback loops and stock-flow relationships
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Monte Carlo</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Statistical sampling methods for uncertainty analysis
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Hybrid Simulation</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Combined modeling approaches for complex systems
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Real-Time Simulation</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Live system integration for operational decision support
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
                            Simulation Benefits & Analysis
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-blue-600">Risk-Free Experimentation</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Test scenarios without disruption</li>
                                        <li>• Evaluate design alternatives</li>
                                        <li>• Assess policy changes</li>
                                        <li>• Optimize resource allocation</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-green-600">Performance Analysis</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Throughput optimization</li>
                                        <li>• Bottleneck identification</li>
                                        <li>• Utilization analysis</li>
                                        <li>• Service level assessment</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-purple-600">What-If Analysis</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Scenario comparison</li>
                                        <li>• Sensitivity analysis</li>
                                        <li>• Uncertainty quantification</li>
                                        <li>• Decision support</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-orange-600">Validation & Verification</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Model validation techniques</li>
                                        <li>• Statistical output analysis</li>
                                        <li>• Confidence interval estimation</li>
                                        <li>• Experimental design</li>
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
                                    <CardTitle className="text-xl text-blue-600">Manufacturing Systems</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Production line optimization</li>
                                        <li>• Material handling systems</li>
                                        <li>• Quality control processes</li>
                                        <li>• Maintenance scheduling</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-green-600">Healthcare Operations</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Emergency department flow</li>
                                        <li>• Operating room scheduling</li>
                                        <li>• Patient flow optimization</li>
                                        <li>• Resource capacity planning</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-purple-600">Supply Chain & Logistics</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Distribution network design</li>
                                        <li>• Warehouse operations</li>
                                        <li>• Transportation optimization</li>
                                        <li>• Inventory management</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-orange-600">Service Operations</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Call center optimization</li>
                                        <li>• Banking service delivery</li>
                                        <li>• Restaurant operations</li>
                                        <li>• Public service systems</li>
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