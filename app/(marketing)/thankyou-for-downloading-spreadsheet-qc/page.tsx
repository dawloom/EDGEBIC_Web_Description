import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ThankYouSpreadsheetQCPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-6 text-white">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <Badge
                            variant="outline"
                            className="mb-6 h-8 rounded-full border-white/30 bg-white/10 px-3 text-sm font-medium text-white shadow-sm"
                        >
                            THANK YOU
                        </Badge>
                        <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                            Thank You for Your Interest
                        </h1>
                        <p className="text-xl text-white/90">
                            Your download for Spreadsheet QC is ready
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Thank You Content */}
            <section className="py-6">
                <div className="container mx-auto px-4">
                    <Card className="mx-auto max-w-7xl">
                        <CardHeader>
                            <CardTitle className="text-center text-3xl font-bold">
                                Thank you for your interest
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="text-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="mb-6"
                                >
                                    <a
                                        href="https://www.usersolutions.com/US_SQC-2023P.xls"
                                        download
                                    >
                                        <Download className="mr-2 size-5" />
                                        Click here to download your product
                                    </a>
                                </Button>
                            </div>

                            <div className="space-y-4 text-lg">
                                <p className="leading-relaxed text-muted-foreground">
                                    We will contact you to discuss your scheduling application in
                                    complete detail.
                                </p>

                                <p className="leading-relaxed text-muted-foreground">
                                    You are welcome to send sample data at anytime to take
                                    advantage of our unique demoing approach – proving the
                                    solution.
                                </p>

                                <p className="leading-relaxed text-muted-foreground">
                                    Send data or post questions anytime to{' '}
                                    <a
                                        href="mailto:US@usersolutions.com"
                                        className="font-medium text-blue-600 hover:underline"
                                    >
                                        US@usersolutions.com
                                    </a>{' '}
                                    or at{' '}
                                    <a
                                        href="tel:248.486.1934"
                                        className="font-medium text-blue-600 hover:underline"
                                    >
                                        248.486.1934
                                    </a>
                                </p>

                                <p className="font-medium text-muted-foreground">
                                    Kindest Regards,
                                </p>

                                <p className="text-muted-foreground">
                                    User Solutions, Inc.
                                    <br />
                                    <span className="text-sm text-muted-foreground">
                                        Since 1991 – Manufacturing Software made easy!
                                    </span>
                                </p>
                            </div>

                            <div className="pt-4 text-center">
                                <Button
                                    asChild
                                    variant="outline"
                                >
                                    <Link href="/">
                                        <ArrowLeft className="mr-2 size-4" />
                                        Back to Home
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Awards Section */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                            <CardContent className="p-8 text-center">
                                <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                                    CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                                </h3>
                                <img
                                    src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                                    alt="Collection of industry and business awards logos"
                                    className="mx-auto h-auto max-w-full"
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
