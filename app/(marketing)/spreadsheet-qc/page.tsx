import Image from 'next/image';
import Link from 'next/link';

import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card';

export default function SpreadsheetQCPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 text-white dark:from-blue-800 dark:to-blue-900">
                <div className="container mx-auto px-4 text-center">
                    <div className="mx-auto max-w-5xl">
                        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                            Spreadsheet QC
                        </h1>
                        <p className="mb-8 text-xl md:text-2xl">
                            Quality Control and Statistical Process Control with Excel
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
                                    Consists of a set of fifteen (15) Excel templates for the
                                    quality control professional to analyze and chart data and
                                    estimate yield rates. No training required, just input data in
                                    indicated cells and the spreadsheet takes care of the rest.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-5xl">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center text-3xl">
                                    Applications
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="prose dark:prose-invert max-w-none">
                                <ul>
                                    <li>
                                        <strong>Control Charts:</strong> Seven different
                                        spreadsheets to do both R and X-Bar charts as well as
                                        process capability histogram for each sample. R and X-Bar
                                        Charts are made with 3 different intervals for estimating
                                        the variation. All control chart templates are very well
                                        suited to copy to do multiple charts within the same file.
                                    </li>
                                    <li>
                                        <strong>P-Charts:</strong> Spreadsheet to do p-charts for
                                        variable sample size or fixed sample size with 3 sigma
                                        lines.
                                    </li>
                                    <li>
                                        <strong>Acceptance Sampling:</strong> This spreadsheet
                                        allows the user to specify sample size and max allowed
                                        defects for any or all of several sampling categories:
                                        vendor incoming, first piece inspection, in-process audit,
                                        finished goods. Prompts determine pass/fail and whether to
                                        increase sample to confirm lot acceptance or rejection.
                                        Probability curves are included.
                                    </li>
                                    <li>
                                        <strong>Process Capability:</strong> Graphical Analysis.
                                        Enter histogram data and spec limits and the sheet graphs it
                                        overlaid with the calculated normal curve, the spec limits,
                                        and an analysis of percent out of spec and Cpk.
                                    </li>
                                    <li>
                                        <strong>Cumulative Sum Chart:</strong> This chart, along
                                        with the moving average and exponentially weighted moving
                                        average, are alternatives to the X-Bar chart. The CUSUM is
                                        more responsive to process shifts.
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
                                        15 Excel Templates
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Complete QC toolkit for various quality scenarios
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Control Charts
                                    </h3>
                                    <p className="text-muted-foreground">
                                        R-charts, X-Bar charts, and process capability histograms
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        P-Charts
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Track proportion defective with variable or fixed sample
                                        size
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Acceptance Sampling
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Make lot acceptance decisions with probability curves
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Process Capability Analysis
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Calculate Cpk and visualize spec limits
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        CUSUM Charts
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Detect process shifts faster than traditional charts
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Quick Analysis
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Just input data - spreadsheet does the rest
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Minimal Skills Required
                                    </h3>
                                    <p className="text-muted-foreground">
                                        No training needed - intuitive interface
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Easily Customized
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Adapt templates to your specific requirements
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Source Code Included
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Full access to modify and extend functionality
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
