import * as React from 'react';

import { GridSection } from '@/components/marketing/fragments/grid-section';

export function NTClipboardToolBox(): React.JSX.Element {
    return (
        <GridSection hideVerticalGridLines>
            <div className="container py-16">
                <div className="mx-auto max-w-6xl">
                    {/* Section Header */}
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                            What's in Your Scheduling Tool Box?
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Transform your production scheduling challenges into competitive
                            advantages
                        </p>
                    </div>

                    {/* Tool Box Comparison Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {/* WhiteBox Mess vs Efficient Visual Schedule */}
                        <div className="group relative overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:bg-slate-900">
                            {/* Before/After Badge */}
                            <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-red-500 to-green-500 px-3 py-1 text-xs font-bold text-white">
                                TRANSFORM
                            </div>

                            <div className="p-6">
                                {/* Problem Section */}
                                <div className="mb-6">
                                    <div className="mb-3 flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-red-500" />
                                        <h4 className="text-sm font-bold uppercase tracking-wide text-red-600">
                                            BEFORE
                                        </h4>
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold text-red-700 dark:text-red-300">
                                        WhiteBox Mess
                                    </h3>
                                    <p className="text-xs text-red-600 dark:text-red-400">
                                        Chaotic whiteboard scheduling
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="mb-6 flex items-center">
                                    <div className="h-px flex-1 bg-gradient-to-r from-red-200 via-gray-300 to-green-200" />
                                    <div className="mx-3 text-lg font-bold text-gray-400">↓</div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-red-200 via-gray-300 to-green-200" />
                                </div>

                                {/* Solution Section */}
                                <div>
                                    <div className="mb-3 flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-green-500" />
                                        <h4 className="text-sm font-bold uppercase tracking-wide text-green-600">
                                            AFTER
                                        </h4>
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold text-green-700 dark:text-green-300">
                                        Visual Schedule
                                    </h3>
                                    <p className="text-xs text-green-600 dark:text-green-400">
                                        EDGE drag & drop environment
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Excel Pain vs Excel Relief */}
                        <div className="group relative overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:bg-slate-900">
                            {/* Before/After Badge */}
                            <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-red-500 to-green-500 px-3 py-1 text-xs font-bold text-white">
                                TRANSFORM
                            </div>

                            <div className="p-6">
                                {/* Problem Section */}
                                <div className="mb-6">
                                    <div className="mb-3 flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-red-500" />
                                        <h4 className="text-sm font-bold uppercase tracking-wide text-red-600">
                                            BEFORE
                                        </h4>
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold text-red-700 dark:text-red-300">
                                        Excel Pain
                                    </h3>
                                    <p className="text-xs text-red-600 dark:text-red-400">
                                        Complex formulas that break
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="mb-6 flex items-center">
                                    <div className="h-px flex-1 bg-gradient-to-r from-red-200 via-gray-300 to-green-200" />
                                    <div className="mx-3 text-lg font-bold text-gray-400">↓</div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-red-200 via-gray-300 to-green-200" />
                                </div>

                                {/* Solution Section */}
                                <div>
                                    <div className="mb-3 flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-green-500" />
                                        <h4 className="text-sm font-bold uppercase tracking-wide text-green-600">
                                            AFTER
                                        </h4>
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold text-green-700 dark:text-green-300">
                                        Excel Relief
                                    </h3>
                                    <p className="text-xs text-green-600 dark:text-green-400">
                                        Keep benefits, we handle math
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ERP Constraints vs Enhanced ERP */}
                        <div className="group relative overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:bg-slate-900">
                            {/* Before/After Badge */}
                            <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-red-500 to-green-500 px-3 py-1 text-xs font-bold text-white">
                                TRANSFORM
                            </div>

                            <div className="p-6">
                                {/* Problem Section */}
                                <div className="mb-6">
                                    <div className="mb-3 flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-red-500" />
                                        <h4 className="text-sm font-bold uppercase tracking-wide text-red-600">
                                            BEFORE
                                        </h4>
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold text-red-700 dark:text-red-300">
                                        ERP Constraints
                                    </h3>
                                    <p className="text-xs text-red-600 dark:text-red-400">
                                        Rigid systems, no flexibility
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="mb-6 flex items-center">
                                    <div className="h-px flex-1 bg-gradient-to-r from-red-200 via-gray-300 to-green-200" />
                                    <div className="mx-3 text-lg font-bold text-gray-400">↓</div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-red-200 via-gray-300 to-green-200" />
                                </div>

                                {/* Solution Section */}
                                <div>
                                    <div className="mb-3 flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-green-500" />
                                        <h4 className="text-sm font-bold uppercase tracking-wide text-green-600">
                                            AFTER
                                        </h4>
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold text-green-700 dark:text-green-300">
                                        Enhanced ERP
                                    </h3>
                                    <p className="text-xs text-green-600 dark:text-green-400">
                                        Seamless ERP integration
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Custom Chaos vs Fits like a Glove */}
                        <div className="group relative overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:bg-slate-900">
                            {/* Before/After Badge */}
                            <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-red-500 to-green-500 px-3 py-1 text-xs font-bold text-white">
                                TRANSFORM
                            </div>

                            <div className="p-6">
                                {/* Problem Section */}
                                <div className="mb-6">
                                    <div className="mb-3 flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-red-500" />
                                        <h4 className="text-sm font-bold uppercase tracking-wide text-red-600">
                                            BEFORE
                                        </h4>
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold text-red-700 dark:text-red-300">
                                        Custom Chaos
                                    </h3>
                                    <p className="text-xs text-red-600 dark:text-red-400">
                                        One-size-fits-all solutions
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="mb-6 flex items-center">
                                    <div className="h-px flex-1 bg-gradient-to-r from-red-200 via-gray-300 to-green-200" />
                                    <div className="mx-3 text-lg font-bold text-gray-400">↓</div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-red-200 via-gray-300 to-green-200" />
                                </div>

                                {/* Solution Section */}
                                <div>
                                    <div className="mb-3 flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-green-500" />
                                        <h4 className="text-sm font-bold uppercase tracking-wide text-green-600">
                                            AFTER
                                        </h4>
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold text-green-700 dark:text-green-300">
                                        Fits like a Glove
                                    </h3>
                                    <p className="text-xs text-green-600 dark:text-green-400">
                                        Intuitive, quick adoption
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA Section */}
                    <div className="mt-16 text-center">
                        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white">
                            <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                                From Job Shops to SMBs to Multi-Nationals
                            </h3>
                            <p className="mb-6 text-lg opacity-90">
                                Solutions to fit any production scheduling application and
                                budget
                            </p>
                            <p className="text-lg font-medium">
                                Stop fighting your current tools - let EDGEBIC transform your
                                scheduling toolbox
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </GridSection>
    );
}
