import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ProductionSchedulingProductsOldPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-yellow-100 border-yellow-400 border-2 rounded-lg p-4 mb-6">
                            <p className="text-yellow-800 font-semibold">
                                📢 This is an archived version. View our <Link href="/excel-applications" className="underline text-yellow-900">latest products page</Link>
                            </p>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                            Production Planning and Scheduling Solutions
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">
                            From simple Excel based job shop scheduling to advanced planning and scheduling software (APS)
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact-us">
                                <Button size="lg" className="text-lg">
                                    Schedule a Live Demo Today!
                                </Button>
                            </Link>
                            <Link href="/product-downloads">
                                <Button size="lg" variant="outline" className="text-lg">
                                    Free Trials & Samples
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="pt-6 pb-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Card>
                            <CardContent className="pt-6">
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    Contact US to discuss which product is the best fit for your application and budget. From a simple
                                    Excel based job shop scheduling application to advanced planning and scheduling software (APS) that
                                    works either standalone or integrates with your ERP, we look forward to resolving your manufacturing
                                    scheduling challenges.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Choose the product that best suits your company's needs by using our product matrix.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="pt-6 pb-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Product Solutions</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Job Scheduler Lite */}
                            <Card>
                                <CardHeader className="bg-blue-50">
                                    <CardTitle>Job Scheduler Lite (JSL)</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <p className="text-gray-700 mb-4">
                                        Comprehensive job scheduling solution for manufacturing operations
                                    </p>
                                    <Link href="/jsl-job-scheduler-lite">
                                        <Button className="w-full">Learn More</Button>
                                    </Link>
                                </CardContent>
                            </Card>

                            {/* Resource Manager DB */}
                            <Card>
                                <CardHeader className="bg-purple-50">
                                    <CardTitle>Resource Manager DB</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <p className="text-gray-700 mb-4">
                                        Database-driven APS for complex scheduling with ERP integration
                                    </p>
                                    <Link href="/resource-manager-db-2">
                                        <Button className="w-full">Learn More</Button>
                                    </Link>
                                </CardContent>
                            </Card>

                            {/* EDGEBI */}
                            <Card>
                                <CardHeader className="bg-green-50">
                                    <CardTitle>EDGEBI</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <p className="text-gray-700 mb-4">
                                        Business intelligence and analytics for manufacturing
                                    </p>
                                    <Link href="/edgebi">
                                        <Button className="w-full">Learn More</Button>
                                    </Link>
                                </CardContent>
                            </Card>

                            {/* Workcenter Scheduler XL */}
                            <Card>
                                <CardHeader className="bg-indigo-50">
                                    <CardTitle>Workcenter Scheduler XL</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <p className="text-gray-700 mb-4">
                                        Excel-based scheduling for workcenter operations
                                    </p>
                                    <Link href="/workcenter-schedulerxl">
                                        <Button className="w-full">Learn More</Button>
                                    </Link>
                                </CardContent>
                            </Card>

                            {/* Resource Manager for Excel */}
                            <Card>
                                <CardHeader className="bg-teal-50">
                                    <CardTitle>Resource Manager for Excel</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <p className="text-gray-700 mb-4">
                                        MRP and shop scheduling on flexible Excel platform
                                    </p>
                                    <Link href="/resource-manager-for-excel-2">
                                        <Button className="w-full">Learn More</Button>
                                    </Link>
                                </CardContent>
                            </Card>

                            {/* Operations Manager */}
                            <Card>
                                <CardHeader className="bg-orange-50">
                                    <CardTitle>Operations Manager</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <p className="text-gray-700 mb-4">
                                        Comprehensive tools for operations management
                                    </p>
                                    <Link href="/operations-manager">
                                        <Button className="w-full">Learn More</Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="mt-8 text-center">
                            <Card className="bg-blue-50 border-blue-200">
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-semibold mb-4">Other Excel Template Solutions</h3>
                                    <p className="text-gray-700 mb-4">
                                        Product license cost estimates available. Customized training, implementation and other support
                                        services available upon request.
                                    </p>
                                    <Link href="/excel-applications">
                                        <Button size="lg">View All Excel Applications</Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-gray-50 pt-6 pb-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card>
                                <CardContent className="pt-6">
                                    <p className="text-lg font-semibold text-gray-800 mb-4">
                                        "Best choice for MRP and project management software"
                                    </p>
                                    <p className="text-gray-600">– Sleepmaster Ltd</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6">
                                    <p className="text-lg font-semibold text-gray-800 mb-4">
                                        "Manufacturing scheduling software with fantastic support"
                                    </p>
                                    <p className="text-gray-600">– Cook Compression</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6">
                                    <p className="text-lg font-semibold text-gray-800 mb-4">
                                        "Easy ERP add-on for manufacturing resource planning"
                                    </p>
                                    <p className="text-gray-600">– Incon Incorporated</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="pt-6 pb-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Card>
                            <CardContent className="pt-8">
                                <h2 className="text-3xl font-bold mb-4">
                                    Want to get your production in the groove?
                                </h2>
                                <p className="text-xl text-gray-700 mb-8">
                                    Watch this classic video and get your operations movin' and groovin' today!
                                </p>
                                <Link href="/videos">
                                    <Button size="lg" className="text-lg">
                                        Watch Video
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="bg-gray-50 pt-6 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">
                            Celebrating 25 Years of Award Winning Software!
                        </h2>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <p className="text-gray-600 mb-4">
                                Trusted by manufacturers worldwide for over 25 years
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 items-center opacity-70">
                                <div className="text-sm font-semibold text-gray-500">Industry Awards</div>
                                <div className="text-sm font-semibold text-gray-500">Excellence Recognition</div>
                                <div className="text-sm font-semibold text-gray-500">Customer Choice</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
