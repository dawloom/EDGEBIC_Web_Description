import Image from 'next/image';
import Link from 'next/link';

export default function ThankYouSpreadsheetSchedulerPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-blue-600 py-16 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-center text-4xl font-bold">Thank You!</h1>
                </div>
            </div>

            {/* Thank You Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <Image
                            src="https://www.usersolutions.com/wp-content/uploads/2022/10/thankyou.jpg"
                            alt="Customer service representative smiling with headset at computer"
                            width={600}
                            height={400}
                            className="mx-auto mb-8 rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="rounded-lg bg-gray-50 p-8 shadow-lg">
                        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
                            Thank you for your interest
                        </h2>

                        <div className="mb-8 text-center">
                            <Link
                                href="https://www.usersolutions.com/US_SS-2023D.xlsm"
                                className="mb-6 inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Click here to download your product
                            </Link>
                        </div>

                        <div className="space-y-4 leading-relaxed text-gray-700">
                            <p>
                                We will contact you to discuss your scheduling application in
                                complete detail. You are welcome to send sample data at anytime
                                to take advantage of our unique demoing approach – proving the
                                solution.
                            </p>

                            <p>
                                Send data or post questions anytime to{' '}
                                <a
                                    href="mailto:us@usersolutions.com"
                                    className="text-blue-600 hover:underline"
                                >
                                    us@usersolutions.com
                                </a>{' '}
                                or at{' '}
                                <a
                                    href="tel:248.486.6365"
                                    className="text-blue-600 hover:underline"
                                >
                                    248.486.6365
                                </a>
                            </p>

                            <p className="font-semibold">
                                Kindest Regards,
                                <br />
                                User Solutions, Inc.
                                <br />
                                Since 1991 – Manufacturing Software made easy!
                            </p>
                        </div>

                        <div className="mt-8 text-center">
                            <Link
                                href="/"
                                className="inline-block rounded-lg bg-gray-600 px-6 py-3 text-white transition-colors hover:bg-gray-700"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className="mt-16">
                        <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">
                            You might also be interested in:
                        </h3>
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="rounded-lg border bg-white p-6 shadow-sm">
                                <h4 className="mb-2 text-lg font-semibold">Workcell Planner</h4>
                                <p className="mb-4 text-sm text-gray-600">
                                    Plan and optimize your workcell operations
                                </p>
                                <Link
                                    href="/workcell-planner"
                                    className="text-blue-600 hover:underline"
                                >
                                    Learn More →
                                </Link>
                            </div>
                            <div className="rounded-lg border bg-white p-6 shadow-sm">
                                <h4 className="mb-2 text-lg font-semibold">Resource Manager</h4>
                                <p className="mb-4 text-sm text-gray-600">
                                    Advanced resource planning and management
                                </p>
                                <Link
                                    href="/resource-manager-for-excel-2"
                                    className="text-blue-600 hover:underline"
                                >
                                    Learn More →
                                </Link>
                            </div>
                            <div className="rounded-lg border bg-white p-6 shadow-sm">
                                <h4 className="mb-2 text-lg font-semibold">
                                    Operations Manager
                                </h4>
                                <p className="mb-4 text-sm text-gray-600">
                                    Comprehensive operations management tools
                                </p>
                                <Link
                                    href="/operations-manager"
                                    className="text-blue-600 hover:underline"
                                >
                                    Learn More →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Awards Section */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-8 text-3xl font-bold text-gray-800">
                        CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                    </h2>
                    <Image
                        src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                        alt="Collection of industry and business awards logos"
                        width={1024}
                        height={128}
                        className="mx-auto"
                    />
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-blue-600 py-12 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-4 text-2xl font-bold">ABOUT US</h2>
                    <p className="mb-2">us@usersolutions.com</p>
                    <p className="mb-6">248.486.6365</p>

                    <h3 className="mb-4 text-xl font-bold">PRODUCTS</h3>
                    <div className="space-y-2">
                        <Link
                            href="/jsl-job-scheduler-lite"
                            className="block hover:underline"
                        >
                            Job Scheduler Lite (JSL)
                        </Link>
                        <Link
                            href="/resource-manager-db-2"
                            className="block hover:underline"
                        >
                            Resource Manager DB
                        </Link>
                        <Link
                            href="/edgebi"
                            className="block hover:underline"
                        >
                            EDGEBI
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
