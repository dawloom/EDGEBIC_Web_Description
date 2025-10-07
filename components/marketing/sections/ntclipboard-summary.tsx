import * as React from 'react';
import { CheckIcon, StarIcon } from 'lucide-react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { Card, CardContent } from '@/components/ui/card';

export function NTClipboardSummary(): React.JSX.Element {
    return (
        <GridSection hideVerticalGridLines>
            {/* Summary Section */}
            <div className="container py-6">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 px-6 py-3 text-sm font-medium text-orange-800 dark:from-orange-900/30 dark:to-red-900/30 dark:text-orange-200">
                        <StarIcon className="size-4" />
                        The Production Scheduling Solution That Actually Works
                    </div>

                    <h1 className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                        Stop Fighting Your ERP System
                    </h1>

                    <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
                        If you're drowning in custom Excel reports, whiteboard chaos, or
                        late shipments despite having an ERP system, EDGEBIC is your
                        solution.
                    </p>
                </div>

                {/* Main Description */}
                <div className="mx-auto mb-4 max-w-4xl">
                    <div className="rounded-3xl border bg-gradient-to-br from-slate-50 to-slate-100 p-8 dark:from-slate-900 dark:to-slate-800 md:p-12">
                        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                            If you have tried to use your ERP for creating a viable Production
                            Schedule, and still end up with a tangle of custom Excel Reports,
                            messy whiteboard or worse yet, late shipments, we can help. If you
                            don't even have an ERP system, and are struggling with production
                            scheduling, we can help. Resource Manager-DB (RMDB) was
                            specifically architected to easily adapt to the way you work,
                            using your existing data. RMDB is easily configured, and/or
                            reconfigured, on the fly to address your most pressing issues,
                            whenever and however they surface!
                        </p>
                        <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                            This is a truly unique advantage of RMDB and working with US: We
                            can focus and resolve your most pressing issues quickly — letting
                            you reap immediate ROI. Then, delve deeper without having to spend
                            more! This approach is proven to succeed where so many others
                            don't.
                        </p>
                        <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                            RMDB contains deep functionality to address a multitude of
                            challenges for production planning and scheduling: alternate
                            workcenters, complex routings & processes, discrete and/or batch,
                            multiple constraints (labor, machines, materials, etc.), advanced
                            drag and drop graphical calendar screens, downtime management,
                            sub-assemblies, optimization, and much more.
                        </p>
                        <p className="mt-6 text-lg font-semibold text-orange-700 dark:text-orange-300">
                            To see first-hand how RMDB can help you with efficient and easy
                            Production Planning, Scheduling and Capacity Planning, schedule a
                            live demo, even using your data in its current form – RISK FREE!!
                        </p>
                    </div>
                </div>

                {/* Problem & Solution Grid */}
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8 grid gap-8 md:grid-cols-2">
                        {/* Problems */}
                        <div className="rounded-2xl border border-red-200 bg-red-50/50 p-8 dark:border-red-800 dark:bg-red-900/20">
                            <h3 className="mb-6 text-2xl font-bold text-red-800 dark:text-red-200">
                                Common Production Planning Struggles
                            </h3>
                            <div className="space-y-4">
                                {[
                                    'ERP systems that create tangled Excel report chaos',
                                    'Messy whiteboards that nobody can decipher',
                                    'Late shipments causing customer complaints',
                                    'No ERP system and struggling with basic scheduling',
                                    "Complex routings that your current system can't handle",
                                    'Multiple constraints (labor, machines, materials) ignored'
                                ].map((problem, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="mt-1 size-2 shrink-0 rounded-full bg-red-500" />
                                        <span className="text-red-700 dark:text-red-300">
                                            {problem}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Solutions */}
                        <div className="rounded-2xl border border-green-200 bg-green-50/50 p-8 dark:border-green-800 dark:bg-green-900/20">
                            <h3 className="mb-6 text-2xl font-bold text-green-800 dark:text-green-200">
                                EDGEBIC Resource Manager-DB (RMDB) Delivers
                            </h3>
                            <div className="space-y-4">
                                {[
                                    'Adapts to YOUR existing data and workflow instantly',
                                    'Configure and reconfigure on-the-fly as needs change',
                                    'Focus on your most pressing issues for immediate ROI',
                                    'Advanced drag-and-drop graphical calendar screens',
                                    'Handle alternate workcenters & complex routings',
                                    'Manage multiple constraints: labor, machines, materials'
                                ].map((solution, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-green-500">
                                            <CheckIcon className="size-3 text-white" />
                                        </div>
                                        <span className="text-green-700 dark:text-green-300">
                                            {solution}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-8 rounded-3xl border bg-gradient-to-br from-slate-50 to-slate-100 p-8 dark:from-slate-900 dark:to-slate-800 md:p-12">
                        <h3 className="mb-8 text-center text-3xl font-bold">
                            Deep Functionality for Every Production Challenge
                        </h3>
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                                    <div className="size-8 rounded bg-gradient-to-r from-orange-500 to-red-500" />
                                </div>
                                <h4 className="mb-2 font-semibold">Flexible Scheduling</h4>
                                <p className="text-sm text-muted-foreground">
                                    Discrete and batch processing, complex routings, alternate
                                    workcenters, and sub-assemblies
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                                    <div className="size-8 rounded bg-gradient-to-r from-orange-500 to-red-500" />
                                </div>
                                <h4 className="mb-2 font-semibold">Smart Optimization</h4>
                                <p className="text-sm text-muted-foreground">
                                    Advanced optimization algorithms, downtime management, and
                                    capacity planning
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                                    <div className="size-8 rounded bg-gradient-to-r from-orange-500 to-red-500" />
                                </div>
                                <h4 className="mb-2 font-semibold">Easy Integration</h4>
                                <p className="text-sm text-muted-foreground">
                                    Works with your existing data in its current form - no complex
                                    migration required
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Unique Value Proposition */}
                    <div className="text-center">
                        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white">
                            <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                                What Makes EDGEBIC Truly Unique
                            </h3>
                            <p className="mb-6 text-lg opacity-90">
                                We focus on resolving your most pressing issues quickly, letting
                                you reap immediate ROI. Then we delve deeper without requiring
                                additional investment.
                            </p>
                            <p className="text-lg font-medium">
                                This proven approach succeeds where so many others fail.
                            </p>
                        </div>
                    </div>

                    {/* 
          Risk-Free Demo CTA 
          <div className="text-center">
            <div className="mx-auto max-w-2xl rounded-2xl border-2 border-dashed border-orange-300 bg-orange-50/50 p-8 dark:border-orange-700 dark:bg-orange-900/20">
              <h3 className="mb-4 text-2xl font-bold text-orange-800 dark:text-orange-200">
                See EDGEBIC in Action - Risk Free!
              </h3>
              <p className="mb-6 text-orange-700 dark:text-orange-300">
                Schedule a live demo using your actual data in its current form.
                No preparation required, no risk involved.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-3 text-lg font-semibold text-white hover:from-orange-600 hover:to-red-600"
              >
                Schedule Your Risk-Free Demo
              </Button>
            </div>
          </div>
          */}

                {/* Awards Section */}
                <Card className="mt-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                    <CardContent className="p-8 text-center">
                        <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                            CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                        </h3>
                        <div className="flex justify-center">
                            <img
                                src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                                alt="Collection of industry and business awards logos"
                                className="h-auto max-w-full rounded-lg shadow-md"
                            />
                        </div>
                    </CardContent>
                </Card>
                </div>
            </div>
        </GridSection>
    );
}
