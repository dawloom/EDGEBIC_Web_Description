import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function StudentsFreeTrialPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                            Resource Manager For Excel
                        </h1>
                        <h2 className="mb-8 text-2xl font-semibold text-gray-700 md:text-3xl">
                            Free Trial Download for Students
                        </h2>
                        <p className="mb-8 text-xl text-gray-700">
                            Gain valuable hands-on experience in Manufacturing Planning,
                            Scheduling, and Execution
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle>About Resource Manager For Excel (RMX)</CardTitle>
                            </CardHeader>
                            <CardContent className="prose max-w-none">
                                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                                    Resource Manager for Excel (RMX) offers MRP and Shop
                                    Scheduling on a flexible and powerful platform. Ambitious
                                    Operations Management students can use RMX to gain valuable
                                    hands-on experience in mastering important skills in many
                                    areas of Manufacturing Planning, Scheduling, and Execution.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    With RMX supporting up to a million rows of data, and with
                                    Excel 360 fully cloud compatible, you can even tackle big data
                                    applications and share results on the web. A fully functional
                                    free trial is available for immediate download with access to
                                    user manual, quick start tutorial, and a full set of training
                                    videos.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="mb-8 border-blue-200 bg-blue-50">
                            <CardHeader>
                                <CardTitle>Installation Instructions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <span className="mr-3 text-2xl font-bold text-blue-600">
                                            1.
                                        </span>
                                        <div>
                                            <h3 className="mb-2 text-lg font-semibold">Download</h3>
                                            <p className="text-gray-700">
                                                Fill in the short form below to immediately download a
                                                free student copy of Resource Manager for Excel
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="mr-3 text-2xl font-bold text-blue-600">
                                            2.
                                        </span>
                                        <div>
                                            <h3 className="mb-2 text-lg font-semibold">
                                                Unzip and Install
                                            </h3>
                                            <p className="text-gray-700">
                                                Simply Unzip and run installer (SetupRMX.exe) to extract
                                                RMX2018EAM.xlsm to C:\Users\Public\US-RMX
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="mr-3 text-2xl font-bold text-blue-600">
                                            3.
                                        </span>
                                        <div>
                                            <h3 className="mb-2 text-lg font-semibold">Launch</h3>
                                            <p className="text-gray-700">
                                                A desktop shortcut icon is included. Click on desktop
                                                icon to open RMX or open file (RMX2018EAM.xlsm) directly
                                                from Excel
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="mr-3 text-2xl font-bold text-blue-600">
                                            4.
                                        </span>
                                        <div>
                                            <h3 className="mb-2 text-lg font-semibold">
                                                Enable Macros
                                            </h3>
                                            <p className="text-gray-700">
                                                If prompted, enable macros to run the application
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle>For Future Career Use</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4 text-gray-700">
                                    Keep US in mind when you are fully engaged at work and looking
                                    for tools to improve your production scheduling. Resource
                                    Manager-DB is a wonderful upgrade of RMX and is a strategic
                                    complement to other plant systems for APS and MES
                                    applications.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-4">
                                    <Link href="/resource-manager-db-2">
                                        <Button>Learn About Resource Manager DB</Button>
                                    </Link>
                                    <Link href="/contact-us">
                                        <Button variant="outline">Contact Us</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Download Form Card */}
                        <Card className="bg-gradient-to-br from-green-50 to-blue-50">
                            <CardHeader>
                                <CardTitle className="text-center text-2xl">
                                    Student Free Trial
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-6 text-center text-gray-700">
                                    Fill in the form to immediately download your free student
                                    copy
                                </p>
                                <div className="space-y-4 text-center">
                                    <p className="italic text-gray-600">
                                        Contact us to request your student free trial download
                                    </p>
                                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                        <Link href="mailto:us@usersolutions.com">
                                            <Button
                                                size="lg"
                                                className="text-lg"
                                            >
                                                Email Us for Free Trial
                                            </Button>
                                        </Link>
                                        <Link href="tel:248.486.6365">
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className="text-lg"
                                            >
                                                Call: 248.486.6365
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="bg-gray-50 pb-8 pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Additional Resources</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/students">
                                        <Button variant="outline">Summary</Button>
                                    </Link>
                                    <Link href="/wp-content/uploads/2022/10/RMXQuickStart.pdf">
                                        <Button variant="outline">Quick Start</Button>
                                    </Link>
                                    <Link href="/videos/#resource-manager-excel">
                                        <Button variant="outline">Videos</Button>
                                    </Link>
                                    <Link href="/students-free-trial">
                                        <Button>Free Trial</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="bg-gray-50 py-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <h2 className="mb-8 text-3xl font-bold">
                            Celebrating 25 Years of Award Winning Software!
                        </h2>
                        <div className="rounded-lg bg-white p-8 shadow-lg">
                            <p className="mb-4 text-gray-600">
                                Trusted by students and professionals worldwide for over 25
                                years
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-6 opacity-70">
                                <div className="text-sm font-semibold text-gray-500">
                                    Industry Awards
                                </div>
                                <div className="text-sm font-semibold text-gray-500">
                                    Excellence Recognition
                                </div>
                                <div className="text-sm font-semibold text-gray-500">
                                    Customer Choice
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
