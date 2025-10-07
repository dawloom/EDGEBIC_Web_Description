import * as React from 'react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OperationsManagerMRP1Page(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white dark:from-blue-800 dark:to-blue-900">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                            Operations Manager: MRP1
                        </h1>
                        <p className="mb-8 text-xl md:text-2xl">
                            Material Requirements Planning - Optimize production scheduling
                            and inventory management
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

            {/* Case Study */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="mb-8 text-center text-3xl font-bold">
                            Case Study: Phoenix Manufacturing Solutions
                        </h2>
                        <div className="rounded-lg bg-white p-8 shadow-sm">
                            <h3 className="mb-4 text-2xl font-semibold text-blue-600">
                                The Challenge
                            </h3>
                            <p className="mb-6 leading-relaxed text-gray-700">
                                Phoenix Manufacturing Solutions, a mid-sized electronics
                                manufacturer, was struggling with production planning
                                inefficiencies. They faced frequent stockouts of critical
                                components, excess inventory of slow-moving parts, and missed
                                delivery deadlines. Their manual planning process couldn't
                                handle the complexity of their 500+ part numbers and multiple
                                production lines.
                            </p>

                            <h3 className="mb-4 text-2xl font-semibold text-green-600">
                                The Solution: MRP1 Implementation
                            </h3>
                            <p className="mb-6 leading-relaxed text-gray-700">
                                Phoenix implemented Operations Manager's MRP1 system to automate
                                their material requirements planning. The system integrated
                                their master production schedule with bill of materials data to
                                generate precise procurement and production schedules.
                            </p>

                            <h3 className="mb-4 text-2xl font-semibold text-purple-600">
                                Results Achieved
                            </h3>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <div className="mr-3 size-3 rounded-full bg-green-500" />
                                        <span>35% reduction in inventory carrying costs</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="mr-3 size-3 rounded-full bg-blue-500" />
                                        <span>92% improvement in on-time delivery</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="mr-3 size-3 rounded-full bg-purple-500" />
                                        <span>60% reduction in stockouts</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <div className="mr-3 size-3 rounded-full bg-orange-500" />
                                        <span>40% faster planning cycle time</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="mr-3 size-3 rounded-full bg-red-500" />
                                        <span>25% improvement in resource utilization</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="mr-3 size-3 rounded-full bg-teal-500" />
                                        <span>15% increase in overall productivity</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MRP1 Core Features */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        <h2 className="mb-12 text-center text-3xl font-bold">
                            MRP1 Core Capabilities
                        </h2>
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="rounded-lg border p-6 text-center">
                                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-blue-100">
                                    <span className="text-2xl font-bold text-blue-600">📋</span>
                                </div>
                                <h3 className="mb-3 text-xl font-semibold">
                                    Master Production Schedule
                                </h3>
                                <p className="text-gray-600">
                                    Create and manage comprehensive production schedules based on
                                    demand forecasts and capacity constraints
                                </p>
                            </div>
                            <div className="rounded-lg border p-6 text-center">
                                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-green-100">
                                    <span className="text-2xl font-bold text-green-600">🔧</span>
                                </div>
                                <h3 className="mb-3 text-xl font-semibold">
                                    Bill of Materials Processing
                                </h3>
                                <p className="text-gray-600">
                                    Automatically explode BOM structures to determine exact
                                    material requirements at all levels
                                </p>
                            </div>
                            <div className="rounded-lg border p-6 text-center">
                                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-purple-100">
                                    <span className="text-2xl font-bold text-purple-600">📦</span>
                                </div>
                                <h3 className="mb-3 text-xl font-semibold">
                                    Inventory Management
                                </h3>
                                <p className="text-gray-600">
                                    Track on-hand inventory, allocated stock, and planned receipts
                                    for accurate availability calculations
                                </p>
                            </div>
                            <div className="rounded-lg border p-6 text-center">
                                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-orange-100">
                                    <span className="text-2xl font-bold text-orange-600">⏰</span>
                                </div>
                                <h3 className="mb-3 text-xl font-semibold">
                                    Time-Phased Planning
                                </h3>
                                <p className="text-gray-600">
                                    Generate detailed time-phased requirements considering lead
                                    times and safety stock levels
                                </p>
                            </div>
                            <div className="rounded-lg border p-6 text-center">
                                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-red-100">
                                    <span className="text-2xl font-bold text-red-600">🚨</span>
                                </div>
                                <h3 className="mb-3 text-xl font-semibold">
                                    Exception Reporting
                                </h3>
                                <p className="text-gray-600">
                                    Identify and report planning exceptions, shortages, and
                                    schedule conflicts for quick resolution
                                </p>
                            </div>
                            <div className="rounded-lg border p-6 text-center">
                                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-teal-100">
                                    <span className="text-2xl font-bold text-teal-600">📊</span>
                                </div>
                                <h3 className="mb-3 text-xl font-semibold">
                                    Capacity Planning
                                </h3>
                                <p className="text-gray-600">
                                    Validate production schedules against available capacity and
                                    identify resource bottlenecks
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MRP Process Flow */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="mb-12 text-center text-3xl font-bold">
                            MRP1 Process Flow
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-center rounded-lg bg-white p-6 shadow-sm">
                                <div className="mr-6 flex size-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                                    1
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold">
                                        Master Production Schedule Input
                                    </h3>
                                    <p className="text-gray-600">
                                        Load planned production quantities and dates for finished
                                        goods
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center rounded-lg bg-white p-6 shadow-sm">
                                <div className="mr-6 flex size-12 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                                    2
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold">BOM Explosion</h3>
                                    <p className="text-gray-600">
                                        Calculate gross requirements for all component parts and
                                        materials
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center rounded-lg bg-white p-6 shadow-sm">
                                <div className="mr-6 flex size-12 items-center justify-center rounded-full bg-purple-600 font-bold text-white">
                                    3
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold">
                                        Inventory Netting
                                    </h3>
                                    <p className="text-gray-600">
                                        Subtract available inventory to determine net requirements
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center rounded-lg bg-white p-6 shadow-sm">
                                <div className="mr-6 flex size-12 items-center justify-center rounded-full bg-orange-600 font-bold text-white">
                                    4
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold">Time Phasing</h3>
                                    <p className="text-gray-600">
                                        Schedule requirements based on lead times and production
                                        calendars
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center rounded-lg bg-white p-6 shadow-sm">
                                <div className="mr-6 flex size-12 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                                    5
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold">
                                        Action Messages
                                    </h3>
                                    <p className="text-gray-600">
                                        Generate purchase orders, work orders, and exception reports
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="mb-12 text-3xl font-bold">Key Benefits of MRP1</h2>
                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="rounded-lg bg-gray-50 p-6">
                                <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                    Reduced Inventory Costs
                                </h3>
                                <p className="text-gray-700">
                                    Minimize carrying costs by ordering materials only when needed
                                    based on actual production schedules
                                </p>
                            </div>
                            <div className="rounded-lg bg-gray-50 p-6">
                                <h3 className="mb-3 text-xl font-semibold text-green-600">
                                    Improved Customer Service
                                </h3>
                                <p className="text-gray-700">
                                    Increase on-time delivery rates and reduce stockouts through
                                    better planning visibility
                                </p>
                            </div>
                            <div className="rounded-lg bg-gray-50 p-6">
                                <h3 className="mb-3 text-xl font-semibold text-purple-600">
                                    Enhanced Productivity
                                </h3>
                                <p className="text-gray-700">
                                    Optimize resource utilization and reduce planning time through
                                    automated calculations
                                </p>
                            </div>
                            <div className="rounded-lg bg-gray-50 p-6">
                                <h3 className="mb-3 text-xl font-semibold text-orange-600">
                                    Better Decision Making
                                </h3>
                                <p className="text-gray-700">
                                    Make informed decisions with real-time visibility into
                                    material requirements and capacity
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="bg-muted/50 py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="mb-8 text-3xl font-bold text-foreground">
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
                    </div>
                </div>
            </section>
        </div>
    );
}
