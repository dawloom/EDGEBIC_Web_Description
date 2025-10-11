import Image from 'next/image';
import Link from 'next/link';

import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card';

export default function WorkcellPlannerPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 text-white dark:from-blue-800 dark:to-blue-900">
                <div className="container mx-auto px-4 text-center">
                    <div className="mx-auto max-w-5xl">
                        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                            Workcell Planner
                        </h1>
                        <p className="mb-8 text-xl md:text-2xl">
                            Capacity Planning and Resource Optimization
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Link href="/product-downloads">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-blue-600"
                                >
                                    Free Sample
                                </Button>
                            </Link>
                            <Link href="/pricing">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-gray-100"
                                >
                                    Buy Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-5xl">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center text-3xl">Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="prose dark:prose-invert max-w-none">
                                <p>
                                    The objective of the model is to provide the master scheduler
                                    or planning function with a tool for determining the overall
                                    level of capacity and distribution of capacity required to
                                    meet demand. This demand can be driven by a forecasted
                                    incoming rate or consuming a backlog within a specified time
                                    frame for a particular cell – as well as for overall plant
                                    level.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Functionality Section */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-5xl">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center text-3xl">
                                    More specifically, the model:
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="prose dark:prose-invert max-w-none">
                                <ul>
                                    <li>
                                        Translates a forecast or backlog into machine and manpower
                                        requirements for each resource in a cell and compares this
                                        with the capacity given the current man machine
                                        configuration.
                                    </li>
                                    <li>
                                        Allows easy what if analysis of the interaction of setup
                                        time, lot size, efficiency, operation yield, and work
                                        practices such as working bottlenecks through breaks.
                                    </li>
                                    <li>
                                        Allows analysis of flow with multiple setups per part vs.
                                        batch and the payoff on throughput of set up reduction
                                        results.
                                    </li>
                                    <li>
                                        Clearly shows the bottleneck resource that limits cell
                                        output dynamically as factors are changed.
                                    </li>
                                    <li>
                                        Shows what can be expected from the existing man-machine
                                        configuration and can be used to set expected cell output
                                        rates, shift schedules and manning levels and easy
                                        configuration.
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-muted/50 pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                            Features
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Capacity Balancing
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Optimize resource allocation across your workcell
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Runs with Excel
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Familiar spreadsheet environment for easy adoption
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Production Planning
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Plan capacity requirements based on demand
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Integrates with any system
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Works seamlessly with your existing tools
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Resource Optimization
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Identify and resolve bottlenecks dynamically
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        What-Ifs
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Analyze scenarios with setup time, lot size, and efficiency
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Built-in Graphing
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Visualize capacity and requirements instantly
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Source code included
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Customize and extend for your specific needs
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-5xl">
                        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                            <CardContent className="p-8 text-center">
                                <h2 className="mb-6 text-3xl font-bold text-foreground">
                                    CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                                </h2>
                                <div className="mx-auto max-w-3xl">
                                    <img
                                        src="/awards-banner.jpg"
                                        alt="Collection of industry and business awards"
                                        className="h-auto w-full rounded-lg"
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
