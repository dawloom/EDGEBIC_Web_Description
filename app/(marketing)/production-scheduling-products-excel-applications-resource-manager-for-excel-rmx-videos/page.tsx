import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ProductionSchedulingProductsVideosPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Product Videos
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">
                            Production Scheduling Products | Excel Applications | Resource Manager for Excel (RMX) Videos
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pt-6 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Welcome */}
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle className="text-2xl">Welcome</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                    <p className="text-gray-500">Welcome Video</p>
                                </div>
                                <p className="text-gray-700">
                                    Welcome to User Solutions product video gallery. Explore our comprehensive manufacturing software solutions.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Resource Manager DB */}
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle className="text-2xl">Resource Manager DB</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                    <p className="text-gray-500">Resource Manager DB Video</p>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Comprehensive database-driven resource management solution for complex manufacturing scheduling.
                                </p>
                                <Link href="/resource-manager-db-2">
                                    <Button>Learn More</Button>
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Workcenter Scheduler XL */}
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle className="text-2xl">Workcenter Scheduler XL</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                    <p className="text-gray-500">Workcenter Scheduler XL Video</p>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Powerful Excel-based scheduling solution for managing workcenter operations and production planning.
                                </p>
                                <Link href="/workcenter-schedulerxl">
                                    <Button>Learn More</Button>
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Resource Manager For Excel */}
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle className="text-2xl">Resource Manager For Excel</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                    <p className="text-gray-500">Resource Manager For Excel Video</p>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    MRP and shop scheduling on a flexible and powerful Excel platform.
                                </p>
                                <Link href="/resource-manager-for-excel-2">
                                    <Button>Learn More</Button>
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Training Videos Section */}
                        <Card className="mb-8 bg-blue-50 border-blue-200">
                            <CardHeader>
                                <CardTitle className="text-2xl">Resource Manager Training Videos (RMX)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 mb-6">
                                    Complete training video series covering all aspects of Resource Manager for Excel
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div>
                                        <h3 className="font-semibold text-lg mb-3">Initialization</h3>
                                        <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                                            <p className="text-gray-500 text-sm">Initialization Videos</p>
                                        </div>
                                        <p className="text-sm text-gray-600">Learn how to set up and initialize RMX for your operations</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-3">Scheduling</h3>
                                        <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                                            <p className="text-gray-500 text-sm">Scheduling Videos</p>
                                        </div>
                                        <p className="text-sm text-gray-600">Master production scheduling techniques and workflows</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-3">Reporting</h3>
                                        <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                                            <p className="text-gray-500 text-sm">Reporting Videos</p>
                                        </div>
                                        <p className="text-sm text-gray-600">Generate comprehensive reports and analytics</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-50 pt-6 pb-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl text-center">Ready to See More?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-center text-gray-700 mb-6">
                                    Schedule a live demo to see our solutions in action with your actual data
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/contact-us">
                                        <Button size="lg" className="text-lg">
                                            Schedule Demo
                                        </Button>
                                    </Link>
                                    <Link href="/videos">
                                        <Button size="lg" variant="outline" className="text-lg">
                                            All Videos
                                        </Button>
                                    </Link>
                                    <Link href="/excel-applications">
                                        <Button size="lg" variant="outline" className="text-lg">
                                            View Products
                                        </Button>
                                    </Link>
                                </div>
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
