import * as React from 'react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OperationsManagerQueuingPage(): React.JSX.Element {
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
                            Operations Manager: Queuing
                        </h1>
                        <p className="mb-8 text-xl md:text-2xl">
                            Advanced queuing theory analysis for optimal service system design
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

            {/* Queuing Theory Overview */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle className="text-center text-3xl">
                                    Queuing Theory & Analysis
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Queuing theory is a mathematical study of waiting lines or
                                    queues. It provides powerful analytical tools to optimize
                                    service systems, reduce waiting times, and improve customer
                                    satisfaction. Our Operations Manager Queuing module helps you
                                    analyze and optimize any system where customers or jobs wait
                                    for service.
                                </p>

                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Whether you're managing call centers, manufacturing processes,
                                    hospital emergency rooms, or network traffic, queuing analysis
                                    provides insights into system performance, capacity planning,
                                    and resource allocation decisions.
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
                                    Case Study: Metropolitan Hospital Emergency Department
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        The Challenge
                                    </h3>
                                    <p className="mb-4 text-muted-foreground">
                                        Metropolitan Hospital was experiencing long patient wait
                                        times in their emergency department, leading to patient
                                        dissatisfaction and potential medical risks. They needed to
                                        understand their service capacity and optimize staff
                                        scheduling to reduce wait times while maintaining quality
                                        care.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="mb-3 text-xl font-semibold text-green-600">
                                        The Solution
                                    </h3>
                                    <p className="mb-4 text-muted-foreground">
                                        Using Operations Manager's Queuing analysis, the hospital
                                        modeled their emergency department as a multi-server queue
                                        system. They analyzed arrival patterns, service times, and
                                        resource utilization to identify bottlenecks and
                                        optimization opportunities.
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
                                                    45% reduction in average wait time
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-blue-500" />
                                                <span className="text-sm">
                                                    30% improvement in patient satisfaction
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-purple-500" />
                                                <span className="text-sm">
                                                    25% increase in staff utilization
                                                </span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-orange-500" />
                                                <span className="text-sm">
                                                    20% reduction in patient walkouts
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-red-500" />
                                                <span className="text-sm">
                                                    15% cost savings in overtime
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-teal-500" />
                                                <span className="text-sm">
                                                    Optimal staff scheduling achieved
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

            {/* Queue Models */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                            Supported Queue Models
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">M/M/1 Queue</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Single server with Poisson arrivals and exponential service
                                        times
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">M/M/c Queue</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Multiple servers with Poisson arrivals and exponential
                                        service times
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">M/G/1 Queue</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Single server with Poisson arrivals and general service time
                                        distribution
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">G/G/1 Queue</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        General arrival and service time distributions with single
                                        server
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Priority Queues</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Service systems with customer priority classifications
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Network Queues</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Connected queue systems with customer routing between
                                        stations
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
                            Key Performance Metrics
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-blue-600">
                                        Waiting Time Analysis
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Average waiting time in queue</li>
                                        <li>• Average time in system</li>
                                        <li>• Waiting time distribution</li>
                                        <li>• Service level percentiles</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-green-600">
                                        System Utilization
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Server utilization rates</li>
                                        <li>• System capacity analysis</li>
                                        <li>• Traffic intensity calculations</li>
                                        <li>• Bottleneck identification</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-purple-600">
                                        Queue Length
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Average number in queue</li>
                                        <li>• Average number in system</li>
                                        <li>• Queue length distribution</li>
                                        <li>• Maximum queue length</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-orange-600">
                                        Cost Analysis
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Service cost optimization</li>
                                        <li>• Waiting cost calculations</li>
                                        <li>• Total system cost analysis</li>
                                        <li>• ROI on capacity investments</li>
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
                    <div className="mx-auto max-w-4xl">
                        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                            Real-World Applications
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-blue-600">
                                        Healthcare Systems
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Emergency department optimization</li>
                                        <li>• Appointment scheduling</li>
                                        <li>• Operating room planning</li>
                                        <li>• Laboratory workflow</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-green-600">
                                        Manufacturing
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Production line balancing</li>
                                        <li>• Machine utilization</li>
                                        <li>• Work-in-process optimization</li>
                                        <li>• Quality control stations</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-purple-600">
                                        Service Industries
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Call center staffing</li>
                                        <li>• Bank teller optimization</li>
                                        <li>• Restaurant service planning</li>
                                        <li>• Help desk management</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-orange-600">
                                        Transportation
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Traffic flow analysis</li>
                                        <li>• Airport gate allocation</li>
                                        <li>• Public transit scheduling</li>
                                        <li>• Parking system design</li>
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
                    <Card className="mt-8 rounded-xl border bg-gradient-to-br from-blue-50 to-blue-100 text-card-foreground shadow dark:from-blue-900/20 dark:to-blue-800/20">
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
