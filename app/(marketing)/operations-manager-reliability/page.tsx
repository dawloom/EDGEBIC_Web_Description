import * as React from 'react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OperationsManagerReliabilityPage(): React.JSX.Element {
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
                            Operations Manager: Reliability
                        </h1>
                        <p className="mb-8 text-xl md:text-2xl">
                            Advanced reliability analysis and predictive maintenance
                            optimization
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

            {/* Reliability Overview */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle className="text-center text-3xl">
                                    Reliability Engineering & Analysis
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Reliability engineering is the discipline of ensuring systems
                                    perform their intended functions without failure for a
                                    specified period under defined conditions. Our Operations
                                    Manager Reliability module provides comprehensive tools for
                                    analyzing system reliability, predicting failures, and
                                    optimizing maintenance strategies.
                                </p>

                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    From MTBF calculations to complex system reliability modeling,
                                    our solution helps organizations minimize downtime, reduce
                                    maintenance costs, and maximize equipment availability through
                                    data-driven decision making.
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
                                    Case Study: Power Generation Facility
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        The Challenge
                                    </h3>
                                    <p className="mb-4 text-muted-foreground">
                                        MegaWatt Power faced frequent unplanned outages in their gas
                                        turbine power plant, resulting in significant revenue losses
                                        and customer dissatisfaction. Reactive maintenance was
                                        costly and ineffective, with critical components failing
                                        unexpectedly. They needed a comprehensive reliability
                                        program to predict failures and optimize maintenance
                                        schedules.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="mb-3 text-xl font-semibold text-green-600">
                                        The Solution
                                    </h3>
                                    <p className="mb-4 text-muted-foreground">
                                        Using Operations Manager's Reliability analysis tools, the
                                        maintenance team implemented a predictive maintenance
                                        program. They analyzed failure patterns, calculated
                                        reliability metrics, and developed optimal maintenance
                                        intervals based on reliability centered maintenance (RCM)
                                        principles.
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
                                                    75% reduction in unplanned outages
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-blue-500" />
                                                <span className="text-sm">
                                                    95% improvement in system availability
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-purple-500" />
                                                <span className="text-sm">
                                                    40% reduction in maintenance costs
                                                </span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-orange-500" />
                                                <span className="text-sm">60% increase in MTBF</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-red-500" />
                                                <span className="text-sm">
                                                    $2.5M annual cost savings
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-teal-500" />
                                                <span className="text-sm">
                                                    50% reduction in emergency repairs
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

            {/* Reliability Models */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                            Reliability Analysis Models
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">
                                        Weibull Analysis
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Statistical distribution modeling for failure time analysis
                                        and life data evaluation
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">FMEA/FMECA</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Failure Mode and Effects Analysis for systematic risk
                                        assessment
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">
                                        Fault Tree Analysis
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Top-down deductive analysis for system failure probability
                                        calculations
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">
                                        Reliability Block Diagrams
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Visual representation of system reliability configurations
                                        and dependencies
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Markov Analysis</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        State-based modeling for repairable systems with multiple
                                        failure modes
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">
                                        Monte Carlo Simulation
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Probabilistic simulation for complex system reliability
                                        assessment
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Metrics */}
            <section className="bg-muted/50 py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                            Reliability Metrics & KPIs
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-blue-600">
                                        Availability Metrics
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• System availability percentage</li>
                                        <li>• Uptime and downtime analysis</li>
                                        <li>• Operational availability (Ao)</li>
                                        <li>• Achieved availability (Aa)</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-green-600">
                                        Failure Metrics
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Mean Time Between Failures (MTBF)</li>
                                        <li>• Mean Time To Failure (MTTF)</li>
                                        <li>• Failure rate (λ) calculations</li>
                                        <li>• Probability of failure analysis</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-purple-600">
                                        Maintenance Metrics
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Mean Time To Repair (MTTR)</li>
                                        <li>• Mean Down Time (MDT)</li>
                                        <li>• Maintenance efficiency ratios</li>
                                        <li>• Preventive vs corrective maintenance</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-orange-600">
                                        Cost Metrics
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Life cycle cost analysis</li>
                                        <li>• Maintenance cost optimization</li>
                                        <li>• Failure cost assessment</li>
                                        <li>• Return on investment (ROI)</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Maintenance Strategies */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                            Maintenance Strategy Optimization
                        </h2>
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-blue-600">
                                        Preventive Maintenance
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Scheduled maintenance activities based on time, usage, or
                                        condition to prevent failures and maintain equipment
                                        reliability.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-green-600">
                                        Predictive Maintenance
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Condition-based maintenance using sensors and analytics to
                                        predict failures before they occur, optimizing maintenance
                                        timing.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-purple-600">
                                        Reliability Centered Maintenance
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Structured approach to determine optimal maintenance
                                        requirements based on criticality, failure modes, and
                                        consequences.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-orange-600">
                                        Total Productive Maintenance
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Holistic approach involving operators in routine maintenance
                                        activities to maximize equipment effectiveness.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="bg-muted/50 py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                            Industry Applications
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-blue-600">
                                        Power & Utilities
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Power plant reliability analysis</li>
                                        <li>• Transmission system optimization</li>
                                        <li>• Generator maintenance planning</li>
                                        <li>• Grid stability assessment</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-green-600">
                                        Oil & Gas
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Pipeline integrity management</li>
                                        <li>• Refinery equipment reliability</li>
                                        <li>• Offshore platform maintenance</li>
                                        <li>• Safety critical system analysis</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-purple-600">
                                        Manufacturing
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Production line reliability</li>
                                        <li>• Machine tool optimization</li>
                                        <li>• Quality system analysis</li>
                                        <li>• Supply chain reliability</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-orange-600">
                                        Aerospace & Defense
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Aircraft systems reliability</li>
                                        <li>• Mission critical analysis</li>
                                        <li>• Component life assessment</li>
                                        <li>• Maintenance interval optimization</li>
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
