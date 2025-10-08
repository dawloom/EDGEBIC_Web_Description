import * as React from 'react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OperationsManagerLearningPage(): React.JSX.Element {
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
                            Operations Manager: Learning
                        </h1>
                        <p className="mb-8 text-xl md:text-2xl">
                            Learning curve analysis and workforce productivity optimization
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

            {/* Learning Curve Overview */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle className="text-center text-3xl">
                                    Learning Curve Analysis
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Learning curves represent the improvement in performance that
                                    occurs when workers repeat a task over time. Our Operations
                                    Manager Learning module provides comprehensive tools for
                                    analyzing learning effects, predicting productivity
                                    improvements, and optimizing workforce training and
                                    development programs.
                                </p>

                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    From manufacturing assembly to service operations,
                                    understanding learning curves enables better cost estimation,
                                    production planning, and human resource optimization for
                                    sustained competitive advantage.
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
                                    Case Study: Aerospace Component Manufacturing
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        The Challenge
                                    </h3>
                                    <p className="mb-4 text-muted-foreground">
                                        AeroTech Manufacturing was struggling with accurate cost
                                        estimation for new aircraft component contracts. Their
                                        traditional costing methods failed to account for learning
                                        effects, resulting in unprofitable bids and poor resource
                                        planning. They needed a systematic approach to predict and
                                        leverage learning curve improvements.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="mb-3 text-xl font-semibold text-green-600">
                                        The Solution
                                    </h3>
                                    <p className="mb-4 text-muted-foreground">
                                        Using Operations Manager's Learning analysis tools, the
                                        company analyzed historical production data to establish
                                        learning curve parameters. They implemented
                                        learning-adjusted cost models and optimized training
                                        programs to accelerate the learning process and improve
                                        competitiveness.
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
                                                    85% learning rate achievement
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-blue-500" />
                                                <span className="text-sm">
                                                    35% reduction in labor hours
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-purple-500" />
                                                <span className="text-sm">
                                                    25% improvement in bid accuracy
                                                </span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-orange-500" />
                                                <span className="text-sm">
                                                    40% faster training completion
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-red-500" />
                                                <span className="text-sm">
                                                    20% increase in profit margins
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 size-3 rounded-full bg-teal-500" />
                                                <span className="text-sm">
                                                    50% reduction in defect rates
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

            {/* Learning Models */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                            Learning Curve Models
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Wright Model</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Classical model showing time reduction with cumulative
                                        production volume
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Crawford Model</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Unit curve model focusing on average time per unit produced
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">S-Curve Model</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Sigmoid curve modeling slow start, rapid improvement, and
                                        plateau phases
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">
                                        Exponential Model
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Exponential decay function for continuous learning processes
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Plateau Model</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Models learning curves with ultimate performance limits
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center">Hybrid Models</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        Combined models accounting for multiple learning factors
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Applications */}
            <section className="bg-muted/50 py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                            Learning Curve Applications
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-blue-600">
                                        Cost Estimation
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Accurate project cost forecasting</li>
                                        <li>• Learning-adjusted pricing strategies</li>
                                        <li>• Contract bid optimization</li>
                                        <li>• Life cycle cost analysis</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-green-600">
                                        Production Planning
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Capacity requirement planning</li>
                                        <li>• Delivery schedule optimization</li>
                                        <li>• Resource allocation planning</li>
                                        <li>• Workforce level determination</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-purple-600">
                                        Training Optimization
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Training program design</li>
                                        <li>• Skill development tracking</li>
                                        <li>• Performance improvement planning</li>
                                        <li>• Learning acceleration strategies</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl text-orange-600">
                                        Strategic Planning
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li>• Competitive advantage analysis</li>
                                        <li>• Technology adoption planning</li>
                                        <li>• Market entry strategies</li>
                                        <li>• Investment decision support</li>
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
                    <Card className="rounded-xl border text-card-foreground shadow mt-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
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
