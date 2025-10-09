import React from 'react';
import Link from 'next/link';
import { AlertCircle, ArrowLeft, Download } from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ThankYouResourceManagerStudentPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section with Thank You Image */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl">
                        <img
                            src="https://www.usersolutions.com/wp-content/uploads/2022/10/thankyou.jpg"
                            alt="Customer service representative smiling with headset at computer"
                            className="mb-8 h-auto w-full rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Main Thank You Content */}
            <section className="pb-12 pt-6">
                <div className="container mx-auto px-4">
                    <Card className="mx-auto max-w-4xl">
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
                                        href="https://www.usersolutions.com/RMX011223D.xlsm"
                                        download
                                    >
                                        <Download className="mr-2 size-5" />
                                        Click here to download your product
                                    </a>
                                </Button>
                            </div>

                            <Alert>
                                <AlertCircle className="size-4" />
                                <AlertDescription className="text-lg">
                                    Thank you for downloading Resource Manager for Excel (Student
                                    version). This is exactly the same as production version with
                                    a 60 day trial.
                                </AlertDescription>
                            </Alert>

                            <div className="space-y-4 text-lg">
                                <div className="border-l-4 border-blue-600 bg-blue-50 p-4">
                                    <p className="mb-2 font-semibold">
                                        Important Setup Instructions:
                                    </p>
                                    <ol className="list-inside list-decimal space-y-2">
                                        <li>
                                            After downloading, right click on Properties for RMX…xlsx
                                            and <strong>UNBLOCK file</strong>
                                        </li>
                                        <li>
                                            Next, review follow up letter that tells how to enable
                                            macros
                                        </li>
                                    </ol>
                                </div>

                                <p>
                                    You are welcome to send sample data at anytime to take
                                    advantage of our unique demoing approach – proving the
                                    solution.
                                </p>

                                <p>
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

                                <p className="font-medium">Kindest Regards,</p>

                                <p>
                                    User Solutions, Inc.
                                    <br />
                                    <span className="text-gray-600">
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

            {/* Awards Banner */}
            <section className="bg-gray-50 pb-12 pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl text-center">
                        <h2 className="mb-6 text-3xl font-bold">
                            CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                        </h2>
                        <img
                            src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                            alt="Collection of industry and business awards logos"
                            className="h-auto w-full"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
